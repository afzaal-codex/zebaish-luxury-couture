import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export default function HeroBanner() {
  const { viewCollection } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[88vh] overflow-hidden bg-black select-none">
      {/* Background Image with smooth fade & subtle zoom */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={slide.image}
          alt={slide.collection}
          className="w-full h-full object-cover object-top opacity-80 scale-100 transition-transform duration-7000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Hero Content - matching screenshot 6 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
        <span className="text-[10px] sm:text-[12px] tracking-[0.35em] uppercase text-luxury-lightGold font-sans mb-3 opacity-90">
          AUTUMN / WINTER COUTURE
        </span>
        
        <h2 className="font-luxury-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.2em] font-light text-white uppercase max-w-4xl mb-4 drop-shadow-md">
          {slide.collection}
        </h2>

        <p className="text-xs sm:text-sm tracking-[0.12em] text-neutral-200 max-w-xl mx-auto mb-8 font-light hidden sm:block">
          {slide.tagline}
        </p>

        {/* Discover Now Button - matching screenshot 6 */}
        <button
          onClick={() => viewCollection(slide.category)}
          className="px-8 sm:px-12 py-3.5 sm:py-4 bg-black/70 hover:bg-white hover:text-black text-white border border-white/60 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-sans font-medium transition-all duration-300 backdrop-blur-xs"
        >
          {slide.linkText}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 transition-colors z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 stroke-[1.2]" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 transition-colors z-20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 stroke-[1.2]" />
      </button>

      {/* Carousel Dots - matching screenshot 1 & 6 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-6 bg-white' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

