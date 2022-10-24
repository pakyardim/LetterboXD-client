import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import NotSignedHome from "./components/NotSignedHome";
import Omg from "./components/Omg";

const RouteSwitch = () => {

  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<NotSignedHome />} />
          <Route path="/omg" element={<Omg />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </App>
    </Router>
  );
};

export default RouteSwitch;
