import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen, viewProduct, formatPrice } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="border-b border-neutral-200 bg-white transition-all animate-fade-in shadow-lg relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Search Bar Input Row - matching screenshot 1 */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
          <div className="flex items-center gap-3.5 flex-1 mr-4">
            <Search className="w-5 h-5 text-neutral-400 stroke-[1.6]" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH FOR..."
              className="w-full text-xs sm:text-sm font-sans tracking-[0.25em] uppercase placeholder-neutral-400 text-neutral-900 bg-transparent focus:outline-none"
            />
          </div>
          
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-neutral-500 hover:text-black transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Live Search Suggestions & Results */}
        {searchTerm.trim() !== '' && (
          <div className="py-6 max-h-[60vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500">
                {filteredProducts.length} Results Found
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-neutral-400 tracking-wider text-xs">
                No luxury garments found matching "{searchTerm}". Try "Chiffon", "Aster", or "Velvet".
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      viewProduct(product);
                      setIsSearchOpen(false);
                    }}
                    className="cursor-pointer group text-left"
                  >
                    <div className="aspect-[3/4] bg-neutral-100 overflow-hidden mb-2">
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-900 group-hover:text-luxury-gold transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-[10px] tracking-wider text-neutral-500 mt-0.5">
                      {formatPrice(product.pricePKR)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

