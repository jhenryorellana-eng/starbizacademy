import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CountdownTimer from '../components/landing/CountdownTimer';
import Starfield from '../components/Starfield';
import {
  Rocket,
  Globe,
  Brain,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Code,
  Cpu,
  DollarSign,
  Plane,
  MessageCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Star,
  Sparkles,
  ArrowRight,
  School,
  Compass,
  Briefcase,
  CheckCircle2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Award,
  Users,
  Target,
  Zap,
  GraduationCap
} from 'lucide-react';

const CEOJuniorPage: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);
  const [historySlide, setHistorySlide] = useState(0);
  const [historyVideoModal, setHistoryVideoModal] = useState<string | null>(null);
  const [historyImageModal, setHistoryImageModal] = useState<string | null>(null);

  // Hero video controls
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [showVideoControls, setShowVideoControls] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const landing = t.ceoJuniorLanding;

  // Timeline data for history section
  const historyTimeline = [
    {
      year: '2020',
      title: language === 'es' ? 'Los Inicios' : 'The Beginning',
      subtitle: 'Orellana Group',
      description: language === 'es'
        ? 'Comenzamos como Orellana Group, una consultora empresarial enfocada en certificaciones de Marketing Digital. Formamos a los primeros emprendedores digitales con cursos especializados.'
        : 'We started as Orellana Group, a business consulting firm focused on Digital Marketing certifications. We trained the first digital entrepreneurs with specialized courses.',
      icon: Award,
      color: 'brand-cyan',
      video: '/videos/history/Certificads.mp4',
      images: ['/images/history/certificado.png', '/images/history/09.12.2025_18.20.45_REC.png', '/images/history/09.12.2025_18.21.35_REC.png']
    },
    {
      year: '2021',
      title: language === 'es' ? 'Crecimiento' : 'Growth',
      subtitle: language === 'es' ? 'Expansión de comunidad' : 'Community Expansion',
      description: language === 'es'
        ? 'Nuestra comunidad creció significativamente. Ampliamos los cursos y comenzamos a ver el impacto real en la vida de nuestros estudiantes.'
        : 'Our community grew significantly. We expanded courses and started seeing real impact in our students\' lives.',
      icon: Users,
      color: 'brand-orange',
      video: '/videos/history/Video Corto.mp4',
      images: []
    },
    {
      year: '2022',
      title: language === 'es' ? 'Asesoría Personal' : 'Personal Mentorship',
      subtitle: language === 'es' ? 'Mentoría uno a uno' : 'One-on-one Mentoring',
      description: language === 'es'
        ? 'Implementamos el modelo de asesoría personalizada. Cada estudiante recibía atención individual para maximizar su potencial emprendedor.'
        : 'We implemented the personalized mentorship model. Each student received individual attention to maximize their entrepreneurial potential.',
      icon: Target,
      color: 'brand-purple',
      video: '/videos/history/Video De Asesoria Personaloizado.mp4',
      images: []
    },
    {
      year: '2023',
      title: language === 'es' ? 'Transformación' : 'Transformation',
      subtitle: language === 'es' ? 'Nuevo enfoque juvenil' : 'New Youth Focus',
      description: language === 'es'
        ? 'Identificamos una necesidad crucial: los jóvenes necesitaban formación empresarial temprana. Comenzamos a pivotar hacia la educación juvenil.'
        : 'We identified a crucial need: young people needed early business training. We began pivoting towards youth education.',
      icon: Zap,
      color: 'brand-yellow',
      video: '/videos/history/Cortoo.mp4',
      images: []
    },
    {
      year: '2024',
      title: language === 'es' ? 'Nacimiento CEO Junior' : 'CEO Junior is Born',
      subtitle: language === 'es' ? 'El programa toma forma' : 'The Program Takes Shape',
      description: language === 'es'
        ? 'CEO Junior nace oficialmente. Diseñamos el programa de 6 Pilares para formar a la próxima generación de líderes empresariales hispanos.'
        : 'CEO Junior is officially born. We designed the 6 Pillars program to train the next generation of Hispanic business leaders.',
      icon: Rocket,
      color: 'brand-cyan',
      video: null,
      images: []
    },
    {
      year: '2025',
      title: language === 'es' ? 'El Presente' : 'The Present',
      subtitle: language === 'es' ? 'Programa completo' : 'Complete Program',
      description: language === 'es'
        ? 'Hoy, CEO Junior es un programa integral de 3 años que combina 7 inteligencias, mentoría de élite, inglés de negocios y oportunidades reales de networking global.'
        : 'Today, CEO Junior is a comprehensive 3-year program combining 7 intelligences, elite mentorship, business English, and real global networking opportunities.',
      icon: GraduationCap,
      color: 'brand-orange',
      video: null,
      images: []
    }
  ];

  // Hero countdown: April 15, 2026
  const programStartDate = new Date('2026-04-15T00:00:00');

  // Urgency countdown: 24 hours from now (dynamic)
  const urgencyTargetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const whatsappLink = `https://wa.me/13854564470?text=${encodeURIComponent(
    language === 'es'
      ? 'Hola, me interesa CEO Junior 2026'
      : 'Hi, I\'m interested in CEO Junior 2026'
  )}`;

  const communityLink = 'https://app.starbizacademy.com';

  // Hero video controls
  const toggleHeroVideo = () => {
    if (heroVideoRef.current) {
      if (isVideoPlaying) {
        heroVideoRef.current.pause();
        setIsVideoPlaying(false);
        setShowVideoControls(true);
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
      } else {
        heroVideoRef.current.play();
        setIsVideoPlaying(true);
        setIsVideoMuted(false);
        heroVideoRef.current.muted = false;

        // Hide controls after 3 seconds
        controlsTimeoutRef.current = setTimeout(() => {
          setShowVideoControls(false);
        }, 3000);
      }
    }
  };

  const toggleHeroVideoMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  // Show controls on hover/touch
  const handleVideoMouseEnter = () => {
    if (isVideoPlaying) {
      setShowVideoControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowVideoControls(false);
      }, 3000);
    }
  };

  // Handle tap on video container (for mobile)
  const handleVideoTap = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent if clicking on controls
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    if (isVideoPlaying) {
      // Toggle controls visibility on tap
      if (showVideoControls) {
        setShowVideoControls(false);
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
      } else {
        setShowVideoControls(true);
        controlsTimeoutRef.current = setTimeout(() => {
          setShowVideoControls(false);
        }, 3000);
      }
    }
  };

  // Map icons for pain points
  const painPointIcons = [School, Compass, Globe, Briefcase];

  return (
    <div className="min-h-screen bg-space-black text-white overflow-x-hidden">
      <Starfield />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-space-black/80 backdrop-blur-md border-b border-brand-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Starbiz" className="h-8 w-auto" />
            </a>
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'es' ? 'EN' : 'ES'}</span>
              </motion.button>

              <motion.a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-brand-orange text-black rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-4 h-4" />
                {language === 'es' ? 'Únete ahora' : 'Join now'}
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-brand-purple/5" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-purple/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 mb-6"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-brand-cyan rounded-full"
                />
                <span className="text-brand-cyan text-sm font-medium">{landing?.hero?.badge}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
              >
                <span className="text-white">
                  {landing?.hero?.title}
                </span>
                <span className="text-brand-orange"> {landing?.hero?.year}</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0"
              >
                {landing?.hero?.tagline}
              </motion.p>

              {/* Skills pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              >
                {landing?.hero?.skills?.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* VIDEO - MOBILE ONLY (appears here instead of CTAs) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:hidden mb-8 relative"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-[0_0_40px_rgba(0,240,255,0.2)] border border-brand-cyan/30">
                  <video
                    className="w-full h-full object-cover"
                    src="/videos/ceo-junior-hero.mp4"
                    poster="/images/ceo-junior-poster.jpg"
                    controls
                    playsInline
                  />
                </div>
              </motion.div>

              {/* CTA - DESKTOP ONLY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex justify-center lg:justify-start mb-10"
              >
                <motion.a
                  href={communityLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  {language === 'es' ? 'Únete ahora' : 'Join now'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Countdown to Program Start */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-400 text-sm mb-4">
                  {language === 'es' ? 'El programa inicia en' : 'Program starts in'}
                </p>
                <CountdownTimer
                  targetDate={programStartDate}
                  labels={{
                    days: language === 'es' ? 'Días' : 'Days',
                    hours: language === 'es' ? 'Horas' : 'Hours',
                    minutes: language === 'es' ? 'Min' : 'Min',
                    seconds: language === 'es' ? 'Seg' : 'Sec'
                  }}
                  variant="tech"
                />
              </motion.div>

              {/* CTA - MOBILE ONLY (appears after countdown) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:hidden flex justify-center mt-8"
              >
                <motion.a
                  href={communityLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  {language === 'es' ? 'Únete ahora' : 'Join now'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right visual - Creative Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block relative"
            >
              {/* Animated orbital rings */}
              <motion.div
                className="absolute -inset-8 border-2 border-brand-cyan/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-4 border-2 border-brand-purple/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Video container */}
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-[0_0_60px_rgba(0,240,255,0.2)] border border-brand-cyan/30"
                onMouseEnter={handleVideoMouseEnter}
                onMouseLeave={() => {
                  if (isVideoPlaying) {
                    setShowVideoControls(false);
                  }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 pointer-events-none z-10" />

                {/* Video element */}
                <video
                  ref={heroVideoRef}
                  className="w-full h-full object-cover"
                  src="/videos/ceo-junior-hero.mp4"
                  loop
                  playsInline
                  onPlay={() => {
                    setIsVideoPlaying(true);
                    setIsVideoMuted(false);
                  }}
                  onPause={() => {
                    setIsVideoPlaying(false);
                    setShowVideoControls(true);
                  }}
                  onMouseEnter={handleVideoMouseEnter}
                />

                {/* Play button overlay */}
                {!isVideoPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                    onClick={toggleHeroVideo}
                  >
                    {/* Pulsing rings */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-32 h-32 rounded-full bg-brand-cyan/30" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-brand-purple/30" />
                    </motion.div>

                    {/* Main play button */}
                    <motion.div
                      className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.5)]"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                    </motion.div>

                    {/* Floating "Ver video" text */}
                    <motion.div
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20"
                      animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-white text-sm font-medium">
                        {language === 'es' ? 'Ver video' : 'Watch video'}
                      </span>
                    </motion.div>
                  </motion.div>
                )}

                {/* Tap overlay to show/hide controls (mobile) */}
                {isVideoPlaying && (
                  <div
                    className="absolute inset-0 z-20"
                    onClick={handleVideoTap}
                  />
                )}

                {/* Video controls */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: showVideoControls ? 1 : 0,
                    y: showVideoControls ? 0 : 20,
                    pointerEvents: showVideoControls ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4 z-30"
                >
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Left controls */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={toggleHeroVideo}
                        className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all active:scale-90 touch-manipulation"
                      >
                        {isVideoPlaying ? (
                          <Pause className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Play className="w-6 h-6 sm:w-5 sm:h-5 text-white" fill="currentColor" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={toggleHeroVideoMute}
                        className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all active:scale-90 touch-manipulation"
                      >
                        {isVideoMuted ? (
                          <VolumeX className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Volume2 className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                        )}
                      </button>

                      {/* Time display - hidden on mobile */}
                      <span className="hidden sm:block text-white/70 text-sm font-mono">
                        {language === 'es' ? 'Video oficial' : 'Official video'}
                      </span>
                    </div>

                    {/* Right controls */}
                    <button
                      type="button"
                      className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-brand-cyan/80 to-brand-purple/80 backdrop-blur-md flex items-center justify-center hover:from-brand-cyan hover:to-brand-purple active:opacity-80 transition-all active:scale-90 touch-manipulation"
                    >
                      <Maximize className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                    </button>
                  </div>
                </motion.div>

                {/* Corner decorations */}
                <motion.div
                  className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-cyan/50 rounded-tl-xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-purple/50 rounded-tr-xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-orange/50 rounded-bl-xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-cyan/50 rounded-br-xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-6 -right-6 px-4 py-3 bg-space-card/90 backdrop-blur-sm rounded-xl border border-brand-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-cyan" />
                  <span className="text-white font-bold">500+</span>
                </div>
                <p className="text-gray-400 text-xs">{language === 'es' ? 'Estudiantes' : 'Students'}</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 px-4 py-3 bg-space-card/90 backdrop-blur-sm rounded-xl border border-brand-purple/30 shadow-[0_0_30px_rgba(112,0,255,0.3)]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-purple" />
                  <span className="text-white font-bold">4.9</span>
                </div>
                <p className="text-gray-400 text-xs">{language === 'es' ? 'Rating' : 'Rating'}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-brand-cyan/50" />
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-brand-orange">
                {landing?.painPoints?.title}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{landing?.painPoints?.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {landing?.painPoints?.points?.map((point: any, index: number) => {
              const IconComponent = painPointIcons[index] || School;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 hover:border-red-500/40 transition-colors"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                      <p className="text-gray-400">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-brand-purple/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium mb-6">
              {landing?.solution?.title}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-white">
                {landing?.solution?.subtitle}
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {landing?.solution?.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Temario - 6 Pilares Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 via-transparent to-brand-orange/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              {language === 'es' ? 'Temario Completo' : 'Full Curriculum'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-white">{language === 'es' ? 'LOS 6 PILARES ÚNICOS' : 'THE 6 UNIQUE PILLARS'}</span>
            </h2>
            <p className="text-xl text-brand-cyan font-semibold mb-2">
              {language === 'es' ? 'Tu Matriz de Valor en 12 Meses' : 'Your Value Matrix in 12 Months'}
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Este programa fusiona 6 áreas críticas para el éxito profesional, garantizando una formación integral.'
                : 'This program merges 6 critical areas for professional success, ensuring comprehensive training.'}
            </p>
          </motion.div>

          {/* 6 Pilares Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                icon: Brain,
                title: language === 'es' ? '7 Habilidades/Inteligencias' : '7 Skills/Intelligences',
                desc: language === 'es'
                  ? 'Dominio de las 7 Inteligencias Esenciales por semana para tu crecimiento personal.'
                  : 'Mastery of the 7 Essential Intelligences per week for your personal growth.',
                color: 'brand-cyan',
                gradient: 'from-brand-cyan/20 to-brand-cyan/5'
              },
              {
                number: '02',
                icon: Star,
                title: language === 'es' ? 'Mentalidad Emprendedora' : 'Entrepreneurial Mindset',
                desc: language === 'es'
                  ? 'Estudio de desafíos y aciertos de hombres influyentes para forjar resiliencia y visión.'
                  : 'Study of challenges and successes of influential men to forge resilience and vision.',
                color: 'brand-orange',
                gradient: 'from-brand-orange/20 to-brand-orange/5'
              },
              {
                number: '03',
                icon: BookOpen,
                title: language === 'es' ? 'Libros de Desarrollo Personal' : 'Personal Development Books',
                desc: language === 'es'
                  ? 'Libros clave desglosados para aplicar sus mejores conceptos a la acción diaria.'
                  : 'Key books broken down to apply their best concepts to daily action.',
                color: 'brand-purple',
                gradient: 'from-brand-purple/20 to-brand-purple/5'
              },
              {
                number: '04',
                icon: Briefcase,
                title: language === 'es' ? 'Casos de Negocios (Harvard)' : 'Business Cases (Harvard)',
                desc: language === 'es'
                  ? 'Análisis semanal de empresas como ZOOM para crear modelos de negocio funcionales.'
                  : 'Weekly analysis of companies like ZOOM to create functional business models.',
                color: 'brand-yellow',
                gradient: 'from-brand-yellow/20 to-brand-yellow/5'
              },
              {
                number: '05',
                icon: Globe,
                title: language === 'es' ? 'Inglés Universitario y de Negocios' : 'University & Business English',
                subtitle: language === 'es' ? 'EN VIVO desde Londres' : 'LIVE from London',
                desc: language === 'es'
                  ? 'Sesiones en vivo con un experto desde LONDRES para dominar el vocabulario académico y empresarial.'
                  : 'Live sessions with an expert from LONDON to master academic and business vocabulary.',
                color: 'brand-cyan',
                gradient: 'from-brand-cyan/20 to-brand-purple/5'
              },
              {
                number: '06',
                icon: Rocket,
                title: language === 'es' ? 'Guía Tecnológica y Consultoría' : 'Tech Guide & Consulting',
                subtitle: language === 'es' ? 'Ganancias Reales' : 'Real Earnings',
                desc: language === 'es'
                  ? 'El Motor del Programa. Lanzamiento de un proyecto de consultoría real, con uso de tecnología y generación de ganancias verificables.'
                  : 'The Engine of the Program. Launch of a real consulting project, with technology use and verifiable earnings generation.',
                color: 'brand-orange',
                gradient: 'from-brand-orange/20 to-brand-yellow/5',
                featured: true
              }
            ].map((pilar, index) => {
              const IconComponent = pilar.icon;
              const isExpanded = expandedTrack === `pilar-${index}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative rounded-2xl cursor-pointer transition-all duration-300 ${
                    pilar.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  } ${isExpanded ? `ring-2 ring-${pilar.color}` : ''}`}
                  onClick={() => setExpandedTrack(isExpanded ? null : `pilar-${index}`)}
                >
                  {/* Card */}
                  <div className={`relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${pilar.gradient} border border-white/10 hover:border-${pilar.color}/50 transition-all overflow-hidden`}>
                    {/* Number watermark */}
                    <span className={`absolute top-4 right-4 text-6xl font-display font-black text-${pilar.color}/10 group-hover:text-${pilar.color}/20 transition-colors`}>
                      {pilar.number}
                    </span>

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-${pilar.color}/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

                    <div className="relative">
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-${pilar.color}/20 border border-${pilar.color}/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className={`w-7 h-7 text-${pilar.color}`} />
                      </motion.div>

                      {/* Title */}
                      <h3 className={`text-xl font-display font-bold text-white mb-1 group-hover:text-${pilar.color} transition-colors`}>
                        {pilar.title}
                      </h3>

                      {/* Subtitle if exists */}
                      {pilar.subtitle && (
                        <p className={`text-${pilar.color} text-sm font-semibold mb-2`}>
                          {pilar.subtitle}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {pilar.desc}
                      </p>

                      {/* Expand indicator */}
                      <div className={`flex items-center gap-2 text-${pilar.color} text-sm font-medium`}>
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            <span>{language === 'es' ? 'Ver menos' : 'See less'}</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            <span>{language === 'es' ? 'Ver más' : 'See more'}</span>
                          </>
                        )}
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-white/10">
                              <ul className="space-y-2">
                                {pilar.featured ? (
                                  <>
                                    <li className="flex items-start gap-2 text-gray-300 text-sm">
                                      <CheckCircle2 className={`w-4 h-4 text-${pilar.color} flex-shrink-0 mt-0.5`} />
                                      <span>{language === 'es' ? 'Proyecto real con clientes reales' : 'Real project with real clients'}</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-300 text-sm">
                                      <CheckCircle2 className={`w-4 h-4 text-${pilar.color} flex-shrink-0 mt-0.5`} />
                                      <span>{language === 'es' ? 'Uso de herramientas tecnológicas actuales' : 'Use of current tech tools'}</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-300 text-sm">
                                      <CheckCircle2 className={`w-4 h-4 text-${pilar.color} flex-shrink-0 mt-0.5`} />
                                      <span>{language === 'es' ? 'Ganancias verificables desde el programa' : 'Verifiable earnings from the program'}</span>
                                    </li>
                                  </>
                                ) : (
                                  <>
                                    <li className="flex items-start gap-2 text-gray-300 text-sm">
                                      <CheckCircle2 className={`w-4 h-4 text-${pilar.color} flex-shrink-0 mt-0.5`} />
                                      <span>{language === 'es' ? 'Contenido semanal estructurado' : 'Structured weekly content'}</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-300 text-sm">
                                      <CheckCircle2 className={`w-4 h-4 text-${pilar.color} flex-shrink-0 mt-0.5`} />
                                      <span>{language === 'es' ? 'Ejercicios prácticos aplicables' : 'Practical applicable exercises'}</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-300 text-sm">
                                      <CheckCircle2 className={`w-4 h-4 text-${pilar.color} flex-shrink-0 mt-0.5`} />
                                      <span>{language === 'es' ? 'Seguimiento personalizado' : 'Personalized follow-up'}</span>
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Featured badge */}
                    {pilar.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-brand-orange text-black text-xs font-bold uppercase rounded-full">
                        {language === 'es' ? 'El Motor' : 'The Engine'}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA after temario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href={communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Rocket className="w-5 h-5" />
              {language === 'es' ? 'Únete ahora' : 'Join now'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Exchange Program Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-transparent to-brand-cyan/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-space-dark to-space-black" />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 text-center lg:text-left">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 mb-6"
                  >
                    <Star className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-yellow text-sm font-medium">{landing?.exchange?.badge}</span>
                  </motion.span>

                  <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-white">
                    {landing?.exchange?.title}
                  </h2>
                  <p className="text-brand-cyan mb-2">{landing?.exchange?.location}</p>
                  <p className="text-lg text-gray-300 mb-6 max-w-xl">
                    {landing?.exchange?.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {landing?.exchange?.features?.map((feature: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <Plane className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual element */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative w-48 h-48 sm:w-64 sm:h-64"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-full blur-2xl" />
                    <div className="relative w-full h-full flex items-center justify-center bg-space-card/50 backdrop-blur-sm rounded-full border border-brand-yellow/30">
                      <Plane className="w-20 h-20 sm:w-24 sm:h-24 text-brand-yellow" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our History Section - Carousel */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              <Calendar className="w-4 h-4" />
              {language === 'es' ? 'Nuestra Trayectoria' : 'Our Journey'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-white">{language === 'es' ? 'NUESTRA HISTORIA' : 'OUR HISTORY'}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {language === 'es'
                ? 'De Orellana Group a CEO Junior: 5 años de evolución formando líderes'
                : 'From Orellana Group to CEO Junior: 5 years of evolution training leaders'}
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => setHistorySlide(prev => (prev > 0 ? prev - 1 : historyTimeline.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-space-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange/20 hover:border-brand-orange/50 transition-all hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setHistorySlide(prev => (prev < historyTimeline.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-space-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange/20 hover:border-brand-orange/50 transition-all hidden md:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={historySlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {(() => {
                    const slide = historyTimeline[historySlide];
                    const IconComponent = slide.icon;
                    return (
                      <div className="bg-space-card/60 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                          {/* Left: Media Section */}
                          <div className="w-full lg:w-1/2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-space-dark/50 border border-white/5">
                              {slide.video ? (
                                <div
                                  className="w-full h-full flex items-center justify-center cursor-pointer group"
                                  onClick={() => setHistoryVideoModal(slide.video)}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                                  <motion.div
                                    className="relative z-10 w-20 h-20 rounded-full bg-brand-orange/90 flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Play className="w-8 h-8 text-white ml-1" />
                                  </motion.div>
                                  <p className="absolute bottom-4 left-4 text-white/80 text-sm">
                                    {language === 'es' ? 'Click para ver video' : 'Click to watch video'}
                                  </p>
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className={`w-24 h-24 rounded-2xl bg-${slide.color}/20 flex items-center justify-center`}>
                                    <IconComponent className={`w-12 h-12 text-${slide.color}`} />
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Certificate Images Gallery */}
                            {slide.images && slide.images.length > 0 && (
                              <div className="flex gap-3 mt-4 justify-center">
                                {slide.images.map((img, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="w-20 h-14 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-brand-orange transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setHistoryImageModal(img)}
                                  >
                                    <img src={img} alt={`Certificate ${idx + 1}`} className="w-full h-full object-cover" />
                                  </motion.div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Right: Content Section */}
                          <div className="w-full lg:w-1/2 text-center lg:text-left">
                            {/* Year Badge */}
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="inline-block mb-4"
                            >
                              <span className={`text-6xl sm:text-7xl lg:text-8xl font-display font-black text-${slide.color}`}>
                                {slide.year}
                              </span>
                            </motion.div>

                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                              {slide.title}
                            </h3>
                            <p className={`text-${slide.color} font-medium mb-4`}>
                              {slide.subtitle}
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                              {slide.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                              {slide.video && (
                                <motion.button
                                  onClick={() => setHistoryVideoModal(slide.video)}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-black rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Play className="w-4 h-4" />
                                  {language === 'es' ? 'Ver Video' : 'Watch Video'}
                                </motion.button>
                              )}
                              {slide.images && slide.images.length > 0 && (
                                <motion.button
                                  onClick={() => setHistoryImageModal(slide.images[0])}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Award className="w-4 h-4" />
                                  {language === 'es' ? 'Ver Certificados' : 'View Certificates'}
                                </motion.button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {historyTimeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setHistorySlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === historySlide
                      ? 'bg-brand-orange w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <button
                onClick={() => setHistorySlide(prev => (prev > 0 ? prev - 1 : historyTimeline.length - 1))}
                className="w-12 h-12 rounded-full bg-space-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setHistorySlide(prev => (prev < historyTimeline.length - 1 ? prev + 1 : 0))}
                className="w-12 h-12 rounded-full bg-space-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {historyVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setHistoryVideoModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setHistoryVideoModal(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <video
                  src={historyVideoModal}
                  controls
                  autoPlay
                  className="w-full rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {historyImageModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setHistoryImageModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setHistoryImageModal(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={historyImageModal}
                  alt="Certificate"
                  className="max-w-full max-h-[85vh] rounded-xl object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">
                {landing?.testimonials?.title}
              </span>
            </h2>
            <p className="text-gray-400">{landing?.testimonials?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {landing?.testimonials?.list?.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-space-card/50 backdrop-blur-sm border border-white/10"
              >
                <div className="absolute top-4 left-4 text-5xl text-brand-cyan/20 font-serif">"</div>

                <div className="relative pt-6">
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.age} • {testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-brand-cyan/5 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium mb-6">
              {language === 'es' ? 'Inversión Accesible' : 'Affordable Investment'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">
                {language === 'es' ? 'Transforma tu Futuro' : 'Transform Your Future'}
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {language === 'es'
                ? 'Accede a todo el contenido, mentoría y comunidad por un precio increíble'
                : 'Access all content, mentorship and community for an incredible price'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 via-brand-purple/20 to-brand-cyan/20 rounded-3xl blur-2xl opacity-50" />

            <div className="relative p-8 sm:p-12 rounded-3xl bg-space-card/80 backdrop-blur-sm border border-brand-cyan/30 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,240,255,0.5) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }} />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Price display */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                    <span className="text-gray-400 text-2xl">{language === 'es' ? 'Solo' : 'Only'}</span>
                    <motion.span
                      className="text-6xl sm:text-7xl md:text-8xl font-display font-black text-brand-orange"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      $9
                    </motion.span>
                    <span className="text-gray-400 text-xl">/{language === 'es' ? 'mes' : 'month'}</span>
                  </div>

                  <p className="text-lg text-gray-300 mb-6">
                    {language === 'es'
                      ? 'Acceso completo a CEO Junior 2026'
                      : 'Full access to CEO Junior 2026'}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 text-left max-w-sm mx-auto lg:mx-0">
                    {[
                      language === 'es' ? '4 módulos de formación' : '4 training modules',
                      language === 'es' ? 'Comunidad exclusiva' : 'Exclusive community',
                      language === 'es' ? 'Mentoría personalizada' : 'Personalized mentorship',
                      language === 'es' ? 'Acceso a eventos especiales' : 'Access to special events',
                      language === 'es' ? 'Certificado de participación' : 'Participation certificate'
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA side */}
                <div className="flex-shrink-0 text-center">
                  <motion.div
                    className="relative w-40 h-40 mb-6 mx-auto"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 rounded-full blur-xl" />
                    <div className="relative w-full h-full flex items-center justify-center bg-space-card rounded-full border-2 border-brand-cyan/40">
                      <DollarSign className="w-16 h-16 text-brand-cyan" />
                    </div>
                  </motion.div>

                  <motion.a
                    href={communityLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket className="w-5 h-5" />
                    {language === 'es' ? 'Únete ahora' : 'Join now'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <p className="text-gray-500 text-sm mt-4">
                    {language === 'es' ? 'Comienza tu transformación hoy' : 'Start your transformation today'}
                  </p>
                </div>
              </div>

              {/* Bottom guarantee */}
              <div className="relative mt-8 pt-8 border-t border-white/10 text-center">
                <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {language === 'es'
                    ? 'Garantía de satisfacción - Si no es para ti, te devolvemos tu dinero'
                    : 'Satisfaction guarantee - If it\'s not for you, we\'ll refund your money'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/10 via-brand-purple/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 sm:p-12 rounded-3xl bg-space-card/80 backdrop-blur-sm border border-brand-cyan/30"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-brand-cyan/50"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0,240,255,0.2)',
                  '0 0 40px rgba(0,240,255,0.4)',
                  '0 0 20px rgba(0,240,255,0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative">
              <div className="flex justify-center gap-4 mb-6">
                <span className="px-3 py-1 bg-brand-cyan/20 border border-brand-cyan/30 rounded-full text-brand-cyan text-sm">
                  {landing?.urgency?.batch}
                </span>
                <span className="px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-sm">
                  {landing?.urgency?.slots}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                {landing?.urgency?.title}
              </h2>
              <p className="text-brand-orange font-semibold mb-8 max-w-xl mx-auto">
                {language === 'es' ? 'Inscripciones abiertas limitadas' : 'Limited open enrollment'}
              </p>

              <div className="mb-8">
                <CountdownTimer
                  targetDate={urgencyTargetDate}
                  labels={{
                    days: language === 'es' ? 'Días' : 'Days',
                    hours: language === 'es' ? 'Horas' : 'Hours',
                    minutes: language === 'es' ? 'Min' : 'Min',
                    seconds: language === 'es' ? 'Seg' : 'Sec'
                  }}
                  variant="tech"
                />
              </div>

              <motion.a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket className="w-5 h-5" />
                {language === 'es' ? 'Únete ahora' : 'Join now'}
              </motion.a>

              <p className="text-gray-500 text-sm mt-4">{landing?.urgency?.guarantee}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">
                {landing?.faq?.title}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {landing?.faq?.list?.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-space-card/50 hover:bg-space-card/70 transition-colors"
                >
                  <span className="text-left font-medium text-white">{item.q}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-space-dark/50 text-gray-300">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-brand-orange mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-white">
                {landing?.finalCta?.title}
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              {landing?.finalCta?.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-orange text-black rounded-2xl font-bold text-xl hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket className="w-6 h-6" />
                {language === 'es' ? 'Únete ahora' : 'Join now'}
                <ArrowRight className="w-6 h-6" />
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 border border-white/30 rounded-2xl font-semibold text-lg text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                {language === 'es' ? 'Hablar con un asesor' : 'Talk to an advisor'}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Starbiz Academy" className="h-8 w-auto" />
            </a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Starbiz Academy. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CEOJuniorPage;
