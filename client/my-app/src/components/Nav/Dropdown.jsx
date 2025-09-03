import React, { useState } from 'react';
import Link from '../custom/CustomLink';

const Dropdown = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 text-left text-white md:inline-flex md:w-auto md:text-center md:items-center hover:text-yellow-500 hover:bg-blue-700 md:hover:bg-transparent"
      >
        {title}
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
        {items.map((item, index) => (
<Link key={index}to={item.url} onClick={toggleDropdown} >
          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
            {item.name}
          </a>
</Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
