import React, { useState, useEffect } from 'react';
import { X, ChevronRight, Phone } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CURRENCIES } from '../../data/products';
import { BRAND } from '../../config/brand';

export default function MobileMenuDrawer() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    viewCollection,
    setCurrentPage,
    setActivePolicy,
    currency,
    setCurrency
  } = useShop();

  // Handle smooth enter and exit animation
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsOpen(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
      const timer = setTimeout(() => setShouldRender(false), 320);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  if (!shouldRender) return null;

  const navItems = [
    { label: "CHIFFON ESSENTIALS '26", category: "Chiffon", highlight: true },
    { label: "ZARRIN LUXURY VELVET '26", category: "Velvet" },
    { label: "ROZANA '26", category: "Rozana" },
    { label: `${BRAND.name} FORMALS`, category: "Formals" },
    { label: "READY TO WEAR", category: "Pret" },
    { label: "BRIDAL COUTURE", category: "Bridal" },
    { label: "VIEW ALL PRODUCTS", category: "ALL" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with smooth fade in and fade out */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Drawer content: slides in from LEFT (-translate-x-full to translate-x-0) and slides out to LEFT */}
      <div
        className={`fixed inset-y-0 left-0 max-w-sm w-full bg-white shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-sans">Menu</span>
            <h2 className="font-brand-title text-lg tracking-[0.28em] text-black uppercase mt-0.5">
              {BRAND.name}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-neutral-600 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-neutral-100">
          <div className="space-y-4 pb-6">
            <button
              onClick={() => {
                setCurrentPage('home');
                handleClose();
              }}
              className="w-full text-left text-[13px] tracking-[0.22em] uppercase font-sans font-medium text-neutral-900 hover:text-luxury-gold transition-colors flex items-center justify-between"
            >
              <span>HOME</span>
              <ChevronRight className="w-4 h-4 text-neutral-300" />
            </button>

            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  viewCollection(item.category);
                  handleClose();
                }}
                className={`w-full text-left text-[13px] tracking-[0.22em] uppercase font-sans transition-colors flex items-center justify-between ${
                  item.highlight
                    ? 'font-semibold text-neutral-900 text-luxury-gold'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-300" />
              </button>
            ))}
          </div>

          {/* Luxury Atelier Details */}
          <div className="pt-6 space-y-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-medium">Customer Atelier</p>
            
            <button
              onClick={() => {
                setActivePolicy('sizes');
                handleClose();
              }}
              className="block text-left text-xs tracking-[0.15em] text-neutral-600 hover:text-black uppercase"
            >
              Custom Sizing & Tailoring
            </button>
            <button
              onClick={() => {
                setActivePolicy('shipping');
                handleClose();
              }}
              className="block text-left text-xs tracking-[0.15em] text-neutral-600 hover:text-black uppercase"
            >
              Shipping & Track Order
            </button>
            <button
              onClick={() => {
                setActivePolicy('returns');
                handleClose();
              }}
              className="block text-left text-xs tracking-[0.15em] text-neutral-600 hover:text-black uppercase"
            >
              Returns & Exchanges
            </button>
          </div>

          {/* Currency selection for mobile */}
          <div className="pt-6">
            <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-medium mb-3">Currency</p>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(CURRENCIES).map((cCode) => (
                <button
                  key={cCode}
                  onClick={() => setCurrency(cCode)}
                  className={`text-[10px] tracking-wider py-1.5 border transition-all ${
                    currency === cCode
                      ? 'border-black bg-black text-white font-medium'
                      : 'border-neutral-200 text-neutral-600 hover:border-black'
                  }`}
                >
                  {cCode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-100 text-center">
          <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-2">
            Bespoke WhatsApp Assistance
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-black bg-white border border-neutral-300 py-2.5 px-4 w-full hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-green-600" />
            {BRAND.supportPhone}
          </a>
        </div>

      </div>
    </div>
  );
}
