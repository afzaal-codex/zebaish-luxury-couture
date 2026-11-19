import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function Toast() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-[#111111] text-white px-5 py-3.5 shadow-2xl border border-neutral-700 flex items-center gap-3 text-xs tracking-wider">
        <Sparkles className="w-4 h-4 text-luxury-gold flex-shrink-0" />
        <span className="font-light">{toastMessage}</span>
      </div>
    </div>
  );
}

