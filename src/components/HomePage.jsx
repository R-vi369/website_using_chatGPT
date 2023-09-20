
import Navbar from './Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelandleisure.com/thmb/h7fHj8ZZJiuK-nxg72h9dIAg2aI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Shorts-for-Men-TL-tout-693b4ce54afa4a1ca36bda33ce3dcb72.jpg')" }}>
         <Navbar />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 container mx-auto p-40 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to  YourDukaan</h1>
        <p className="text-xl mb-8">Discover the latest fashion trends.</p>
        <a
          href="#shop-now"
          className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HomePage;
