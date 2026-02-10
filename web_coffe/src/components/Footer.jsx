import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Shop",
        link: "/shop",
    },
    
];

const bgImage = {
    // backgroundImage: `url(${FooterBg})`,
    backgroundcolor: "[rgb(217,217,217)]",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={bgImage} className='text-black'>
            <div className='bg-black/40 min-h-[400px]'>
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 pb-20 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-alumni'>SECA</a>
                        <p className='pt-4 font-alumni text-2xl'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
                    </div>
                    {/* footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='font-semibold font-alumni text-2xl sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3 font-alumni text-2xl'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-black hover:underline hover:text-[white] duration-200'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* second col links
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>
                                Quick Links
                            </h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        {/* company address */}
                      {/* company address */}
<div className='py-8 px-4 col-span-2 sm:col-auto'>
  <h1 className='text-2xl font-alumni font-semibold sm:text-left mb-3'>Address</h1>
  <div>
    {/* Make address clickable */}
    <p className='mb-3'>
      <a 
        href="https://maps.app.goo.gl/tiqi6cXD8epVhQ888" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:underline hover:text-[rgb(217,217,217)] font-alumni text-2xl duration-200"
      >
        Rruga Janos Hunyadi, Tirana, Albania
      </a>
    </p>
    <p>
    <a href="tel:+355686650505" className="hover:underline text-2xl font-alumni hover:text-[rgb(217,217,217)] duration-200">
    +355 68 665 0505
    </a>
    </p>

    {/* social links */}
    <div className='flex items-center  gap-3 mt-6'>
      <a href="https://www.instagram.com/seca_coffee/#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='text-3xl hover:text-[rgb(217,217,217)] duration-300' />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='text-3xl hover:text-[rgb(217,217,217)] duration-300' />
      </a>

        <a 
        href="https://www.tiktok.com/@seca_coffee" 
        target="_blank" 
        rel="noopener noreferrer"
        >
  <FaTiktok className='text-3xl hover:text-[rgb(217,217,217)] duration-300' />
</a>

    </div>
  </div>
</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
