import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function MenuItem({ item, restaurantId }) {
  const { addToCart, cart, updateQuantity } = useCart();
  const cartItem = cart.find((i) => i.id === item.id);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-Swiggy-orange transition-colors">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-display font-semibold text-charcoal mb-1">
            {item.name}
          </h4>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-Swiggy-orange text-lg">
              ₹{item.price}
            </span>
            <span className="text-xs bg-surface text-gray-600 px-2 py-1 rounded">
              {item.category}
            </span>
          </div>
        </div>

        {cartItem ? (
          <div className="flex items-center gap-2 bg-Swiggy-light rounded-lg">
            <button
              onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
              className="p-1 hover:bg-Swiggy-orange hover:text-white transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-6 text-center font-semibold text-charcoal">
              {cartItem.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
              className="p-1 hover:bg-Swiggy-orange hover:text-white transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(item)}
            className="bg-Swiggy-light text-Swiggy-orange hover:bg-Swiggy-orange hover:text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
