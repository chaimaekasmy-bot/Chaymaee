import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, Truck, Check, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { BRAND_INFO } from '../data/products';
import { createCartWhatsAppUrl } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onCheckoutSuccess: (orderData: {
    customerName: string;
    city: string;
    phone: string;
    total: number;
    itemsCount: number;
  }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutSuccess
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('Casablanca');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const isFreeShipping = subtotal >= BRAND_INFO.freeShippingThreshold;
  const shippingCost = isFreeShipping ? 0 : (items.length > 0 ? BRAND_INFO.defaultShippingCost : 0);
  const grandTotal = subtotal + shippingCost;
  const missingForFreeShipping = Math.max(0, BRAND_INFO.freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(
    100,
    (subtotal / BRAND_INFO.freeShippingThreshold) * 100
  );

  const handleWhatsAppCheckout = () => {
    const url = createCartWhatsAppUrl(items, {
      name: customerName,
      phone: customerPhone,
      city: customerCity,
      address: customerAddress,
      notes: orderNotes
    });
    window.open(url, '_blank');
  };

  const handleCodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      setFormError('Veuillez renseigner votre nom, téléphone et adresse pour la livraison.');
      return;
    }

    onCheckoutSuccess({
      customerName,
      city: customerCity,
      phone: customerPhone,
      total: grandTotal,
      itemsCount: items.reduce((s, i) => s + i.quantity, 0)
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-stone-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-900" />
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Mon Panier ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="p-4 bg-rose-50/70 border-b border-rose-200/60 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="flex items-center gap-1.5 text-rose-950">
                <Truck className="w-4 h-4 text-rose-600" />
                {isFreeShipping ? (
                  <span className="font-bold text-emerald-800">
                    🎉 Félicitations : Livraison Gratuite activée !
                  </span>
                ) : (
                  <span>
                    Plus que <strong className="text-rose-900 font-bold">{missingForFreeShipping} DH</strong> pour la livraison gratuite !
                  </span>
                )}
              </span>
              <span className="text-[11px] text-stone-500 font-mono">
                {subtotal} / {BRAND_INFO.freeShippingThreshold} DH
              </span>
            </div>
            <div className="w-full h-1.5 bg-rose-200/50 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  isFreeShipping ? 'bg-emerald-600' : 'bg-rose-500'
                }`}
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-stone-800">
                    Votre panier est vide
                  </h4>
                  <p className="text-xs text-stone-500 max-w-xs">
                    Découvrez nos sabots Birkenstock et sandales tendance pour commencer votre commande.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Découvrir les modèles
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  className="flex gap-3 p-3 bg-white rounded-2xl border border-stone-200 shadow-2xs relative"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-start justify-between pr-6">
                        <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                      </div>
                      <div className="text-[11px] text-stone-500 flex flex-wrap gap-2">
                        <span>Taille: <strong className="text-stone-800">{item.selectedSize}</strong></span>
                        <span>·</span>
                        <span>Couleur: <strong className="text-stone-800">{item.selectedColor}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-stone-950 font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold text-stone-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-stone-950 font-bold text-xs"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-stone-900 tabular-nums">
                        {item.product.price * item.quantity} DH
                      </span>
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="absolute top-3 right-3 text-stone-400 hover:text-rose-600 transition-colors p-1"
                    aria-label="Supprimer cet article"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}

            {/* Delivery address accordion / form */}
            {items.length > 0 && (
              <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-3 mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  Coordonnées de Livraison 🇲🇦
                </h4>
                {formError && (
                  <p className="text-xs text-rose-600 font-medium">{formError}</p>
                )}
                <div className="space-y-2 text-xs">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nom complet *"
                    className="w-full px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Téléphone / WhatsApp *"
                    className="w-full px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                  />
                  <input
                    type="text"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="Ville (ex: Casablanca, Rabat, Marrakech...)"
                    className="w-full px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                  />
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Adresse exacte de livraison *"
                    className="w-full px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Sous-total :</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    {subtotal} DH
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de livraison :</span>
                  <span className={`font-semibold tabular-nums ${isFreeShipping ? 'text-emerald-700' : 'text-stone-900'}`}>
                    {isFreeShipping ? 'GRATUITE' : `${shippingCost} DH`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-950 pt-1 border-t border-stone-100 font-serif">
                  <span>Total à payer à la livraison :</span>
                  <span className="tabular-nums text-rose-700 text-lg">
                    {grandTotal} DH
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Commander sur WhatsApp (Recommandé)</span>
                </button>

                <button
                  onClick={handleCodSubmit}
                  className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Confirmer la commande (Paiement Cash)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-center text-[10px] text-stone-400">
                🔒 Paiement 100% sécurisé à la réception partout au Maroc 🇲🇦
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
