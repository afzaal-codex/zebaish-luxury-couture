import React from 'react';
import { BRAND } from '../../config/brand';

export default function BrandPhilosophy() {
  return (
    <section className="bg-neutral-50/70 border-y border-neutral-100 py-12 px-4 sm:px-6 lg:px-8 text-center my-4">
      <div className="max-w-3xl mx-auto">
        <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-sans block mb-3">
          ARTISANAL PHILOSOPHY
        </span>

        <p className="font-luxury-serif text-lg sm:text-2xl text-neutral-800 italic leading-relaxed mb-4 font-light">
          "Each {BRAND.name} creation is an architectural poetry of thread, needle, and pure silk fabric — honoring the ancestral heritage of subcontinental royal drapes while catering to the modern global muse."
        </p>

        <p className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase font-sans">
          {BRAND.name} ATELIER • LAHORE • KARACHI • DUBAI • LONDON
        </p>

        {/* Carousel indicator dots - matching screenshot 6 */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
        </div>
      </div>
    </section>
  );
}
