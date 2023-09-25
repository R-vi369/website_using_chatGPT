import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-semibold text-white hover:text-white cursor-pointer">
            YourLogo
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden block text-white hover:text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>

          {/* Navigation Links */}
          <div className={`lg:flex lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="text-white hover:text-gray-800">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
