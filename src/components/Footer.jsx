

import React from 'react';
import {AiFillFacebook,AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p>&copy; 2023  YourDukaan</p>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right mt-4 md:mt-0">
          <div className="flex justify-center md:justify-end space-x-4">
            {/* Add your social media icons here */}
            <a href="#" className="text-white hover:text-gray-400">
             
             <AiFillFacebook/>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
             <AiOutlineTwitter/>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <AiOutlineInstagram/>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <AiFillLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
