// src/components/Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 z-10 fixed w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-white">YourDukaan</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <a href="/Home" className="block md:inline-block text-white hover:text-gray-200 mr-4">
            Home
          </a>
          <a href="#" className="block md:inline-block text-white hover:text-gray-200 mr-4">
            About
          </a>
          <a href="#" className="block md:inline-block text-white hover:text-gray-200 mr-4">
            Services
          </a>
          <a href="#" className="block md:inline-block text-white hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
