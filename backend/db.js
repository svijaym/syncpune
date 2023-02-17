const mongoose = require("mongoose");
require("dotenv").config();
const BDURL = process.env.MONGOURL;
const connect = async () => {
  return await mongoose.connect(BDURL);
};

module.exports = connect;
