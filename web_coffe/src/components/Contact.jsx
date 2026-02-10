import React from 'react';
import { motion } from 'framer-motion';

const bgImage = {
    backgroundColor: "rgb(217,217,217)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Contact = () => {
    return (
        <div id='contact' style={bgImage} className='min-h-screen flex items-center justify-center p-6'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='w-full max-w-3xl bg-[rgb(217,217,217)] rounded-xl shadow-2xl p-8 sm:p-10'
            >
                <h1 className='text-4xl sm:text-5xl font-bold text-center text-black mb-6 font-alumni'>Contact Us</h1>
                <p className='text-center text-xl sm:text-2xl text-black mb-8 font-alumni'>
                    We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
                </p>

                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-lg sm:text-xl font-medium text-black font-alumni mb-1'>Name</label>
                        <input 
                            type="text" 
                            id='name' 
                            name='name' 
                            placeholder='Your Name'
                            className='w-full px-4 py-3 font-alumni border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900 transition duration-300'
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-lg sm:text-xl font-medium text-black font-alumni mb-1'>Email</label>
                        <input 
                            type="email" 
                            id='email' 
                            name='email' 
                            placeholder='Your Email'
                            className='w-full px-4 py-3 font-alumni border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900 transition duration-300'
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-lg sm:text-xl font-medium text-black font-alumni mb-1'>Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder='Your Message' 
                            rows="5"
                            className='w-full px-4 py-3 font-alumni border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900 transition duration-300'
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className='w-full py-3 text-2xl sm:text-3xl font-semibold font-alumni bg-black text-white rounded-xl shadow-md hover:bg-[rgb(217,217,217)] hover:text-black transition duration-300'
                    >
                        Send Message
                    </button>
                </form>

                <div className='mt-8 text-center'>
                    <p className='text-black font-alumni text-xl sm:text-2xl mb-2'>Or reach us directly:</p>
                    <a href="tel:+355686650505">
                        <p className='font-semibold font-alumni text-xl sm:text-2xl text-black hover:underline hover:text-[white] transition duration-200'>
                            +355686650505
                        </p>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
