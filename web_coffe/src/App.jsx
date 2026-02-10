import React from "react";
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
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<FullMenu />} />
        <Route path="/about" element={<NewAbout />} />

        {/* Shop routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;