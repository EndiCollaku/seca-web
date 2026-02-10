import React, { useState } from 'react';
import { Coffee, Calendar, User, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import blog2 from '../../assets/blog2.jpeg';
import blog3 from '../../assets/blog3.jpeg';
import cup1 from '../../assets/cup.jpeg';
import blog5 from '../../assets/blog5.jpeg';
import blog6 from '../../assets/blog6.jpeg';
import photo3 from '../../assets/photo3.jpeg';
import beanscaffee from "../../assets/coffeseca1.jpeg";
import photo4 from '../../assets/photo4.png';
import menu_pic from "../../assets/menu_pic2.jpeg";
import fredo from "../../assets/fredo.jpeg";
import Testimonials from "../Testimonials";

const BLOG_IMAGE_CLASSES = `
  w-[250px] md:w-[250px]
  h-auto
  object-contain
  drop-shadow-2xl
  z-10
`;

export default function CoffeeBlog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "100% Arabic Espresso Coffee",
      excerpt: "A smooth, balanced Arabica espresso with natural sweetness, subtle complexity, and a clean finish.",
      author: "Sarah M.",
      date: "December 10, 2025",
      image: photo3,
      images: [blog3, photo4, blog5],
      content:
       "Made from 100% Arabica beans, this espresso offers a refined, balanced experience defined by smooth body, gentle sweetness, and subtle notes of fruit and cocoa. Bright yet soft acidity and a clean, bitterness-free finish highlight the beans’ natural elegance, resulting in a pure, precise espresso crafted for those who value clarity, quality, and timeless coffee character.",
      category: "Brewing Guide"
    },
    
    {
      id: 2,
      title: "SECA is now on social media",
      excerpt: "Follow @seca_coffee for daily inspiration, and a closer look at our passion for specialty coffee.",
      author: "John A.",
      date: "December 5, 2025",
      image: blog6,
      content:
        "SECA Coffee brings its commitment to quality, craftsmanship, and simplicity to Instagram, sharing daily rituals, brewing tips, behind-the-scenes moments, and product updates. Following @seca_coffee connects you with specialty coffee culture, the people behind the brand, and a community united by passion for authentic, thoughtfully crafted coffee.",
      category: "Social Media",
      instagramPosts: [
        "https://www.instagram.com/reel/DSH2bUhDE_6/",
        "https://www.instagram.com/reel/DSUlO6TjP4N/"
      ]
    },
    {
      id: 3,
      title: "Greek Freddo Espresso, by SECA.",
      excerpt: "Authentic, bold espresso, perfectly shaken ice—sealed fresh.Among the first to innovate, quality comes first.",
      author: "Maria A.",
      date: "December 5, 2025",
      image: fredo,
      content:
        "Coffee is a universal language spoken in countless dialects.Born in Greece and perfected on busy city streets, the Freddo Espresso is more than just an iced coffee — it’s a daily ritual. Crafted from a freshly pulled double espresso and shaken vigorously over ice, this method creates a naturally chilled drink crowned with a silky crema and a deep, aromatic intensity.Unlike traditional iced coffees that dilute flavor, the Freddo Espresso preserves the full strength of the espresso. The rapid shaking locks in body and aroma, delivering a smooth, bold taste without bitterness. Every sip balances richness and freshness, making it the perfect companion for long days and warm Mediterranean afternoons.",
      category: "Fredo Culture",
      instagramPosts: [
        "https://www.instagram.com/reel/DScMPb1jDsE/",
        "https://www.instagram.com/p/DSXsXR3DLlA/"
      ]
      
    },
  ];

  const BlogCard = ({ blog }) => (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => setSelectedBlog(blog)}
    >
      <div className="relative flex items-center justify-center py-6">
        <img
          src={blog.image}
          alt={blog.title}
          className={`
            ${BLOG_IMAGE_CLASSES}
            pointer-events-none
            transition-transform duration-500
            hover:scale-105
          `}
        />
        <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
          {blog.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-gray transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {blog.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {blog.date}
          </div>
        </div>
      </div>
    </div>
  );

  const BlogModal = ({ blog, onClose }) => (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex justify-center py-6">
          <img
            src={blog.image}
            alt={blog.title}
            className={`${BLOG_IMAGE_CLASSES} mx-auto`}
          />
          <button
  onClick={onClose}
  aria-label="Close modal"
  title="Close"
  className="fixed top-6 right-6 z-50 bg-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 active:scale-95 transition-transform"
>
  <span className="text-3xl sm:text-2xl font-bold text-gray-800 select-none">✕</span>
</button>

        </div>

        <div className="p-6">
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
            {blog.category}
          </span>

          <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-4">
            {blog.title}
          </h2>

          <p className="text-gray-700 mb-6">{blog.content}</p>

          {blog.images && (
            <div className="flex overflow-x-auto gap-6 pb-4">
              {blog.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${blog.title} ${index + 1}`}
                  className={`
                    ${BLOG_IMAGE_CLASSES}
                    transition-transform duration-300
                    hover:scale-105
                  `}
                />
              ))}
            </div>
          )}

          {blog.instagramPosts && (
            <div className="border-t mt-8 pt-6">
              <h3 className="text-2xl font-bold mb-6">
                Featured Instagram Reels
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {blog.instagramPosts.map((url, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={`${url}embed`}
                      className="w-full min-h-[480px]"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="bg-black text-white p-3 flex items-center justify-between">
                      <span className="text-sm">Watch on Instagram</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-['Alumni_Sans'] bg-[rgb(217,217,217)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Animated Title */}
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className='text-5xl font-bold text-gray-800'
            >
              SECA Blog
            </motion.h1>
          </motion.div>
        </div>

        {/* Animated Blog Cards Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 place-items-center'
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>
      </div>

      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
      <Testimonials />
    </div>
  );
}
