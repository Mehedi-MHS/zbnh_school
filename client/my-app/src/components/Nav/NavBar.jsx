import React, { useState } from "react";
import Dropdown from "./Dropdown"; // Import the new Dropdown component
import Link from '../custom/CustomLink'
const dropdownItems = {
  about: [
    { name: "About Us", url: "/about" },
    { name: "Our History", url: "/our-history" },
    { name: "Contact", url: "/contact" },
  ],
  notice: [
    { name: "Recent Notice", url: "/notice" },
    { name: "News", url: "/news" },
  ],
  academic: [
    { name: "Class Schedule", url: "/class-schedule" },
    { name: "Our Teachers", url: "/teachers" },
    { name: "Our Staffs", url: "/staffs" },
  ],
  admission: [
    { name: "Why Study?", url: "/why-study" },
    { name: "How to apply", url: "/how-to-apply" },
    { name: "Online Admission", url: "/online-admission" },
  ],
  student: [
    { name: "Student List", url: "/students" },
    { name: "Student Uniform", url: "/student-uniform" },
    { name: "Rules and Regulation", url: "/rules-and-regulations" },
  ],
  facilities: [
    { name: "Library", url: "/library" },
    { name: "Playground", url: "/playground" },
    { name: "Labs", url: "/lab" },
  ],
};

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-gray-100 shadow-md">
      {/* First Row: Logo and Mobile Menu Button */}
      <div className="flex items-center justify-between p-4 md:px-8">
        {/* Logo and Name */}
        <a href="/">
        <div className="flex items-center space-x-2">
          {/* Logo SVG - Replace with your own */}
        
          <img src="/images/logo.png" alt="" className='w-[40px] md:w-[50px]' />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-800">Jamidar Hat Begum Nurunnahar High School</span>
            <p className="font-light text-gray-500">ESTD: 1969 | School road, Jamidar Hat, Begumgonj, Noakhali.</p>
          </div>
        </div>
            </a>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second Row: Navigation Links (hidden on mobile by default) */}
      <nav className={`md:flex md:items-center md:justify-center md:space-x-8 md:p-2 md:sticky md:top-0 md:z-50 bg-blue-500 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link to='/'><a className="block px-4 py-2 text-white md:inline-block hover:text-yellow-500 hover:bg-blue-700 md:hover:bg-transparent">HOME</a></Link> 
        {/* Using the new reusable Dropdown component */}
        <Dropdown title="ABOUT" items={dropdownItems.about} />
        {/* Using the new reusable Dropdown component */}
        <Dropdown title="NOTICE" items={dropdownItems.notice} />
        {/* Another instance of the Dropdown component */}
        <Dropdown title="ACADEMIC" items={dropdownItems.academic} />
        {/* Another instance of the Dropdown component */}
        <Dropdown title="ADMISSION" items={dropdownItems.admission} />
         {/* Another instance of the Dropdown component */}
        <Dropdown title="STUDENT" items={dropdownItems.student} />
        {/* Another instance of the Dropdown component */}
        <Dropdown title="FACILITIES" items={dropdownItems.facilities} />
        <Link to='/dashboard'><a className="block px-4 py-2 text-white md:inline-block hover:text-yellow-500 hover:bg-blue-700 md:hover:bg-transparent">ADMIN LOGIN</a></Link> 
      </nav>
    </header>
  );
}
