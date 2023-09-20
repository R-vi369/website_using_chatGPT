// src/components/PantsCard.js

import React from 'react';

const PantsCard = ({ pant }) => {
  return (
    <div className="w-64 h-96 bg-white shadow-md rounded-lg overflow-hidden mx-2">
      <img src={pant.image} alt={pant.name} className="w-full h-2/3 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{pant.name}</h2>
        <p className="text-gray-600 mt-2">{pant.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">${pant.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PantsCard;
