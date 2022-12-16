import Signup from "./components/Signup";
import "./index.css";
import "./dark-light.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import React, { useState } from "react";
import Protected from "./components/Protected";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const userId = localStorage.getItem("user");

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Layout isLogin={isLogin}/>} />
      </Routes>
    </div>
  );
}

export default App;
