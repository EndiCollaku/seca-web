import React from 'react'
import Lottie from 'lottie-react'
import coffee from '../assets/Coffeeanime.json'
import about_pic from '../assets/about-pic.jpeg'
import { motion } from 'framer-motion'



const About = () => {
  return (
    <div id="about" className="py-40 md:py-20" >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-black font-alumni text-5xl text-center mb-16"
      >
        About SECA
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:gap-16 max-w-7xl mx-auto px-6">
        
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:w-1/2"
        >
          <img
            src={about_pic}
            alt="Coffee cup"
            className="w-[250px] drop-shadow-2xl z-10"
          />
        </motion.div>

        {/* Text section */}
        <div className="md:w-1/2 space-y-4 px-4 md:px-0 md:pl-16">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-2xl font-alumni text-black"
          >
            Passion for Seca Coffe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="font-alumni text-2xl leading-relaxed"
          >
            SECA began as a simple idea in the hart of Tirana's Blloku—to bring the
            spirit of Greek coffe culture into a clean, modern, and minimalist
            space. Inspired by authentic Greek traditions and powered by the rich
            aroma of the best Arabica coffee, SECA was created for the people who
            value both flavor and community.
            <br /><br />
            From our Greek products to our handcrafted brews, every detail
            reflects honest and simplicity. We're here for the early risers, the
            creators, the neighbours who stop by for the dails ritual.
            <br /><br />
            At SECA, coffee isn't just a drink—it's a moment shared, a connection
            made, a taste of something real.
            <br /><br />
            Welcome to SECA — where authentic flavor meets community in the heart
            of Blloku.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
