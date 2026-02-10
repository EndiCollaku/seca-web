import React from 'react';
import Navbar from './MenuNavbar';
import Nav from '../Navbar';
import MainFooter from '../Footer';
import logo from '../../assets/secalogo1.png';
import menu_pic from '../../assets/menu_pic.jpg';
import menu_pic2 from '../../assets/blog2.jpeg';
import menu_pic3 from '../../assets/menu_pic3.jpeg';
import Footer from '../Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import photo1 from "../../assets/photo1.jpeg";
import photo2 from "../../assets/photo2.jpeg";
import photo3 from "../../assets/photo3.jpeg";
import photo4 from "../../assets/photo4.jpeg";
import photo5 from "../../assets/photo5.jpeg";
import photo6 from "../../assets/photo6.jpeg";
import photo7 from "../../assets/photo7.jpeg";
import photo8 from "../../assets/photo8.jpeg";

const FullMenu = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="py-10 px-4">
        {/* Navbar */}
        <Nav />

        {/* ================= MENU GRID ================= */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-16">
          {/* --- Column 1 --- */}
          <div className="bg-[rgb(217,217,217)] text-black p-4 lg:p-6 rounded-lg">
            <h2 className="font-bold mb-2 font-alumni text-4xl lg:text-3xl">
              BLACK COFFEE
            </h2>

            <div className="space-y-2 font-alumni text-2xl lg:space-y-3">
              <MenuItem name="SECA Espresso" price="100 L" />
              <MenuItem name="Freddo Espresso" price="200 L" />
              <MenuItem name="Americano" note="hot/iced" price="150 L" />
              <MenuItem name="Classic Frappe" price="250 L" />
            </div>

            <div className="bg-white text-black p-3 lg:p-4 rounded-lg mt-4 lg:mt-6">
              <h3 className="font-bold mb-2 font-alumni text-4xl lg:text-3xl">
                MILK-BASED
              </h3>

              <div className="space-y-2">
                <MenuItem name="SECA Macchiato" price="120 L" />
                <MenuItem name="SECA Cappuccino" price="170 L" />
                <MenuItem name="Freddo Cappuccino" price="250 L" />
                <MenuItem name="Latte" note="hot/iced" price="200 L" />
              </div>
            </div>
          </div>

          {/* --- Column 2 --- */}
          <div className="bg-[rgb(217,217,217)] text-black p-4 lg:p-6 rounded-lg">
            <h2 className="font-bold mb-2 font-alumni text-4xl lg:text-3xl">
              NON-COFFEE
            </h2>

            <div className="space-y-2 lg:space-y-3">
              <MenuItem name="Still / Sparkling Water" price="80 L" />
              <MenuItem
                name="French Hot Chocolate"
                note="Hot / Iced"
                price="250 L"
              />
              <MenuItem name="Orange Juice" price="200 L" />
              <MenuItem name="Apple & Carrot Juice" price="250 L" />
              <MenuItem name="SECA Energy" price="300 L" />
              <MenuItem name="Smoothie" price="300 L" />
              <MenuItem name="Hot Tea" price="250 L" />
            </div>

            <img
              src={logo}
              alt="SECA Logo"
              className="w-72 h-auto mt-6 mx-auto"
            />
          </div>

          {/* --- Column 3 --- */}
          <div className="bg-[rgb(217,217,217)] text-black p-4 lg:p-6 rounded-lg">
            <h2 className="font-bold mb-2 font-alumni text-4xl lg:text-3xl">
              SECA COCKTAILS
            </h2>

            <div className="space-y-2 lg:space-y-3">
              <MenuItem name="Soft Brew" price="600 L" />
              <MenuItem name="Espresso Martini" price="600 L" />
              <MenuItem name="Mocha Bliss" price="600 L" />
            </div>

            <div className="bg-white text-black p-3 lg:p-4 rounded-lg mt-4 lg:mt-6">
              <h3 className="font-bold mb-2 font-alumni text-4xl lg:text-3xl">
                SPECIALS
              </h3>

              <div className="space-y-2">
                <MenuItem
                  name="Caramel Latte / Iced Caramel Latte"
                  price="250 L"
                />
                <MenuItem name="Caramel Frappe" />
                <MenuItem name="SECA Fredoccino" price="250 L" />
                <MenuItem name="ICE SECA ROSE" price="300 L" />
                <MenuItem name="ICE SECA GLOW" price="300 L" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= PHOTO STORY SECTION (CAROUSEL) ================= */}
        <section className="bg-[rgb(245,245,245)] py-24 md:py-32 px-4 md:px-6 mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ---- LEFT: CAROUSEL ---- */}
            <div className="overflow-hidden w-full">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="w-full"
              >
                {[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8].map(
                  (img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`SECA gallery ${index + 1}`}
                        className="rounded-2xl object-contain w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] shadow-lg"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>

            {/* ---- RIGHT: TEXT ---- */}
            <div className="flex flex-col justify-center px-2 sm:px-4 text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-alumni font-extrabold text-black mb-5 leading-tight">
                A World of Flavors in Every Cup
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-xl font-alumni">
                At SECA, every cup is carefully crafted to delight your senses. From bold
                black coffees and creamy milk-based drinks to refreshing juices,
                smoothies, and hot chocolate, we have something for every taste. Explore
                our signature coffee cocktails and seasonal specials, each made with
                precision, passion, and authenticity to create moments worth savoring.
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

/* ================= MENU ITEM ================= */
const MenuItem = ({ name, price, note }) => (
  <div className="flex justify-between items-start">
    <div className="flex-1 pr-2">
      <p className="font-alumni font-medium text-2xl lg:text-2xl">{name}</p>
      {note && (
        <p className="text-xs lg:text-sm font-alumni mt-1 text-gray-600">
          {note}
        </p>
      )}
    </div>
    {price && (
      <p className="font-alumni font-semibold text-xl lg:text-xl">
        {price}
      </p>
    )}
  </div>
);

export default FullMenu;
