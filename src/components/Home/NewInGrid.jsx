import React from 'react';
import { Eye, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export default function NewInGrid() {
  const { viewProduct, formatPrice, addToCart, setQuickViewProduct, viewCollection } = useShop();

  const newProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="text-center mb-8">
        <h2 className="font-luxury-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] text-neutral-900 uppercase font-light mb-2">
          NEW IN
        </h2>
        <div className="w-10 h-[1px] bg-neutral-300 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {newProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => viewProduct(product)}
            className="group cursor-pointer text-center"
          >
            {/* Image Box: Flush 3:4 aspect with absolute positioning to prevent empty gaps */}
            <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-2.5">
              <img
                src={product.primaryImage}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              />

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-2 left-2 bg-black/85 backdrop-blur-xs text-white text-[8px] tracking-widest uppercase px-2 py-0.5">
                  {product.badge}
                </span>
              )}

              {/* Quick Actions Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickViewProduct(product);
                  }}
                  className="bg-white hover:bg-black hover:text-white text-black p-2 rounded-full transition-colors shadow-md"
                  title="Quick View"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product, 1, 'UNSTITCHED / DEFAULT');
                  }}
                  className="bg-white hover:bg-black hover:text-white text-black text-[10px] tracking-wider uppercase font-medium py-1.5 px-3 rounded-full transition-colors shadow-md flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3 h-3" />
                  Quick Add
                </button>
              </div>
            </div>

            {/* Product Meta */}
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-medium text-neutral-900 group-hover:text-luxury-gold transition-colors mb-1 truncate px-1">
              {product.name}
            </h3>

            <p className="text-xs tracking-wider text-neutral-600 font-semibold">
              {formatPrice(product.pricePKR)}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => viewCollection('Chiffon')}
          className="px-8 py-3 border border-black hover:bg-black hover:text-white text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300"
        >
          VIEW ALL NEW ARRIVALS
        </button>
      </div>
    </section>
  );
}
