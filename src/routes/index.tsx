import { Routes, Route } from "react-router";
import Login from "../pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
