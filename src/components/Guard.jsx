import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Guard = ({ children }) => {
  const token = Cookies.get("token");
  //   const navigate = useNavigate();
  if (token) return children;
  return <Navigate to="/login" />;
};

export default Guard;
