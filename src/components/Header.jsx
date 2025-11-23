import React from 'react';
import { ShoppingCart, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Header({ onCartClick }) {
  const { itemCount } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-display font-bold text-Swiggy-orange">
              FOODxPREE
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 text-charcoal hover:text-Swiggy-orange transition-colors">
              <MapPin size={18} />
              <span className="text-sm font-medium">Delivery</span>
            </button>
            <button className="flex items-center gap-2 text-charcoal hover:text-Swiggy-orange transition-colors">
              <User size={18} />
              <span className="text-sm font-medium">Account</span>
            </button>
          </div>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 text-charcoal hover:text-Swiggy-orange transition-colors"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-Swiggy-orange text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulseCart">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
