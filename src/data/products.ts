import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'birkenstock-boston-suede',
    name: 'Boston Suede Clogs (Sabots Daim)',
    arabicSubtitle: 'صباط بوسطن شاموا مريح',
    category: 'birkenstock',
    categoryLabel: 'Birkenstock & Sabots',
    price: 250,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Best Seller ⭐',
    isBestSeller: true,
    isViral: true,
    description: 'Les fameux sabots Boston en daim ultra confortables avec semelle anatomique en liège naturel. Le must-have des influenceuses TikTok & Pinterest. À porter avec des chaussettes côtelées ou un jean brut oversize.',
    details: [
      'Semelle intérieure anatomique en liège thermoformé',
      'Tige en cuir suédé / daim velouté de qualité supérieure',
      'Boucle ardillon métallique ajustable gravée',
      'Semelle extérieure légère EVA amortissante',
      'Finitions soignées et coutures renforcées'
    ],
    colors: [
      { name: 'Beige Taupe', hex: '#C2B69D' },
      { name: 'Noir Intemporel', hex: '#1C1917' },
      { name: 'Gris Perle', hex: '#9CA3AF' },
      { name: 'Rose Poudré', hex: '#FBCFE8' },
      { name: 'Marron Chocolat', hex: '#5C4033' },
      { name: 'Kaki Olive', hex: '#708238' },
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    images: [
      '/src/assets/images/product_birkenstock_clog_1791812194416.jpg',
      '/src/assets/images/hero_birkenstock_outfit_1791812181201.jpg'
    ],
    inStock: true,
  },
  {
    id: 'model-2-cross-strap',
    name: 'Model 2 : Sandales Brides Croisées & Passe-Pouce Beige',
    arabicSubtitle: 'صندالة موديل 2 دوبل بوكل بيج مع حلقة الصبع',
    category: 'birkenstock',
    categoryLabel: 'Birkenstock & Sabots',
    price: 250,
    originalPrice: 300,
    rating: 5.0,
    reviewsCount: 98,
    badge: 'Coup de Cœur Instagram',
    isBestSeller: true,
    description: 'Le modèle signature "Model 2" exactement comme sur notre page ! Brides croisées avec passe-pouce (toe loop), doubles boucles métalliques ajustables et semelle anatomique en liège. Maintien parfait et style bohème chic.',
    details: [
      'Design passe-pouce avec bride croisée et boucle réglable à l\'avant',
      'Large bride coup-de-pied à boucle métallique robuste',
      'Semelle ergonomique en liège naturel avec doublure suédée',
      'Semelle extérieure crantée antidérapante',
      'Conseil pointure: prenez votre taille marocaine habituelle'
    ],
    colors: [
      { name: 'Beige / Blanc Cassé', hex: '#EAE6DF' },
      { name: 'Noir Mat', hex: '#262626' },
      { name: 'Marron Chameau', hex: '#8B5A2B' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    images: [
      '/src/assets/images/product_model2_mayari_1791815871369.jpg',
      '/src/assets/images/hero_birkenstock_outfit_1791812181201.jpg'
    ],
    inStock: true,
  },
  {
    id: 'model-3-white-big-buckle',
    name: 'Model 3 : Sandales Entre-Doigt T-Strap (3 Coloris)',
    arabicSubtitle: 'موديل 3 صندالة الصبع كلاسيك (أبيض / أسود / أحمر غامق)',
    category: 'birkenstock',
    categoryLabel: 'Birkenstock & Sabots',
    price: 250,
    originalPrice: 290,
    rating: 4.8,
    reviewsCount: 76,
    badge: 'Best Seller Été ✨',
    isBestSeller: true,
    description: 'Le modèle iconique "Model 3" vu dans les stories @girll__house__ ! Sandales entre-doigt style Gizeh avec bride en T réglable, boucle latérale et semelle anatomique en liège. Disponible en trois coloris intemporels : Blanc Pur, Noir Mat et Rouge Foncé (Bordeaux).',
    details: [
      'Design entre-doigt ergonomique T-Strap avec insert souple entre les orteils',
      'Bride coup-de-pied réglable par boucle métallique pour un ajustement sur-mesure',
      'Semelle intérieure anatomique en liège naturel avec doublure douce en daim',
      'Semelle extérieure crantée légère et amortissante',
      '3 coloris disponibles : Blanc Pur, Noir Mat et Rouge Foncé (Bordeaux)',
      'Conseil pointure: prenez votre taille marocaine habituelle (36 au 41)'
    ],
    colors: [
      {
        name: 'Blanc Pur',
        hex: '#FFFFFF',
        image: '/src/assets/images/product_model3_gizeh_white_1791820335382.jpg'
      },
      {
        name: 'Noir Mat',
        hex: '#18181B',
        image: '/src/assets/images/product_model3_gizeh_black_1791820346215.jpg'
      },
      {
        name: 'Rouge Foncé / Bordeaux',
        hex: '#5E1920',
        image: '/src/assets/images/product_model3_gizeh_darkred_1791820356309.jpg'
      }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    images: [
      '/src/assets/images/product_model3_gizeh_white_1791820335382.jpg',
      '/src/assets/images/product_model3_gizeh_black_1791820346215.jpg',
      '/src/assets/images/product_model3_gizeh_darkred_1791820356309.jpg'
    ],
    inStock: true,
  },
  {
    id: 'hello-kitty-pink-clog',
    name: 'Sabots Hello Kitty Birkenstock Boston (3 Coloris)',
    arabicSubtitle: 'صابو هالو كيتي بيركنستوك الأصلي (بيج كريمي / أسود / وردي)',
    category: 'birkenstock',
    categoryLabel: 'Birkenstock & Sabots',
    price: 280,
    originalPrice: 350,
    rating: 5.0,
    reviewsCount: 165,
    badge: 'Best-Seller 🎀',
    isViral: true,
    description: 'Le modèle exact Hello Kitty vu sur les photos officielles @girll__house__ ! Sabots Boston en daim doux avec bride réglable, boucle latérale, semelle anatomique grand confort et broderie visage Hello Kitty (yeux ovales, nez rose brodé et 3 moustaches de chaque côté). Disponible dans les 3 coloris exacts : Beige Crème, Noir Ébène et Rose Poudré.',
    details: [
      'Modèle exact Boston Clog : tige en daim suédé velouté haut de gamme',
      'Broderie visage Hello Kitty épurée : yeux ovales, nez rose brodé et 3 moustaches sur chaque sabot',
      'Col épuré classique Boston avec bride coup-de-pied et boucle réglable',
      'Semelle intérieure anatomique doublée en daim pour un confort absolu',
      '3 coloris exacts disponibles : Beige Crème, Noir Ébène et Rose Poudré',
      'Pointures disponibles : du 36 au 41'
    ],
    colors: [
      {
        name: 'Beige Crème',
        hex: '#EDE8DC',
        image: '/src/assets/images/hk_exact_beige_1791829894416.jpg'
      },
      {
        name: 'Noir Ébène',
        hex: '#18181B',
        image: '/src/assets/images/hk_exact_black_1791829904777.jpg'
      },
      {
        name: 'Rose Poudré',
        hex: '#EBBAC6',
        image: '/src/assets/images/hk_exact_pink_1791829914651.jpg'
      }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    images: [
      '/src/assets/images/hk_exact_beige_1791829894416.jpg',
      '/src/assets/images/hk_exact_black_1791829904777.jpg',
      '/src/assets/images/hk_exact_pink_1791829914651.jpg'
    ],
    inStock: true,
  },
  {
    id: 'birkenstock-arizona-dupe',
    name: 'Arizona Mules Suédées Double Bride',
    arabicSubtitle: 'صندالة أريزونا شاموا كلاسيك',
    category: 'birkenstock',
    categoryLabel: 'Birkenstock & Sabots',
    price: 250,
    originalPrice: 300,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Essentiel Chic',
    description: 'Les dupes parfaits du modèle Arizona : daim doux texturé, boucles métalliques réglables et semelle liège ergonomique. Conçues pour durer saison après saison.',
    details: [
      'Doubles brides réglables individuellement',
      'Daim suédé respirant haute durabilité',
      'Semelle en liège anatomique moulée à la voûte plantaire',
      'Disponible en coloris beige et noir profond'
    ],
    colors: [
      { name: 'Suede Beige', hex: '#C7B198' },
      { name: 'Suede Noir', hex: '#1C1917' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    images: [
      '/src/assets/images/hero_birkenstock_outfit_1791812181201.jpg',
      '/src/assets/images/product_birkenstock_clog_1791812194416.jpg'
    ],
    inStock: true,
  },
  {
    id: 'viral-leather-bomber-jacket',
    name: 'Veste Bomber Faux Cuir Noir Oversized',
    arabicSubtitle: 'فيست كوير بومبر أوفرسايزد تريند',
    category: 'jackets',
    categoryLabel: 'Vestes & Bombers',
    price: 390,
    originalPrice: 480,
    rating: 5.0,
    reviewsCount: 112,
    badge: 'Viral Reel 🔥',
    isViral: true,
    isBestSeller: true,
    description: 'LA fameuse veste virale vue dans nos récents Reels Instagram ! Coupe bomber oversized unisexe, fini semi-brillant luxueux, col et poignets côtelés élastiques. Le match parfait avec vos sabots.',
    details: [
      'Simili cuir vegan premium au tombé lourd et souple',
      'Coupe loose / boyfriend généreuse très flatteuse',
      'Fermeture zippée métallique robuste argentée',
      'Deux poches latérales fonctionnelles à rabat',
      'Doublure intérieure satinée confortable'
    ],
    colors: [
      { name: 'Noir Brillant Intense', hex: '#0A0A0A' }
    ],
    sizes: ['S/M (Coupe Oversize)', 'L/XL (Extra Loose)'],
    images: [
      '/src/assets/images/product_leather_jacket_1791812205434.jpg'
    ],
    inStock: true,
  },
  {
    id: 'van-cleef-clover-bracelet',
    name: 'Bracelet Trèfle Alhambra & Jonc Doré',
    arabicSubtitle: 'براسلي تريفلي ألهامبرا مطلي بالذهب',
    category: 'jewelry',
    categoryLabel: 'Bijoux & Accessoires',
    price: 180,
    originalPrice: 240,
    rating: 4.9,
    reviewsCount: 135,
    badge: 'Pov: sif 9arab ✨',
    isBestSeller: true,
    description: '"Pov: sif 9arab o khasni jewelry" - La parure trèfle 4 feuilles porte-bonheur façon Alhambra en acier inoxydable plaqué or 18k, nacre blanche éclatante et pendentif cornaline rouge. Ne noircit jamais.',
    details: [
      'Acier inoxydable haute qualité plaqué or 18 carats',
      'Résiste à l\'eau, parfum et transpiration (Waterproof)',
      'Motifs trèfle tridimensionnels bordés de perles d\'or',
      'Jonc rigide ajustable + chaîne mousqueton sécurisée',
      'Offre spéciale: 2 bijoux commandés = 300 DH seulement'
    ],
    colors: [
      { name: 'Nacre Blanche & Goutte Rouge', hex: '#F3E8E2' },
      { name: 'Noir Onyx & Or', hex: '#262626' },
      { name: 'Tout Or & Nacre', hex: '#F59E0B' }
    ],
    sizes: ['Taille Unique Ajustable'],
    images: [
      '/src/assets/images/product_clover_jewelry_1791812218452.jpg'
    ],
    inStock: true,
  },
  {
    id: 'abaya-ramadan-kimono',
    name: 'Abaya Kimono en Lin Collection Ramadan',
    arabicSubtitle: 'عباية رمضان كيمونو كتان راقية',
    category: 'ramadan',
    categoryLabel: 'Collection Ramadan',
    price: 320,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 54,
    badge: 'Collection Ramadan 🌙',
    description: 'Abaya kimono moderne et raffinée en lin naturel beige sable avec manches kimono fluides et ceinture assortie. Une pièce d\'exception pour les nuits de Ramadan et les réceptions.',
    details: [
      'Tissu lin et coton texturé haut de gamme respirant',
      'Coupe ouverte élégante avec ceinture à nouer',
      'Manches kimono amples pour une fluidité gracieuse',
      'Confectionnée au Maroc avec un savoir-faire soigné'
    ],
    colors: [
      { name: 'Beige Sable Naturel', hex: '#E5D9C5' },
      { name: 'Blanc Écru', hex: '#FDFBF7' },
      { name: 'Vert Sauge Pâle', hex: '#CBD5C0' }
    ],
    sizes: ['Taille Standard (36 au 44)'],
    images: [
      '/src/assets/images/product_abaya_ramadan_1791812287528.jpg'
    ],
    inStock: true,
  }
];

export const BRAND_INFO = {
  name: 'The GIRL HOUSE',
  handle: '@girll__house__',
  slogan: 'We satisfy all tastes',
  tagline: 'Fashion Accessories for every girl in Morocco',
  whatsappUrl: 'https://wa.me/212627369034',
  whatsappShortUrl: 'https://wa.me/message/5HOGY2ZSKJDNG1',
  whatsappRaw: '212627369034',
  phone: '0627369034',
  phoneDisplay: '0627-369034',
  phoneIntl: '+212 627-369034',
  email: 'fatimazahraecharkaoui55@gmail.com',
  instagram: 'https://instagram.com/girll__house__',
  facebook: 'https://facebook.com/Girllhouse',
  promoRule: 'Livraison express partout au Maroc avec paiement à la réception',
  freeShippingThreshold: 500,
  defaultShippingCost: 35,
};
