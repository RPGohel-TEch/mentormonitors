import { Navigate } from "react-router-dom";
const Protected = ({ isLogin, children }) => {
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
