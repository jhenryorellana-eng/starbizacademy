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
            {/* Contact hidden — replaced with enrollment CTA */}
            {/* <Contact /> */}
            <section className="py-24 md:py-32 bg-[#030014] relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[150px]" />
              </div>
              <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight mb-4">
                  Inscribete al programa
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Accede a nuestra plataforma de aprendizaje y comienza a formar a tu hijo como lider digital.
                </p>
                <a
                  href="https://app.starbizacademy.com/enrollment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-cyan text-white font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-purple/30"
                >
                  Inscribirme ahora — $25 USD
                </a>
                <p className="text-gray-500 text-sm mt-4">Pago unico de inscripcion. Inicio de clases: 15 de abril.</p>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default HomePage;
