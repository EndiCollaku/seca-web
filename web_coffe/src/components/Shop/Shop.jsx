import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { Link, useLocation } from "react-router-dom";

import tshirt from "../../assets/tshirt.jpeg";
import trucker from "../../assets/trucker.jpeg";
import bottle from "../../assets/bottle.jpeg";
import tote from "../../assets/tote.jpeg";
import Footer from "../Footer";

const products = [
  {
    id: "daily-grind",
    name: "SECA Daily Grind",
    desc: "Minimalist SECA T-shirts made from soft, breathable fabric.",
    image: tshirt,
  },
  {
    id: "barista-trucker",
    name: "SECA Barista Trucker",
    desc: "Street style, coffee culture.",
    image: trucker,
  },
  {
    id: "on-the-go-bottle",
    name: "SECA On-The-Go–Bottle",
    desc: "Refill. Reuse. Repeat.",
    image: bottle,
  },
  {
    id: "daily-tote",
    name: "SECA Daily Tote",
    desc: "Carry your vibe.",
    image: tote,
  },
];

const Shop = () => {
  const location = useLocation();
  const showBackButton = location.pathname === "/shop";

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        },
      },
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        },
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        },
      },
      {
        breakpoint: 640,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "20px"
        },
      },
    ],
  };

  return (
    <div className="from-slate-100 to-[rgb(217,217,217)] bg-gradient-to-r min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-alumni text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-4 sm:mb-6"
        >
          SECA MERCH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="font-alumni text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto px-4"
        >
          Discover our signature beans, handcrafted drinks, and professional
          brewing tools — designed for true coffee lovers.
        </motion.p>
      </section>

      {/* Divider */}
      <hr className="w-32 sm:w-40 md:w-48 h-0.5 sm:h-1 mx-auto bg-black border-0 rounded-sm mb-8 sm:mb-12 md:mb-16" />

      {/* Products Carousel Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16 sm:pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2 sm:px-3 md:px-4">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center mx-auto" style={{ minHeight: '400px', maxWidth: '400px' }}>
                  
                  {/* Product Image */}
                  <div className="w-full flex justify-center items-center mb-3 sm:mb-4" style={{ height: '180px' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ width: 'auto', height: 'auto', maxWidth: '160px', maxHeight: '180px' }}
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="font-alumni text-xl sm:text-2xl md:text-3xl mb-2 px-2">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="font-alumni text-base sm:text-lg md:text-xl text-gray-600 mb-4 flex-grow px-2">
                    {product.desc}
                  </p>

                  {/* View Product Button */}
                  <Link
                    to={`/shop/${product.id}`}
                    className="border-2 border-black px-5 sm:px-6 py-2 rounded-full font-alumni text-base sm:text-lg md:text-xl hover:bg-black hover:text-white transition mt-auto w-full sm:w-auto"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Back to Home Button */}
        {showBackButton && (
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link
              to="/"
              className="inline-block border-2 border-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-alumni text-lg sm:text-xl hover:bg-black hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>
        )}
      </section>

    </div>
  );
};

export default Shop;