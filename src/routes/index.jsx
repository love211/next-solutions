import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Template from "../pages/Template";
import LoginPage from "../pages/auth/Login";
import AuthGuard from "../auth/AuthGuard";
import SignUpPage from "../pages/auth/SignUp";
import PrivateLayout from "../layout/PrivateLayout";
import UserCards from "@/pages/UserCards";
import GuestGuard from "@/auth/GuestGuard";

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/login"
      element={
        <GuestGuard>
          <LoginPage />
        </GuestGuard>
      }
    />
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
      <Route path="/user-generated-cards/" element={<UserCards />} />
    </Route>
  </Routes>
);

export default RoutesProvider;
