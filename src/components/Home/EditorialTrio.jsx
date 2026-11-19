import React from 'react';
import { EDITORIAL_TRIO } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export default function EditorialTrio() {
  const { viewCollection } = useShop();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDITORIAL_TRIO.map((item) => (
          <div
            key={item.id}
            onClick={() => viewCollection('Chiffon')}
            className="group cursor-pointer text-center"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-3 shadow-xs">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            <h3 className="font-luxury-serif text-xl sm:text-2xl tracking-[0.2em] text-neutral-900 uppercase font-light mb-1 group-hover:text-luxury-gold transition-colors">
              {item.title}
            </h3>
            
            <p className="text-[10px] tracking-[0.15em] text-neutral-500 uppercase mb-2 font-sans">
              {item.tagline}
            </p>

            <span className="inline-block text-[10px] tracking-[0.25em] font-sans font-semibold uppercase text-black group-hover:text-luxury-gold border-b border-black group-hover:border-luxury-gold pb-0.5 transition-all">
              SHOP NOW
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
