import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Instagram, Phone, Truck, Search } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenAbout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeCategory,
  onSelectCategory,
  onOpenAbout,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tous les produits', value: 'all' },
    { label: 'Birkenstock & Sabots', value: 'birkenstock' },
    { label: 'Vestes Virales', value: 'jackets' },
    { label: 'Bijoux & Dorures', value: 'jewelry' },
    { label: 'Abayas Ramadan', value: 'ramadan' },
  ];

  const quickSearchTags = ['Hello Kitty', 'Model 2', 'Boston Clogs', 'Veste Cuir', 'Bijoux', 'Abaya'];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-b border-stone-200/90 shadow-xs transition-all">
      {/* 1. Top Announcement Bar */}
      <div className="bg-stone-900 text-stone-100 text-[11px] sm:text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2 overflow-hidden">
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <Truck className="w-3.5 h-3.5 text-rose-300" />
          <span>Livraison express partout au Maroc 🇲🇦</span>
        </span>
        <span className="hidden sm:inline text-stone-500">·</span>
        <span className="hidden sm:inline text-rose-200 whitespace-nowrap font-semibold">
          Paiement à la livraison après vérification du colis
        </span>
        <span className="hidden md:inline text-stone-500">·</span>
        <span className="hidden md:inline whitespace-nowrap text-stone-300">
          Service client WhatsApp 7j/7
        </span>
      </div>

      {/* 2. Main Navigation Bar with Top Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 sm:gap-6">
        
        {/* Brand Wordmark */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => {
              onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group text-left cursor-pointer"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-wider text-stone-900 font-bold group-hover:text-rose-950 transition-colors uppercase whitespace-nowrap">
              The GIRL HOUSE
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-stone-500 font-sans uppercase -mt-1 font-medium">
              Accessories · @girll__house__
            </span>
          </button>
        </div>

        {/* Central Search Bar (Desktop & Tablet) */}
        <div className="hidden sm:flex flex-1 max-w-xl mx-2">
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full group"
          >
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 group-focus-within:text-stone-900 transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (onSearchSubmit) onSearchSubmit();
              }}
              placeholder="Rechercher : Hello Kitty, Boston clogs, Model 2, veste..."
              className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-stone-100/80 hover:bg-white focus:bg-white text-stone-900 placeholder:text-stone-400 rounded-full border border-stone-200 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Effacer la recherche"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>
        </div>

        {/* Action Group: WhatsApp, Cart, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-full transition-colors whitespace-nowrap"
            title="Commander directement sur WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Commander sur WhatsApp</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-stone-800 hover:text-stone-950 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Voir le panier"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-stone-900 text-white text-[11px] font-bold rounded-full flex items-center justify-center tabular-nums shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-800 hover:text-stone-950 rounded-lg cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Dedicated Search Bar (Visible on Mobile at Top of Page) */}
      <div className="sm:hidden px-4 pb-2.5 pt-0">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              if (onSearchSubmit) onSearchSubmit();
            }}
            placeholder="Rechercher : Hello Kitty, Boston, vestes..."
            className="w-full pl-9 pr-8 py-2 text-xs bg-stone-100/90 focus:bg-white text-stone-900 placeholder:text-stone-400 rounded-full border border-stone-200 focus:border-stone-900 outline-none transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
              aria-label="Effacer la recherche"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>
      </div>

      {/* 4. Category Navigation Strip (Desktop) */}
      <div className="hidden lg:block border-t border-stone-200/60 bg-[#FAF8F5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <nav className="flex items-center gap-7 text-xs font-semibold text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => onSelectCategory(link.value)}
                className={`whitespace-nowrap transition-colors relative py-1 cursor-pointer ${
                  activeCategory === link.value
                    ? 'text-stone-950 font-bold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {link.label}
                {activeCategory === link.value && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-stone-900 rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={onOpenAbout}
              className="text-stone-600 hover:text-stone-950 transition-colors whitespace-nowrap cursor-pointer"
            >
              Notre Histoire
            </button>
          </nav>

          {/* Quick search tags on desktop header */}
          <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
            <span className="text-stone-400">Tendances :</span>
            {quickSearchTags.slice(0, 4).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  onSearchChange(tag);
                  if (onSearchSubmit) onSearchSubmit();
                }}
                className="px-2 py-0.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-700 text-[10px] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-md">
          <div className="space-y-1">
            <p className="px-3 text-[11px] uppercase tracking-wider font-semibold text-stone-400">
              Catégories
            </p>
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  onSelectCategory(link.value);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                  activeCategory === link.value
                    ? 'bg-stone-200/60 text-stone-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-100 cursor-pointer"
            >
              À Propos de The GIRL HOUSE
            </button>
          </div>

          {/* Quick searches in mobile menu */}
          <div className="pt-2 border-t border-stone-200/80">
            <p className="px-1 text-[11px] font-semibold text-stone-400 mb-2">Recherches populaires</p>
            <div className="flex flex-wrap gap-1.5">
              {quickSearchTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    onSearchChange(tag);
                    setMobileMenuOpen(false);
                    if (onSearchSubmit) onSearchSubmit();
                  }}
                  className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-medium hover:bg-stone-200 cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-stone-200 space-y-2">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Commander sur WhatsApp ({BRAND_INFO.phoneDisplay})</span>
            </a>
            <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-1">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-stone-900"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.handle}</span>
              </a>
              <span>·</span>
              <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-1 hover:text-stone-900">
                <Phone className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
