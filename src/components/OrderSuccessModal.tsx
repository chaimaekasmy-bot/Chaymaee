import React from 'react';
import { CheckCircle2, MessageCircle, X, Truck, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface OrderSuccessModalProps {
  orderData: {
    orderId?: string;
    customerName: string;
    city: string;
    phone: string;
    total: number;
    productName?: string;
    color?: string;
    size?: string;
    itemsCount?: number;
  } | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  orderData,
  onClose
}) => {
  if (!orderData) return null;

  const orderNumber = orderData.orderId || `GH-${Math.floor(10000 + Math.random() * 90000)}`;

  const whatsappConfirmationUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Salam! J'ai passé la commande N° *${orderNumber}* sur le site The GIRL HOUSE.\nNom: ${orderData.customerName}\nVille: ${orderData.city}\nTéléphone: ${orderData.phone}\nMontant: ${orderData.total} DH (Paiement à la livraison 🇲🇦).\nMerci de confirmer svp ✨`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 text-center space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 p-2 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Commande Confirmée ! 🇲🇦
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Chokran {orderData.customerName} ✨
          </h3>
          <p className="text-xs text-stone-500">
            Numéro de commande : <strong className="text-stone-900 font-mono">{orderNumber}</strong>
          </p>
        </div>

        {/* Details card */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-stone-500">Ville de livraison :</span>
            <span className="font-semibold text-stone-900">{orderData.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Téléphone de contact :</span>
            <span className="font-semibold text-stone-900">{orderData.phone}</span>
          </div>
          {orderData.productName && (
            <div className="flex justify-between">
              <span className="text-stone-500">Modèle :</span>
              <span className="font-semibold text-stone-900 truncate max-w-[180px]">
                {orderData.productName} ({orderData.size})
              </span>
            </div>
          )}
          <div className="flex justify-between pt-1 border-t border-stone-200 text-sm font-bold text-stone-950 font-serif">
            <span>Total à payer à la réception :</span>
            <span className="text-rose-700 tabular-nums">{orderData.total} DH</span>
          </div>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 flex items-center gap-2 text-left">
          <Truck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Notre livreur vous appellera avant de vous livrer à votre adresse. Préparez le montant en espèces.</span>
        </div>

        {/* Follow up WhatsApp button */}
        <div className="space-y-2 pt-1">
          <a
            href={whatsappConfirmationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Envoyer la confirmation sur WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors"
          >
            Continuer le shopping
          </button>
        </div>

      </div>
    </div>
  );
};
