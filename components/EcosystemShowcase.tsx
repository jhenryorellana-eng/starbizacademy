import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, Play, Rocket, Users, GraduationCap, Mic, BookOpen, Building2, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ecosystemApps, getSuperApps, getMiniApps, type EcosystemApp } from '../data/ecosystem-data';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Rocket, Users, GraduationCap, Star, Mic, BookOpen, Building2, Lightbulb,
};

const AppLucideIcon: React.FC<{ iconName: string; size?: number; className?: string }> = ({ iconName, size = 24, className }) => {
  const Icon = iconMap[iconName];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

// ─── Star Rating Display ───
const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 14 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />
      );
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
          <Star size={size} className="text-gray-600 absolute" />
          <span className="absolute overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} className="fill-yellow-400 text-yellow-400" />
          </span>
        </span>
      );
    } else {
      stars.push(
        <Star key={i} size={size} className="text-gray-600" />
      );
    }
  }

  return <span className="inline-flex items-center gap-0.5">{stars}</span>;
};

// ─── App Icon Component ───
const AppIcon: React.FC<{
  app: EcosystemApp;
  index: number;
  isSuperApp?: boolean;
}> = ({ app, index, isSuperApp = false }) => {
  const sizeClass = isSuperApp ? 'w-20 h-20 md:w-24 md:h-24 text-3xl md:text-4xl' : 'w-14 h-14 md:w-16 md:h-16 text-2xl';
  const { language } = useLanguage();

  const colorMap: Record<string, string> = {
    cyan: 'shadow-brand-cyan/40 hover:shadow-brand-cyan/70',
    orange: 'shadow-brand-orange/40 hover:shadow-brand-orange/70',
    purple: 'shadow-brand-purple/40 hover:shadow-brand-purple/70',
    emerald: 'shadow-emerald-500/40 hover:shadow-emerald-500/70',
    pink: 'shadow-pink-500/40 hover:shadow-pink-500/70',
    amber: 'shadow-amber-500/40 hover:shadow-amber-500/70',
    rose: 'shadow-rose-500/40 hover:shadow-rose-500/70',
    teal: 'shadow-teal-500/40 hover:shadow-teal-500/70',
  };

  return (
    <Link to="/ecosistema">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.15, y: -4 }}
        className="flex flex-col items-center gap-2 group cursor-pointer"
      >
        <div
          className={`${sizeClass} rounded-2xl flex items-center justify-center shadow-lg transition-shadow duration-300 ${colorMap[app.color] || ''}`}
          style={{ background: app.iconGradient }}
        >
          <span className={isSuperApp ? 'animate-float' : ''} style={{ animationDelay: `${index * 0.4}s` }}>
            <AppLucideIcon iconName={app.icon} size={isSuperApp ? 32 : 22} className="text-white" />
          </span>
        </div>
        <span className="text-xs text-gray-500 group-hover:text-white transition-colors font-medium text-center max-w-[80px] leading-tight">
          {language === 'es' ? app.nameEs : app.name}
        </span>
      </motion.div>
    </Link>
  );
};

