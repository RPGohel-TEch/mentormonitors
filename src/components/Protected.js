import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user === null) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
