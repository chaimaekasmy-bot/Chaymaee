import React from 'react';
import { Instagram, Facebook, Phone, Mail, MessageCircle, Truck, Heart, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface FooterProps {
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Highlight Offer Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-800/80 border border-stone-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-rose-300 font-semibold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>Livraison partout au Maroc 🇲🇦</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Commandez vos pièces préférées dès maintenant
            </h3>
            <p className="text-xs text-stone-400">
              Livraison rapide dans toutes les villes du Maroc. Paiement sécurisé à la livraison en espèces.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-full shadow-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Commander sur WhatsApp ({BRAND_INFO.phoneDisplay})</span>
          </a>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-2xl text-white font-bold uppercase tracking-wider">
              The GIRL HOUSE
            </h4>
            <p className="text-xs text-rose-300 font-medium">
              &quot;{BRAND_INFO.slogan}&quot;
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              La boutique d&apos;accessoires de mode & sandales la plus tendance du Maroc. Sabots Boston en daim, vestes oversize, bijoux dorés & abayas pour toutes les filles.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800 flex items-center justify-center text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Nos Collections
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('birkenstock')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sabots Boston & Birkenstock Dupes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('birkenstock')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Model 2 (Sandales brides croisées)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('birkenstock')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Model 3 (Sandales blanches big buckle)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('birkenstock')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sabots Hello Kitty Édition Limitée 🎀
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('jackets')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Veste Bomber Faux Cuir Oversized 🔥
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('jewelry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bijoux & Bracelets Trèfle Alhambra ✨
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('ramadan')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Abaya Ramadan Lin Élégance 🌙
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Commandes
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-emerald-500"
                >
                  WhatsApp: +212 717-935114
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white">
                  Téléphone: {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-white truncate max-w-[210px]"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                <a
                  href={BRAND_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram: {BRAND_INFO.handle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={BRAND_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook: Girllhouse
                </a>
              </li>
            </ul>
          </div>

          {/* Shipping & Delivery Guarantee */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Conditions de Vente
            </h5>
            <p className="text-xs text-stone-400 leading-relaxed">
              Expédition rapide dans toutes les villes du Maroc : Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, etc.
            </p>
            <div className="p-3 rounded-2xl bg-stone-800 text-xs space-y-1 border border-stone-700">
              <div className="font-semibold text-white">Paiement :</div>
              <div className="text-[11px] text-emerald-400">
                Paiement en espèces à la livraison (Cash on Delivery)
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-stone-800 text-xs space-y-1 border border-stone-700">
              <div className="font-semibold text-white">Échanges :</div>
              <div className="text-[11px] text-stone-400">
                Échange de pointure sous 48h en cas de besoin.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} The GIRL HOUSE ({BRAND_INFO.handle}). Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Fait avec <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> au Maroc 🇲🇦
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
