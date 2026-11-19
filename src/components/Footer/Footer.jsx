import React, { useState } from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { BRAND } from '../../config/brand';

export default function Footer() {
  const { setActivePolicy, showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Thank you for subscribing to ${BRAND.name} Privé.`);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-800 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Column Grid - matching screenshot 5 and 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-10 border-b border-neutral-100">
          
          {/* Column 1: NEWSLETTER */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-neutral-900 mb-2.5">
              NEWSLETTER
            </h4>
            <p className="text-xs tracking-wider text-neutral-600 font-light mb-3.5 leading-relaxed">
              Sign up to our newsletter to receive exclusive offers and lookbook previews.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3.5 py-2.5 border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2.5 border border-black hover:bg-black hover:text-white text-black text-[11px] font-sans tracking-[0.25em] uppercase font-medium transition-all"
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5 text-neutral-600">
              <a
                href={BRAND.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors p-1"
                aria-label="WhatsApp Assistance"
              >
                <Phone className="w-4 h-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Column 2: POLICIES */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-neutral-900 mb-2.5">
              POLICIES
            </h4>
            <ul className="space-y-2 text-xs tracking-wider text-neutral-600 font-light">
              <li>
                <button
                  onClick={() => setActivePolicy('privacy')}
                  className="hover:text-black transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('returns')}
                  className="hover:text-black transition-colors"
                >
                  Return & Exchange Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('cancellation')}
                  className="hover:text-black transition-colors"
                >
                  Order Cancellation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('sizes')}
                  className="hover:text-black transition-colors"
                >
                  Customized Sizes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('terms')}
                  className="hover:text-black transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('shipping')}
                  className="hover:text-black transition-colors"
                >
                  Shipping Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: ABOUT */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-neutral-900 mb-2.5">
              ABOUT
            </h4>
            <p className="text-xs tracking-wider text-neutral-600 font-light leading-relaxed">
              {BRAND.description}
            </p>
            <p className="text-[10px] tracking-widest text-neutral-400 uppercase mt-3">
              Atelier: {BRAND.atelierAddress}
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-500 gap-3">
          <div>
            © 2026 - {BRAND.name} ONLINE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2.5 text-neutral-400 text-[9px] sm:text-[10px]">
            <span>VISA</span>
            <span>•</span>
            <span>MASTERCARD</span>
            <span>•</span>
            <span>UNIONPAY</span>
            <span>•</span>
            <span>COD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
