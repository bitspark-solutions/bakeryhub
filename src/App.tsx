import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <Blog />
        <Events />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;