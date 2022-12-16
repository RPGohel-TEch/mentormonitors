import React from "react";

import Dashboard from "./Dashboard";
import Protected from "./Protected";

const Layout = ({isLogin}) => {
  return (
    <div>
      <Protected isLogin={isLogin}>
        <Dashboard />
      </Protected>
    </div>
  );
};

export default Layout;
