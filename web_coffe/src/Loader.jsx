// src/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/secalogo1.png'; // Your logo

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <motion.img
        src={Logo}
        alt="Loading Logo"
        className="w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
