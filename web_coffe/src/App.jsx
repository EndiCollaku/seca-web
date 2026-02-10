import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import First from "./components/First";
import FullMenu from "./components/Menu/FullMenu";
import NewAbout from "./components/About/NewAbout";
import Shop from "./components/Shop/Shop";
import ProductDetails from "./components/Shop/ProductDetails";
import Blog from "./components/Blog/Blog";

// ScrollToTop
import ScrollToTop from "./components/ScrollToTop";

// Logo for loader
import Logo from "./assets/secalogo1.png";

const Loader = ({ progress }) => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/40 z-50 backdrop-blur-sm">
    <img src={Logo} alt="Loading Logo" className="w-32 h-32 mb-4" />
    <p className="text-white text-lg font-semibold">{progress}%</p>
  </div>
);

const HomePage = () => (
  <>
    <First />
    <Navbar />
    <Hero />
    <Menu />
    <About />
    <Shop />
    <Blog />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Animate percentage
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Remove loader after ~2.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* Render page always */}
      <div className={loading ? "pointer-events-none" : ""}>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/about" element={<NewAbout />} />

          {/* Shop routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
        </Routes>
      </div>

      {/* Loader overlay */}
      {loading && <Loader progress={progress} />}
    </Router>
  );
};

export default App;
