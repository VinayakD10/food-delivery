import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart({ isOpen, onClose, onCheckout }) {
  const { cart, removeFromCart, total, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg animate-fadeSlideUp">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-display font-bold text-charcoal">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 300px)' }}>
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-charcoal">{item.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-display font-bold text-Swiggy-orange">
                        ₹{item.price * item.quantity}
                      </span>
                      <div className="flex items-center gap-1 ml-auto">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-200 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-charcoal">₹{total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium text-charcoal">₹0</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between">
              <span className="font-display font-bold text-charcoal">Total</span>
              <span className="font-display font-bold text-Swiggy-orange text-lg">
                ₹{total}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-Swiggy-orange text-white py-3 rounded-lg font-display font-bold hover:bg-Swiggy-dark transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
