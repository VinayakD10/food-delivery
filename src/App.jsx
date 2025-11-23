import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { RestaurantProvider } from './context/RestaurantContext';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { HomePage } from './pages/HomePage';
import { RestaurantPage } from './pages/RestaurantPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentPage('restaurant');
  };

  const handleGoHome = () => {
    setCurrentPage('home');
    setSelectedRestaurant(null);
    setOrderData(null);
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
    setIsCartOpen(false);
  };

  const handleConfirmOrder = (data) => {
    setOrderData(data);
    setCurrentPage('confirmation');
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header onCartClick={() => setIsCartOpen(true)} />

      {currentPage === 'home' && (
        <HomePage onSelectRestaurant={handleSelectRestaurant} />
      )}

      {currentPage === 'restaurant' && selectedRestaurant && (
        <RestaurantPage
          restaurant={selectedRestaurant}
          onBack={handleGoHome}
        />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage
          onBack={() => setCurrentPage('home')}
          onConfirm={handleConfirmOrder}
        />
      )}

      {currentPage === 'confirmation' && orderData && (
        <ConfirmationPage orderData={orderData} onHome={handleGoHome} />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <RestaurantProvider>
        <AppContent />
      </RestaurantProvider>
    </CartProvider>
  );
}

export default App;
