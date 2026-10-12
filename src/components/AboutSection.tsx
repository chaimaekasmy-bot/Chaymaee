import React from 'react';
import { Sparkles, Heart, Instagram, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-gradient-to-b from-stone-50 to-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/90 shadow-sm relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Visual Column */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden shadow-lg border-4 border-stone-100 bg-stone-100">
                <img
                  src="/src/assets/images/hero_birkenstock_outfit_1791812181201.jpg"
                  alt="The GIRL HOUSE aesthetic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-300">
                    Fondatrice · Fatima-Zahra
                  </span>
                  <p className="text-xs font-serif italic text-stone-200">
                    &quot;We satisfy all tastes — Made with love for Moroccan girls&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold border border-rose-200">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>À Propos de The GIRL HOUSE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Fashion Accessories for every girl in Morocco 🇲🇦
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Née sur Instagram (<strong className="text-stone-900">{BRAND_INFO.handle}</strong>), The GIRL HOUSE est la destination incontournable des filles marocaines à la recherche des tendances virales TikTok & Pinterest : des célèbres sabots Boston clogs en daim ultra confortables, aux sandales Model 2 & 3, en passant par la veste en cuir oversized et les bijoux dorés waterproof.
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Notre devise ? <em className="text-stone-900 font-serif font-bold">&quot;We satisfy all tastes&quot;</em> — parce que chaque fille mérite de trouver sa paire parfaite à un prix doux et accessible, avec la sérénité du <span className="text-emerald-700 font-semibold">paiement à la livraison</span> et une livraison rapide dans toutes les villes du Royaume.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Discuter sur WhatsApp</span>
                </a>

                <a
                  href={BRAND_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-rose-600" />
                  <span>Rejoindre la communauté {BRAND_INFO.handle}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
