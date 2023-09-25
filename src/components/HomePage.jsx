
import Navbar from './Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelandleisure.com/thmb/h7fHj8ZZJiuK-nxg72h9dIAg2aI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Shorts-for-Men-TL-tout-693b4ce54afa4a1ca36bda33ce3dcb72.jpg')" }}>
      <Navbar />
      <div className=" h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Welcome to YourDukaan
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Discover the latest fashion trends.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
        Shop Now
      </button>
    </div>
     
    </div>
  );
};

export default HomePage;
