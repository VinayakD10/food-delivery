import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CheckoutPage({ onBack, onConfirm }) {
  const { cart, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      clearCart();
      onConfirm(formData);
    }, 1500);
  };

  const deliveryFee = 0;
  const totalWithDelivery = total + deliveryFee;

  return (
    <main className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-Swiggy-orange hover:text-Swiggy-dark mb-8 font-medium transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Cart
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
              Delivery Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Swiggy-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Swiggy-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Swiggy-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Swiggy-orange"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Swiggy-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Swiggy-orange"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-Swiggy-orange text-white py-3 rounded-lg font-display font-bold hover:bg-Swiggy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-card p-6 h-fit">
            <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm border-b border-gray-100 pb-3"
                >
                  <span className="text-gray-600">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium text-charcoal">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-gray-200 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-charcoal">₹{total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium text-charcoal">₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="font-display font-bold text-charcoal">Total</span>
                <span className="font-display font-bold text-Swiggy-orange text-lg">
                  ₹{totalWithDelivery}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
