import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Truck, ShieldCheck, RefreshCw, Ruler, Check, Heart } from 'lucide-react';
import { Product } from '../types';
import { createProductWhatsAppUrl } from '../utils/whatsapp';
import { BRAND_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, size: string, quantity: number) => void;
  onOpenSizeGuide: () => void;
  onDirectOrderSuccess: (orderData: {
    productName: string;
    color: string;
    size: string;
    customerName: string;
    city: string;
    phone: string;
    total: number;
  }) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
  onDirectOrderSuccess
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '38');
  const [quantity, setQuantity] = useState(1);
  const [showCodForm, setShowCodForm] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // COD Direct Order Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('Casablanca');
  const [customerAddress, setCustomerAddress] = useState('');
  const [formError, setFormError] = useState('');

  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize(product.sizes[0] || '38');
      setSelectedImageIndex(0);
      setQuantity(1);
      setShowCodForm(false);
    }
  }, [product]);

  if (!product) return null;

  const moroccoCities = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Tanger',
    'Fès',
    'Agadir',
    'Meknès',
    'Oujda',
    'Kénitra',
    'Tétouan',
    'Salé',
    'Mohammédia',
    'El Jadida',
    'Nador',
    'Béni Mellal',
    'Autre ville'
  ];

  const handleAddToCartClick = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleDirectCodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      setFormError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const total = product.price * quantity;

    onDirectOrderSuccess({
      productName: product.name,
      color: selectedColor,
      size: selectedSize,
      customerName,
      city: customerCity,
      phone: customerPhone,
      total
    });
  };

  const currentWhatsAppUrl = createProductWhatsAppUrl(
    product,
    selectedColor,
    selectedSize,
    quantity
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative border border-stone-200 flex flex-col max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-4 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
            
            {/* Gallery Column (Left) */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-[1/1] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-stone-900 px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails if multiple images */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-stone-900 scale-102'
                          : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Delivery Reassurance Note */}
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs flex items-center gap-2.5 text-stone-700">
                <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Livraison express partout au Maroc · Paiement sécurisé à la réception 🇲🇦</span>
              </div>
            </div>

            {/* Purchase Module Column (Right) */}
            <div className="md:col-span-6 space-y-5 flex flex-col justify-between text-left">
              <div className="space-y-4">
                
                {/* Title & Category */}
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    {product.categoryLabel}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                    {product.name}
                  </h2>
                  {product.arabicSubtitle && (
                    <p className="text-xs text-stone-500 font-sans mt-0.5">
                      {product.arabicSubtitle}
                    </p>
                  )}
                </div>

                {/* Pricing Block */}
                <div className="flex items-baseline gap-3 pb-2 border-b border-stone-100">
                  <span className="font-serif text-3xl font-bold text-stone-900 tabular-nums">
                    {product.price * quantity} DH
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through tabular-nums">
                      {product.originalPrice * quantity} DH
                    </span>
                  )}
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Paiement à la livraison 🇲🇦
                  </span>
                </div>

                {/* Color Selector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-800">
                      Couleur : <span className="text-rose-800 font-bold">{selectedColor}</span>
                    </span>
                    <span className="text-stone-400">{product.colors.length} choix</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          setSelectedColor(c.name);
                          if (c.image) {
                            const imgIdx = product.images.indexOf(c.image);
                            if (imgIdx > -1) {
                              setSelectedImageIndex(imgIdx);
                            }
                          }
                        }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                          selectedColor === c.name
                            ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                            : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-white/50"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-800">
                      Pointure / Taille : <span className="text-rose-800 font-bold">{selectedSize}</span>
                    </span>
                    <button
                      onClick={onOpenSizeGuide}
                      className="text-stone-600 hover:text-stone-950 underline flex items-center gap-1 cursor-pointer"
                    >
                      <Ruler className="w-3 h-3" />
                      <span>Guide des tailles</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 px-1 text-center rounded-xl text-xs font-semibold border transition-all ${
                          selectedSize === s
                            ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                            : 'border-stone-200 bg-white text-stone-800 hover:border-stone-400'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 pt-1">
                  <span className="text-xs font-semibold text-stone-700">Quantité :</span>
                  <div className="flex items-center border border-stone-200 rounded-xl bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="px-3 py-1.5 text-xs font-semibold text-stone-900 tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                  {quantity >= 2 && (
                    <span className="text-xs text-emerald-700 font-medium">
                      🎉 Félicitations : Livraison Gratuite !
                    </span>
                  )}
                </div>

                {/* Main Action Buttons */}
                <div className="space-y-2 pt-2">
                  {/* WhatsApp Order Button (Primary) */}
                  <a
                    href={currentWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Commander sur WhatsApp (Conseillé)</span>
                  </a>

                  {/* Add to Cart Button */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleAddToCartClick}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-stone-300 hover:border-stone-900 bg-white hover:bg-stone-50 text-stone-900 text-xs font-semibold transition-all cursor-pointer"
                    >
                      {addedAnimation ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Ajouté !</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Ajouter au Panier</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setShowCodForm(!showCodForm)}
                      className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      <span>Commander en 1 Clic (COD)</span>
                    </button>
                  </div>
                </div>

                {/* Quick COD Form (Dropdown) */}
                {showCodForm && (
                  <form
                    onSubmit={handleDirectCodSubmit}
                    className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 animate-in fade-in duration-150"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        Formulaire Paiement à la Livraison 🇲🇦
                      </h4>
                      <span className="text-[10px] text-stone-500">Expédition 24h</span>
                    </div>

                    {formError && (
                      <p className="text-xs text-rose-600 font-medium">{formError}</p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Ex: Fatima Zahra"
                          className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-1">
                          Numéro WhatsApp / Tél *
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="Ex: 0612345678"
                          className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-1">
                          Ville *
                        </label>
                        <select
                          value={customerCity}
                          onChange={(e) => setCustomerCity(e.target.value)}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                        >
                          {moroccoCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-1">
                          Adresse de livraison *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder="Quartier, N° rue..."
                          className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      Confirmer la commande ({product.price * quantity} DH)
                    </button>
                  </form>
                )}

                {/* Description & Details Accordion */}
                <div className="pt-3 space-y-2 text-xs text-stone-600 border-t border-stone-100">
                  <p className="leading-relaxed">{product.description}</p>
                  <ul className="space-y-1 pl-4 list-disc text-stone-500">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Trust mini-grid */}
                <div className="pt-2 grid grid-cols-3 gap-2 text-center text-[10px] text-stone-600 border-t border-stone-100">
                  <div className="p-2 rounded-xl bg-stone-50 flex flex-col items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-stone-700" />
                    <span>Livraison 24h-48h</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 flex flex-col items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
                    <span>Paiement Cash COD</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 flex flex-col items-center gap-1">
                    <RefreshCw className="w-3.5 h-3.5 text-stone-700" />
                    <span>Échange taille facile</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
