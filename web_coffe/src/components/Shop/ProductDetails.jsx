import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

import Navbar from "../Navbar";
import MainFooter from "../Footer";

import tshirt from "../../assets/tshirt.jpeg";
import trucker from "../../assets/trucker.jpeg";
import bottle from "../../assets/bottle.jpeg";
import tote from "../../assets/tote.jpeg";

const products = [
  {
    id: "daily-grind",
    name: "SECA Daily Grind – T-Shirt",
    tagline: "Your daily grind, your daily tee.",
    description:
      "Soft, breathable, and minimalist—perfect for coffee runs, workdays, or lazy weekends. The SECA logo keeps it simple, timeless, and effortlessly you.",
    details: [
      "Unisex fit",
      "100% soft cotton",
      "Available in S, M, L, XL, XXL",
      "Machine washable",
    ],
    image: tshirt,
  },
  {
    id: "barista-trucker",
    name: "SECA Barista Trucker – Cap",
    tagline: "Street style, coffee vibes.",
    description:
      "A clean, versatile cap built for city life and daily coffee runs. Lightweight, adjustable, and always in style.",
    details: [
      "One size fits most",
      "Lightweight & durable material",
      "Adjustable snapback strap",
      "Breathable mesh back",
    ],
    image: trucker,
  },
  {
    id: "on-the-go-bottle",
    name: "SECA On-The-Go – Bottle",
    tagline: "Sip sustainably.",
    description:
      "Sleek, reusable, and minimal. Keep your favorite drinks close while staying eco-friendly. Designed for life on the move.",
    details: [
     "Reusable & eco-friendly",
     "Minimal matte finish",
    "Easy to carry",
    ],
    image: bottle,
  },
  {
    id: "daily-tote",
    name: "SECA Daily Tote",
    tagline: "Carry your vibe.",
    description:
      "Strong, lightweight, and practical. Perfect for coffee, books, groceries, or your everyday essentials. Eco-friendly and stylish.",
    details: [
      "Eco-friendly fabric",
      "Lightweight & durable",
      "Ideal for daily use",
    ],
    image: tote,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 pt-20">
          <h2 className="font-alumni text-3xl sm:text-4xl mb-6 text-center">Product not found</h2>
          <Link
            to="/shop"
            className="border-2 border-black px-6 sm:px-8 py-3 rounded-full font-alumni text-lg sm:text-xl hover:bg-black hover:text-white transition mb-4"
          >
            Back to Shop
          </Link>
          <Link
            to="/"
            className="border-2 border-black px-6 sm:px-8 py-3 rounded-full font-alumni text-lg sm:text-xl hover:bg-black hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="from-slate-100 to-[rgb(217,217,217)] bg-gradient-to-r min-h-screen">
      <Navbar />

      {/* Main Content - with padding to account for fixed navbar */}
      <main className="w-full pt-20 sm:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
            
            {/* Product Image */}
            <div className="flex justify-center items-start lg:sticky lg:top-24">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] drop-shadow-2xl rounded-2xl object-cover"
              />
            </div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Title & Tagline */}
              <div className="space-y-2">
                <h1 className="font-alumni text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  {product.name}
                </h1>
                <p className="font-alumni text-xl sm:text-2xl md:text-3xl text-gray-600 italic">
                  {product.tagline}
                </p>
              </div>

              <hr className="w-16 sm:w-20 h-0.5 bg-black border-0" />

              {/* Description */}
              <p className="font-alumni text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* Product Details */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 sm:p-6 shadow-lg">
                <h3 className="font-alumni text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">
                  Product Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="font-alumni text-sm sm:text-base lg:text-lg text-gray-700 flex items-start"
                    >
                      <span className="mr-3 text-black flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="pt-3 sm:pt-4">
                <a
                  href="tel:+355 68 665 0505"
                  className="block sm:inline-block text-center bg-black text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-alumni text-lg sm:text-xl lg:text-2xl hover:bg-gray-800 active:bg-gray-900 transition shadow-lg"
                >
                  Buy Now — Call Us
                </a>
              </div>

              {/* Back link */}
              <div className="pt-2">
                <Link
                  to="/shop"
                  className="inline-block border-2 border-black px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-alumni text-sm sm:text-base lg:text-lg hover:bg-black hover:text-white transition"
                >
                  ← Back to Shop
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
};

export default ProductDetails;