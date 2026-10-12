import React from 'react';
import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const InstagramFeed: React.FC = () => {
  const profileHighlights = [
    { title: 'Hello kitty🎀', image: '/src/assets/images/hk_exact_pink_1791829914651.jpg' },
    { title: 'Model 3', image: '/src/assets/images/product_model3_gizeh_white_1791820335382.jpg' },
    { title: 'Model 2', image: '/src/assets/images/product_model2_mayari_1791815871369.jpg' },
    { title: 'Birkenstock', image: '/src/assets/images/product_birkenstock_clog_1791812194416.jpg' },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Instagram Profile Card (Mirrors Screenshot_20261012-190310.png) */}
        <div className="bg-stone-50/70 border border-stone-200/90 rounded-3xl p-5 sm:p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Profile Avatar & Bio Stats */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              
              {/* Instagram Story Gradient Ring with Logo Profile Picture */}
              <div className="relative shrink-0 p-[2.5px] rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white p-[2px]">
                  <img
                    src="/src/assets/images/logo_girlhouse_1791833026887.jpg"
                    alt={BRAND_INFO.handle}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Bio & Stats */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-bold text-stone-900 text-lg sm:text-xl tracking-tight">
                    girll__house__
                  </h3>
                  <span className="text-[11px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-semibold border border-rose-200">
                    Fashion Accessories
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-700">
                  <span><strong>63</strong> posts</span>
                  <span><strong>4,275</strong> followers</span>
                  <span><strong>27</strong> following</span>
                </div>

                <div className="text-xs text-stone-600 space-y-0.5 pt-1">
                  <p className="font-semibold text-stone-900">Girl house</p>
                  <p>🪄 We satisfy all tastes</p>
                  <p>💌 DM to order</p>
                  <p>📦 Livraison partout au maroc🇲🇦</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 self-start md:self-center">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow</span>
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Message</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium transition-colors"
                title={`Appeler ${BRAND_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">{BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Highlights Mini Row */}
          <div className="pt-3 border-t border-stone-200/80 flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-1">
            {profileHighlights.map((hl, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full p-[2px] bg-stone-200 group-hover:bg-rose-300 transition-colors">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px]">
                    <img
                      src={hl.image}
                      alt={hl.title}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-medium text-stone-700 text-center max-w-[70px] truncate">
                  {hl.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick WhatsApp Order Callout */}
        <div className="text-center pt-1">
          <p className="text-xs text-stone-600">
            Un article vous plaît sur notre compte Instagram ? Envoyez-nous directement la capture sur{' '}
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-semibold underline hover:text-emerald-800"
            >
              WhatsApp ({BRAND_INFO.phoneDisplay})
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
