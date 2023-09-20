// src/components/HorizontalScroll.js

import React from 'react';

const HorizontalScroll = ({ children }) => {
  return (
    <div className="overflow-x-scroll whitespace-nowrap">
      <div className="inline-flex space-x-4 p-4">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
