import React from 'react';
import { CheckCircle, Home } from 'lucide-react';

export function ConfirmationPage({ orderData, onHome }) {
  return (
    <main className="bg-surface min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-card p-8 max-w-md w-full text-center animate-fadeSlideUp">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-500 fill-green-50" />
        </div>

        <h1 className="text-3xl font-display font-bold text-charcoal mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Your delicious food is on the way
        </p>

        <div className="bg-surface rounded-lg p-4 mb-6 text-left space-y-2">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-medium text-charcoal">{orderData.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Delivery Address</p>
            <p className="font-medium text-charcoal">{orderData.address}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">City</p>
            <p className="font-medium text-charcoal">
              {orderData.city}, {orderData.zipCode}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium text-charcoal">{orderData.phone}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-8">
          A confirmation email has been sent to <span className="font-medium">{orderData.email}</span>
        </p>

        <button
          onClick={onHome}
          className="w-full bg-Swiggy-orange text-white py-3 rounded-lg font-display font-bold hover:bg-Swiggy-dark transition-colors flex items-center justify-center gap-2"
        >
          <Home size={20} />
          Back to Home
        </button>
      </div>
    </main>
  );
}
