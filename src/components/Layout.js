import React from "react";

import Dashboard from "./Dashboard";
import Protected from "./Protected";

const Layout = () => {
  return (
    <div>
      <Protected>
        <Dashboard />
      </Protected>
    </div>
  );
};

export default Layout;
