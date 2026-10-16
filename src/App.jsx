import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Dashboard />} />
        {/* For any wrong URL -> Direct it on Home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
