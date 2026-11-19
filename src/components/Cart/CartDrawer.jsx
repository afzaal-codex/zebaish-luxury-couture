import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotalPKR,
    cartTotalPKR,
    formatPrice,
    orderNote,
    setOrderNote,
    setCurrentPage
  } = useShop();

  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsOpen(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
      const timer = setTimeout(() => setShouldRender(false), 320);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  const handleClose = () => {
    setIsCartOpen(false);
  };

  if (!shouldRender) return null;

  // Free shipping threshold
  const freeIntlThreshold = 150000;
  const progressPercent = Math.min(100, Math.round((cartSubtotalPKR / freeIntlThreshold) * 100));
  const remainingForFree = Math.max(0, freeIntlThreshold - cartSubtotalPKR);

  const handleCheckoutClick = () => {
    handleClose();
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Dimmed Backdrop with fade */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Cart Drawer Right Side with smooth slide in / slide out */}
      <div
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-[#111111] text-white shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <h2 className="text-sm font-sans tracking-[0.25em] font-medium uppercase text-white">
            CART
          </h2>
          <button
            onClick={handleClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-neutral-900 px-6 py-3 border-b border-neutral-800">
          <div className="flex justify-between items-center text-[10px] tracking-wider uppercase mb-1.5 text-neutral-300">
            <span>Free Domestic Shipping in Pakistan</span>
            <span className="text-luxury-gold font-medium">Free</span>
          </div>
          {remainingForFree > 0 ? (
            <p className="text-[10px] tracking-wider text-neutral-400">
              Add <span className="text-white font-medium">{formatPrice(remainingForFree)}</span> more for Free Worldwide Express Delivery
            </p>
          ) : (
            <p className="text-[10px] tracking-wider text-green-400 font-medium">
              You've unlocked Free Worldwide Express Delivery!
            </p>
          )}
          <div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
            <div
              className="bg-luxury-gold h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-neutral-800 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-12 h-12 text-neutral-600 stroke-[1] mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">
                Your luxury bag is empty
              </p>
              <p className="text-[11px] text-neutral-500 max-w-xs mb-6">
                Explore our festive chiffon & couture collections to discover timeless pieces.
              </p>
              <button
                onClick={() => {
                  handleClose();
                  setCurrentPage('collection');
                }}
                className="text-[11px] tracking-[0.2em] uppercase bg-white text-black py-3 px-6 hover:bg-luxury-gold hover:text-white transition-all font-medium"
              >
                DISCOVER COLLECTION
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="pt-6 first:pt-0 flex gap-4">
                <div className="w-24 h-32 flex-shrink-0 bg-neutral-900 overflow-hidden">
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-sans tracking-[0.2em] uppercase font-medium text-white mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-xs tracking-wider text-neutral-300 font-semibold mb-1">
                      {formatPrice(item.product.pricePKR)}
                    </p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-3">
                      {item.variant}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-neutral-700 bg-black/40">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-sans font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[11px] tracking-wider text-neutral-400 hover:text-white underline underline-offset-2 transition-colors font-sans"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Area with Add Order Note & Checkout Button */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#0a0a0a] border-t border-neutral-800 space-y-4">
            
            {/* Add order note expandable */}
            <div>
              <button
                onClick={() => setIsNoteOpen(!isNoteOpen)}
                className="text-[11px] tracking-wider text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                {isNoteOpen ? "Hide order note" : "Add order note"}
              </button>
              
              {isNoteOpen && (
                <div className="mt-2 animate-fade-in">
                  <textarea
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Provide custom measurements or special delivery instructions..."
                    rows={2}
                    className="w-full text-xs bg-neutral-900 border border-neutral-700 text-white p-2.5 rounded-none placeholder-neutral-500 focus:outline-none focus:border-white"
                  />
                </div>
              )}
            </div>

            <p className="text-[10px] tracking-wider text-neutral-400">
              Taxes and shipping calculated at checkout
            </p>

            {/* Checkout Button with Price */}
            <button
              onClick={handleCheckoutClick}
              className="w-full py-4 px-6 bg-white hover:bg-neutral-200 text-black font-sans font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
            >
              <span>CHECKOUT</span>
              <span>•</span>
              <span>{formatPrice(cartTotalPKR)}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
