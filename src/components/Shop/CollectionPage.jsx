import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown, Check, Heart, Eye, ShoppingBag, X } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import { BRAND } from '../../config/brand';

export default function CollectionPage() {
  const {
    collectionCategory,
    setCollectionCategory,
    viewProduct,
    formatPrice,
    addToCart,
    setQuickViewProduct,
    wishlist,
    toggleWishlist
  } = useShop();

  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Filters
  const [selectedColor, setSelectedColor] = useState('ALL');
  const [selectedFabric, setSelectedFabric] = useState('ALL');
  const [priceRange, setPriceRange] = useState('ALL');

  const sortRef = useRef(null);

  // Close sort dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (collectionCategory !== 'ALL' && item.category !== collectionCategory) {
        if (collectionCategory === 'Chiffon' && item.category !== 'Chiffon') return false;
      }
      // Color filter
      if (selectedColor !== 'ALL' && !item.color.toLowerCase().includes(selectedColor.toLowerCase())) {
        return false;
      }
      // Fabric filter
      if (selectedFabric !== 'ALL' && !item.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) {
        return false;
      }
      // Price filter
      if (priceRange === 'under-10k' && item.pricePKR >= 10000) return false;
      if (priceRange === '10k-15k' && (item.pricePKR < 10000 || item.pricePKR > 15000)) return false;
      if (priceRange === 'above-15k' && item.pricePKR <= 15000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePKR - b.pricePKR;
      if (sortBy === 'price-high') return b.pricePKR - a.pricePKR;
      if (sortBy === 'name-az') return a.name.localeCompare(b.name);
      return 0; // default featured
    });
  }, [collectionCategory, selectedColor, selectedFabric, priceRange, sortBy]);

  const uniqueColors = ['ALL', 'Violet', 'Pink', 'Green', 'Plum', 'Blue', 'Merlot', 'Black', 'Ivory'];
  const uniqueFabrics = ['ALL', 'Chiffon', 'Silk', 'Organza', 'Velvet'];

  const hasActiveFilters = selectedColor !== 'ALL' || selectedFabric !== 'ALL' || priceRange !== 'ALL';

  const resetAllFilters = () => {
    setSelectedColor('ALL');
    setSelectedFabric('ALL');
    setPriceRange('ALL');
    setCollectionCategory('ALL');
  };

  return (
    <div className="bg-white min-h-screen py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="font-luxury-serif text-2xl sm:text-4xl md:text-5xl tracking-[0.25em] text-neutral-900 uppercase font-light mb-1.5">
            {collectionCategory === 'ALL' || collectionCategory === 'Chiffon'
              ? "CHIFFON ESSENTIALS '26"
              : `${collectionCategory.toUpperCase()} COLLECTION`}
          </h1>
          <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400 font-sans max-w-lg mx-auto">
            {BRAND.name} Atelier • Pure Embroidered Chiffon, Organza & Silk
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto pb-2.5 mb-5 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans border-b border-neutral-100">
          {['ALL', 'Chiffon', 'Rozana', 'Formals', 'Pret', 'Bridal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCollectionCategory(cat)}
              className={`pb-1.5 whitespace-nowrap transition-all ${
                collectionCategory === cat
                  ? 'border-b-2 border-black text-black font-semibold'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              {cat === 'ALL' ? 'ALL PRODUCTS' : cat}
            </button>
          ))}
        </div>

        {/* Filter and Sort Bar - matching screenshot 1 */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-6 text-xs tracking-[0.18em] uppercase text-neutral-800">
          
          {/* Left: Product Count */}
          <div className="font-medium text-neutral-600 text-[11px] sm:text-xs">
            {filteredProducts.length} PRODUCTS
          </div>

          {/* Right: SORT BY and FILTER buttons */}
          <div className="flex items-center gap-5 sm:gap-6">
            
            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors font-medium focus:outline-none text-[11px] sm:text-xs"
              >
                <span>SORT BY</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 shadow-xl py-1.5 z-40 animate-fade-in text-[11px] tracking-wider normal-case">
                  {[
                    { key: 'featured', label: 'Featured' },
                    { key: 'price-low', label: 'Price: Low to High' },
                    { key: 'price-high', label: 'Price: High to Low' },
                    { key: 'name-az', label: 'Alphabetical: A-Z' },
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => {
                        setSortBy(option.key);
                        setIsSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-50 flex items-center justify-between text-neutral-700"
                    >
                      <span>{option.label}</span>
                      {sortBy === option.key && <Check className="w-3.5 h-3.5 text-black" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* FILTER button */}
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors font-medium text-[11px] sm:text-xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FILTER</span>
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              )}
            </button>

          </div>
        </div>

        {/* Collection Grid - on mobile single column stream exactly matching screenshot 3 */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-4">
              No garments found matching the selected filters.
            </p>
            <button
              onClick={resetAllFilters}
              className="text-xs tracking-widest uppercase border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all font-medium"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-14">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.some(w => w.id === product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => viewProduct(product)}
                  className="group cursor-pointer flex flex-col items-center text-center"
                >
                  {/* Image Container: Flush portrait aspect ratio with NO blank space */}
                  <div className="relative w-full aspect-[3/4.2] overflow-hidden bg-neutral-100 mb-2.5">
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Secondary Image on Hover */}
                    {product.secondaryImage && (
                      <img
                        src={product.secondaryImage}
                        alt={`${product.name} look`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                      />
                    )}

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-black text-[9px] font-sans tracking-[0.2em] uppercase px-2 py-0.5 shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/80 hover:bg-white text-neutral-800 transition-colors shadow-xs"
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Carousel Dot Indicator under image - matching mobile screenshot 3 */}
                  <div className="flex items-center justify-center gap-1.5 mb-2 opacity-60">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-sans text-xs tracking-[0.22em] uppercase font-medium text-neutral-900 group-hover:text-luxury-gold transition-colors mb-1">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="font-sans text-xs tracking-[0.15em] font-semibold text-neutral-800">
                    {formatPrice(product.pricePKR)}
                  </p>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* FILTER DRAWER SLIDE-OVER */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsFilterDrawerOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl flex flex-col z-10 animate-slide-in-right">
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-neutral-700" />
                <h3 className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-neutral-900">
                  FILTERS
                </h3>
              </div>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="p-1.5 text-neutral-500 hover:text-black"
                aria-label="Close filters"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
              
              {/* Color filter */}
              <div>
                <p className="tracking-[0.2em] uppercase font-semibold text-neutral-900 mb-3">
                  Color Shade
                </p>
                <div className="flex flex-wrap gap-2">
                  {uniqueColors.map((clr) => (
                    <button
                      key={clr}
                      onClick={() => setSelectedColor(clr)}
                      className={`px-3 py-1.5 uppercase tracking-wider text-[11px] border transition-all ${
                        selectedColor === clr
                          ? 'border-black bg-black text-white font-medium'
                          : 'border-neutral-200 text-neutral-700 hover:border-black'
                      }`}
                    >
                      {clr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric filter */}
              <div className="pt-4 border-t border-neutral-100">
                <p className="tracking-[0.2em] uppercase font-semibold text-neutral-900 mb-3">
                  Fabric Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {uniqueFabrics.map((fb) => (
                    <button
                      key={fb}
                      onClick={() => setSelectedFabric(fb)}
                      className={`px-3 py-1.5 uppercase tracking-wider text-[11px] border transition-all ${
                        selectedFabric === fb
                          ? 'border-black bg-black text-white font-medium'
                          : 'border-neutral-200 text-neutral-700 hover:border-black'
                      }`}
                    >
                      {fb}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div className="pt-4 border-t border-neutral-100">
                <p className="tracking-[0.2em] uppercase font-semibold text-neutral-900 mb-3">
                  Price Range
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'ALL', label: 'All Prices' },
                    { id: 'under-10k', label: 'Under RS 10,000' },
                    { id: '10k-15k', label: 'RS 10,000 - RS 15,000' },
                    { id: 'above-15k', label: 'Above RS 15,000' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPriceRange(p.id)}
                      className={`w-full text-left px-3 py-2 border transition-all flex items-center justify-between text-[11px] tracking-wider uppercase ${
                        priceRange === p.id
                          ? 'border-black bg-neutral-50 text-black font-semibold'
                          : 'border-neutral-200 text-neutral-600 hover:border-black'
                      }`}
                    >
                      <span>{p.label}</span>
                      {priceRange === p.id && <Check className="w-3.5 h-3.5 text-black" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-5 border-t border-neutral-100 bg-neutral-50 flex gap-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-3 border border-neutral-300 text-black text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-neutral-100"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="flex-1 py-3 bg-black text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-neutral-800"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
