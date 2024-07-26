import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Template from "../pages/Template";
import LoginPage from "../pages/auth/Login";
import AuthGuard from "../auth/AuthGuard";
import SignUpPage from "../pages/auth/SignUp";
import PrivateLayout from "../layout/PrivateLayout";

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route
      element={
        <AuthGuard>
          {" "}
          <PrivateLayout />{" "}
        </AuthGuard>
      }
    >
      <Route path="/template/:1" element={<Template />} />
    </Route>
  </Routes>
);

export default RoutesProvider;
