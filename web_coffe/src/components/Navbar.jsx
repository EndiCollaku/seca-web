import React, { useState, useEffect } from "react";
import Logo from "../assets/secalogo1.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, List, User, Phone, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="bg-[rgb(217,217,217)] fixed w-full top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Logo" className="w-14 h-14 rounded-full cursor-pointer" />
        </Link>

        <div className="text-black cursor-pointer relative">
          {open ? (
            <X onClick={() => setOpen(false)} className="w-7 h-7" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-7 h-7" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 mt-1 md:right-8"
          >
            <div className="bg-[rgb(217,217,217)] border border-gray-300 rounded-xl shadow-lg w-[90vw] md:w-[300px] py-4">
              <ul className="flex flex-col items-center space-y-3 text-lg font-semibold text-black">
                <Link to="/" onClick={() => setOpen(false)}>
                  <li className="hover:bg-black hover:text-white px-6 py-2 rounded-md transition flex items-center gap-2">
                    <Home className="w-5 h-5" /> Home
                  </li>
                </Link>
                <Link to="/menu" onClick={() => setOpen(false)}>
                  <li className="hover:bg-black hover:text-white px-6 py-2 rounded-md transition flex items-center gap-2">
                    <List className="w-5 h-5" /> Menu
                  </li>
                </Link>
                <Link to="/about" onClick={() => setOpen(false)}>
                  <li className="hover:bg-black hover:text-white px-6 py-2 rounded-md transition flex items-center gap-2">
                    <User className="w-5 h-5" /> About
                  </li>
                </Link>
                <Link to="/shop" onClick={() => setOpen(false)}>
                  <li className="hover:bg-black hover:text-white px-6 py-2 rounded-md transition flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" /> Shop
                  </li>
                </Link>
                <a href="tel:+355686650505" onClick={() => setOpen(false)}>
                  <li className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Contact
                  </li>
                </a>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
