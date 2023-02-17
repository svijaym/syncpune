import React from "react";
import { Flex, Box, Stack, Heading, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
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
  return (
    <div>
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
      <br />
      <br />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Heading>Welcome to Geolocation Application</Heading>
      </Box>
    </div>
  );
};

export default Home;
