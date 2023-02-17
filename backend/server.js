require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");
const app = express();
const connect = require("./db");
const argon2 = require("argon2");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    let existinguser = await UserModel.findOne({ email });
    if (existinguser) {
      res.status(404).send(" email alreay in use");
    } else {
      const hashpwd = await argon2.hash(password);
      const user = new UserModel({ email, password: hashpwd });
      await user.save();
      return res.status(201).send("User registered succesfully");
    }
  } catch (e) {
    return res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(404).send("Invalid credentials,User not found");
  }
  const pwdverify = await argon2.verify(user.password, password);
  if (!pwdverify) {
    return res.status(403).send("Invalid password");
  }
  if (user && pwdverify) {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "VPCODES64686",
      {
        expiresIn: "360 mins",
      }
    );
    const refresherToken = jwt.sign({ id: user._id }, "PRASADCODES", {
      expiresIn: "28 days",
    });
    return res.send({ message: "Login Successful", token, refresherToken });
  }
  return res
    .status(401)
    .send("Invalid credentials,please re-enter valid credentials");
});

app.get("/", (req, res) => res.send("Mock 11 bug free code hopefuly"));
db = process.env.MONGOURL;
const BPORT = process.env.PORT || 8000;
app.listen(BPORT, async (req, res) => {
  try {
    await connect();
    console.log(`Database connected`);
  } catch (e) {
    console.log(e);
  }
  console.log(`Listening to port ${BPORT}`);
});
