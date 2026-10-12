export interface Product {
  id: string;
  name: string;
  arabicSubtitle?: string;
  category: 'birkenstock' | 'jackets' | 'jewelry' | 'ramadan';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  description: string;
  details: string[];
  colors: {
    name: string;
    hex: string;
    image?: string;
  }[];
  sizes: string[];
  images: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  isViral?: boolean;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface ClientReview {
  id: string;
  author: string;
  city: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  darijaQuote?: string;
  productName: string;
  verifiedPurchase: boolean;
}
