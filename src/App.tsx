import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS, BRAND_INFO } from './data/products';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { TrustBadges } from './components/TrustBadges';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { Sparkles, X, Filter } from 'lucide-react';

export default function App() {
  // Navigation & Category Filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedColorFilter, setSelectedColorFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Modals & Drawers State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('thegirlhouse_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('thegirlhouse_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Cart operations
  const handleAddToCart = (product: Product, color: string, size: string, quantity: number) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.categoryLabel.toLowerCase().includes(query);
        const matchesColor = product.colors.some((c) => c.name.toLowerCase().includes(query));
        const matchesBadge = product.badge ? product.badge.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesDesc && !matchesCat && !matchesColor && !matchesBadge) return false;
      }
      // Color match
      if (selectedColorFilter !== 'all') {
        const hasColor = product.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColorFilter.toLowerCase())
        );
        if (!hasColor) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // default featured order
    });
  }, [selectedCategory, searchQuery, selectedColorFilter, sortBy]);

  const scrollToShop = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      // If user starts searching, ensure catalog section is in view
      const el = document.getElementById('catalog');
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col selection:bg-rose-100 selection:text-rose-900 font-sans">
      
      {/* 1. Header & Navigation (Includes Top Search Bar) */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToShop();
        }}
        onOpenAbout={scrollToAbout}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={scrollToShop}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onShopClick={scrollToShop} />

        {/* 3. Trust Badges */}
        <TrustBadges />

        {/* 4. Main Catalog & Shop Section */}
        <section id="catalog" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Title & Description */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-rose-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Collection Officielle 2025/2026</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                Les Tendances The GIRL HOUSE
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Sabots Birkenstock, Model 2 & 3, vestes oversize et bijoux plaqué or au Maroc.
              </p>
            </div>
          </div>

          {/* Interactive Filters Toolbar */}
          <div className="space-y-4 bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/90 shadow-2xs">
            
            {/* Active Search Notification Banner if searching */}
            {searchQuery.trim() && (
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-rose-50/70 border border-rose-200/70 rounded-2xl text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-700">Résultats pour la recherche :</span>
                  <span className="font-bold text-stone-950 bg-white px-2.5 py-0.5 rounded-full border border-rose-200 shadow-2xs">
                    &ldquo;{searchQuery}&rdquo;
                  </span>
                  <span className="text-stone-500">
                    ({filteredProducts.length} modèle{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''})
                  </span>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:text-rose-950 hover:underline cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Réinitialiser la recherche</span>
                </button>
              </div>
            )}

            {/* Category Segmented Tabs & Sort Selector */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              
              {/* Category Segmented Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
                {[
                  { label: 'Tous les modèles', value: 'all' },
                  { label: 'Birkenstock & Sabots', value: 'birkenstock' },
                  { label: 'Vestes & Bombers', value: 'jackets' },
                  { label: 'Bijoux & Dorures', value: 'jewelry' },
                  { label: 'Abayas Ramadan', value: 'ramadan' },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedCategory(tab.value)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === tab.value
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 self-end md:self-auto text-xs shrink-0">
                <span className="text-stone-500 hidden sm:inline">Trier par :</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 bg-stone-50 rounded-full border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-900 text-xs font-medium cursor-pointer"
                >
                  <option value="featured">Populaires & Nouveautés</option>
                  <option value="price-asc">Prix croissant (DH)</option>
                  <option value="price-desc">Prix décroissant (DH)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
              <p className="text-stone-500 text-sm">
                Aucun produit ne correspond à votre recherche &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedColorFilter('all');
                }}
                className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={(p) => setSelectedProduct(p)}
                  onQuickAdd={(p) => {
                    handleAddToCart(p, p.colors[0]?.name || '', p.sizes[0] || '38', 1);
                  }}
                />
              ))}
            </div>
          )}

        </section>

        {/* 5. Instagram Feed Grid */}
        <InstagramFeed />

        {/* 6. Client Reviews & Testimonials Section */}
        <ReviewsSection />

        {/* 7. About Brand Section */}
        <AboutSection />

      </main>

      {/* 8. Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToShop();
        }}
      />

      {/* 9. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 10. Product Detailed Purchase Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, color, size, qty) => {
          handleAddToCart(p, color, size, qty);
          setSelectedProduct(null);
        }}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onDirectOrderSuccess={(orderData) => {
          setSelectedProduct(null);
          setCompletedOrder(orderData);
        }}
      />

      {/* 11. Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckoutSuccess={(orderData) => {
          setIsCartOpen(false);
          handleClearCart();
          setCompletedOrder(orderData);
        }}
      />

      {/* 12. Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* 13. Order Confirmation Modal */}
      <OrderSuccessModal
        orderData={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

    </div>
  );
}
