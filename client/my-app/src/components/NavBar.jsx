import React from "react";

import Link from "./custom/CustomLink"; //created custom link to work mui with react-router-dom

import { useState, useEffect } from "react";
import settings from "../helpers/Settings";

const navItems = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Notice",
    url: "notice"
  },
  {
    name: "Teachers",
    url: "teachers"
  },
  {
    name: "Students",
    url: "students"
  },
  {
    name: "Gallery",
    url: "gallery"
  },
  {
    name: "About School",
    url: "about"
  },
  {
    name: "Dashboard",
    url: "dashboard"
  },
];



export default function NavBar() {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
      {/*  {navItems.map((item, index) => (
          <Link key={index} to={item.url}>
      */}
  
      return (
    <header className="w-full sticky top-0 z-50 bg-gray-100 shadow-md">
      {/* First Row: Logo and Mobile Menu Button */}
      <div className="flex items-center justify-between p-4 md:px-8">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          {/* Logo SVG - Replace with your own */}
          <img src="/images/logo.png" alt="" className='w-[40px] md:w-[50px]' />
          <div className="flex flex-col">
          <span className="text-2xl font-bold text-blue-800">Jamidar Hat Begum Nurunnahar High School</span>
          <p className="font-light text-gray-500">ESTD: 1969 | School road, Jamidar Hat, Begumgonj, Noakhali.</p>
          </div>
        </div>

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
        <a href="#" className="block px-4 py-2 text-white md:inline-block hover:text-yellow-500 hover:bg-blue-700 md:hover:bg-transparent">Home</a>
        <a href="#" className="block px-4 py-2 text-white md:inline-block hover:text-yellow-500 hover:bg-green-500 md:hover:bg-transparent">About</a>
        <a href="#" className="block px-4 py-2 text-white md:inline-block hover:text-yellow-500 hover:bg-green-500 md:hover:bg-transparent">Services</a>
        
        {/* Dropdown Menu */}
        <div className="relative group">
          <button
            onClick={toggleDropdown}
            className="w-full px-4 py-2 text-left text-white md:inline-flex md:w-auto md:text-center md:items-center hover:text-yellow-500 hover:bg-blue-700"
          >
            Dropdown
            <svg
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          
          {/* Dropdown content */}
          <div
            className={`absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg transition-all duration-300 transform md:group-hover:block md:w-auto md:min-w-[150px] ${isDropdownOpen ? 'block scale-y-100 opacity-100' : 'hidden scale-y-0 opacity-0'}`}
          >
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Option 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Option 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Option 3</a>
          </div>
        </div>
        
        <a href="#" className="block px-4 py-2 text-white md:inline-block hover:text-yellow-500 hover:bg-blue-700 md:hover:bg-transparent">Contact</a>
      </nav>
    </header>
  );
           

}
