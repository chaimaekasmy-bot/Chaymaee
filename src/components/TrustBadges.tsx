import React from 'react';
import { Truck, Banknote, ShieldCheck, RefreshCw } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Truck className="w-5 h-5 text-rose-600" />,
      title: 'Livraison Partout au Maroc 🇲🇦',
      desc: 'Casablanca & Rabat sous 24h-48h, toutes les autres villes sous 48h-72h.'
    },
    {
      icon: <Banknote className="w-5 h-5 text-emerald-600" />,
      title: 'Paiement à la Livraison',
      desc: 'Payez en espèces à réception du colis après vérification de votre commande.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: 'Qualité Premium Garantie',
      desc: 'Matières sélectionnées avec soin : daim suédé doux, semelles liège durables.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-sky-600" />,
      title: 'Échange Facile sous 48h',
      desc: 'Erreur de pointure ? Notre livreur effectue l\'échange rapidement à votre porte.'
    }
  ];

  return (
    <section className="py-10 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-stone-50 border border-stone-100 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="p-3 bg-white rounded-xl shadow-2xs border border-stone-200 shrink-0">
                {b.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-stone-900 leading-snug">
                  {b.title}
                </h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
