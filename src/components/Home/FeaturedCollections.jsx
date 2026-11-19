import React from 'react';
import { FEATURED_CATEGORIES } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export default function FeaturedCollections() {
  const { viewCollection } = useShop();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {FEATURED_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => viewCollection(cat.filter)}
            className="group relative h-[420px] sm:h-[520px] overflow-hidden cursor-pointer bg-neutral-900 shadow-sm"
          >
            {/* Image with zoom effect */}
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Bottom Content Box - matching screenshot 6 */}
            <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex flex-col items-center text-center px-4 z-10">
              <h3 className="font-luxury-serif text-2xl sm:text-3xl tracking-[0.25em] text-white uppercase font-light mb-1.5 drop-shadow">
                {cat.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] tracking-[0.18em] text-neutral-300 uppercase mb-4 font-sans">
                {cat.subtitle}
              </p>

              {/* White SHOP NOW Button - matching screenshot 6 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  viewCollection(cat.filter);
                }}
                className="px-8 py-2.5 bg-white text-black text-[11px] font-sans font-medium tracking-[0.25em] uppercase hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-md"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
