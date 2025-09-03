import NavBar from "./components/NavBar";
import Home from "./components/HomePage/Home";
import Students from "./components/students/StudentsHome";
import DashboardHome from "./components/dashboard/DashboardHome";
import Teachers from "./components/teachers/TeachersHome";
import TeachersProfileHome from "./components/teachers/profile/TeachersProfileHome";
import AddTeacher from "./components/dashboard/AddTeacher";
import Notice from "./components/Notice";
import About from "./components/About";
import Gallery from "./components/Gallery";
import EditStudents from "./components/dashboard/EditStudents";
import NotFound from "./components/404";
import Login from "./components/Login";
import AddSchoolInfo from "./components/dashboard/AddSchoolInfo";
import AddNotice from "./components/dashboard/AddNotice";
import AddGalleryPost from "./components/dashboard/AddGalleryPost";
import DeleteSchoolInfo from "./components/dashboard/DeleteSchoolInfo";
import DeleteTeacher from "./components/dashboard/DeleteTeacher";
import DeleteNotice from "./components/dashboard/DeleteNotice";
import DeleteGalleryPost from "./components/dashboard/DeleteGalleryPost";
import HeadmasterMessage from "./components/dashboard/HeadmasterMessage";
import AssistantHeadmasterMessage from "./components/dashboard/AssistantHeadmasterMessage";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer";
import ClassHomeRoute from "./components/students/ClassHomeRoute";
//AOS library
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function App() {
   useEffect(() => {
    AOS.init({
      // Make sure this is present and correct
      once: true,
      duration:"1500"
    });
  }, []);

  return (
    <>
      <HelmetProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/teachers/profile/:id"
            element={<TeachersProfileHome />}
          />
          <Route path="/students" element={<Students />} />
          <Route path="/students/class/:cls" element={<ClassHomeRoute />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardHome />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/editStudents"
            element={
              <PrivateRoute>
                <EditStudents />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/addTeacher"
            element={
              <PrivateRoute>
                <AddTeacher />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/addSchoolInfo"
            element={
              <PrivateRoute>
                <AddSchoolInfo />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/addNotice"
            element={
              <PrivateRoute>
                <AddNotice />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/addGalleryPost"
            element={
              <PrivateRoute>
                <AddGalleryPost />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/headmasterMessage"
            element={
              <PrivateRoute>
                <HeadmasterMessage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/assistantHeadmasterMessage"
            element={
              <PrivateRoute>
                <AssistantHeadmasterMessage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/deleteSchoolInfo"
            element={
              <PrivateRoute>
                <DeleteSchoolInfo />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/deleteTeacher"
            element={
              <PrivateRoute>
                <DeleteTeacher />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/deleteNotice"
            element={
              <PrivateRoute>
                <DeleteNotice />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/deleteGalleryPost"
            element={
              <PrivateRoute>
                <DeleteGalleryPost />
              </PrivateRoute>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </>
  );
}
