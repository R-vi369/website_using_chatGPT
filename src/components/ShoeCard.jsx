// src/components/ShoeCard.js

import React from 'react';

const ShoeCard = ({ shoe }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={shoe.image} alt={shoe.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{shoe.name}</div>
        <p className="text-gray-700 text-base">{shoe.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Size: {shoe.size}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Price: ${shoe.price}
        </span>
      </div>
    </div>
  );
};

export default ShoeCard;
