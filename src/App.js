import Signup from "./components/Signup";
import "./index.css";
import "./dark-light.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
