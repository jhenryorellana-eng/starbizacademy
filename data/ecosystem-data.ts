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
    fullDescription: 'CEO Junior is a comprehensive super app designed for teenagers aged 13-18 who want to develop entrepreneurial skills, leadership, and a global business mindset. Through structured modules covering professional English, web development, success mindset, and global business vision, teens gain real-world skills while connecting with a community of like-minded young entrepreneurs. The program includes an exchange program opportunity in Utah, USA.',
    fullDescriptionEs: 'CEO Junior es una super app integral diseñada para adolescentes de 13 a 18 años que desean desarrollar habilidades empresariales, liderazgo y una mentalidad de negocios global. A través de módulos estructurados que cubren inglés profesional, desarrollo web, mentalidad de éxito y visión empresarial global, los jóvenes adquieren habilidades del mundo real mientras se conectan con una comunidad de jóvenes emprendedores. El programa incluye una oportunidad de intercambio en Utah, USA.',
    icon: '🚀',
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
      audienceAge: '13-18',
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
    icon: '👨‍👩‍👧‍👦',
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
    icon: '🎓',
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
    icon: '⭐',
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
      audienceAge: '13-18',
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
    icon: '🎙️',
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
    id: 'starbooks',
    name: 'StarBooks',
    nameEs: 'StarBooks',
    shortDescription: 'Micro-learning with capsule books, educational reels, and entrepreneur bios.',
    shortDescriptionEs: 'Micro-learning con libros en cápsulas, reels educativos y biografías de emprendedores.',
    fullDescription: 'StarBooks is the micro-learning mini app within the CEO Junior ecosystem. It delivers bite-sized educational content in formats teens love: short videos (reels), capsule book summaries, and inspiring entrepreneur biographies. The personalized recommendation system ensures every teen gets content that matches their interests and learning pace.',
    fullDescriptionEs: 'StarBooks es la mini app de micro-learning dentro del ecosistema CEO Junior. Entrega contenido educativo en pequeñas dosis en formatos que los adolescentes aman: videos cortos (reels), resúmenes de libros en cápsulas y biografías inspiradoras de emprendedores. El sistema de recomendaciones personalizadas asegura que cada joven reciba contenido que coincida con sus intereses y ritmo de aprendizaje.',
    icon: '📚',
    iconGradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
    category: 'Education & Reading',
    categoryEs: 'Educación y Lectura',
    appType: 'mini_app',
    audience: 'juniors',
    parentApp: 'ceo_junior',
    color: 'cyan',
    features: [
      { en: 'Short Educational Videos (Reels)', es: 'Videos Educativos Cortos (Reels)' },
      { en: 'Capsule Book Summaries', es: 'Resúmenes de Libros en Cápsulas' },
      { en: 'Entrepreneur Biographies', es: 'Biografías de Emprendedores' },
      { en: 'Personalized Recommendations', es: 'Recomendaciones Personalizadas' },
      { en: 'Save & Bookmark Content', es: 'Guardar y Marcar Contenido' },
      { en: 'Content Feed', es: 'Feed de Contenido' },
    ],
    technicalInfo: {
      audienceAge: '13-18',
      requirements: 'CEO Junior App + Active Membership',
      requiresMembership: true,
      offlineSupport: true,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#06b6d4', '#22d3ee', '#06b6d4', '#001a1f'],
    stats: { totalRatings: 112, averageRating: 4.5, totalComments: 87 },
    ratingBreakdown: { fiveStar: 72, fourStar: 25, threeStar: 10, twoStar: 4, oneStar: 1, total: 112 },
    reviews: [
      { id: 'sb1', rating: 5, comment: 'The capsule books are genius. I read a whole book summary in 5 minutes!', commentEs: '¡Los libros en cápsulas son geniales! ¡Leí un resumen de un libro completo en 5 minutos!', userName: 'Isabella N.', createdAt: '2026-01-19' },
      { id: 'sb2', rating: 5, comment: 'The Elon Musk biography section inspired me to start my own project.', commentEs: 'La sección de la biografía de Elon Musk me inspiró a iniciar mi propio proyecto.', userName: 'Lucas P.', createdAt: '2026-01-06' },
      { id: 'sb3', rating: 4, comment: 'Love the short video format. Perfect for learning something new every day.', commentEs: 'Me encanta el formato de videos cortos. Perfecto para aprender algo nuevo cada día.', userName: 'Emma G.', createdAt: '2025-12-22' },
      { id: 'sb4', rating: 4, comment: 'The recommendations get better over time. It really learns what I like.', commentEs: 'Las recomendaciones mejoran con el tiempo. Realmente aprende lo que me gusta.', userName: 'Santiago R.', createdAt: '2025-12-05' },
    ],
  },
  {
    id: 'child_dashboard',
    name: 'Child Dashboard',
    nameEs: 'Panel de Seguimiento',
    shortDescription: 'Track your children\'s progress, achievements, and activity in real time.',
    shortDescriptionEs: 'Rastrea el progreso, logros y actividad de tus hijos en tiempo real.',
    fullDescription: 'Child Dashboard is a monitoring mini app within Padres 3.0 that gives parents full visibility into their children\'s educational journey in CEO Junior. View detailed progress metrics, earned badges, recent activity, time spent learning, and achievement notifications. Stay connected to your child\'s growth without being intrusive.',
    fullDescriptionEs: 'Panel de Seguimiento es una mini app de monitoreo dentro de Padres 3.0 que brinda a los padres visibilidad completa del recorrido educativo de sus hijos en CEO Junior. Visualiza métricas detalladas de progreso, badges ganados, actividad reciente, tiempo dedicado al aprendizaje y notificaciones de logros. Mantente conectado al crecimiento de tu hijo sin ser intrusivo.',
    icon: '📊',
    iconGradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    category: 'Tracking & Analytics',
    categoryEs: 'Seguimiento y Análisis',
    appType: 'mini_app',
    audience: 'parents',
    parentApp: 'padres_30',
    color: 'purple',
    features: [
      { en: 'Progress Overview', es: 'Resumen de Progreso' },
      { en: 'Recent Activity Feed', es: 'Feed de Actividad Reciente' },
      { en: 'Earned Badges Display', es: 'Visualización de Badges Ganados' },
      { en: 'Screen Time Tracking', es: 'Seguimiento de Tiempo de Uso' },
      { en: 'Achievement Notifications', es: 'Notificaciones de Logros' },
      { en: 'Weekly Progress Reports', es: 'Reportes Semanales de Progreso' },
    ],
    technicalInfo: {
      audienceAge: '25-55',
      requirements: 'Padres 3.0 App + Active Membership',
      requiresMembership: true,
      offlineSupport: false,
      platform: 'PWA (Web App)',
    },
    screenshotColors: ['#8b5cf6', '#a78bfa', '#8b5cf6', '#0a0020'],
    stats: { totalRatings: 63, averageRating: 4.3, totalComments: 45 },
    ratingBreakdown: { fiveStar: 35, fourStar: 16, threeStar: 7, twoStar: 3, oneStar: 2, total: 63 },
    reviews: [
      { id: 'cd1', rating: 5, comment: 'Love seeing my son\'s progress without having to ask him. The weekly reports are fantastic.', commentEs: 'Me encanta ver el progreso de mi hijo sin tener que preguntarle. Los reportes semanales son fantásticos.', userName: 'Carmen B.', createdAt: '2026-01-16' },
      { id: 'cd2', rating: 4, comment: 'Very informative dashboard. I can see exactly what my daughter is learning.', commentEs: 'Dashboard muy informativo. Puedo ver exactamente qué está aprendiendo mi hija.', userName: 'Héctor D.', createdAt: '2026-01-03' },
      { id: 'cd3', rating: 4, comment: 'The badge notifications make me feel connected to my child\'s achievements.', commentEs: 'Las notificaciones de badges me hacen sentir conectado con los logros de mi hijo.', userName: 'Lucía V.', createdAt: '2025-12-19' },
      { id: 'cd4', rating: 5, comment: 'Simple, clean and gives me peace of mind about my kids\' screen time.', commentEs: 'Simple, limpio y me da tranquilidad sobre el tiempo de pantalla de mis hijos.', userName: 'Alberto Q.', createdAt: '2025-12-02' },
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
