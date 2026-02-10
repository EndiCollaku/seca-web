// FullWidthImage.jsx
import React from 'react';
import MyImage from '../assets/first11111.jpeg';

const FullWidthImage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={MyImage}
        alt="Coffee"
        className="w-full h-full object-cover object-left"
      />

      {/* Text overlay */}
      <div
        className="
          absolute 
          right-4 sm:right-12 
          top-1/2
          -translate-y-1/2
          text-white 
          max-w-md
        "
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-alumni">
          The daily ritual<br />starts here
        </h1>
        <p className="text-2xl sm:text-3xl font-alumni">
          Street espresso
        </p>
      </div>
    </div>
  );
};

export default FullWidthImage;