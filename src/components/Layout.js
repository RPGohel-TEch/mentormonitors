import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Layout = () => {
  console.log(window.innerWidth)
  return (
    <div>
      <Dashboard/>

   
    </div>
  );
};

export default Layout;
