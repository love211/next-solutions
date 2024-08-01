import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    toast.warning("please login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;
};

export default AuthGuard;
