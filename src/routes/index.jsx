import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Template from "../pages/Template";
import LoginPage from "../pages/auth/Login";

const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/template/:1" element={<Template />} />
  </Routes>
);

export default RoutesProvider;
