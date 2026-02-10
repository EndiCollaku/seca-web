import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto mb-6">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-black hover:text-[rgb(217,217,217)] transition-colors duration-300 font-semibold mb-4"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>
      <div className="text-center pt-4 border-t border-[#e0d5c8]">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-widest text-black">SECA MENU</h1>
      </div>
    </div>
  );
};

export default Navbar;