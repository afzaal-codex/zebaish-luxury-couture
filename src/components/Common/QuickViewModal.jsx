import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    formatPrice,
    addToCart,
    viewProduct
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [productType, setProductType] = useState('UNSTITCHED');

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    const variantLabel = productType === 'UNSTITCHED' ? 'UNSTITCHED / DEFAULT' : 'STITCHED / DEFAULT';
    addToCart(quickViewProduct, quantity, variantLabel, 'DEFAULT', productType);
    setQuickViewProduct(null);
  };

  const handleFullView = () => {
    viewProduct(quickViewProduct);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative bg-white max-w-3xl w-full p-6 sm:p-8 shadow-2xl z-10 animate-fade-in border border-neutral-200">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute right-4 top-4 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
            <img
              src={quickViewProduct.primaryImage}
              alt={quickViewProduct.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Details */}
          <div className="space-y-3.5 text-left">
            <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-sans block">
              {quickViewProduct.collection}
            </span>

            <h3 className="font-luxury-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase text-neutral-900 font-light">
              {quickViewProduct.name}
            </h3>

            <p className="font-sans text-lg tracking-[0.15em] font-medium text-neutral-900">
              {formatPrice(quickViewProduct.pricePKR)}
            </p>

            <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3">
              {quickViewProduct.description}
            </p>

            {/* Type selector */}
            <div className="flex gap-2 pt-1">
              {['UNSTITCHED', 'STITCHED'].map((t) => (
                <button
                  key={t}
                  onClick={() => setProductType(t)}
                  className={`flex-1 py-2 text-[11px] tracking-wider uppercase border transition-all ${
                    productType === t ? 'border-black bg-black text-white' : 'border-neutral-300 text-neutral-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[10px] tracking-widest uppercase text-neutral-500">QTY:</span>
              <div className="flex items-center border border-neutral-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-neutral-500 hover:text-black"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-neutral-500 hover:text-black"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2 pt-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG</span>
              </button>

              <button
                onClick={handleFullView}
                className="w-full py-2 text-center text-[11px] tracking-widest text-neutral-600 hover:text-black underline uppercase"
              >
                VIEW FULL DETAILS & LOOKBOOK
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
