import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Rocket, Users, GraduationCap, Star, Mic, BookOpen, Building2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Starfield from '../components/Starfield';
import { getSuperApps, getAppsByParent, type EcosystemApp } from '../data/ecosystem-data';
import CountdownTimer from '../components/landing/CountdownTimer';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Rocket, Users, GraduationCap, Star, Mic, BookOpen, Building2, Lightbulb,
};

const AppIcon: React.FC<{ iconName: string; size?: number; className?: string }> = ({ iconName, size = 24, className }) => {
  const Icon = iconMap[iconName];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

const colorMap: Record<string, string> = {
  cyan: '#00F0FF',
  orange: '#FF6B00',
  purple: '#7000FF',
  emerald: '#10b981',
  pink: '#ec4899',
  amber: '#f59e0b',
  rose: '#e11d48',
  teal: '#06b6d4',
};

const MiniAppCard: React.FC<{ app: EcosystemApp; index: number; enrollText: string }> = ({ app, index, enrollText }) => {
  const { language } = useLanguage();
  const es = language === 'es';
  const mainColor = colorMap[app.color] || '#00F0FF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
          style={{ background: app.iconGradient }}
        >
          <AppIcon iconName={app.icon} size={26} className="text-white" />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg font-display">{es ? app.nameEs : app.name}</h4>
          <p className="text-gray-500 text-xs">{es ? app.categoryEs : app.category}</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {es ? app.shortDescriptionEs : app.shortDescription}
      </p>

      <div className="space-y-2 mb-6">
        {app.features.slice(0, 4).map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: mainColor }} />
            <span className="text-gray-300 text-xs">{es ? f.es : f.en}</span>
          </div>
        ))}
      </div>

      <a
        href="https://app.starbizacademy.com/enrollment"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 rounded-xl font-bold text-sm text-white text-center transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
        style={{ background: `linear-gradient(135deg, ${mainColor}, ${mainColor}99)`, boxShadow: `0 4px 20px ${mainColor}25` }}
      >
        {enrollText}
      </a>
    </motion.div>
  );
};

const EcosystemPage: React.FC = () => {
  const { t, language } = useLanguage();
  const es = language === 'es';
  const superApps = getSuperApps();
  const [selectedSuperApp, setSelectedSuperApp] = useState<string>('ceo_junior');

  const miniApps = getAppsByParent(selectedSuperApp);
  const selectedApp = superApps.find(a => a.id === selectedSuperApp);
  const classesStartDate = new Date('2026-04-15T00:00:00');

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <Starfield />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>{es ? 'Volver al inicio' : 'Back to home'}</span>
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display tracking-tight mb-4">
              {t.ecosystemShowcase.pageTitle}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              {t.ecosystemShowcase.pageSubtitle}
            </p>

            <div className="max-w-md mx-auto">
              <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">
                {es ? 'Inicio de clases: 15 de Abril' : 'Classes start: April 15'}
              </p>
              <CountdownTimer
                targetDate={classesStartDate}
                labels={{
                  days: es ? 'Días' : 'Days',
                  hours: es ? 'Horas' : 'Hours',
                  minutes: 'Min',
                  seconds: es ? 'Seg' : 'Sec',
                }}
                variant="warm"
              />
            </div>
          </motion.div>

          {/* Super Apps Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
          >
            {superApps.map((app) => {
              const isSelected = selectedSuperApp === app.id;
              const mainColor = colorMap[app.color] || '#00F0FF';

              return (
                <motion.button
                  key={app.id}
                  onClick={() => setSelectedSuperApp(app.id)}
                  whileHover={{ y: -3 }}
                  className={`relative text-left p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.06] border-opacity-60'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                  style={{
                    borderColor: isSelected ? mainColor : undefined,
                    boxShadow: isSelected ? `0 0 30px ${mainColor}15, inset 0 0 30px ${mainColor}05` : undefined,
                  }}
                >
                  {/* Selected indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="selectedIndicator"
                      className="absolute top-4 right-4 w-3 h-3 rounded-full"
                      style={{ background: mainColor, boxShadow: `0 0 10px ${mainColor}` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}

                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: app.iconGradient }}
                    >
                      <AppIcon iconName={app.icon} size={30} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-display">{es ? app.nameEs : app.name}</h3>
                      <p className="text-sm" style={{ color: mainColor }}>
                        {app.id === 'ceo_junior' ? t.ecosystemShowcase.forYourChild : t.ecosystemShowcase.forYouAsParent}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {app.id === 'ceo_junior' ? t.ecosystemShowcase.ceoJuniorDesc : t.ecosystemShowcase.padres30Desc}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Mini Apps Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display text-center mb-8">
              {t.ecosystemShowcase.whatIncludes}{' '}
              <span style={{ color: colorMap[selectedApp?.color || 'cyan'] }}>
                {es ? selectedApp?.nameEs : selectedApp?.name}
              </span>
              ?
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSuperApp}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {miniApps.map((app, i) => (
                  <MiniAppCard
                    key={app.id}
                    app={app}
                    index={i}
                    enrollText={t.ecosystemShowcase.enrollCta}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-2xl md:text-3xl font-bold text-white font-display mb-6">
              {t.ecosystemShowcase.readyToStart}
            </p>
            <a
              href="https://app.starbizacademy.com/enrollment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-cyan text-white font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-purple/30"
            >
              {t.ecosystemShowcase.enrollCta}
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default EcosystemPage;
