import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + href);
        setTimeout(() => {
          const el = document.getElementById(href.slice(1));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(href.slice(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);

  const links = [
    { name: t.navbar.home, href: '#inicio' },
    { name: t.navbar.about, href: '#quienes-somos' },
    { name: t.navbar.intelligence, href: '#metodologia' },
    { name: t.ecosystemShowcase?.navLink || 'Ecosistema', href: '/ecosistema' },
  ];

  const communityLinks = [
    { name: t.navbar.submenu?.ceojr || 'CEO Junior', href: '#ceo-junior' },
    { name: t.navbar.submenu?.parents || 'Padres 3.0', href: '#padres-3' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-space-black/90 backdrop-blur-xl border-b border-white/10 h-16' : 'bg-transparent h-20'
      } flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          
          {/* LOGO CONTAINER */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="relative w-[260px] h-[60px] flex items-center justify-center group select-none">
            
            {/* --- Rocket Orbit Layer --- */}
            <div className="rocket-orbit-container absolute inset-0 w-full h-full pointer-events-none">
               <div className="rocket-positioner w-full h-full">
                  <div className="rocket-3d-rotate">
                      {/* Improved 3D Rocket SVG */}
                      <svg viewBox="0 0 50 50" className="w-10 h-10 overflow-visible drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                        <defs>
                           <linearGradient id="fuselage" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#cbd5e1" />
                              <stop offset="50%" stopColor="#f8fafc" />
                              <stop offset="100%" stopColor="#64748b" />
                           </linearGradient>
                           <linearGradient id="fire" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#a5f3fc" />
                              <stop offset="50%" stopColor="#00F0FF" />
                              <stop offset="100%" stopColor="transparent" />
                           </linearGradient>
                           <filter id="glow-rocket">
                              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                              <feMerge>
                                 <feMergeNode in="coloredBlur" />
                                 <feMergeNode in="SourceGraphic" />
                              </feMerge>
                           </filter>
                        </defs>
                        
                        <g transform="rotate(90, 25, 25)">
                           <path d="M25 42 Q28 52 25 60 Q22 52 25 42" fill="url(#fire)" className="animate-pulse" style={{ mixBlendMode: 'screen' }} />
                           <path d="M15 35 L8 45 L15 40 Z" fill="#b91c1c" />
                           <path d="M35 35 L42 45 L35 40 Z" fill="#b91c1c" />
                           <path d="M25 5 C15 5 12 20 12 35 L25 42 L38 35 C38 20 35 5 25 5 Z" fill="url(#fuselage)" filter="url(#glow-rocket)" />
                           <path d="M25 30 L25 42" stroke="#ef4444" strokeWidth="1.5" />
                           <circle cx="25" cy="20" r="5" fill="#0891b2" stroke="#e2e8f0" strokeWidth="1.5" />
                           <circle cx="27" cy="18" r="1.5" fill="white" opacity="0.8" />
                        </g>
                      </svg>
                  </div>
               </div>
            </div>

            {/* --- Text Layer --- */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <svg viewBox="0 0 260 50" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                  </defs>
                  <text 
                    x="50%" y="55%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="font-display font-bold text-[28px] tracking-widest"
                    fill="url(#textGrad)"
                    style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}
                  >
                     STARBIZ <tspan fill="#00F0FF" fontWeight="800">ACADEMY</tspan>
                  </text>
               </svg>
            </div>

            {/* Styles for the Animation */}
            <style>{`
              .rocket-positioner {
                 /* Adjusted Path: Tighter oval to stay within bounds */
                 offset-path: path("M 30,30 C 30,55 230,55 230,30 C 230,5 30,5 30,30");
                 animation: orbitMove 8s linear infinite;
              }
              
              .rocket-3d-rotate {
                 animation: rocketWobble 4s ease-in-out infinite alternate;
              }

              @keyframes orbitMove {
                0% { offset-distance: 0%; z-index: 20; transform: scale(0.8); }
                25% { transform: scale(1.1); }
                49% { z-index: 20; }
                50% { offset-distance: 50%; z-index: 1; transform: scale(0.8); }
                75% { transform: scale(0.5); }
                99% { z-index: 1; }
                100% { offset-distance: 100%; z-index: 20; transform: scale(0.8); }
              }

              .rocket-orbit-container {
                 animation: orbitLayer 8s linear infinite;
              }

              @keyframes orbitLayer {
                 0% { z-index: 20; }
                 49% { z-index: 20; }
                 50% { z-index: 5; }
                 99% { z-index: 5; }
                 100% { z-index: 20; }
              }

              @keyframes rocketWobble {
                 0% { transform: rotate(0deg) scaleY(1); }
                 100% { transform: rotate(5deg) scaleY(0.95); }
              }
            `}</style>
          </a>

          {/* Desktop HUD Menu */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-1 border border-white/5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Communities Dropdown */}
            <div className="relative group">
              <button className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 flex items-center gap-1">
                {t.navbar.communities || 'Comunidades'}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-[#1A1A2E] border border-white/10 rounded-xl p-2 min-w-[180px] shadow-xl shadow-black/50 backdrop-blur-xl">
                  {communityLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold tracking-wider text-gray-300 hover:text-white"
            >
              <Globe size={14} className={language === 'en' ? 'text-brand-cyan' : 'text-brand-orange'} />
              <span className={language === 'es' ? 'text-white' : 'text-gray-500'}>ES</span>
              <span className="text-gray-600">/</span>
              <span className={language === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
            </button>

             <a
              href="https://app.starbizacademy.com/enrollment"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex group"
            >
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-space-black font-display rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 uppercase">
                {t.navbar.cta}
              </button>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-gray-300"
            >
              <span className={language === 'es' ? 'text-brand-orange' : ''}>ES</span>
              <span>/</span>
              <span className={language === 'en' ? 'text-brand-cyan' : ''}>EN</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-space-card border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-50"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Communities Submenu */}
              <div>
                <button
                  onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  className="w-full px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
                >
                  {t.navbar.communities || 'Comunidades'}
                  <ChevronDown size={18} className={`transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileSubmenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-brand-cyan/30 ml-4">
                        {communityLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); setMobileSubmenuOpen(false); }}
                            className="block px-4 py-2 text-base text-gray-400 hover:text-white rounded-lg"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="https://app.starbizacademy.com/enrollment"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-center bg-brand-orange text-white px-4 py-3 rounded-xl font-bold font-display uppercase tracking-wider"
              >
                {t.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;