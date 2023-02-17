import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./Map";
import Login from "./Login";

import Signup from "./Signup";
import Home from "./Home";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Map />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
