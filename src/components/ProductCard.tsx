import React from 'react';
import { MessageCircle, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { createProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onQuickAdd
}) => {
  const defaultColor = product.colors[0]?.name;
  const defaultSize = product.sizes[0] || '38';
  const quickWhatsAppUrl = createProductWhatsAppUrl(product, defaultColor, defaultSize);

  return (
    <div className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Product Image Stage */}
      <div
        onClick={() => onOpenDetails(product)}
        className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-stone-100 cursor-pointer"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-md text-stone-900 px-2.5 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Secondary lifestyle indicator or stock status */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] font-medium bg-stone-900/80 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full">
            {product.categoryLabel}
          </span>
        </div>

        {/* Quick View overlay button */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/95 text-stone-900 text-xs font-semibold rounded-full shadow-md hover:bg-white transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Aperçu rapide</span>
          </button>
        </div>
      </div>

      {/* Card Info Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          {/* Rating & Review info */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="ml-1 font-semibold text-stone-800">{product.rating}</span>
            </div>
            <span>·</span>
            <span>{product.reviewsCount} avis vérifiés</span>
          </div>

          <h3
            onClick={() => onOpenDetails(product)}
            className="font-serif text-lg sm:text-xl font-bold text-stone-900 hover:text-stone-700 cursor-pointer line-clamp-1 transition-colors"
          >
            {product.name}
          </h3>

          {product.arabicSubtitle && (
            <p className="text-xs text-stone-400 font-sans tracking-wide">
              {product.arabicSubtitle}
            </p>
          )}

          {/* Color Dots Preview */}
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-[11px] text-stone-400 font-medium mr-1">
              {product.colors.length} coloris:
            </span>
            {product.colors.slice(0, 5).map((color, idx) => (
              <span
                key={idx}
                title={color.name}
                className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                style={{ backgroundColor: color.hex }}
              />
            ))}
            {product.colors.length > 5 && (
              <span className="text-[10px] text-stone-400">+{product.colors.length - 5}</span>
            )}
          </div>
        </div>

        {/* Pricing & CTA Actions */}
        <div className="pt-2 border-t border-stone-100 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900 tabular-nums">
                {product.price} DH
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through tabular-nums">
                  {product.originalPrice} DH
                </span>
              )}
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">
              En stock 🇲🇦
            </span>
          </div>

          {/* Buttons: Direct WhatsApp Order + Choose Options */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onOpenDetails(product)}
              className="w-full py-2.5 px-3 rounded-xl border border-stone-300 hover:border-stone-900 bg-stone-50 hover:bg-stone-100 text-stone-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Choisir taille</span>
            </button>

            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              title="Commander sur WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
