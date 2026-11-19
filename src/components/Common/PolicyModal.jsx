import React from 'react';
import { X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { POLICIES_DATA } from '../../data/products';

export default function PolicyModal() {
  const { activePolicy, setActivePolicy } = useShop();

  if (!activePolicy || !POLICIES_DATA[activePolicy]) return null;

  const policy = POLICIES_DATA[activePolicy];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setActivePolicy(null)}
      />

      <div className="relative bg-white max-w-xl w-full p-8 shadow-2xl z-10 animate-fade-in border border-neutral-200">
        <button
          onClick={() => setActivePolicy(null)}
          className="absolute right-4 top-4 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <h3 className="font-luxury-serif text-2xl tracking-[0.2em] uppercase text-neutral-900 mb-4 font-light">
          {policy.title}
        </h3>

        <div className="w-10 h-[1px] bg-luxury-gold mb-6"></div>

        <p className="text-xs sm:text-sm tracking-wider text-neutral-600 font-light leading-relaxed whitespace-pre-line">
          {policy.content}
        </p>

        <div className="mt-8 pt-4 border-t border-neutral-100 text-right">
          <button
            onClick={() => setActivePolicy(null)}
            className="px-6 py-2.5 bg-black text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-800 transition-colors"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
}

