import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, ChevronLeft, ChevronRight, CheckCircle, Shield, Wifi, WifiOff, Smartphone, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Starfield from '../components/Starfield';
import { ecosystemApps, type EcosystemApp } from '../data/ecosystem-data';

type FilterType = 'all' | 'super' | 'mini' | 'parents' | 'juniors';

// ─── Star Rating ───
const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 14 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />);
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
      stars.push(<Star key={i} size={size} className="text-gray-600" />);
    }
  }

  return <span className="inline-flex items-center gap-0.5">{stars}</span>;
};

// ─── Screenshot Placeholder ───
const ScreenshotPlaceholder: React.FC<{
  color: string;
  appName: string;
  index: number;
  featureText?: string;
}> = ({ color, appName, index, featureText }) => {
  const patterns = [
    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
    'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)',
    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
    'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.12) 0%, transparent 40%)',
  ];

  return (
    <div
      className="flex-shrink-0 w-48 md:w-56 h-80 md:h-96 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 relative overflow-hidden snap-start"
      style={{ background: `linear-gradient(160deg, ${color}22, ${color}08)` }}
    >
      <div className="absolute inset-0" style={{ background: patterns[index % patterns.length] }} />
      <div className="relative z-10 text-center">
        <div
          className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
          style={{ background: `${color}33` }}
        >
          <div className="w-6 h-6 rounded-md" style={{ background: color }} />
        </div>
        <p className="text-white/60 text-sm font-medium mb-2">{appName}</p>
        {featureText && (
          <p className="text-white/30 text-xs">{featureText}</p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

// ─── Rating Breakdown Bar ───
const RatingBar: React.FC<{ stars: number; count: number; total: number }> = ({ stars, count, total }) => {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 w-4 text-right">{stars}</span>
      <Star size={10} className="fill-yellow-400 text-yellow-400 flex-shrink-0" />
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: (5 - stars) * 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
        />
      </div>
      <span className="text-xs text-gray-500 w-8">{count}</span>
    </div>
  );
};

// ─── App Detail Modal ───
const AppDetailModal: React.FC<{
  app: EcosystemApp;
  onClose: () => void;
}> = ({ app, onClose }) => {
  const { language, t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const es = language === 'es';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 240;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const colorMap: Record<string, string> = {
    cyan: '#00F0FF',
    orange: '#FF6B00',
    purple: '#7000FF',
    emerald: '#10b981',
    pink: '#ec4899',
  };

  const mainColor = colorMap[app.color] || '#00F0FF';
  const bd = app.ratingBreakdown;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.35, type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:max-w-4xl max-h-[92vh] md:max-h-[85vh] bg-[#0a0a1a] border border-white/10 rounded-t-3xl md:rounded-2xl overflow-y-auto overscroll-contain z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-white" />
        </button>

        <div className="p-6 md:p-10">
          {/* ─── Header ─── */}
          <div className="flex items-start gap-5 mb-8 pr-10">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-[22px] flex items-center justify-center text-4xl md:text-5xl flex-shrink-0 shadow-lg"
              style={{ background: app.iconGradient }}
            >
              {app.icon}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
                {es ? app.nameEs : app.name}
              </h2>
              <p className="text-gray-400 text-sm mt-1">{es ? app.categoryEs : app.category}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1.5">
                  <StarRating rating={app.stats.averageRating} size={14} />
                  <span className="text-white font-bold text-sm">{app.stats.averageRating}</span>
                </div>
                <span className="text-gray-500 text-xs">
                  ({app.stats.totalRatings} {t.ecosystemShowcase.ratings})
                </span>
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                  style={{ color: mainColor, backgroundColor: `${mainColor}15`, border: `1px solid ${mainColor}30` }}
                >
                  {app.appType === 'super_app' ? 'Super App' : 'Mini App'}
                </span>
              </div>
            </div>
          </div>

          {/* ─── Screenshots Carousel ─── */}
          <div className="relative mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Preview</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={16} className="text-white" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={16} className="text-white" />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            >
              {app.screenshotColors.map((color, i) => (
                <ScreenshotPlaceholder
                  key={i}
                  color={color}
                  appName={es ? app.nameEs : app.name}
                  index={i}
                  featureText={app.features[i] ? (es ? app.features[i].es : app.features[i].en) : undefined}
                />
              ))}
            </div>
          </div>

          {/* ─── Description ─── */}
          <div className="mb-10">
            <h3 className="text-white font-bold text-lg mb-3">{t.ecosystemShowcase.description}</h3>
            <p className="text-gray-400 leading-relaxed">
              {es ? app.fullDescriptionEs : app.fullDescription}
            </p>
          </div>

          {/* ─── Ratings & Reviews ─── */}
          <div className="mb-10">
            <h3 className="text-white font-bold text-lg mb-6">{t.ecosystemShowcase.ratingBreakdown}</h3>

            <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-8">
              {/* Average */}
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-white font-display">{app.stats.averageRating}</div>
                <div className="mt-1">
                  <StarRating rating={app.stats.averageRating} size={18} />
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  {app.stats.totalRatings} {t.ecosystemShowcase.ratings}
                </p>
              </div>

              {/* Breakdown Bars */}
              <div className="flex flex-col justify-center gap-1.5">
                <RatingBar stars={5} count={bd.fiveStar} total={bd.total} />
                <RatingBar stars={4} count={bd.fourStar} total={bd.total} />
                <RatingBar stars={3} count={bd.threeStar} total={bd.total} />
                <RatingBar stars={2} count={bd.twoStar} total={bd.total} />
                <RatingBar stars={1} count={bd.oneStar} total={bd.total} />
              </div>
            </div>

            {/* Reviews */}
            <h3 className="text-white font-bold text-lg mb-4">{t.ecosystemShowcase.reviews}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {app.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{review.userName}</span>
                    <span className="text-gray-600 text-xs">{review.createdAt}</span>
                  </div>
                  <div className="mb-2">
                    <StarRating rating={review.rating} size={12} />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {es ? review.commentEs : review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Features ─── */}
          <div className="mb-10">
            <h3 className="text-white font-bold text-lg mb-4">{t.ecosystemShowcase.features}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {app.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: mainColor }} />
                  <span className="text-gray-300 text-sm">{es ? f.es : f.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Technical Info ─── */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.ecosystemShowcase.technicalInfo}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={14} className="text-gray-500" />
                  <span className="text-gray-500 text-xs">{t.ecosystemShowcase.audience}</span>
                </div>
                <p className="text-white text-sm font-medium">{app.technicalInfo.audienceAge} {t.ecosystemShowcase.ages}</p>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone size={14} className="text-gray-500" />
                  <span className="text-gray-500 text-xs">{t.ecosystemShowcase.platform}</span>
                </div>
                <p className="text-white text-sm font-medium">{app.technicalInfo.platform}</p>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={14} className="text-gray-500" />
                  <span className="text-gray-500 text-xs">{t.ecosystemShowcase.membership}</span>
                </div>
                <p className="text-white text-sm font-medium">
                  {app.technicalInfo.requiresMembership ? t.ecosystemShowcase.required : t.ecosystemShowcase.no}
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  {app.technicalInfo.offlineSupport ? (
                    <Wifi size={14} className="text-gray-500" />
                  ) : (
                    <WifiOff size={14} className="text-gray-500" />
                  )}
                  <span className="text-gray-500 text-xs">{t.ecosystemShowcase.offline}</span>
                </div>
                <p className="text-white text-sm font-medium">
                  {app.technicalInfo.offlineSupport ? t.ecosystemShowcase.yes : t.ecosystemShowcase.no}
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone size={14} className="text-gray-500" />
                  <span className="text-gray-500 text-xs">{t.ecosystemShowcase.requirements}</span>
                </div>
                <p className="text-white text-sm font-medium">{app.technicalInfo.requirements}</p>
              </div>
            </div>
          </div>

          {/* ─── CTA ─── */}
          <div className="mt-10 text-center">
            <a
              href="https://app.starbizacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-white hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${mainColor}, ${mainColor}99)`, boxShadow: `0 8px 30px ${mainColor}30` }}
            >
              {t.ecosystemShowcase.discoverApp}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── App Card ───
const AppCard: React.FC<{
  app: EcosystemApp;
  index: number;
  onSelect: (id: string) => void;
}> = ({ app, index, onSelect }) => {
  const { language, t } = useLanguage();
  const es = language === 'es';

  const colorMap: Record<string, string> = {
    cyan: '#00F0FF',
    orange: '#FF6B00',
    purple: '#7000FF',
    emerald: '#10b981',
    pink: '#ec4899',
  };

  const mainColor = colorMap[app.color] || '#00F0FF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelect(app.id)}
      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] group"
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-16 h-16 rounded-[18px] flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform"
          style={{ background: app.iconGradient }}
        >
          {app.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-white font-bold text-lg font-display truncate">
              {es ? app.nameEs : app.name}
            </h3>
            <span
              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-1"
              style={{ color: mainColor, backgroundColor: `${mainColor}12`, border: `1px solid ${mainColor}25` }}
            >
              {app.appType === 'super_app' ? 'SUPER' : 'MINI'}
            </span>
          </div>
          <p className="text-gray-500 text-xs mt-0.5">{es ? app.categoryEs : app.category}</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {es ? app.shortDescriptionEs : app.shortDescription}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StarRating rating={app.stats.averageRating} size={13} />
          <span className="text-white font-bold text-sm">{app.stats.averageRating}</span>
          <span className="text-gray-600 text-xs">({app.stats.totalRatings})</span>
        </div>
        <span
          className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
          style={{ color: mainColor, backgroundColor: `${mainColor}10`, border: `1px solid ${mainColor}20` }}
        >
          {t.ecosystemShowcase.viewDetails}
        </span>
      </div>
    </motion.div>
  );
};

// ─── Filter Tab ───
const FilterTab: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
    }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    )}
    <span className="relative z-10">{label}</span>
  </button>
);

// ─── Main Page ───
const EcosystemPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  const filteredApps = ecosystemApps.filter((app) => {
    if (filter === 'all') return true;
    if (filter === 'super') return app.appType === 'super_app';
    if (filter === 'mini') return app.appType === 'mini_app';
    if (filter === 'parents') return app.audience === 'parents';
    if (filter === 'juniors') return app.audience === 'juniors';
    return true;
  });

  const selectedApp = selectedAppId
    ? ecosystemApps.find((a) => a.id === selectedAppId)
    : null;

  const es = language === 'es';

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <Starfield />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-5xl md:text-7xl font-bold text-white font-display tracking-tight mb-4">
              {t.ecosystemShowcase.pageTitle}
            </h1>
            <p className="text-gray-400 text-xl mb-8">
              {t.ecosystemShowcase.pageSubtitle}
            </p>

            <a
              href="https://app.starbizacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-purple/20 mb-10"
            >
              {t.ecosystemShowcase.accessHub}
              <ArrowLeft size={16} className="rotate-180" />
            </a>

            {/* All app icons in a row */}
            <div className="flex flex-wrap justify-center gap-5 md:gap-8">
              {ecosystemApps.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  onClick={() => setSelectedAppId(app.id)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                    style={{ background: app.iconGradient }}
                  >
                    {app.icon}
                  </div>
                  <span className="text-gray-500 group-hover:text-white text-xs transition-colors font-medium">
                    {es ? app.nameEs : app.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <FilterTab
              label={t.ecosystemShowcase.allApps}
              isActive={filter === 'all'}
              onClick={() => setFilter('all')}
            />
            <FilterTab
              label={t.ecosystemShowcase.superApps}
              isActive={filter === 'super'}
              onClick={() => setFilter('super')}
            />
            <FilterTab
              label={t.ecosystemShowcase.miniApps}
              isActive={filter === 'mini'}
              onClick={() => setFilter('mini')}
            />
            <FilterTab
              label={t.ecosystemShowcase.forParents}
              isActive={filter === 'parents'}
              onClick={() => setFilter('parents')}
            />
            <FilterTab
              label={t.ecosystemShowcase.forJuniors}
              isActive={filter === 'juniors'}
              onClick={() => setFilter('juniors')}
            />
          </div>

          {/* App Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredApps.map((app, i) => (
                <AppCard
                  key={app.id}
                  app={app}
                  index={i}
                  onSelect={setSelectedAppId}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20 mb-8"
          >
            <p className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
              {t.ecosystemShowcase.readyToStart}
            </p>
            <a
              href="https://app.starbizacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-cyan text-white font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-purple/30"
            >
              {t.ecosystemShowcase.accessNow}
              <ArrowLeft size={18} className="rotate-180" />
            </a>
          </motion.div>
        </div>
      </main>

      {/* App Detail Modal */}
      <AnimatePresence>
        {selectedApp && (
          <AppDetailModal
            app={selectedApp}
            onClose={() => setSelectedAppId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EcosystemPage;
