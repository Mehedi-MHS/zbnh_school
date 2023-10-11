import NavBar from "./components/NavBar";
import Home from "./components/HomePage/Home";
import Students from "./components/students/StudentsHome";
import DashboardHome from "./components/dashboard/DashboardHome";
import DynamicPost from "./components/DynamicPosts";
import Teachers from "./components/teachers/TeachersHome";
import TeachersProfileHome from "./components/teachers/profile/TeachersProfileHome";
import Notice from "./components/Notice";
import About from "./components/About";
import Gallery from "./components/Gallery";
import EditStudents from "./components/dashboard/EditStudents";
import NotFound from "./components/404";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/profile/:id" element={<TeachersProfileHome />} />
        <Route path="/students" element={<Students />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="dashboard/editStudents" element={<EditStudents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<DynamicPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
