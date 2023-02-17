import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Spinner,
  Spacer,
} from "@chakra-ui/react";
import { login } from "../redux/auth/auth.actions";

const Signup = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, loading, error } = useSelector((store) => store.auth);
  const handleSiup = () => {
    navigate("/signup");
  };
  const handleLgn = () => {
    navigate("/login");
  };
  const handleDsb = () => {
    navigate("/dashboard");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    // axios
    //   .post("https://bugtrackermock.onrender.com/signup", loginData)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // dispatch(login(loginData));
    if (!loginData) {
      alert("Please fill details");
    } else {
      alert("signup succesful");
      navigate("/login");
    }
  };
  if (loading) {
    return (
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  } else if (error) {
    return <div>....Error</div>;
  } else
    return (
      <Box>
        <Box
          display="flex"
          p={6}
          bgColor="cyan"
          fontWeight="bold"
          fontSize="20px"
          flexWrap="wrap"
        >
          <Box onClick={handleHome} fontSize="30px">
            LiveLocation
          </Box>
          <Spacer />
          <Flex gap={2} flexWrap="wrap">
            <Box onClick={handleSiup}>Signup</Box>
            <Spacer />
            <Box onClick={handleLgn}>Login</Box>
            <Spacer />
            <Box onClick={handleDsb}>DashBoard</Box>
          </Flex>
        </Box>
        <Flex marginLeft="40%">
          <Stack>
            <Stack>
              <Heading>Register Here</Heading>
            </Stack>
            <Box>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" onChange={handleChange} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <></>
                  <Button onClick={handleSubmit}>Signup</Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    );
};
export default Signup;
