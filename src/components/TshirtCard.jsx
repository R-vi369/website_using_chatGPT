

import React from 'react';

const TshirtCard = ({ tshirt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg center">
      <img src={tshirt.image} alt={tshirt.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{tshirt.name}</div>
        <p className="text-gray-700 text-base">{tshirt.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Size: {tshirt.size}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Price: ${tshirt.price}
        </span>
      </div>
    </div>
  );
};

export default TshirtCard;
