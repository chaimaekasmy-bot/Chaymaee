import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Heart, Truck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFEB] to-[#FAF8F5] pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Viral Hook & Brand Promise */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Instagram story / TikTok aesthetic caption */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-rose-900 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Boutique Officielle Instagram {BRAND_INFO.handle}</span>
              <span className="text-stone-300">|</span>
              <span className="font-semibold text-rose-700">🇲🇦 Maroc</span>
            </div>

            <div className="space-y-3">
              <p className="text-stone-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                <span className="font-semibold text-stone-900 font-serif italic text-xl">The GIRL HOUSE</span> — &quot;{BRAND_INFO.slogan}&quot;.
                Retrouvez les sabots Boston en daim ultra confortables, les sandales Model 2 & 3, la fameuse veste virale oversize et notre sélection de bijoux waterproof pour l&apos;été.
              </p>
            </div>

            {/* Reassurance Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Livraison partout au Maroc 🇲🇦</span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-700 bg-white/90 px-3 py-1.5 rounded-full border border-stone-200 shadow-2xs">
                <span>Paiement à la livraison après vérification</span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
              >
                <span>Découvrir la Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-full transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            {/* Micro proof line */}
            <div className="flex items-center gap-4 text-xs text-stone-500 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-stone-700" />
                <span>Qualité garantie & échange de pointure</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>+1,500 clientes satisfaites au Maroc</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Reel Style */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200">
                <img
                  src="/src/assets/images/hero_birkenstock_outfit_1791812181201.jpg"
                  alt="Girl wearing Birkenstock Boston clogs with socks and denim jeans"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Aesthetic Instagram Reel Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Top Corner Instagram Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-stone-900/70 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    <span>{BRAND_INFO.handle}</span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-stone-900 px-3 py-1 rounded-full shadow-sm">
                    Reel Viral 🤍
                  </span>
                </div>

                {/* Bottom Card Preview */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                        Best Seller de la semaine
                      </p>
                      <h4 className="text-sm font-bold text-stone-900">
                        Boston Suede Clogs · Beige Taupe
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-bold text-stone-900 font-serif tabular-nums">
                        250 DH
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-xs">
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <span>✓</span> En stock (Tailles 36 - 41)
                    </span>
                    <button
                      onClick={onShopClick}
                      className="text-stone-900 font-semibold hover:underline cursor-pointer"
                    >
                      Commander →
                    </button>
                  </div>
                </div>
              </div>

              {/* Little floating sticker */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-stone-900 text-white px-4 py-2.5 rounded-2xl shadow-xl items-center gap-2.5 text-xs font-medium border border-stone-800">
                <span className="text-base">🇲🇦</span>
                <div>
                  <div className="font-semibold text-stone-100">Livraison Express</div>
                  <div className="text-[10px] text-stone-400">Casablanca & toutes les villes</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
