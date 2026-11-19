import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import AnnouncementBar from './components/Header/AnnouncementBar';
import Navbar from './components/Header/Navbar';
import SearchOverlay from './components/Header/SearchOverlay';
import MobileMenuDrawer from './components/Header/MobileMenuDrawer';
import CartDrawer from './components/Cart/CartDrawer';
import LoginModal from './components/Auth/LoginModal';
import QuickViewModal from './components/Common/QuickViewModal';
import PolicyModal from './components/Common/PolicyModal';
import Toast from './components/Common/Toast';
import Footer from './components/Footer/Footer';

// Page Views
import HeroBanner from './components/Home/HeroBanner';
import EditorialIntro from './components/Home/EditorialIntro';
import FeaturedCollections from './components/Home/FeaturedCollections';
import EditorialTrio from './components/Home/EditorialTrio';
import BrandPhilosophy from './components/Home/BrandPhilosophy';
import NewInGrid from './components/Home/NewInGrid';
import CollectionPage from './components/Shop/CollectionPage';
import ProductDetailPage from './components/Product/ProductDetailPage';
import CheckoutPage from './components/Checkout/CheckoutPage';

function AppContent() {
  const { currentPage } = useShop();

  // If in checkout mode, render checkout full screen without distraction
  if (currentPage === 'checkout') {
    return (
      <main className="min-h-screen bg-white">
        <CheckoutPage />
        <Toast />
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Top Banner & Header */}
      <AnnouncementBar />
      <Navbar />
      <SearchOverlay />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroBanner />
            <EditorialIntro />
            <FeaturedCollections />
            <EditorialTrio />
            <BrandPhilosophy />
            <NewInGrid />
          </>
        )}

        {currentPage === 'collection' && <CollectionPage />}

        {currentPage === 'product' && <ProductDetailPage />}

        {currentPage === 'login' && <LoginModal isPage={true} />}
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Sliding Drawers & Overlays */}
      <CartDrawer />
      <MobileMenuDrawer />
      <LoginModal />
      <QuickViewModal />
      <PolicyModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

