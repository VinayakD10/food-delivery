import React from 'react';
import { Star, Clock, Truck } from 'lucide-react';

export function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div
      onClick={() => onSelect(restaurant)}
      className="bg-white rounded-lg shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 transform"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-display font-bold text-charcoal mb-1">
          {restaurant.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{restaurant.description}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-charcoal">{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Clock size={16} />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Truck size={16} />
            <span>₹{restaurant.deliveryFee} delivery</span>
          </div>
        </div>

        <span className="inline-block mt-3 text-xs bg-Swiggy-light text-Swiggy-dark px-3 py-1 rounded-full font-medium">
          {restaurant.cuisine}
        </span>
      </div>
    </div>
  );
}
