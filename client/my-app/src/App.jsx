import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import DashboardHome from "./components/dashboard/DashboardHome";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </>
  );
}
