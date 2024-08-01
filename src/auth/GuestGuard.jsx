import { Navigate } from "react-router";
import useAuth from "./useAuth";

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}