// ─── Super App Spotlight ───
const SuperAppSpotlight: React.FC<{
  app: EcosystemApp;
  reversed?: boolean;
}> = ({ app, reversed = false }) => {
  const { language, t } = useLanguage();

  const colorAccent: Record<string, string> = {
    cyan: 'text-brand-cyan border-brand-cyan/30',
    orange: 'text-brand-orange border-brand-orange/30',
  };

  const accentText = app.color === 'cyan' ? 'text-brand-cyan' : 'text-brand-orange';
  const accentBorder = app.color === 'cyan' ? 'border-brand-cyan/20' : 'border-brand-orange/20';
  const accentBg = app.color === 'cyan' ? 'bg-brand-cyan/10' : 'bg-brand-orange/10';

  const features = app.features.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-20`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={reversed ? 'lg:order-2' : ''}
      >
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${accentBorder} ${accentBg} mb-4`}>
          <span className={`text-xs font-mono font-bold uppercase tracking-wider ${accentText}`}>
            {app.appType === 'super_app' ? 'Super App' : 'Mini App'}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-3 tracking-tight">
          {language === 'es' ? app.nameEs : app.name}
        </h3>

        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          {language === 'es' ? app.shortDescriptionEs : app.shortDescription}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle size={16} className={`${accentText} mt-0.5 flex-shrink-0`} />
              <span className="text-sm text-gray-300">{language === 'es' ? f.es : f.en}</span>
            </div>
          ))}
        </div>

        <Link
          to="/ecosistema"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white hover:scale-105 transition-transform duration-200 mt-2"
          style={{ background: app.color === 'cyan' ? 'linear-gradient(135deg, #00F0FF, #7000FF)' : 'linear-gradient(135deg, #FF6B00, #FFC800)' }}
        >
          {t.ecosystemShowcase.enrollCta}
        </Link>
      </motion.div>

      {/* Media Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`relative group ${reversed ? 'lg:order-1' : ''}`}
      >
        <div className={`absolute -inset-4 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          style={{ background: app.iconGradient }}
        />
        {app.videoUrl ? (
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black">
            <video
              src={app.videoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
              onMouseLeave={(e) => {
                const v = e.target as HTMLVideoElement;
                v.pause();
                v.currentTime = 0;
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-colors pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:opacity-0 transition-all duration-300">
                <Play size={28} className="text-white ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
            <img
              src="/images/parents-community.png"
              alt={app.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ─── Mini App Card ───
const MiniAppCard: React.FC<{ app: EcosystemApp; index: number }> = ({ app, index }) => {
  const { language } = useLanguage();

  const borderHover: Record<string, string> = {
    purple: 'hover:border-brand-purple/40',
    emerald: 'hover:border-emerald-500/40',
    pink: 'hover:border-pink-500/40',
    cyan: 'hover:border-brand-cyan/40',
    amber: 'hover:border-amber-500/40',
    rose: 'hover:border-rose-500/40',
    teal: 'hover:border-teal-500/40',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -3 }}
      className={`flex-shrink-0 w-56 md:w-auto bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 transition-all duration-300 ${borderHover[app.color] || 'hover:border-white/20'} hover:bg-white/[0.06]`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: app.iconGradient }}
        >
          <AppLucideIcon iconName={app.icon} size={20} className="text-white" />
        </div>
        <div className="min-w-0">
          <h4 className="text-white font-bold text-sm truncate">{language === 'es' ? app.nameEs : app.name}</h4>
          <p className="text-gray-500 text-xs truncate">{language === 'es' ? app.categoryEs : app.category}</p>
        </div>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
        {language === 'es' ? app.shortDescriptionEs : app.shortDescription}
      </p>
      <div className="flex items-center gap-1.5">
        <StarRating rating={app.stats.averageRating} size={11} />
        <span className="text-gray-500 text-xs">{app.stats.averageRating}</span>
      </div>
    </motion.div>
  );
};

// ─── Main Component ───
const EcosystemShowcase: React.FC = () => {
  const { t } = useLanguage();
  const superApps = getSuperApps();
  const miniApps = getMiniApps();

  return (
    <section id="ecosistema-preview" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050520] to-[#020617]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-purple/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gray-500 uppercase tracking-[0.3em] text-sm font-bold">
            {t.ecosystemShowcase.pretitle}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 font-display tracking-tight">
            {t.ecosystemShowcase.title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            {t.ecosystemShowcase.subtitle}
          </p>
          <Link
            to="/ecosistema"
            className="group relative inline-flex mt-8 px-10 py-4 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange text-white font-bold text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-purple/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t.ecosystemShowcase.exploreAll}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* App Icons Cluster */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20 md:mb-28"
        >
          {/* Super Apps first (larger) */}
          {superApps.map((app, i) => (
            <AppIcon key={app.id} app={app} index={i} isSuperApp />
          ))}

          {/* Divider */}
          <div className="hidden md:flex items-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          {/* Mini Apps (smaller) */}
          {miniApps.map((app, i) => (
            <AppIcon key={app.id} app={app} index={i + superApps.length + 1} />
          ))}
        </motion.div>

        {/* Super App Spotlights */}
        <div className="space-y-8">
          {superApps.map((app, i) => (
            <SuperAppSpotlight key={app.id} app={app} reversed={i % 2 !== 0} />
          ))}
        </div>

        {/* Mini Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white font-display text-center mb-10">
            {t.ecosystemShowcase.miniApps}
          </h3>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
            {miniApps.map((app, i) => (
              <div key={app.id} className="snap-start">
                <MiniAppCard app={app} index={i} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            to="/ecosistema"
            className="group relative inline-flex px-10 py-4 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange text-white font-bold text-sm uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-purple/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t.ecosystemShowcase.exploreAll}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemShowcase;
