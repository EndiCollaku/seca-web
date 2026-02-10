import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/orange1.png'
import Img2 from '../assets/mocha1.png'
import Img3 from "../assets/caramel1.png"
import { motion } from 'framer-motion'

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Fredo Cappuccino",
    description:
      "Iced espresso, creamy foam, perfectly balanced.",
  },
  {
    id: 2,
    img: Img1,
    name: "Fruit Juice",
    description:
      "Fresh fruit juice – naturally sweet, refreshing, and full of vibrant flavor.",
  },
  {
    id: 3,
    img: Img3,
    name: "French Chocolate",
    description:
      "Caramel coffee – warm espresso mixed with sweet, buttery caramel for a silky finish.",
  },
];

const Menu = () => {
  return (
    <div id='menu' className='pt-24 pb-20 mt-16 scroll-mt-24'>
      <div className='max-w-7xl mx-auto px-4'>
        
        {/* Heading section */}
        <div className='text-center mb-20'>
          <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className='text-4xl font-bold font-alumni text-black'
          >
            Finest Drinks for Every Mood
          </motion.h1>
        </div>

        {/* Menu card section */}
        <motion.div 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.5, delay:0.5}}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 place-items-center'
        >
          {MenuData.map((menu) => (
            <div 
              key={menu.id} 
              className='rounded-2xl bg-white hover:bg-[rgb(217,217,217)] transition-all hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full'
            >
              
              {/* Image container (same size for all) */}
              <div className='h-[180px] flex justify-center items-center -mt-10'>
                <img
                  src={menu.img}
                  alt=""
                  className={`
                    object-contain transform group-hover:scale-105 group-hover:rotate-6 duration-300
                    ${menu.id === 1 ? "w-[350px] h-[350px]" : ""}
                    ${menu.id === 2 ? "w-[250px] h-[250px]" : ""}
                    ${menu.id > 2 ? "w-[180px] h-[180px]" : ""}
                  `}
/>

              </div>

              {/* Text content */}
              <div className='p-6 text-center'>
                <h1 className='text-4xl font-alumni font-bold mb-3'>{menu.name}</h1>
                <p className='text-black group-hover:text-white font-alumni duration-300 text-lg line-clamp-2 mb-4'>
                  {menu.description}
                </p>
                
                <div className='flex justify-center items-center'>
                  <Link to="/menu">
                    <button className='bg-black text-white px-4 py-2 rounded-md group-hover:bg-white font-alumni text-xl group-hover:text-black transition-colors duration-300'>
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
