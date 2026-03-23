export type AppType = 'super_app' | 'mini_app';
export type AppAudience = 'parents' | 'juniors';

export interface AppReview {
  id: string;
  rating: number;
  comment: string;
  commentEs: string;
  userName: string;
  createdAt: string;
}

export interface AppStats {
  totalRatings: number;
  averageRating: number;
  totalComments: number;
}

export interface RatingBreakdown {
  fiveStar: number;
  fourStar: number;
  threeStar: number;
  twoStar: number;
  oneStar: number;
  total: number;
}

export interface EcosystemApp {
  id: string;
  name: string;
  nameEs: string;
  shortDescription: string;
  shortDescriptionEs: string;
  fullDescription: string;
  fullDescriptionEs: string;
  icon: string;
  iconGradient: string;
  category: string;
  categoryEs: string;
  appType: AppType;
  audience: AppAudience;
  parentApp?: string;
  color: string;
  features: { en: string; es: string }[];
  technicalInfo: {
    audienceAge: string;
    requirements: string;
    requiresMembership: boolean;
    offlineSupport: boolean;
    platform: string;
  };
  screenshotColors: string[];
  videoUrl?: string;
  stats: AppStats;
  ratingBreakdown: RatingBreakdown;
  reviews: AppReview[];
}

export const ecosystemApps: EcosystemApp[] = [
  // ─── SUPER APPS ───
  {
    id: 'ceo_junior',
    name: 'CEO Junior',
    nameEs: 'CEO Junior',
    shortDescription: 'The teen entrepreneur community transforming the next generation of leaders.',
    shortDescriptionEs: 'La comunidad de adolescentes empresarios que transforma la siguiente generación de líderes.',
    fullDescription: 'CEO Junior is a comprehensive super app designed for teenagers aged 10-17 who want to develop entrepreneurial skills, leadership, and a global business mindset. Through structured modules covering professional English, web development, success mindset, and global business vision, teens gain real-world skills while connecting with a community of like-minded young entrepreneurs. The program includes an exchange program opportunity in Utah, USA.',
    fullDescriptionEs: 'CEO Junior es una super app integral diseñada para adolescentes de 13 a 18 años que desean desarrollar habilidades empresariales, liderazgo y una mentalidad de negocios global. A través de módulos estructurados que cubren inglés profesional, desarrollo web, mentalidad de éxito y visión empresarial global, los jóvenes adquieren habilidades del mundo real mientras se conectan con una comunidad de jóvenes emprendedores. El programa incluye una oportunidad de intercambio en Utah, USA.',
    icon: 'Rocket',
    iconGradient: 'linear-gradient(135deg, #00F0FF, #7000FF)',
    category: 'Education & Business',
    categoryEs: 'Educación y Negocios',
    appType: 'super_app',
    audience: 'juniors',
    color: 'cyan',
    features: [
      { en: 'Advanced Professional English', es: 'Inglés Profesional Avanzado' },
      { en: 'Web & App Development', es: 'Desarrollo Web y Apps' },
      { en: 'Success Mindset Training', es: 'Mentalidad de Éxito' },
      { en: 'Global Business Vision', es: 'Visión Empresarial Global' },
      { en: 'Exchange Program in Utah, USA', es: 'Programa de Intercambio en Utah, USA' },
      { en: 'AI & Finance Focus Tracks', es: 'Tracks de Enfoque en IA y Finanzas' },
      { en: 'Community & Networking', es: 'Comunidad y Networking' },
      { en: 'Gamified Learning with XP & Badges', es: 'Aprendizaje Gamificado con XP y Badges' },
    ],
    technicalInfo: {
      audienceAge: '10-17',
      requirements: 'iOS 16+ / Android 12+',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'iOS & Android',
    },
    screenshotColors: ['#00F0FF', '#7000FF', '#00F0FF', '#0a1628'],
    videoUrl: '/videos/ceo-junior-hero.mp4',
    stats: { totalRatings: 247, averageRating: 4.8, totalComments: 189 },
    ratingBreakdown: { fiveStar: 198, fourStar: 35, threeStar: 10, twoStar: 3, oneStar: 1, total: 247 },
    reviews: [
      { id: 'cj1', rating: 5, comment: 'This app changed my perspective on business. The English modules are incredibly practical and the community is amazing.', commentEs: 'Esta app cambió mi perspectiva sobre los negocios. Los módulos de inglés son increíblemente prácticos y la comunidad es increíble.', userName: 'Carlos M.', createdAt: '2026-01-15' },
      { id: 'cj2', rating: 5, comment: 'My son went from shy to presenting his business plan in English. Worth every penny of the membership.', commentEs: 'Mi hijo pasó de ser tímido a presentar su plan de negocios en inglés. Vale cada centavo de la membresía.', userName: 'María L.', createdAt: '2026-01-08' },
      { id: 'cj3', rating: 4, comment: 'Great content and methodology. Would love to see more advanced coding tracks in the future.', commentEs: 'Excelente contenido y metodología. Me encantaría ver más tracks avanzados de programación en el futuro.', userName: 'Diego R.', createdAt: '2025-12-22' },
      { id: 'cj4', rating: 5, comment: 'The exchange program opportunity is what sets this apart. My daughter is now preparing for Utah!', commentEs: 'La oportunidad del programa de intercambio es lo que lo diferencia. ¡Mi hija ahora se está preparando para Utah!', userName: 'Ana P.', createdAt: '2025-12-10' },
      { id: 'cj5', rating: 5, comment: 'Best educational platform for teens I have found. The gamification keeps my kids engaged.', commentEs: 'La mejor plataforma educativa para adolescentes que he encontrado. La gamificación mantiene a mis hijos motivados.', userName: 'Roberto S.', createdAt: '2025-11-28' },
    ],
  },
  {
    id: 'padres_30',
    name: 'Parents 3.0',
    nameEs: 'Padres 3.0',
    shortDescription: 'The community that transforms parents into digital-era leaders for their families.',
    shortDescriptionEs: 'La comunidad que transforma a los padres en líderes de la era digital para sus familias.',
    fullDescription: 'Parents 3.0 is a super app built for modern parents who want to lead their families in the digital age. Access expert-curated content on parenting, track your children\'s educational progress, and connect with a community of like-minded parents. From podcasts with specialists to learning paths tailored for parent growth, Parents 3.0 empowers you to be the parent your children need today.',
    fullDescriptionEs: 'Padres 3.0 es una super app creada para padres modernos que quieren liderar a sus familias en la era digital. Accede a contenido curado por expertos sobre crianza, rastrea el progreso educativo de tus hijos y conéctate con una comunidad de padres con mentalidad similar. Desde podcasts con especialistas hasta rutas de aprendizaje para el crecimiento de los padres, Padres 3.0 te empodera para ser el padre que tus hijos necesitan hoy.',
    icon: 'Users',
    iconGradient: 'linear-gradient(135deg, #FF6B00, #FFC800)',
    category: 'Family & Education',
    categoryEs: 'Familia y Educación',
    appType: 'super_app',
    audience: 'parents',
    color: 'orange',
    features: [
      { en: 'Expert Parenting Content', es: 'Contenido de Crianza por Expertos' },
      { en: 'Child Progress Tracking', es: 'Seguimiento del Progreso de tus Hijos' },
      { en: 'Community of Modern Parents', es: 'Comunidad de Padres Modernos' },
      { en: 'Learning Paths for Parents', es: 'Rutas de Aprendizaje para Padres' },
      { en: 'Specialist Podcasts', es: 'Podcasts con Especialistas' },
      { en: 'Family Code System', es: 'Sistema de Códigos Familiares' },
      { en: 'Digital Wellness Resources', es: 'Recursos de Bienestar Digital' },
      { en: 'Achievement Notifications', es: 'Notificaciones de Logros' },
    ],
    technicalInfo: {
      audienceAge: '25-55',
      requirements: 'iOS 16+ / Android 12+',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'iOS & Android',
    },
    screenshotColors: ['#FF6B00', '#FFC800', '#FF6B00', '#1a0a00'],
    videoUrl: '/videos/presentation-video-es.mp4',
    stats: { totalRatings: 182, averageRating: 4.7, totalComments: 143 },
    ratingBreakdown: { fiveStar: 134, fourStar: 31, threeStar: 12, twoStar: 4, oneStar: 1, total: 182 },
    reviews: [
      { id: 'p1', rating: 5, comment: 'Finally an app that helps me understand my teenager. The specialist podcasts are gold.', commentEs: 'Por fin una app que me ayuda a entender a mi adolescente. Los podcasts con especialistas son oro puro.', userName: 'Laura G.', createdAt: '2026-01-20' },
      { id: 'p2', rating: 5, comment: 'I love being able to track my kids\' progress while also learning how to be a better parent myself.', commentEs: 'Me encanta poder ver el progreso de mis hijos y al mismo tiempo aprender a ser mejor padre.', userName: 'Fernando T.', createdAt: '2026-01-12' },
      { id: 'p3', rating: 4, comment: 'Very comprehensive platform. The community is super supportive. Would love more live events.', commentEs: 'Plataforma muy completa. La comunidad es súper solidaria. Me encantaría tener más eventos en vivo.', userName: 'Patricia V.', createdAt: '2025-12-30' },
      { id: 'p4', rating: 5, comment: 'The family code system is brilliant. My wife and I share the same membership seamlessly.', commentEs: 'El sistema de códigos familiares es genial. Mi esposa y yo compartimos la misma membresía sin problemas.', userName: 'Miguel A.', createdAt: '2025-12-18' },
    ],
  },

  // ─── MINI APPS ───
  {
    id: 'stareduca_senior',
    name: 'StarEduca Senior',
    nameEs: 'StarEduca Senior',
    shortDescription: 'Transformation learning paths designed exclusively for parents.',
    shortDescriptionEs: 'Rutas de aprendizaje de transformación diseñadas exclusivamente para padres.',
    fullDescription: 'StarEduca Senior is the primary educational platform for parents within the Padres 3.0 ecosystem. It provides structured learning paths, video lessons, interactive quizzes, and certification programs designed to help parents develop the skills they need in the digital era. Topics range from digital literacy to emotional intelligence and financial education for families.',
    fullDescriptionEs: 'StarEduca Senior es la plataforma educativa principal para padres dentro del ecosistema Padres 3.0. Ofrece rutas de aprendizaje estructuradas, lecciones en video, quizzes interactivos y programas de certificación diseñados para ayudar a los padres a desarrollar las habilidades que necesitan en la era digital. Los temas van desde alfabetización digital hasta inteligencia emocional y educación financiera familiar.',
    icon: 'GraduationCap',
    iconGradient: 'linear-gradient(135deg, #7000FF, #a855f7)',
    category: 'Education',
    categoryEs: 'Educación',
    appType: 'mini_app',
    audience: 'parents',
    parentApp: 'padres_30',
    color: 'purple',
    features: [
      { en: 'Structured Learning Paths', es: 'Rutas de Aprendizaje Estructuradas' },
      { en: 'Video Lessons with Experts', es: 'Lecciones en Video con Expertos' },
      { en: 'Interactive Quizzes', es: 'Quizzes Interactivos' },
      { en: 'Progress Tracking', es: 'Seguimiento de Progreso' },
      { en: 'Completion Certificates', es: 'Certificados de Finalización' },
      { en: 'Bookmarks & Notes', es: 'Notas y Marcadores' },
    ],
    technicalInfo: {
      audienceAge: '25-55',
      requirements: 'Padres 3.0 App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#7000FF', '#a855f7', '#7000FF', '#1a0028'],
    stats: { totalRatings: 98, averageRating: 4.6, totalComments: 72 },
    ratingBreakdown: { fiveStar: 68, fourStar: 19, threeStar: 8, twoStar: 2, oneStar: 1, total: 98 },
    reviews: [
      { id: 'ses1', rating: 5, comment: 'The learning paths are so well structured. I feel like I am actually growing as a parent.', commentEs: 'Las rutas de aprendizaje están muy bien estructuradas. Siento que realmente estoy creciendo como padre.', userName: 'Claudia R.', createdAt: '2026-01-18' },
      { id: 'ses2', rating: 4, comment: 'Great content quality. The quizzes help reinforce what I have learned. Love the certificates.', commentEs: 'Gran calidad de contenido. Los quizzes ayudan a reforzar lo aprendido. Me encantan los certificados.', userName: 'Andrés M.', createdAt: '2026-01-05' },
      { id: 'ses3', rating: 5, comment: 'I appreciate the offline support. I can learn during my commute without internet.', commentEs: 'Agradezco el soporte offline. Puedo aprender durante mi trayecto sin internet.', userName: 'Sofía L.', createdAt: '2025-12-20' },
      { id: 'ses4', rating: 5, comment: 'The expert videos are incredible. Real specialists sharing real advice.', commentEs: 'Los videos de expertos son increíbles. Especialistas reales compartiendo consejos reales.', userName: 'Jorge H.', createdAt: '2025-12-08' },
    ],
  },
  {
    id: 'stareduca_junior',
    name: 'StarEduca Junior',
    nameEs: 'StarEduca Junior',
    shortDescription: 'Gamified learning platform turning teens into future entrepreneurs.',
    shortDescriptionEs: 'Plataforma de aprendizaje gamificada que convierte a los adolescentes en futuros emprendedores.',
    fullDescription: 'StarEduca Junior is a gamified educational platform for teenagers within the CEO Junior ecosystem. It features structured learning paths organized in levels (Explorer → Builder → Leader), missions, challenges, and a badge system. Teens earn XP for completing lessons, passing exams, and maintaining daily streaks, creating an engaging and motivating learning experience.',
    fullDescriptionEs: 'StarEduca Junior es una plataforma educativa gamificada para adolescentes dentro del ecosistema CEO Junior. Cuenta con rutas de aprendizaje estructuradas en niveles (Explorador → Constructor → Líder), misiones, retos y un sistema de badges. Los jóvenes ganan XP al completar lecciones, aprobar exámenes y mantener rachas diarias, creando una experiencia de aprendizaje motivadora.',
    icon: 'Star',
    iconGradient: 'linear-gradient(135deg, #10b981, #34d399)',
    category: 'Education & Games',
    categoryEs: 'Educación y Juegos',
    appType: 'mini_app',
    audience: 'juniors',
    parentApp: 'ceo_junior',
    color: 'emerald',
    features: [
      { en: 'Gamified Learning Paths', es: 'Rutas de Aprendizaje Gamificadas' },
      { en: 'XP & Level System', es: 'Sistema de XP y Niveles' },
      { en: 'Missions & Challenges', es: 'Misiones y Retos' },
      { en: 'Badges & Achievements', es: 'Badges y Logros' },
      { en: 'Daily Streaks', es: 'Rachas Diarias' },
      { en: 'Community Feed', es: 'Feed de Comunidad' },
    ],
    technicalInfo: {
      audienceAge: '10-17',
      requirements: 'CEO Junior App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#10b981', '#34d399', '#10b981', '#001a10'],
    stats: { totalRatings: 156, averageRating: 4.5, totalComments: 118 },
    ratingBreakdown: { fiveStar: 102, fourStar: 32, threeStar: 15, twoStar: 5, oneStar: 2, total: 156 },
    reviews: [
      { id: 'sej1', rating: 5, comment: 'I love earning XP and competing on the leaderboard. Learning feels like playing a game!', commentEs: '¡Me encanta ganar XP y competir en la tabla de posiciones! Aprender se siente como jugar.', userName: 'Valentina K.', createdAt: '2026-01-22' },
      { id: 'sej2', rating: 4, comment: 'The missions are fun and challenging. I am on a 30-day streak now!', commentEs: 'Las misiones son divertidas y desafiantes. ¡Ya llevo una racha de 30 días!', userName: 'Sebastián F.', createdAt: '2026-01-10' },
      { id: 'sej3', rating: 5, comment: 'My favorite part is the community feed. I can share my progress and see what others are doing.', commentEs: 'Mi parte favorita es el feed de comunidad. Puedo compartir mi progreso y ver qué hacen los demás.', userName: 'Camila D.', createdAt: '2025-12-28' },
      { id: 'sej4', rating: 5, comment: 'The badge system is so motivating. I already have 12 badges!', commentEs: 'El sistema de badges es muy motivador. ¡Ya tengo 12 badges!', userName: 'Mateo V.', createdAt: '2025-12-15' },
    ],
  },
  {
    id: 'starvoices',
    name: 'StarVoices',
    nameEs: 'StarVoices',
    shortDescription: 'Intimate podcast conversations with parenting and education experts.',
    shortDescriptionEs: 'Conversaciones íntimas en podcast con expertos en crianza y educación.',
    fullDescription: 'StarVoices is a curated podcast library within the Padres 3.0 ecosystem. It features intimate conversations with pediatricians, psychologists, educators, and parenting specialists, covering every stage of raising teenagers in the digital age. Episodes are organized by category, support offline downloads, and include detailed show notes to help parents apply what they learn.',
    fullDescriptionEs: 'StarVoices es una biblioteca de podcasts curada dentro del ecosistema Padres 3.0. Presenta conversaciones íntimas con pediatras, psicólogos, educadores y especialistas en crianza, cubriendo cada etapa de criar adolescentes en la era digital. Los episodios están organizados por categoría, soportan descargas offline e incluyen notas detalladas para ayudar a los padres a aplicar lo aprendido.',
    icon: 'Mic',
    iconGradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    category: 'Podcasts & Audio',
    categoryEs: 'Podcasts y Audio',
    appType: 'mini_app',
    audience: 'parents',
    parentApp: 'padres_30',
    color: 'pink',
    features: [
      { en: 'Expert Podcast Library', es: 'Biblioteca de Podcasts con Expertos' },
      { en: 'Episodes by Category', es: 'Episodios por Categoría' },
      { en: 'Offline Downloads', es: 'Descargas Offline' },
      { en: 'Detailed Show Notes', es: 'Notas Detalladas de Episodios' },
      { en: 'Playback Speed Control', es: 'Control de Velocidad de Reproducción' },
      { en: 'Bookmark Favorite Episodes', es: 'Guardar Episodios Favoritos' },
    ],
    technicalInfo: {
      audienceAge: '25-55',
      requirements: 'Padres 3.0 App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#ec4899', '#f472b6', '#ec4899', '#1a0010'],
    stats: { totalRatings: 74, averageRating: 4.4, totalComments: 58 },
    ratingBreakdown: { fiveStar: 42, fourStar: 20, threeStar: 8, twoStar: 3, oneStar: 1, total: 74 },
    reviews: [
      { id: 'sv1', rating: 5, comment: 'These podcasts are like having a personal parenting coach. The specialist interviews are amazing.', commentEs: 'Estos podcasts son como tener un coach personal de crianza. Las entrevistas con especialistas son increíbles.', userName: 'Daniela C.', createdAt: '2026-01-14' },
      { id: 'sv2', rating: 4, comment: 'I listen during my morning commute. The offline download feature is a lifesaver.', commentEs: 'Escucho durante mi trayecto matutino. La función de descarga offline es una salvación.', userName: 'Ricardo E.', createdAt: '2025-12-25' },
      { id: 'sv3', rating: 5, comment: 'The episode about digital boundaries with teens was exactly what I needed to hear.', commentEs: 'El episodio sobre límites digitales con adolescentes era exactamente lo que necesitaba escuchar.', userName: 'Elena M.', createdAt: '2025-12-12' },
      { id: 'sv4', rating: 4, comment: 'Great variety of topics. Would love episodes in English too.', commentEs: 'Gran variedad de temas. Me encantaría tener episodios en inglés también.', userName: 'Gabriela F.', createdAt: '2025-11-30' },
    ],
  },
  {
    id: 'starreads',
    name: 'StarReads',
    nameEs: 'StarReads',
    shortDescription: 'Short videos about books every young entrepreneur should know.',
    shortDescriptionEs: 'Videos cortos de libros que todo joven emprendedor debe conocer.',
    fullDescription: 'StarReads is a video library within the CEO Junior ecosystem that brings the world\'s best business and personal development books to life in short, engaging video formats. Teens discover key ideas, build reading playlists, and save their favorite insights to apply in their entrepreneurial journey.',
    fullDescriptionEs: 'StarReads es una videoteca dentro del ecosistema CEO Junior que da vida a los mejores libros de negocios y desarrollo personal en formatos de video cortos y atractivos. Los jóvenes descubren ideas clave, crean playlists de lectura y guardan sus insights favoritos para aplicar en su camino emprendedor.',
    icon: 'BookOpen',
    iconGradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    category: 'Education & Reading',
    categoryEs: 'Educación y Lectura',
    appType: 'mini_app',
    audience: 'juniors',
    parentApp: 'ceo_junior',
    color: 'amber',
    features: [
      { en: 'Short Book Summary Videos', es: 'Videos Cortos de Resúmenes de Libros' },
      { en: 'Key Ideas & Takeaways', es: 'Ideas Clave y Aprendizajes' },
      { en: 'Themed Collections', es: 'Colecciones Temáticas' },
      { en: 'Bookmark Favorite Ideas', es: 'Guarda tus Ideas Favoritas' },
      { en: 'Trending & Explore', es: 'Tendencias y Explorar' },
      { en: 'Search by Intelligence', es: 'Búsqueda por Inteligencia' },
    ],
    technicalInfo: {
      audienceAge: '10-17',
      requirements: 'CEO Junior App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#f59e0b', '#f97316', '#f59e0b', '#1a0f00'],
    stats: { totalRatings: 134, averageRating: 4.6, totalComments: 98 },
    ratingBreakdown: { fiveStar: 89, fourStar: 28, threeStar: 12, twoStar: 4, oneStar: 1, total: 134 },
    reviews: [
      { id: 'sr1', rating: 5, comment: 'I learned more from 5-minute videos than from months of reading. Amazing concept!', commentEs: 'Aprendí más con videos de 5 minutos que en meses leyendo. ¡Concepto increíble!', userName: 'Isabella N.', createdAt: '2026-01-19' },
      { id: 'sr2', rating: 5, comment: 'The book collections by topic are super helpful. I love the entrepreneurship playlist.', commentEs: 'Las colecciones de libros por tema son súper útiles. Me encanta la playlist de emprendimiento.', userName: 'Lucas P.', createdAt: '2026-01-06' },
      { id: 'sr3', rating: 4, comment: 'Great way to discover books I want to read in full later.', commentEs: 'Excelente manera de descubrir libros que quiero leer completos después.', userName: 'Emma G.', createdAt: '2025-12-22' },
    ],
  },
  {
    id: 'starempire',
    name: 'StarEmpire',
    nameEs: 'StarEmpire',
    shortDescription: 'Discover the world\'s most successful companies and how they started.',
    shortDescriptionEs: 'Conoce las empresas más exitosas del mundo y cómo comenzaron.',
    fullDescription: 'StarEmpire takes teens inside the world\'s most iconic companies through short video lessons. From garage startups to global empires, each episode reveals the strategies, decisions, and mindset behind companies like Apple, Tesla, and Netflix. Teens learn real business concepts through compelling storytelling.',
    fullDescriptionEs: 'StarEmpire lleva a los jóvenes dentro de las empresas más icónicas del mundo a través de lecciones en video cortas. Desde startups de garaje hasta imperios globales, cada episodio revela las estrategias, decisiones y mentalidad detrás de empresas como Apple, Tesla y Netflix. Los jóvenes aprenden conceptos reales de negocios a través de historias fascinantes.',
    icon: 'Building2',
    iconGradient: 'linear-gradient(135deg, #e11d48, #f43f5e)',
    category: 'Business & Strategy',
    categoryEs: 'Negocios y Estrategia',
    appType: 'mini_app',
    audience: 'juniors',
    parentApp: 'ceo_junior',
    color: 'rose',
    features: [
      { en: 'Company Origin Stories', es: 'Historias de Origen de Empresas' },
      { en: 'Business Strategy Lessons', es: 'Lecciones de Estrategia Empresarial' },
      { en: 'Leadership Case Studies', es: 'Casos de Estudio de Liderazgo' },
      { en: 'Progress Tracking', es: 'Seguimiento de Progreso' },
      { en: 'Video Feed by Category', es: 'Feed de Videos por Categoría' },
      { en: 'Save Favorite Lessons', es: 'Guarda Lecciones Favoritas' },
    ],
    technicalInfo: {
      audienceAge: '10-17',
      requirements: 'CEO Junior App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#e11d48', '#f43f5e', '#e11d48', '#1a000a'],
    stats: { totalRatings: 108, averageRating: 4.7, totalComments: 82 },
    ratingBreakdown: { fiveStar: 78, fourStar: 20, threeStar: 7, twoStar: 2, oneStar: 1, total: 108 },
    reviews: [
      { id: 'se1', rating: 5, comment: 'The Tesla episode blew my mind. I had no idea how Elon Musk built it from scratch.', commentEs: 'El episodio de Tesla me voló la cabeza. No tenía idea de cómo Elon Musk lo construyó desde cero.', userName: 'Daniel R.', createdAt: '2026-01-15' },
      { id: 'se2', rating: 5, comment: 'Learning business through real company stories is way better than textbooks.', commentEs: 'Aprender negocios a través de historias reales de empresas es mucho mejor que los libros de texto.', userName: 'Valentina K.', createdAt: '2026-01-03' },
      { id: 'se3', rating: 4, comment: 'I watch one episode every morning. It motivates me to build something big.', commentEs: 'Veo un episodio cada mañana. Me motiva a construir algo grande.', userName: 'Mateo V.', createdAt: '2025-12-18' },
    ],
  },
  {
    id: 'stargenius',
    name: 'StarGenius',
    nameEs: 'StarGenius',
    shortDescription: 'Learn from the geniuses who thought differently and changed the world.',
    shortDescriptionEs: 'Aprende de los genios que pensaron diferente y cambiaron el mundo.',
    fullDescription: 'StarGenius brings to life the stories of history\'s greatest minds — from Leonardo da Vinci to Steve Jobs. Through short, cinematic video lessons, teens discover how these visionaries thought, created, and overcame obstacles. Each story is a lesson in innovation, resilience, and thinking outside the box.',
    fullDescriptionEs: 'StarGenius da vida a las historias de las mentes más brillantes de la historia — desde Leonardo da Vinci hasta Steve Jobs. A través de lecciones en video cortas y cinematográficas, los jóvenes descubren cómo estos visionarios pensaban, creaban y superaban obstáculos. Cada historia es una lección de innovación, resiliencia y pensamiento fuera de lo convencional.',
    icon: 'Lightbulb',
    iconGradient: 'linear-gradient(135deg, #06b6d4, #14b8a6)',
    category: 'Inspiration & Innovation',
    categoryEs: 'Inspiración e Innovación',
    appType: 'mini_app',
    audience: 'juniors',
    parentApp: 'ceo_junior',
    color: 'teal',
    features: [
      { en: 'Genius Biography Videos', es: 'Videos Biográficos de Genios' },
      { en: 'Innovation Lessons', es: 'Lecciones de Innovación' },
      { en: 'Disruptive Thinking Skills', es: 'Habilidades de Pensamiento Disruptivo' },
      { en: 'Progress Tracking', es: 'Seguimiento de Progreso' },
      { en: 'Curated Collections', es: 'Colecciones Curadas' },
      { en: 'Favorite & Bookmark', es: 'Favoritos y Marcadores' },
    ],
    technicalInfo: {
      audienceAge: '10-17',
      requirements: 'CEO Junior App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#06b6d4', '#14b8a6', '#06b6d4', '#001a1a'],
    stats: { totalRatings: 96, averageRating: 4.5, totalComments: 71 },
    ratingBreakdown: { fiveStar: 62, fourStar: 22, threeStar: 8, twoStar: 3, oneStar: 1, total: 96 },
    reviews: [
      { id: 'sg1', rating: 5, comment: 'The Da Vinci episode was incredible. I never knew he was also an entrepreneur!', commentEs: '¡El episodio de Da Vinci fue increíble! ¡No sabía que también fue emprendedor!', userName: 'Camila D.', createdAt: '2026-01-20' },
      { id: 'sg2', rating: 5, comment: 'These stories inspire me every day. Steve Jobs\' episode is my favorite.', commentEs: 'Estas historias me inspiran todos los días. El episodio de Steve Jobs es mi favorito.', userName: 'Sebastián F.', createdAt: '2026-01-08' },
      { id: 'sg3', rating: 4, comment: 'Great content that makes you think differently about problems.', commentEs: 'Gran contenido que te hace pensar diferente sobre los problemas.', userName: 'Andrea L.', createdAt: '2025-12-25' },
    ],
  },
];

export function getSuperApps(): EcosystemApp[] {
  return ecosystemApps.filter(app => app.appType === 'super_app');
}

export function getMiniApps(): EcosystemApp[] {
  return ecosystemApps.filter(app => app.appType === 'mini_app');
}

export function getAppById(id: string): EcosystemApp | undefined {
  return ecosystemApps.find(app => app.id === id);
}

export function getAppsByParent(parentId: string): EcosystemApp[] {
  return ecosystemApps.filter(app => app.parentApp === parentId);
}
