import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CountdownTimer from '../components/landing/CountdownTimer';
import Starfield from '../components/Starfield';
import {
  Heart,
  Users,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Brain,
  Smartphone,
  Fingerprint,
  CheckCircle2,
  Star,
  Shield,
  Zap,
  Globe,
  Target,
  Lightbulb,
  Clock,
  TrendingUp,
  Puzzle,
  Unlock,
  Home,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  History
} from 'lucide-react';

const Parents30Page: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [activeStage, setActiveStage] = useState<1 | 2>(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const landing = t.parents30Landing;
  const programStartDate = new Date('2026-01-05T00:00:00'); // Program starts January 5, 2026

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const communityLink = 'https://app.starbizacademy.com';

  // 7 Intelligences
  const intelligences = [
    { name: language === 'es' ? 'Espiritual' : 'Spiritual', icon: Star },
    { name: language === 'es' ? 'Mental' : 'Mental', icon: Brain },
    { name: language === 'es' ? 'Física' : 'Physical', icon: Zap },
    { name: language === 'es' ? 'Emocional' : 'Emotional', icon: Heart },
    { name: language === 'es' ? 'Social' : 'Social', icon: Users },
    { name: language === 'es' ? 'Financiera' : 'Financial', icon: Shield },
    { name: language === 'es' ? 'Tecnológica' : 'Technological', icon: Smartphone }
  ];

  // 5 Tools consolidated
  const tools = [
    {
      icon: Fingerprint,
      name: language === 'es' ? 'Eneagrama' : 'Enneagram',
      brief: language === 'es' ? 'Comprende personalidades' : 'Understand personalities'
    },
    {
      icon: Brain,
      name: 'PNL',
      brief: language === 'es' ? 'Transforma patrones' : 'Transform patterns'
    },
    {
      icon: Target,
      name: 'Coaching',
      brief: language === 'es' ? 'Guía consciente' : 'Conscious guidance'
    },
    {
      icon: Lightbulb,
      name: language === 'es' ? 'Neurociencia' : 'Neuroscience',
      brief: language === 'es' ? 'Entiende el cerebro' : 'Understand the brain'
    },
    {
      icon: Star,
      name: language === 'es' ? 'Psicología Positiva' : 'Positive Psychology',
      brief: language === 'es' ? 'Cultiva fortalezas' : 'Cultivate strengths'
    }
  ];

  // Stage 1 & 2 weeks
  const stage1Weeks = [
    language === 'es' ? 'Eneagrama' : 'Enneagram',
    'PNL',
    'Coaching',
    language === 'es' ? 'Neurociencia' : 'Neuroscience',
    language === 'es' ? 'Psicología Positiva' : 'Positive Psychology'
  ];

  const stage2Weeks = [
    language === 'es' ? 'Cambios emocionales' : 'Emotional changes',
    language === 'es' ? 'Comunicación' : 'Communication',
    language === 'es' ? 'Toma de decisiones' : 'Decision making',
    language === 'es' ? 'Rendimiento académico' : 'Academic performance',
    language === 'es' ? 'Relaciones' : 'Relationships'
  ];

  // Results - condensed
  const results = [
    { icon: MessageCircle, text: language === 'es' ? 'Mejor comunicación' : 'Better communication' },
    { icon: Shield, text: language === 'es' ? 'Menos conflictos' : 'Less conflicts' },
    { icon: TrendingUp, text: language === 'es' ? 'Mayor autoestima' : 'Higher self-esteem' },
    { icon: Heart, text: language === 'es' ? 'Límites con amor' : 'Limits with love' },
    { icon: Unlock, text: language === 'es' ? 'Conexión emocional' : 'Emotional connection' },
    { icon: Home, text: language === 'es' ? 'Paz en casa' : 'Peace at home' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Starfield />

      {/* Subtle ambient particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `radial-gradient(circle, rgba(255,107,0,${0.2 + Math.random() * 0.2}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Minimal Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Starbiz" className="h-7 w-auto" />
            </a>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 text-white/60 text-sm font-medium hover:text-white transition-colors"
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
                className="px-5 py-2 bg-brand-orange text-black rounded-full text-sm font-bold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                {language === 'es' ? 'Inscribirme' : 'Join Now'}
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO - Clean Editorial Style */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Elegant gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            {/* Elegant badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
            >
              <Heart className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange/90 text-sm font-medium tracking-wide">
                {language === 'es' ? 'Transformación Familiar' : 'Family Transformation'}
              </span>
            </motion.div>

            {/* Main title - Editorial typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-black mb-6 leading-[0.95]"
            >
              <span className="text-white">PADRES</span>
              <br />
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                3.0
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/80 mb-4 font-medium"
            >
              {landing?.hero?.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed"
            >
              {language === 'es'
                ? 'Un programa de 60 días que te transforma desde adentro para mejorar la conexión con tus hijos.'
                : 'A 60-day program that transforms you from within to improve connection with your children.'}
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-brand-orange text-black rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(255,107,0,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-5 h-5" />
                {landing?.hero?.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#method"
                className="px-8 py-4 border border-white/20 rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 text-brand-orange" />
                {language === 'es' ? 'Ver metodología' : 'See methodology'}
              </motion.a>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <p className="text-brand-orange/70 text-sm font-medium mb-3 uppercase tracking-wider">
                {language === 'es' ? 'Inicia el 5 de Enero 2026' : 'Starts January 5, 2026'}
              </p>
              <CountdownTimer
                targetDate={programStartDate}
                labels={{
                  days: language === 'es' ? 'Días' : 'Days',
                  hours: language === 'es' ? 'Hrs' : 'Hrs',
                  minutes: 'Min',
                  seconds: 'Seg'
                }}
                variant="warm"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-brand-orange rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* NUESTRA HISTORIA - Premium Design with Animated SVGs */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#050505]" />
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 40%, transparent 70%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 40%, transparent 70%)',
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header with Animated Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Animated SVG Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 mb-8 relative"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,107,0,0.3) 0%, rgba(245,158,11,0.1) 100%)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,107,0,0.3), inset 0 0 20px rgba(255,107,0,0.1)',
                    '0 0 40px rgba(255,107,0,0.5), inset 0 0 30px rgba(255,107,0,0.2)',
                    '0 0 20px rgba(255,107,0,0.3), inset 0 0 20px rgba(255,107,0,0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Custom SVG Icon - Book with Heart */}
              <svg
                viewBox="0 0 48 48"
                className="w-10 h-10 relative z-10"
                fill="none"
              >
                <motion.path
                  d="M8 12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12Z"
                  stroke="url(#bookGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M24 8V40"
                  stroke="url(#bookGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d="M24 22C24 22 26 19 29 19C32 19 34 21.5 34 24C34 28 24 32 24 32C24 32 14 28 14 24C14 21.5 16 19 19 19C22 19 24 22 24 22Z"
                  fill="url(#heartGradient)"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
                <defs>
                  <linearGradient id="bookGradient" x1="8" y1="8" x2="40" y2="40">
                    <stop stopColor="#FF6B00" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                  <linearGradient id="heartGradient" x1="14" y1="19" x2="34" y2="32">
                    <stop stopColor="#FF6B00" />
                    <stop offset="1" stopColor="#FB923C" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            >
              {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-display font-black mb-6"
            >
              <span className="text-white">{language === 'es' ? 'De un sueño ' : 'From a dream '}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                {language === 'es' ? 'a un movimiento' : 'to a movement'}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {language === 'es'
                ? 'Lo que comenzó hace 7 años como una búsqueda personal, hoy es Padres 3.0: nuestra versión más completa y poderosa.'
                : 'What started 7 years ago as a personal journey is now Parents 3.0: our most complete and powerful version.'}
            </motion.p>
          </motion.div>

          {/* Video Player - Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-16 group"
          >
            {/* Glow effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/20 via-amber-500/10 to-brand-orange/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10">
              {/* Gradient overlay on video */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-10" />

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/videos/padres-historia.mp4"
                muted={isMuted}
                loop
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />

              {/* Animated Play Button */}
              {!isVideoPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                  onClick={toggleVideo}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Pulsing rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brand-orange/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brand-orange/20"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    {/* Main button */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center shadow-2xl shadow-brand-orange/30">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 text-black ml-1" fill="currentColor">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Premium Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVideoPlaying ? 1 : 0, y: isVideoPlaying ? 0 : 20 }}
                className="absolute bottom-0 left-0 right-0 p-6 z-20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <motion.button
                      onClick={toggleVideo}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Pause className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.button
                      onClick={toggleMute}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                    </motion.button>
                  </div>
                  <motion.button
                    onClick={() => setShowVideoModal(true)}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-orange/80 to-amber-500/80 backdrop-blur-md flex items-center justify-center hover:from-brand-orange hover:to-amber-500 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Quote - Elegant Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden">
              {/* Decorative gradient blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Avatar with animated ring */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-orange to-amber-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: 0.3 }}
                  />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange via-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-brand-orange/30">
                    JO
                  </div>
                </div>

                {/* Quote content */}
                <div className="flex-1 text-center md:text-left">
                  {/* SVG Quote marks */}
                  <svg className="w-10 h-10 text-brand-orange/30 mb-4 hidden md:block" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-4">
                    {language === 'es'
                      ? 'Durante años creí que mis hijos debían cambiar. Hasta que descubrí que el cambio debía comenzar en mí. Eso transformó todo.'
                      : 'For years I believed my children had to change. Until I discovered the change had to start with me. That transformed everything.'}
                  </p>
                  <div>
                    <p className="text-white font-semibold text-lg">Jimy Henry Orellana</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400 font-medium">
                      {language === 'es' ? 'Fundador de Padres 3.0' : 'Founder of Parents 3.0'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats - Premium Cards with Animated Icons */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                value: '500+',
                label: language === 'es' ? 'Familias transformadas' : 'Families transformed',
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8">
                    <motion.path
                      d="M16 4C16 4 12 8 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 8 16 4 16 4Z"
                      fill="url(#stat1)"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                    <motion.path
                      d="M8 28C8 22.4772 11.5817 18 16 18C20.4183 18 24 22.4772 24 28"
                      stroke="url(#stat1)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="stat1" x1="8" y1="4" x2="24" y2="28">
                        <stop stopColor="#FF6B00" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                )
              },
              {
                value: '7',
                label: language === 'es' ? 'Años de experiencia' : 'Years of experience',
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8">
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="12"
                      stroke="url(#stat2)"
                      strokeWidth="2.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                    <motion.path
                      d="M16 8V16L20 20"
                      stroke="url(#stat2)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="stat2" x1="4" y1="4" x2="28" y2="28">
                        <stop stopColor="#FF6B00" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                )
              },
              {
                value: '3.0',
                label: language === 'es' ? 'Versión actual' : 'Current version',
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8">
                    <motion.path
                      d="M16 4L20 12L28 13L22 19L24 28L16 24L8 28L10 19L4 13L12 12L16 4Z"
                      fill="url(#stat3)"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />
                    <defs>
                      <linearGradient id="stat3" x1="4" y1="4" x2="28" y2="28">
                        <stop stopColor="#FF6B00" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                )
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-brand-orange/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative text-center">
                  <motion.div
                    className="flex justify-center mb-4"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow behind modal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <video
                className="relative w-full h-full rounded-2xl shadow-2xl"
                src="/videos/padres-historia.mp4"
                controls
                autoPlay
              />
              <motion.button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-14 right-0 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* METHODOLOGY - Clean Grid */}
      <section id="method" className="relative py-24 bg-gradient-to-b from-transparent via-brand-orange/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-6">
              <Puzzle className="w-4 h-4" />
              {language === 'es' ? 'Metodología' : 'Methodology'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {language === 'es' ? '5 Herramientas Científicas' : '5 Scientific Tools'}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {language === 'es'
                ? 'Combinamos ciencia y desarrollo personal. No necesitas conocimientos previos.'
                : 'We combine science and personal development. No prior knowledge needed.'}
            </p>
          </motion.div>

          {/* Tools Grid - Compact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/30 transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-orange/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{tool.name}</h3>
                  <p className="text-gray-500 text-xs">{tool.brief}</p>
                </motion.div>
              );
            })}
          </div>

          {/* 7 Intelligences - Horizontal Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl bg-gradient-to-r from-brand-orange/10 via-brand-orange/5 to-brand-orange/10 border border-brand-orange/20"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 text-center sm:text-left">
                <h3 className="text-lg font-bold text-white mb-1">
                  {language === 'es' ? 'Modelo GÉNESIS 7i' : 'GENESIS 7i Model'}
                </h3>
                <p className="text-brand-orange text-sm">
                  {language === 'es' ? '7 Dimensiones del Ser' : '7 Dimensions of Being'}
                </p>
              </div>
              <div className="flex-1 flex flex-wrap justify-center sm:justify-end gap-2">
                {intelligences.map((intel, i) => {
                  const IconComp = intel.icon;
                  return (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full">
                      <IconComp className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="text-white/80 text-xs font-medium">{intel.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 60-DAY CHALLENGE - Interactive Tabs */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              {language === 'es' ? 'Tu Transformación' : 'Your Transformation'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">{language === 'es' ? 'Reto ' : 'Challenge '}</span>
              <span className="text-brand-orange">60 {language === 'es' ? 'Días' : 'Days'}</span>
            </h2>
          </motion.div>

          {/* Stage Toggle */}
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveStage(1)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeStage === 1
                  ? 'bg-brand-orange text-black'
                  : 'bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {language === 'es' ? 'Etapa 1: Herramientas' : 'Stage 1: Tools'}
            </button>
            <button
              onClick={() => setActiveStage(2)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeStage === 2
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              {language === 'es' ? 'Etapa 2: Desafíos' : 'Stage 2: Challenges'}
            </button>
          </div>

          {/* Stage Content */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative p-8 rounded-3xl border ${
              activeStage === 1
                ? 'bg-gradient-to-br from-brand-orange/10 to-transparent border-brand-orange/20'
                : 'bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/20'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black ${
                activeStage === 1 ? 'bg-brand-orange text-black' : 'bg-amber-500 text-black'
              }`}>
                {activeStage}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {activeStage === 1
                    ? (language === 'es' ? 'Las 5 Herramientas Modernas' : 'The 5 Modern Tools')
                    : (language === 'es' ? 'Los 5 Desafíos de la Adolescencia' : 'The 5 Challenges of Adolescence')
                  }
                </h3>
                <p className={activeStage === 1 ? 'text-brand-orange' : 'text-amber-500'}>
                  {language === 'es' ? `Semanas ${activeStage === 1 ? '1-5' : '6-10'}` : `Weeks ${activeStage === 1 ? '1-5' : '6-10'}`}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-5 gap-3">
              {(activeStage === 1 ? stage1Weeks : stage2Weeks).map((week, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    activeStage === 1
                      ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30'
                      : 'bg-amber-500/20 text-amber-500 border border-amber-500/30'
                  }`}>
                    {activeStage === 1 ? i + 1 : i + 6}
                  </span>
                  <span className="text-white/90 text-sm font-medium">{week}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-gray-400 text-center italic">
              {activeStage === 1
                ? (language === 'es' ? 'Aprenderás TODO lo que necesitas para transformarte.' : 'You\'ll learn EVERYTHING you need to transform.')
                : (language === 'es' ? 'Transformarás tu relación con tus hijos.' : 'You\'ll transform your relationship with your children.')
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESULTS - Compact Grid */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-brand-orange/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">{language === 'es' ? 'Resultados en ' : 'Results in '}</span>
              <span className="text-brand-orange">60 {language === 'es' ? 'días' : 'days'}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {results.map((result, i) => {
              const IconComponent = result.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">{result.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl sm:text-2xl font-display text-white/80 mt-12"
          >
            {language === 'es' ? '"Si tú cambias, ellos cambian."' : '"If you change, they change."'}
          </motion.p>
        </div>
      </section>

      {/* TESTIMONIALS - Minimal */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white">
              {language === 'es' ? 'Historias de Transformación' : 'Transformation Stories'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {landing?.testimonials?.list?.slice(0, 3).map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10"
              >
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-brand-orange text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - Benefits */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-brand-orange/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              {language === 'es' ? '¿Qué incluye?' : 'What\'s included?'}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {landing?.benefits?.list?.map((benefit: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/10"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM START COUNTDOWN - Premium Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 60%)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Animated icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 mb-8 relative"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Pulsing background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-orange/30 to-amber-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-orange/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              {/* Icon */}
              <svg viewBox="0 0 48 48" className="w-10 h-10 relative z-10" fill="none">
                <motion.circle
                  cx="24"
                  cy="24"
                  r="18"
                  stroke="url(#calendarGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <motion.path
                  d="M24 14V24L30 28"
                  stroke="url(#calendarGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.circle
                  cx="24"
                  cy="24"
                  r="3"
                  fill="url(#calendarGradient)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                />
                <defs>
                  <linearGradient id="calendarGradient" x1="6" y1="6" x2="42" y2="42">
                    <stop stopColor="#FF6B00" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            >
              {language === 'es' ? '¡Próximamente!' : 'Coming Soon!'}
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black mb-6">
              <span className="text-white">{language === 'es' ? 'El programa ' : 'The program '}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                {language === 'es' ? 'inicia en' : 'starts in'}
              </span>
            </h2>

            {/* Premium Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-10"
            >
              <CountdownTimer
                targetDate={programStartDate}
                labels={{
                  days: language === 'es' ? 'Días' : 'Days',
                  hours: language === 'es' ? 'Horas' : 'Hours',
                  minutes: 'Min',
                  seconds: 'Seg'
                }}
                variant="warm"
              />
            </motion.div>

            {/* Date display */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange/10 to-amber-500/10 border border-brand-orange/20"
            >
              <Clock className="w-5 h-5 text-brand-orange" />
              <span className="text-white font-medium">
                {language === 'es' ? '5 de Enero, 2026' : 'January 5, 2026'}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-6 max-w-lg mx-auto"
            >
              {language === 'es'
                ? 'Inscríbete ahora y asegura tu lugar en esta transformación.'
                : 'Sign up now and secure your spot in this transformation.'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA - Clean and Focused */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 via-transparent to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-brand-orange mx-auto mb-8" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-display font-black mb-6">
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                {language === 'es' ? '¿Listo para transformarte?' : 'Ready to transform?'}
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
              {language === 'es'
                ? 'Únete a cientos de padres que ya están viviendo una nueva relación con sus hijos.'
                : 'Join hundreds of parents already living a new relationship with their children.'}
            </p>

            <div className="mb-10">
              <CountdownTimer
                targetDate={programStartDate}
                labels={{
                  days: language === 'es' ? 'Días' : 'Days',
                  hours: language === 'es' ? 'Hrs' : 'Hrs',
                  minutes: 'Min',
                  seconds: 'Seg'
                }}
                variant="warm"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-brand-orange text-black rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -10px rgba(255,107,0,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-5 h-5" />
                {landing?.finalCta?.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-white/20 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="relative py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Starbiz" className="h-6 w-auto opacity-60" />
            </a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Starbiz Academy
            </p>
            <a
              href={communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-gray-500 hover:text-brand-orange transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Parents30Page;
