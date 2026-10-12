import React from 'react';
import { Star, MessageCircle, CheckCircle2, Quote } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/reviews';
import { BRAND_INFO } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Avis & Retours WhatsApp Vérifiés</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Ce que disent nos clientes au Maroc
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Des centaines de messages reçus chaque semaine en DM Instagram & WhatsApp. Votre satisfaction est notre priorité !
          </p>
        </div>

        {/* WhatsApp Chat Style Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header with Author and City */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center font-bold text-xs text-stone-700">
                      {review.author.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-stone-500">{review.city}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* WhatsApp Chat Bubble Accent */}
                {review.darijaQuote && (
                  <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-950 space-y-1 relative">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-700">
                      <MessageCircle className="w-3 h-3 fill-emerald-600" />
                      <span>Message WhatsApp :</span>
                    </div>
                    <p className="italic font-medium leading-relaxed">
                      &quot;{review.darijaQuote}&quot;
                    </p>
                  </div>
                )}

                {/* French Review Explanation */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Footer with Product Tag */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span className="font-medium text-stone-700 truncate max-w-[200px]">
                  {review.productName}
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Social Proof CTA */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200 text-center space-y-3 max-w-xl mx-auto shadow-xs">
          <div className="flex items-center justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-stone-800 ml-2">4.9 / 5 sur +850 avis</span>
          </div>
          <p className="text-xs text-stone-600">
            Une question sur la taille, le modèle ou votre ville ? Écrivez à Fatima-Zahra sur WhatsApp, nous répondons en quelques minutes !
          </p>
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Discuter avec nous sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
