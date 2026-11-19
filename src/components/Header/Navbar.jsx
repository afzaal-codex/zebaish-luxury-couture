import React, { useState, useRef, useEffect } from 'react';
import { Search, User, ShoppingBag, ChevronDown, Check } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CURRENCIES } from '../../data/products';
import { BRAND } from '../../config/brand';

export default function Navbar() {
  const {
    currency,
    setCurrency,
    cartTotalCount,
    setIsCartOpen,
    isSearchOpen,
    setIsSearchOpen,
    setIsMenuOpen,
    setIsLoginModalOpen,
    setCurrentPage,
    user,
    logoutUser
  } = useShop();

  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const currencyRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsCurrencyDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: MENU Button with Hamburger - exactly matching mobile screenshot 1 */}
        <div className="flex items-center min-w-[70px]">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-neutral-900 hover:text-neutral-600 transition-colors py-1.5 group focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <div className="flex flex-col gap-[3px] w-[18px] justify-center items-start">
              <span className="w-[18px] h-[1.5px] bg-black transition-all group-hover:w-3.5"></span>
              <span className="w-3 h-[1.5px] bg-black transition-all group-hover:w-[18px]"></span>
              <span className="w-[18px] h-[1.5px] bg-black transition-all group-hover:w-3"></span>
            </div>
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase pt-0.5 text-black">
              MENU
            </span>
          </button>
        </div>

        {/* Center: Brand Logo with Butterfly Insignia */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer select-none"
          onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          {/* Delicate luxury butterfly emblem */}
          <div className="w-6 h-4 sm:w-7 sm:h-5 mb-0.5 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-luxury-gold"
            >
              <path d="M50 35 C42 12, 18 8, 10 22 C3 34, 15 50, 48 40" fill="#FAF6F0" fillOpacity="0.7" />
              <path d="M48 41 C32 44, 20 54, 25 67 C30 76, 42 70, 49 50" fill="#FAF6F0" fillOpacity="0.5" />
              <path d="M50 35 C58 12, 82 8, 90 22 C97 34, 85 50, 52 40" fill="#FAF6F0" fillOpacity="0.7" />
              <path d="M52 41 C68 44, 80 54, 75 67 C70 76, 58 70, 51 50" fill="#FAF6F0" fillOpacity="0.5" />
              <line x1="50" y1="28" x2="50" y2="55" stroke="#111111" strokeWidth="4" />
              <path d="M49 28 Q44 18 36 17" stroke="#111111" strokeWidth="2.5" />
              <path d="M51 28 Q56 18 64 17" stroke="#111111" strokeWidth="2.5" />
            </svg>
          </div>

          <h1 className="font-brand-title text-lg sm:text-2xl tracking-[0.3em] font-light text-black hover:opacity-90 transition-opacity uppercase">
            {BRAND.name}
          </h1>
        </div>

        {/* Right: Search and Cart Bag - On mobile exactly matching screenshot 1 */}
        <div className="flex items-center justify-end gap-3.5 sm:gap-5 min-w-[70px] text-neutral-800">
          
          {/* Currency Dropdown (Desktop only) */}
          <div className="relative hidden md:block" ref={currencyRef}>
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center gap-1 text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-700 hover:text-black py-1.5 focus:outline-none"
            >
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-200 shadow-xl py-1 z-50 animate-fade-in">
                {Object.keys(CURRENCIES).map((curCode) => (
                  <button
                    key={curCode}
                    onClick={() => {
                      setCurrency(curCode);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-[11px] tracking-[0.15em] hover:bg-neutral-50 flex items-center justify-between text-neutral-800"
                  >
                    <span>{CURRENCIES[curCode].label} ({CURRENCIES[curCode].symbol})</span>
                    {currency === curCode && <Check className="w-3 h-3 text-neutral-900" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Account Icon (Desktop only - mobile accesses account inside Menu drawer) */}
          <div className="relative hidden md:block" ref={userMenuRef}>
            <button
              onClick={() => {
                if (user) {
                  setIsUserMenuOpen(!isUserMenuOpen);
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
              className="p-1 text-neutral-800 hover:text-black transition-colors focus:outline-none"
              aria-label="Account Login"
              title={user ? `Signed in as ${user.email}` : "Login to your account"}
            >
              <User className="w-[19px] h-[19px] stroke-[1.6]" />
            </button>

            {user && isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-neutral-200 shadow-xl py-2 z-50 text-[11px] tracking-wider animate-fade-in">
                <div className="px-4 py-2 border-b border-neutral-100">
                  <p className="text-neutral-400 uppercase text-[9px]">Signed in as</p>
                  <p className="font-semibold text-neutral-900 truncate">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('checkout');
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-neutral-800 uppercase"
                >
                  My Bag & Checkout
                </button>
                <button
                  onClick={() => {
                    logoutUser();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-red-600 uppercase border-t border-neutral-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Search Trigger Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1 text-neutral-900 hover:text-black transition-colors focus:outline-none"
            aria-label="Search Collection"
          >
            <Search className="w-[18px] sm:w-[19px] h-[18px] sm:h-[19px] stroke-[1.6]" />
          </button>

          {/* Cart Bag Icon with Count Badge - exactly matching screenshot 1 */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-1 text-neutral-900 hover:text-black transition-colors relative focus:outline-none flex items-center"
            aria-label="View Cart Bag"
          >
            <ShoppingBag className="w-[18px] sm:w-[19px] h-[18px] sm:h-[19px] stroke-[1.6]" />
            <span className="absolute -top-1 -right-1 text-[9px] font-semibold w-4 h-4 bg-black text-white rounded-full flex items-center justify-center leading-none">
              {cartTotalCount}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}
