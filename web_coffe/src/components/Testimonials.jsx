import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


const TestimonialData = [{
    id: 1,
    name: "Sejdi",
    text: "The coffee quality is outstanding, especially their Greek-style drinks—smooth, flavorful, and always consistent.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXjUESqI4GESTAJ8RPn0a_xJ_zEqwNFO3gonG1ncQEF-flsxCWTSw=w144-h144-p-rp-mo-br100",
},
{
    id: 2,
    name: "Pano",
    text: "Best place in Tirana for coffee. Perfect coffee treatment. Finally great freddo espresso!",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXoLM5s5DWRNz5p2w8CSpDoUr08vo0YKJjrDm7C9i3OC_YE3m00=w144-h144-p-rp-mo-br100",
},
{
    id: 3,
    name: "Endi",
    text: "The design of the place is clean, modern, and full of small details that create a really relaxing vibe",
    img: "https://picsum.photos/104/104",
},
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <div id='testimonial' className='py-20'>
            <div className='max-w-7xl mx-auto'>
                {/* header section */}
                <div className='mb-10'>
                    <motion.h1 
                     initial={{opacity:0,y:100}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:1.5, delay:0.5}}
                    className='text-center text-black text-4xl font-bold font-alumni'>Testimonials</motion.h1>
                </div>
                {/* Testimonials cards */}
                <motion.div
                 initial={{opacity:0,scale:0.5}}
                 whileInView={{opacity:1,scale:1}}
                 transition={{duration:1.5, delay:0.5}}
                >
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className='my-6'>
                                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white relative'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                    </div>
                                    {/* content section */}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xl text-gray-500 font-alumni'>{data.text}</p>
                                            <h1 className='text-2xl font-bold text-black/80 font-alumni'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-amber-900/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>

        </div>
    )
}

export default Testimonials
