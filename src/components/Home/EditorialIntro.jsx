import React from 'react';
import { BRAND } from '../../config/brand';

export default function EditorialIntro() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <div className="w-10 h-[1px] bg-luxury-gold mx-auto mb-4"></div>
      
      <h2 className="font-luxury-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.22em] text-neutral-900 uppercase font-light mb-4">
        ELEGANCE MEETS TRADITION
      </h2>

      <p className="text-xs sm:text-sm tracking-[0.1em] text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
        {BRAND.name} is a formal clothing brand rooted in heritage craftsmanship and modern grace.
        Infused with intricate hand-embroidery, delicate organza drapes, and hand-selected pure silks,
        each silhouette captures timeless royal decadence.
      </p>
    </section>
  );
}
