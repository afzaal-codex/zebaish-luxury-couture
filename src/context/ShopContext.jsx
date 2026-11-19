import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, CURRENCIES } from '../data/products';
import { BRAND } from '../config/brand';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Currency
  const [currency, setCurrency] = useState('PKR');

  // Navigation & Views
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'collection', 'product', 'checkout', 'login'
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]); // Default Aster
  const [collectionCategory, setCollectionCategory] = useState('ALL');

  // UI Overlays
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activePolicy, setActivePolicy] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Cart State (Initialized with Aster)
  const [cart, setCart] = useState([
    {
      id: 'aster-default',
      product: PRODUCTS[0],
      quantity: 1,
      variant: 'UNSTITCHED / DEFAULT',
      size: 'DEFAULT',
      type: 'UNSTITCHED'
    }
  ]);
  const [orderNote, setOrderNote] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Wishlist
  const [wishlist, setWishlist] = useState([]);

  // Auth
  const [user, setUser] = useState(null);

  // Completed Orders
  const [latestOrder, setLatestOrder] = useState(null);

  // Show toast notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Currency Converter Formatter
  const formatPrice = (pkrAmount) => {
    const cur = CURRENCIES[currency] || CURRENCIES.PKR;
    const converted = pkrAmount * cur.rate;
    if (currency === 'PKR') {
      return `RS ${Math.round(converted).toLocaleString('en-US')}`;
    }
    return `${cur.symbol} ${converted.toFixed(2)}`;
  };

  // Add To Cart - No alert messages, just smoothly opens cart drawer
  const addToCart = (product, quantity = 1, variant = 'UNSTITCHED / DEFAULT', size = 'DEFAULT', type = 'UNSTITCHED') => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.variant === variant
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      const newItem = {
        id: `${product.id}-${variant}-${Date.now()}`,
        product,
        quantity,
        variant,
        size,
        type
      };
      setCart([newItem, ...cart]);
    }

    // Direct smooth open of the cart drawer without any alert popups
    setIsCartOpen(true);
  };

  // Remove from Cart
  const removeFromCart = (cartItemId) => {
    setCart(cart.filter(item => item.id !== cartItemId));
  };

  // Update Cart Quantity
  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(cart.map(item => item.id === cartItemId ? { ...item, quantity: newQty } : item));
  };

  // Clear Cart
  const clearCart = () => setCart([]);

  // Toggle Wishlist
  const toggleWishlist = (product) => {
    if (wishlist.some(p => p.id === product.id)) {
      setWishlist(wishlist.filter(p => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Cart Calculations
  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotalPKR = cart.reduce((acc, item) => acc + (item.product.pricePKR * item.quantity), 0);
  const discountAmountPKR = (cartSubtotalPKR * discountPercent) / 100;
  const cartTotalPKR = Math.max(0, cartSubtotalPKR - discountAmountPKR);

  // Apply Coupon
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === BRAND.discountCode || cleanCode === 'ZEBAISH10' || cleanCode === 'LUXURY10') {
      setDiscountPercent(10);
      setDiscountCode(cleanCode);
      return { success: true, message: '10% discount applied!' };
    } else if (cleanCode === 'VIP20') {
      setDiscountPercent(20);
      setDiscountCode(cleanCode);
      return { success: true, message: '20% VIP discount applied!' };
    } else {
      return { success: false, message: `Invalid voucher. Try ${BRAND.discountCode}` };
    }
  };

  // Navigate to product detail
  const viewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to collection
  const viewCollection = (category = 'ALL') => {
    setCollectionCategory(category);
    setCurrentPage('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth handlers
  const loginUser = (email, name = 'Valued Client') => {
    setUser({ email, name });
    setIsLoginModalOpen(false);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <ShopContext.Provider
      value={{
        brand: BRAND,
        currency,
        setCurrency,
        formatPrice,
        currentPage,
        setCurrentPage,
        selectedProduct,
        setSelectedProduct,
        viewProduct,
        collectionCategory,
        setCollectionCategory,
        viewCollection,
        // UI overlays
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMenuOpen,
        setIsMenuOpen,
        isLoginModalOpen,
        setIsLoginModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        activePolicy,
        setActivePolicy,
        toastMessage,
        showToast,
        // Cart
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        orderNote,
        setOrderNote,
        cartTotalCount,
        cartSubtotalPKR,
        cartTotalPKR,
        discountCode,
        discountPercent,
        applyCoupon,
        // Wishlist
        wishlist,
        toggleWishlist,
        // Auth
        user,
        loginUser,
        logoutUser,
        // Order
        latestOrder,
        setLatestOrder
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
