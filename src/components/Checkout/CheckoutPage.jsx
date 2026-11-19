import React, { useState } from 'react';
import { ShoppingBag, ChevronDown, Check, HelpCircle, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { BRAND } from '../../config/brand';

export default function CheckoutPage() {
  const {
    cart,
    cartSubtotalPKR,
    cartTotalPKR,
    formatPrice,
    discountCode,
    applyCoupon,
    clearCart,
    setCurrentPage,
    user,
    setIsLoginModalOpen
  } = useShop();

  const [email, setEmail] = useState(user ? user.email : '');
  const [newsOffers, setNewsOffers] = useState(true);
  const [country, setCountry] = useState('Pakistan');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [saveInfo, setSaveInfo] = useState(true);
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [billingAddressType, setBillingAddressType] = useState('same');
  
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(`Invalid code. Try ${BRAND.discountCode}`);
    } else {
      setCouponError('');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setFormError('');

    // Inline field validation without any browser alert popups
    if (!email || !firstName || !lastName || !address || !city || !phone) {
      setFormError('Please fill in all required delivery and contact fields to proceed.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder = {
        orderId: `${BRAND.orderPrefix}${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        items: [...cart],
        subtotal: cartSubtotalPKR,
        total: cartTotalPKR,
        paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Debit / Credit Card',
        shippingAddress: `${address}, ${apartment ? apartment + ', ' : ''}${city}, ${country}`,
        customerName: `${firstName} ${lastName}`,
        email: email
      };
      setOrderComplete(generatedOrder);
      clearCart();
    }, 1200);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white border border-neutral-200 p-8 sm:p-12 text-center shadow-lg animate-fade-in">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 stroke-[2.5]" />
          </div>

          <h2 className="font-luxury-serif text-3xl tracking-widest uppercase text-neutral-900 mb-2">
            THANK YOU FOR YOUR ORDER
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
            Order Confirmation #{orderComplete.orderId}
          </p>

          <p className="text-sm text-neutral-600 max-w-md mx-auto mb-8 font-light leading-relaxed">
            We have sent an order confirmation and digital invoice to{' '}
            <strong className="text-black font-semibold">{orderComplete.email}</strong>.
            Our master artisans at {BRAND.name} are now preparing your bespoke garments.
          </p>

          <div className="bg-neutral-50 p-6 text-left border border-neutral-100 mb-8 space-y-3">
            <div className="flex justify-between text-xs tracking-wider">
              <span className="text-neutral-500 uppercase">Customer:</span>
              <span className="font-medium text-black">{orderComplete.customerName}</span>
            </div>
            <div className="flex justify-between text-xs tracking-wider">
              <span className="text-neutral-500 uppercase">Payment Method:</span>
              <span className="font-medium text-black">{orderComplete.paymentMethod}</span>
            </div>
            <div className="flex justify-between text-xs tracking-wider">
              <span className="text-neutral-500 uppercase">Shipping Address:</span>
              <span className="font-medium text-black max-w-xs text-right">{orderComplete.shippingAddress}</span>
            </div>
            <div className="flex justify-between text-xs tracking-wider pt-2 border-t border-neutral-200 font-semibold">
              <span className="uppercase">Total Amount Paid:</span>
              <span>{formatPrice(orderComplete.total)}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-4 bg-black text-white text-xs tracking-[0.25em] uppercase hover:bg-neutral-800 transition-all font-medium"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Checkout Navbar */}
      <div className="border-b border-neutral-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to shop</span>
          </button>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-6 h-4 mb-0.5 opacity-80">
              <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-full h-full text-luxury-gold">
                <path d="M50 35 C42 12, 18 8, 10 22 C3 34, 15 50, 48 40" fill="#FAF6F0" fillOpacity="0.7" />
                <path d="M50 35 C58 12, 82 8, 90 22 C97 34, 85 50, 52 40" fill="#FAF6F0" fillOpacity="0.7" />
                <line x1="50" y1="28" x2="50" y2="55" stroke="#111111" strokeWidth="4" />
              </svg>
            </div>
            <h1 className="font-brand-title text-xl tracking-[0.3em] font-light text-black uppercase">
              {BRAND.name}
            </h1>
          </div>

          <div className="w-8 flex justify-end">
            <ShoppingBag className="w-5 h-5 text-neutral-700 stroke-[1.6]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form Fields */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-semibold text-neutral-900 tracking-wide font-sans">
                  Contact
                </h2>
                {!user ? (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="text-xs text-blue-600 hover:underline tracking-wider"
                  >
                    Sign in
                  </button>
                ) : (
                  <span className="text-xs text-neutral-500">
                    Logged in as {user.email}
                  </span>
                )}
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black transition-colors"
                />
                <HelpCircle className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>

              <label className="flex items-center gap-2 mt-2.5 cursor-pointer text-xs text-neutral-600">
                <input
                  type="checkbox"
                  checked={newsOffers}
                  onChange={(e) => setNewsOffers(e.target.checked)}
                  className="rounded text-black focus:ring-0"
                />
                <span>Email me with news and offers</span>
              </label>
            </div>

            {/* Delivery Section */}
            <div>
              <h2 className="text-base font-semibold text-neutral-900 tracking-wide font-sans mb-3">
                Delivery
              </h2>

              <div className="space-y-3">
                {/* Country Dropdown */}
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-3 text-xs border border-neutral-300 rounded bg-white appearance-none focus:outline-none focus:border-black"
                  >
                    <option value="Pakistan">Pakistan</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Canada">Canada</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                    className="p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                    className="p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                  />
                </div>

                {/* Address */}
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  required
                  className="w-full p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                />

                {/* Apartment */}
                <input
                  type="text"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                />

                {/* City and Postal Code */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    required
                    className="p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal code (optional)"
                    className="p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    required
                    className="w-full p-3 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                  />
                  <HelpCircle className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>

                <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-neutral-600">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="rounded text-black focus:ring-0"
                  />
                  <span>Save this information for next time</span>
                </label>
              </div>
            </div>

            {/* Shipping Method */}
            <div>
              <h2 className="text-base font-semibold text-neutral-900 tracking-wide font-sans mb-3">
                Shipping method
              </h2>
              <div className="p-3.5 border border-blue-400 bg-blue-50/20 rounded flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-900">Free Shipping</span>
                <span className="font-semibold text-neutral-900">FREE</span>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-base font-semibold text-neutral-900 tracking-wide font-sans mb-1">
                Payment
              </h2>
              <p className="text-[11px] text-neutral-500 mb-3">
                All transactions are secure and encrypted.
              </p>

              <div className="border border-neutral-300 rounded overflow-hidden">
                {/* Option 1: Card */}
                <div className={`p-4 border-b border-neutral-300 transition-colors ${paymentMethod === 'card' ? 'bg-neutral-50/60' : 'bg-white'}`}>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-black focus:ring-0"
                      />
                      <span className="text-xs font-medium text-neutral-900">Debit - Credit Card</span>
                    </div>
                    {/* Payment Logos */}
                    <div className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 bg-blue-900 text-white font-bold text-[9px] rounded">VISA</span>
                      <span className="px-1.5 py-0.5 bg-red-600 text-white font-bold text-[9px] rounded">MC</span>
                      <span className="px-1.5 py-0.5 bg-red-500 text-white font-bold text-[9px] rounded">UnionPay</span>
                    </div>
                  </label>

                  {paymentMethod === 'card' && (
                    <div className="mt-3 text-center py-4 bg-neutral-100 rounded text-xs text-neutral-600 animate-fade-in">
                      You'll be redirected to Debit - Credit Card to complete your purchase securely.
                    </div>
                  )}
                </div>

                {/* Option 2: COD */}
                <div className={`p-4 transition-colors ${paymentMethod === 'cod' ? 'bg-neutral-50/60' : 'bg-white'}`}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-black focus:ring-0"
                    />
                    <span className="text-xs font-medium text-neutral-900">Cash on Delivery (COD)</span>
                  </label>
                  {paymentMethod === 'cod' && (
                    <p className="mt-2 text-xs text-neutral-500 pl-6">
                      Pay with cash upon delivery of your luxury parcel.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-base font-semibold text-neutral-900 tracking-wide font-sans mb-3">
                Billing address
              </h2>
              <div className="border border-neutral-300 rounded overflow-hidden">
                <div className="p-3.5 border-b border-neutral-200">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="billing"
                      checked={billingAddressType === 'same'}
                      onChange={() => setBillingAddressType('same')}
                      className="text-black focus:ring-0"
                    />
                    <span className="text-xs font-medium text-neutral-900">Same as shipping address</span>
                  </label>
                </div>
                <div className="p-3.5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="billing"
                      checked={billingAddressType === 'different'}
                      onChange={() => setBillingAddressType('different')}
                      className="text-black focus:ring-0"
                    />
                    <span className="text-xs font-medium text-neutral-900">Use a different billing address</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Inline validation error without any browser alert popups */}
            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-600 flex items-center gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Action Button: When COD is selected, button text becomes 'Buy now' */}
            <div>
              <button
                onClick={handlePlaceOrder}
                disabled={isSubmitting || cart.length === 0}
                className="w-full py-4 bg-[#0d6efd] hover:bg-blue-600 text-white font-medium text-sm rounded transition-all shadow-sm disabled:opacity-50 active:scale-[0.99]"
              >
                {isSubmitting
                  ? (paymentMethod === 'cod' ? 'Placing Order...' : 'Processing Payment...')
                  : (paymentMethod === 'cod' ? 'Buy now' : 'Pay now')}
              </button>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <a href="#policies" className="text-xs text-blue-600 hover:underline">
                Terms and policies
              </a>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-neutral-50/80 p-6 sm:p-8 rounded-lg border border-neutral-200/80 h-fit space-y-6">
            
            {/* Items */}
            <div className="divide-y divide-neutral-200">
              {cart.map((item) => (
                <div key={item.id} className="py-3 first:pt-0 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-16 h-20 bg-neutral-200 rounded border border-neutral-300 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute -top-1.5 -right-1.5 bg-neutral-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        {item.variant}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-neutral-900 text-right">
                    {formatPrice(item.product.pricePKR * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Discount Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                placeholder="Discount code"
                className="flex-1 p-2.5 text-xs border border-neutral-300 rounded bg-white focus:outline-none focus:border-black uppercase"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-medium rounded transition-colors"
              >
                Apply
              </button>
            </form>
            {discountCode && (
              <p className="text-xs text-green-600 font-medium">
                Voucher '{discountCode}' applied!
              </p>
            )}
            {couponError && (
              <p className="text-xs text-red-500">
                {couponError}
              </p>
            )}

            {/* Totals */}
            <div className="space-y-2.5 pt-4 border-t border-neutral-200 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="text-neutral-900 font-medium">{formatPrice(cartSubtotalPKR)}</span>
              </div>
              <div className="flex justify-between text-neutral-600 items-center">
                <span className="flex items-center gap-1">
                  Shipping <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                </span>
                <span className="text-neutral-900 font-medium">FREE</span>
              </div>
              <div className="flex justify-between items-baseline pt-4 border-t border-neutral-200">
                <span className="text-sm font-semibold text-neutral-900">Total</span>
                <div className="text-right">
                  <span className="text-[11px] text-neutral-500 mr-1.5">PKR</span>
                  <span className="text-lg font-bold text-neutral-900">{formatPrice(cartTotalPKR)}</span>
                </div>
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="pt-4 flex items-center justify-center gap-2 text-[11px] text-neutral-500 border-t border-neutral-200">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Guaranteed Authentic & Encrypted Checkout</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
