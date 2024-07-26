import { useContext } from "react";
import { AuthContext } from "../contexts/JwtContext";
// import { AuthContext } from "../contexts/Auth0Context";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth context must be use inside AuthProvider");

  return context;
};

export default useAuth;
