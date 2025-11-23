import React from 'react';
import { Search } from 'lucide-react';
import { useRestaurants } from '../context/RestaurantContext';
import { RestaurantCard } from '../components/RestaurantCard';

export function HomePage({ onSelectRestaurant }) {
  const { restaurants } = useRestaurants();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-surface min-h-screen">
      <div className="bg-gradient-hero py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-4">
            Order Food Online
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8">
            From your favorite restaurants delivered right to your door
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-display font-bold text-charcoal mb-8">
          Popular Restaurants
        </h2>

        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No restaurants found. Try a different search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onSelect={onSelectRestaurant}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
