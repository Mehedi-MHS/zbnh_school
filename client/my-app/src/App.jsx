import NavBar from "./components/NavBar";
import Home from "./components/HomePage/Home";
import Students from "./components/students/Students";
import DashboardHome from "./components/dashboard/DashboardHome";
import DynamicPost from "./components/DynamicPosts";
import Teachers from "./components/Teachers";
import Notice from "./components/Notice";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<DynamicPost />} />
      </Routes>
    </>
  );
}
