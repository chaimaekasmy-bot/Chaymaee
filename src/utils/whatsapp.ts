import { CartItem, Product } from '../types';
import { BRAND_INFO } from '../data/products';

export function createProductWhatsAppUrl(
  product: Product,
  selectedColor?: string,
  selectedSize?: string,
  quantity: number = 1
): string {
  const colorStr = selectedColor ? ` | Couleur: ${selectedColor}` : '';
  const sizeStr = selectedSize ? ` | Taille: ${selectedSize}` : '';
  const qtyStr = quantity > 1 ? ` | Quantité: ${quantity}` : '';
  const total = product.price * quantity;

  const message = `Salam! Bghit ncommander had le produit sur The GIRL HOUSE ✨\n\n🛍️ *${product.name}*${colorStr}${sizeStr}${qtyStr}\n💰 Prix: ${total} DH\n\n🇲🇦 Merci de me confirmer la disponibilité et le délai de livraison svp!`;

  return `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function createCartWhatsAppUrl(
  items: CartItem[],
  customerInfo?: {
    name: string;
    phone: string;
    city: string;
    address: string;
    notes?: string;
  }
): string {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= BRAND_INFO.freeShippingThreshold;
  const shipping = isFreeShipping ? 0 : BRAND_INFO.defaultShippingCost;
  const grandTotal = subtotal + shipping;

  let message = `Salam The GIRL HOUSE! Bghit ncommander had les articles svp 🛍️✨\n\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.product.name}*\n`;
    message += `   • Taille: ${item.selectedSize}\n`;
    message += `   • Couleur: ${item.selectedColor}\n`;
    message += `   • Qté: ${item.quantity} × ${item.product.price} DH = ${item.quantity * item.product.price} DH\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💵 *Sous-total:* ${subtotal} DH\n`;
  message += `🚚 *Livraison:* ${isFreeShipping ? 'GRATUITE' : `${shipping} DH`}\n`;
  message += `✨ *TOTAL À PAYER À LA LIVRAISON:* ${grandTotal} DH\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  if (customerInfo && customerInfo.name) {
    message += `\n📍 *Mes Coordonnées de Livraison:*\n`;
    message += `👤 Nom complet: ${customerInfo.name}\n`;
    message += `📞 Téléphone: ${customerInfo.phone}\n`;
    message += `🏙️ Ville: ${customerInfo.city}\n`;
    message += `🏡 Adresse: ${customerInfo.address}\n`;
    if (customerInfo.notes) {
      message += `📝 Note: ${customerInfo.notes}\n`;
    }
  }

  return `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
