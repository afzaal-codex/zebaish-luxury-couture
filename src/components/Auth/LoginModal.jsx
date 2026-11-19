import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function LoginModal({ isPage = false }) {
  const {
    isLoginModalOpen,
    setIsLoginModalOpen,
    loginUser,
    showToast,
    setCurrentPage
  } = useShop();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  if (!isPage && !isLoginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in both email and password');
      return;
    }
    const displayName = isSignUp && firstName ? `${firstName} ${lastName}` : email.split('@')[0];
    loginUser(email, displayName);
    if (isPage) {
      setCurrentPage('home');
    }
  };

  const content = (
    <div className="w-full max-w-md mx-auto p-6 sm:p-10 bg-white">
      {/* Heading - matching screenshot 2 */}
      <h2 className="text-xl sm:text-2xl font-luxury-serif tracking-[0.25em] text-center uppercase text-neutral-900 mb-3">
        {isSignUp ? 'CREATE ACCOUNT' : 'LOGIN'}
      </h2>

      <p className="text-center text-[12px] sm:text-[13px] tracking-wider text-neutral-600 mb-8 font-light">
        {isSignUp
          ? 'Please enter your information to register:'
          : 'Enter your email and password to login:'}
      </p>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {isSignUp && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-neutral-500 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-3.5 py-3 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-black transition-colors"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-neutral-500 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-3.5 py-3 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-black transition-colors"
                placeholder="Last name"
              />
            </div>
          </div>
        )}

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
            className="w-full px-4 py-3.5 border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-3.5 border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
          />
          {!isSignUp && (
            <button
              type="button"
              onClick={() => showToast('Password reset link sent to your email')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] tracking-wider text-neutral-500 hover:text-black"
            >
              Forgot your password?
            </button>
          )}
        </div>

        {/* Big Black Button - matching screenshot 2 */}
        <button
          type="submit"
          className="w-full py-4 bg-[#1a1a1a] hover:bg-black text-white text-xs font-sans font-medium tracking-[0.25em] uppercase transition-all duration-200 mt-2"
        >
          {isSignUp ? 'CREATE' : 'LOGIN'}
        </button>

        {/* Toggle sign up / login */}
        <div className="text-center pt-2">
          {isSignUp ? (
            <p className="text-xs tracking-wider text-neutral-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="text-black font-medium underline underline-offset-4 ml-1"
              >
                Sign in
              </button>
            </p>
          ) : (
            <p className="text-xs tracking-wider text-neutral-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="text-black font-medium underline underline-offset-4 ml-1"
              >
                Sign up
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );

  if (isPage) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-neutral-50">
        <div className="bg-white border border-neutral-200 shadow-sm w-full max-w-lg">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsLoginModalOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative bg-white max-w-lg w-full border border-neutral-200 shadow-2xl z-10 animate-fade-in">
        <button
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute right-4 top-4 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>
        {content}
      </div>
    </div>
  );
}

