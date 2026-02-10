import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import MainFooter from "../Footer";
import dadsa from "../../assets/about_pic.jpeg";
import about_pic from "../../assets/first11111.jpeg";
import beannn from "../../assets/beannn.png";
import water from "../../assets/water.png";
import temp from "../../assets/temp.png";

const NewAbout = () => {
  return (
    <div className="from-slate-100 to-[rgb(217,217,217)] bg-gradient-to-r min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Full-width image */}
      <img
        src={about_pic}
        alt="Coffee"
        className="w-full h-screen object-cover object-[5%_30%]"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-justify"
        >
          <h2 className="text-black font-alumni text-5xl">
            TAKE IT | SIP IT | SAVOUR IT
          </h2>
          
          <p className="text-black leading-relaxed font-alumni text-2xl md:text-2xl">
            Seca started in the heart of Blloku, Tirana, with a simple vision: to turn every coffee into a carefully crafted experience. <br />
            From selecting high-quality beans to perfecting roasting and brewing, every step is guided by precision and passion. Our goal has always been more than just serving coffee—it's about creating a space where people can pause, connect, and enjoy a moment of calm in the city's energy. <br />
            With a clean minimalist design and a focus on authentic flavors, SECA brings quality and craftsmanship to every cup. <br />
            Over time, SECA has grown into a gathering point for the community, a place to start the day, take a break, or simply enjoy something real. Every cup reflects our commitment to excellence, authenticity, and shared moments.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <img
            src={dadsa}
            alt="Coffee cup"
            className="w-[250px] md:w-[250px] drop-shadow-2xl z-10"
          />
        </motion.div>
      </section>

      <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded-sm md:mt-14 dark:bg-black"/>

      {/* Water, Temp, Beans Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-justify"
        >
          <p className="text-black leading-relaxed font-alumni text-lg md:text-2xl">
            At SECA, every cup of 100% Arabica coffee carries with it centuries of history and tradition. Arabica beans are celebrated worldwide for their smooth flavor, natural sweetness, and aromatic complexity—qualities that make each cup a true experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <img
            src={beannn}
            alt="Bean cup"
            className="w-[140px] md:w-[130px] drop-shadow-2xl z-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-justify"
        >
          <p className="text-gray-700 leading-relaxed font-alumni text-lg md:text-2xl">
            Inspired by Greek coffee culture, where coffee is more than a drink but a ritual for connecting, sharing, and enjoying life, SECA brings that same sense of community and warmth to Blloku. Each espresso we serve is carefully crafted—from selecting the finest beans to roasting and precise brewing—ensuring every cup is balanced, rich, and full of character.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <img
            src={water}
            alt="Water"
            className="w-[140px] md:w-[130px] drop-shadow-2xl z-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-justify"
        >
          <p className="text-gray-700 leading-relaxed font-alumni text-lg md:text-2xl">
            Whether you're stopping by for a quick espresso, taking a moment to savor your day, or enjoying SECA coffee at home through our delivery service, every sip reflects craftsmanship, authenticity, and the timeless joy of coffee. Heritage, quality, and connection—one cup at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <img
            src={temp}
            alt="Temperature"
            className="w-[140px] md:w-[130px] drop-shadow-2xl z-10"
          />
        </motion.div>
      </section>

      <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded-sm md:my-10 dark:bg-black"/>

      {/* Footer */}
      <MainFooter />
    </div>
  );
};

export default NewAbout;
