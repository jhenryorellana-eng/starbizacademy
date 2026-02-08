import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Starfield from '../components/Starfield';
import About from '../components/About';
import SevenIntelligences from '../components/SevenIntelligences';
import Programs from '../components/Programs';
import Ecosystem from '../components/Ecosystem';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Contact from '../components/Contact';
import VideoInstitucional from '../components/VideoInstitucional';
import EcosystemShowcase from '../components/EcosystemShowcase';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-[#020617] text-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
          <Starfield />
          <Navbar />
          <main>
            <Hero />
            <EcosystemShowcase />
            <VideoInstitucional />
            <About />
            <SevenIntelligences />
            <Ecosystem />
            <Programs />
            <Testimonials />
            <Events />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
};

export default HomePage;
