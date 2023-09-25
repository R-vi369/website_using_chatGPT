

import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'


const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto">
          <div className="flex text-center justify-evenly  flex-wrap">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p>At YourDukaan, we're not just about selling products; we're about building lasting relationships with our customers. Your trust in us is our greatest reward, and we promise to continually work hard to maintain it.

              </p>
            </div>

            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
              <ul>
                <li>
                  <a href="./Contact">

                  Contact Us
                  </a>

                </li>
                <li>Shipping & Returns</li>
                <li>
                    Privacy Policy
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-xl font-semibold mb-6 mt-8">Follow Us</h4>
              <div className="flex text-center justify-center space-x-4">
                <a href="https://www.facebook.com/" target='_blank' className="text-white hover:bg-blue-500 p-2 rounded-full ">


                  <AiFillFacebook />
                </a>
                <a href="https://www.twitter.com/" target='_blank' className="text-white hover:bg-blue-500 p-2 rounded-full">
                  <AiOutlineTwitter />
                </a>
                <a href="https://www.instagram.com/" target='_blank' className="text-white hover:bg-red-500 p-2 rounded-full">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/" target='_blank' className="text-white hover:bg-blue-500 p-2 rounded-full">
                  <AiFillLinkedin />
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>


      <div className="bg-black text-white py-8 ">
        <div className="container  flex  items-center justify-center">
          <div className="flex items-center justify-center w-full md:w-1/2 text-center md:text-left">
            <p>&copy; 2023  YourDukaan</p>
          </div>

        </div>
      </div>

    </>
  );
};


export default Footer;
