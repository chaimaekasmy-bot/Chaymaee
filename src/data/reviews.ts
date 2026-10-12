import { ClientReview } from '../types';

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    author: 'Salma B.',
    city: 'Casablanca (Maârif)',
    rating: 5,
    date: 'Hier à 16:42',
    text: 'Salam khti, wsloni les clogs lioum ! La qualité kathemma9 bzaf, confortables w le cuir doux bzaf. Chokran bzaf 3la la rapidité !',
    darijaQuote: '« Wsloni lioum ! La qualité kathemma9 bzaf w confortables »',
    productName: 'Birkenstock Boston Suede Clog (Taupe)',
    verifiedPurchase: true,
  },
  {
    id: 'rev-2',
    author: 'Kenza E.',
    city: 'Rabat (Agdal)',
    rating: 5,
    date: 'Il y a 2 jours',
    text: 'J&apos;ai commandé deux paires de Model 2 (noir et beige). Livré en 24h chrono à Rabat. Emballage nickel et pointure exacte !',
    darijaQuote: '« Livré en 24h chrono à Rabat, emballage nickel et pointure exacte ! »',
    productName: 'Model 2 Sandales (Noir & Beige)',
    verifiedPurchase: true,
  },
  {
    id: 'rev-3',
    author: 'Imane T.',
    city: 'Marrakech (Guéliz)',
    rating: 5,
    date: 'Il y a 3 jours',
    text: 'La veste bomber en cuir oversize est juste magnifique ! Trop stylée avec un jean large ou une abaya. Mention spéciale pour la gentillesse sur WhatsApp.',
    darijaQuote: '« La veste oversize est juste magnifique, trop stylée ! »',
    productName: 'Veste Bomber Cuir Oversize',
    verifiedPurchase: true,
  },
  {
    id: 'rev-4',
    author: 'Yousra M.',
    city: 'Tanger',
    rating: 5,
    date: 'Il y a 4 jours',
    text: 'Les sabots Hello Kitty sont trop mignons, encore plus beaux en vrai qu&apos;en photo ! Ma sœur veut déjà commander la même paire en rose.',
    darijaQuote: '« Trop mignons en vrai, ma sœur commande déjà la sienne ! »',
    productName: 'Sabots Hello Kitty Edition Limitée',
    verifiedPurchase: true,
  },
  {
    id: 'rev-5',
    author: 'Fatima-Zahra L.',
    city: 'Fès',
    rating: 5,
    date: 'Il y a 5 jours',
    text: 'Collier trèfle 4 feuilles commandé la semaine dernière, je me douche avec et il ne change pas de couleur ! Très bon rapport qualité prix.',
    darijaQuote: '« Résiste à l&apos;eau et ne change pas de couleur ! »',
    productName: 'Collier Trèfle 4 Feuilles Nacré',
    verifiedPurchase: true,
  },
  {
    id: 'rev-6',
    author: 'Nour H.',
    city: 'Agadir',
    rating: 5,
    date: 'Il y a 6 jours',
    text: 'Service au top. Le livreur m&apos;a appelée avant de passer, j&apos;ai pu vérifier mon colis avant de payer. Je recommande à 100%.',
    darijaQuote: '« Paiement à la livraison après vérification du colis, parfait ! »',
    productName: 'Model 3 Gizeh Confort Sandal',
    verifiedPurchase: true,
  },
];

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
  mediaType?: 'reel' | 'carousel' | 'photo';
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imageUrl: '/src/assets/images/hellokitty_beige_real_1791823478987.jpg',
    likes: 1240,
    comments: 87,
    caption: 'Hello kitty birkenstock disponible livraison flmghrib kaml 🇲🇦😍',
    tag: '#HelloKitty #Birkenstock #Maroc',
    mediaType: 'carousel',
  },
  {
    id: 'post-2',
    imageUrl: '/src/assets/images/ig_post_parquet_1791833036991.jpg',
    likes: 2150,
    comments: 144,
    caption: 'Khatira f l\'cadeau ✨ Hello kitty clogs confort au Maroc !',
    tag: '#HelloKitty #Clogs #Gifts',
    mediaType: 'reel',
  },
  {
    id: 'post-3',
    imageUrl: '/src/assets/images/ig_post_jacket_collage_1791833047482.jpg',
    likes: 1890,
    comments: 98,
    caption: 'Jacket li kankaml bina fiha 😍 Veste cuir vintage oversize disponible !',
    tag: '#LeatherJacket #OOTD #Morocco',
    mediaType: 'reel',
  },
  {
    id: 'post-4',
    imageUrl: '/src/assets/images/ig_post_cinderella_meme_1791833057371.jpg',
    likes: 3410,
    comments: 210,
    caption: 'Other girl\'s dreams vs My dream 🤎 Boston clogs over glass slippers anytime !',
    tag: '#Birkenstock #BostonClog #Meme',
    mediaType: 'carousel',
  },
  {
    id: 'post-5',
    imageUrl: '/src/assets/images/ig_post_brunette_jacket_1791833068372.jpg',
    likes: 2470,
    comments: 135,
    caption: 'Disponible livraison flmghrib kaml 😍 Veste cuir oversize marron',
    tag: '#WinterStyle #Viral #Casablanca',
    mediaType: 'reel',
  },
  {
    id: 'post-6',
    imageUrl: '/src/assets/images/ig_post_cozy_bedroom_1791833080617.jpg',
    likes: 1980,
    comments: 112,
    caption: 'Hanswlha f Hello kitty birkenstock lkheda dyalha kankhdawz biha lberd 💕',
    tag: '#CozyVibes #HelloKitty #Rabat',
    mediaType: 'reel',
  },
];
