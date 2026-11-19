import React, { useState } from 'react';
import { Minus, Plus, Search, Check, ChevronRight, X, Ruler } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { BRAND } from '../../config/brand';

export default function ProductDetailPage() {
  const {
    selectedProduct,
    formatPrice,
    addToCart,
    setCurrentPage,
    viewProduct
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productType, setProductType] = useState('Unstitched'); // 'Unstitched' or 'Stitched'
  const [liningOption, setLiningOption] = useState('Without Lining'); // 'Without Lining' or 'With Lining'
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Accordion open/close state - exactly matching screenshot 2
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const handleAddToCart = () => {
    const variantLabel = productType === 'Unstitched'
      ? `UNSTITCHED / ${liningOption.toUpperCase()}`
      : `STITCHED / SIZE ${selectedSize}`;

    addToCart(product, quantity, variantLabel, selectedSize, productType.toUpperCase());
  };

  const handleBuyItNow = () => {
    const variantLabel = productType === 'Unstitched'
      ? `UNSTITCHED / ${liningOption.toUpperCase()}`
      : `STITCHED / SIZE ${selectedSize}`;

    addToCart(product, quantity, variantLabel, selectedSize, productType.toUpperCase());
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const images = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.primaryImage];

  // Related products
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-8">
        
        {/* Main Product Container - on mobile single column exactly matching screenshot 2 */}
        <div className="space-y-5">
          
          {/* Product Image Carousel - matching screenshot 2 */}
          <div className="relative">
            <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-neutral-100">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-top select-none cursor-pointer"
                onClick={() => setIsZoomOpen(true)}
              />

              {/* Dark circular zoom icon in top right - matching screenshot 2 */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center transition-all shadow-md z-10"
                aria-label="Zoom image"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Carousel Dot Indicators - matching screenshot 2: • • • • • • • */}
            <div className="flex items-center justify-center gap-2 pt-3 pb-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    currentImageIndex === idx ? 'bg-black w-2 h-2' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Title & Price - matching screenshot 2 */}
          <div className="text-left pt-1">
            <h1 className="font-luxury-serif text-xl sm:text-2xl tracking-[0.25em] text-neutral-900 uppercase font-normal mb-1">
              {product.name}
            </h1>
            <p className="font-sans text-sm sm:text-base tracking-[0.15em] font-semibold text-neutral-900">
              {formatPrice(product.pricePKR)}
            </p>
          </div>

          <div className="w-full h-[1px] bg-neutral-200/80"></div>

          {/* Type Selector - matching screenshot 2 */}
          <div className="text-left space-y-1.5">
            <label className="block text-[11px] tracking-wider text-neutral-700 font-sans">
              Type:
            </label>
            <div className="flex gap-2">
              {['Unstitched', 'Stitched'].map((type) => (
                <button
                  key={type}
                  onClick={() => setProductType(type)}
                  className={`px-4 py-2 text-xs font-sans tracking-wide transition-all border ${
                    productType === type
                      ? 'border-neutral-900 bg-white text-black font-medium shadow-xs'
                      : 'border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Size / Lining Selector - matching screenshot 2 */}
          <div className="text-left space-y-1.5">
            <label className="block text-[11px] tracking-wider text-neutral-700 font-sans">
              {productType === 'Unstitched' ? 'Size:' : 'Select Size:'}
            </label>

            {productType === 'Unstitched' ? (
              <div className="flex gap-2">
                {['Without Lining', 'With Lining'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setLiningOption(opt)}
                    className={`px-4 py-2 text-xs font-sans tracking-wide transition-all border ${
                      liningOption === opt
                        ? 'border-neutral-900 bg-white text-black font-medium shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'CUSTOM'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-11 h-9 flex items-center justify-center text-xs font-sans tracking-wide transition-all border ${
                      selectedSize === sz
                        ? 'border-neutral-900 bg-black text-white font-medium'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quantity Selector & Size Chart Link - matching screenshot 2 */}
          <div className="flex items-center justify-between pt-1">
            {/* [-  1  +] box */}
            <div className="inline-flex items-center border border-neutral-300 bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-8 text-center text-xs font-sans font-medium text-black">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-black transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Size Chart Underline Link - matching screenshot 2 */}
            <button
              onClick={() => setIsSizeChartOpen(true)}
              className="text-xs font-sans tracking-wide text-neutral-800 underline underline-offset-4 hover:text-black font-medium"
            >
              Size Chart
            </button>
          </div>

          {/* Action Buttons: ADD TO CART & BUY IT NOW - matching screenshot 2 */}
          <div className="space-y-2.5 pt-2">
            {/* White ADD TO CART Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-900 text-xs font-sans font-medium tracking-[0.25em] uppercase transition-all"
            >
              ADD TO CART
            </button>

            {/* Black BUY IT NOW Button */}
            <button
              onClick={handleBuyItNow}
              className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-sans font-medium tracking-[0.25em] uppercase transition-all shadow-xs"
            >
              BUY IT NOW
            </button>
          </div>

          {/* Collapsible Accordions with + icon - matching screenshot 2 */}
          <div className="border-t border-neutral-200 divide-y divide-neutral-200 pt-1 text-xs">
            
            {/* DESCRIPTION */}
            <div>
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full py-3 flex items-center justify-between text-left font-sans tracking-[0.18em] uppercase font-normal text-neutral-800"
              >
                <span>DESCRIPTION</span>
                <span className="text-sm font-light text-neutral-500">
                  {openAccordion === 'description' ? '−' : '+'}
                </span>
              </button>
              {openAccordion === 'description' && (
                <div className="pb-3 text-neutral-600 font-light leading-relaxed animate-fade-in text-left">
                  <p>{product.description}</p>
                  <p className="mt-2 text-neutral-900 font-medium">Color: {product.color}</p>
                  <p className="text-neutral-900 font-medium">Fabric: {product.fabric}</p>
                </div>
              )}
            </div>

            {/* MODEL SIZE */}
            <div>
              <button
                onClick={() => toggleAccordion('modelSize')}
                className="w-full py-3 flex items-center justify-between text-left font-sans tracking-[0.18em] uppercase font-normal text-neutral-800"
              >
                <span>MODEL SIZE</span>
                <span className="text-sm font-light text-neutral-500">
                  {openAccordion === 'modelSize' ? '−' : '+'}
                </span>
              </button>
              {openAccordion === 'modelSize' && (
                <div className="pb-3 text-neutral-600 font-light leading-relaxed animate-fade-in text-left">
                  <p>Model is 5'8" tall and wearing size Small (Length: 48 inches).</p>
                </div>
              )}
            </div>

            {/* PLEASE NOTE */}
            <div>
              <button
                onClick={() => toggleAccordion('pleaseNote')}
                className="w-full py-3 flex items-center justify-between text-left font-sans tracking-[0.18em] uppercase font-normal text-neutral-800"
              >
                <span>PLEASE NOTE</span>
                <span className="text-sm font-light text-neutral-500">
                  {openAccordion === 'pleaseNote' ? '−' : '+'}
                </span>
              </button>
              {openAccordion === 'pleaseNote' && (
                <div className="pb-3 text-neutral-600 font-light leading-relaxed animate-fade-in text-left space-y-1">
                  <p>• Actual product color may vary slightly due to studio lighting and monitor calibration.</p>
                  <p>• Custom stitched suits cannot be refunded or exchanged once processed.</p>
                  <p>• Embellishments and laces may vary slightly based on seasonal craft availability.</p>
                </div>
              )}
            </div>

            {/* DELIVERY INFORMATION */}
            <div>
              <button
                onClick={() => toggleAccordion('delivery')}
                className="w-full py-3 flex items-center justify-between text-left font-sans tracking-[0.18em] uppercase font-normal text-neutral-800"
              >
                <span>DELIVERY INFORMATION</span>
                <span className="text-sm font-light text-neutral-500">
                  {openAccordion === 'delivery' ? '−' : '+'}
                </span>
              </button>
              {openAccordion === 'delivery' && (
                <div className="pb-3 text-neutral-600 font-light leading-relaxed animate-fade-in text-left">
                  <p>• Domestic Delivery: 3 to 5 working days (FREE across Pakistan).</p>
                  <p className="mt-1">• International Express Delivery: 7 to 10 working days via DHL.</p>
                </div>
              )}
            </div>

            {/* EXCHANGE */}
            <div>
              <button
                onClick={() => toggleAccordion('exchange')}
                className="w-full py-3 flex items-center justify-between text-left font-sans tracking-[0.18em] uppercase font-normal text-neutral-800"
              >
                <span>EXCHANGE</span>
                <span className="text-sm font-light text-neutral-500">
                  {openAccordion === 'exchange' ? '−' : '+'}
                </span>
              </button>
              {openAccordion === 'exchange' && (
                <div className="pb-3 text-neutral-600 font-light leading-relaxed animate-fade-in text-left">
                  <p>Exchange requests are accepted within 7 days of package delivery for unworn items with security tags attached.</p>
                </div>
              )}
            </div>

          </div>

          {/* RELATED PRODUCTS - matching screenshot 2 */}
          <div className="pt-10 pb-4 text-center">
            <h2 className="font-luxury-serif text-lg sm:text-xl tracking-[0.25em] uppercase text-neutral-900 font-normal mb-6">
              RELATED PRODUCTS
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => viewProduct(rel)}
                  className="group cursor-pointer text-center"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-2">
                    <img
                      src={rel.primaryImage}
                      alt={rel.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[11px] font-sans tracking-[0.2em] uppercase font-medium text-neutral-900 group-hover:text-luxury-gold transition-colors mb-0.5 truncate">
                    {rel.name}
                  </h3>
                  <p className="text-[11px] tracking-wider text-neutral-600 font-medium">
                    {formatPrice(rel.pricePKR)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
            aria-label="Close zoom"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsSizeChartOpen(false)}
          />
          <div className="relative bg-white max-w-md w-full p-6 shadow-2xl z-10 animate-fade-in border border-neutral-200">
            <button
              onClick={() => setIsSizeChartOpen(false)}
              className="absolute right-4 top-4 p-1.5 text-neutral-400 hover:text-black"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
            <h3 className="font-luxury-serif text-xl tracking-[0.2em] uppercase text-neutral-900 mb-4 font-light text-center">
              SIZE CHART (INCHES)
            </h3>
            <div className="overflow-x-auto text-[11px] text-neutral-700">
              <table className="w-full text-center border border-neutral-200">
                <thead className="bg-neutral-100 uppercase tracking-wider font-medium text-black">
                  <tr>
                    <th className="p-2 border">Size</th>
                    <th className="p-2 border">Bust</th>
                    <th className="p-2 border">Waist</th>
                    <th className="p-2 border">Hips</th>
                    <th className="p-2 border">Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border font-semibold">XS</td><td className="p-2 border">34"</td><td className="p-2 border">28"</td><td className="p-2 border">36"</td><td className="p-2 border">48"</td></tr>
                  <tr><td className="p-2 border font-semibold">S</td><td className="p-2 border">36"</td><td className="p-2 border">30"</td><td className="p-2 border">38"</td><td className="p-2 border">48"</td></tr>
                  <tr><td className="p-2 border font-semibold">M</td><td className="p-2 border">39"</td><td className="p-2 border">33"</td><td className="p-2 border">41"</td><td className="p-2 border">49"</td></tr>
                  <tr><td className="p-2 border font-semibold">L</td><td className="p-2 border">42"</td><td className="p-2 border">36"</td><td className="p-2 border">44"</td><td className="p-2 border">49"</td></tr>
                  <tr><td className="p-2 border font-semibold">XL</td><td className="p-2 border">45"</td><td className="p-2 border">39"</td><td className="p-2 border">47"</td><td className="p-2 border">50"</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] tracking-wider text-neutral-500 text-center mt-4">
              All measurements are in inches. Custom tailoring also available upon request.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
