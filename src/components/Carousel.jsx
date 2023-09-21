import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex transform translate-x-[-${currentIndex * 100}%] transition-transform duration-300">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-96"
              style={{ minWidth: '100%', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition duration-300">
        &#9664;
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition duration-300">
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
