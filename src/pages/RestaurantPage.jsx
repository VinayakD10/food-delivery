import React from 'react';
import { ChevronLeft, Star, Clock, Truck } from 'lucide-react';
import { MenuItem } from '../components/MenuItem';

export function RestaurantPage({ restaurant, onBack }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const categories = [...new Set(restaurant.menu.map((item) => item.category))];
  const filteredMenu = selectedCategory
    ? restaurant.menu.filter((item) => item.category === selectedCategory)
    : restaurant.menu;

  React.useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [restaurant.id, categories, selectedCategory]);

  return (
    <main className="bg-surface min-h-screen">
      <div className="relative h-80 overflow-hidden bg-gray-200">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronLeft size={24} className="text-charcoal" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-2">
            {restaurant.name}
          </h1>
          <p className="text-gray-600 mb-4">{restaurant.description}</p>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-charcoal">{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-600" />
              <span className="text-gray-600">{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-gray-600" />
              <span className="text-gray-600">₹{restaurant.deliveryFee} delivery</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
              selectedCategory === null
                ? 'bg-Swiggy-orange text-white'
                : 'bg-white text-charcoal border border-gray-200 hover:border-Swiggy-orange'
            }`}
          >
            All Items
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-Swiggy-orange text-white'
                  : 'bg-white text-charcoal border border-gray-200 hover:border-Swiggy-orange'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          {filteredMenu.map((item) => (
            <MenuItem key={item.id} item={item} restaurantId={restaurant.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
