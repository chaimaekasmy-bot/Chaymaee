import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="relative max-w-xs bg-white text-stone-900 p-3 rounded-2xl shadow-xl border border-stone-200 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5 rounded-full"
            aria-label="Fermer la bulle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[11px] text-emerald-800">
              The GIRL HOUSE · En ligne
            </span>
          </div>
          <p className="text-[11px] text-stone-600 leading-snug pr-3">
            Salam ! Besoin d&apos;aide pour choisir votre taille ou passer commande ? Écrivez-nous 🤍
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Discuter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Commander sur WhatsApp
        </span>
      </a>
    </div>
  );
};
