import React from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeChart = [
    { eu: '36', cm: '23.0 cm', uk: '3.5', us: '5.5' },
    { eu: '37', cm: '23.5 - 24.0 cm', uk: '4.0', us: '6.0' },
    { eu: '38', cm: '24.5 cm', uk: '5.0', us: '7.0' },
    { eu: '39', cm: '25.0 cm', uk: '6.0', us: '8.0' },
    { eu: '40', cm: '25.5 - 26.0 cm', uk: '6.5', us: '8.5' },
    { eu: '41', cm: '26.5 cm', uk: '7.5', us: '9.5' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-900 p-1.5 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-rose-500">
              The GIRL HOUSE · Guide des Tailles
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Comment choisir votre pointure ?
            </h3>
            <p className="text-xs text-stone-500">
              Nos sabots Birkenstock et sandales taillent selon les standards européens classiques.
            </p>
          </div>

          {/* Size Chart Table */}
          <div className="overflow-x-auto border border-stone-200 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold">
                <tr>
                  <th className="py-2.5 px-3">Pointure (EU / Maroc)</th>
                  <th className="py-2.5 px-3">Longueur du pied (cm)</th>
                  <th className="py-2.5 px-3">UK</th>
                  <th className="py-2.5 px-3">US</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-mono text-stone-600 tabular-nums">
                {sizeChart.map((row) => (
                  <tr key={row.eu} className="hover:bg-stone-50/50">
                    <td className="py-2.5 px-3 font-bold text-stone-900">{row.eu}</td>
                    <td className="py-2.5 px-3">{row.cm}</td>
                    <td className="py-2.5 px-3">{row.uk}</td>
                    <td className="py-2.5 px-3">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Advice */}
          <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/60 text-xs space-y-2 text-amber-950">
            <div className="font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Conseils de notre équipe :</span>
            </div>
            <ul className="space-y-1 pl-4 list-disc text-amber-900/90 leading-relaxed">
              <li>Si vous hésitez entre deux pointures, nous conseillons de prendre la pointure au-dessus si vous comptez porter vos sabots avec des chaussettes épaisses.</li>
              <li>Pour les sandales Model 2 et Model 3, prenez votre pointure marocaine habituelle.</li>
              <li><strong className="text-stone-900">Échange garanti :</strong> si la pointure ne vous convient pas à la réception, nous effectuons l&apos;échange sous 48h !</li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            J&apos;ai compris ma pointure
          </button>
        </div>
      </div>
    </div>
  );
};
