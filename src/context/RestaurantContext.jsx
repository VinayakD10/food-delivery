import React, { createContext, useState, useEffect } from 'react';

export const RestaurantContext = createContext();

const MOCK_RESTAURANTS = [
  {
    id: 1,
    name: 'Spice Garden',
    cuisine: 'Indian',
    rating: 4.5,
    deliveryTime: '30-40 min',
    deliveryFee: 40,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Authentic Indian cuisine with modern twist',
    menu: [
      { id: 11, name: 'Butter Chicken', price: 320, description: 'Creamy tomato-based curry', category: 'Main Course' },
      { id: 12, name: 'Dal Makhani', price: 280, description: 'Buttery lentil curry', category: 'Main Course' },
      { id: 13, name: 'Paneer Tikka Masala', price: 340, description: 'Cottage cheese in creamy sauce', category: 'Main Course' },
      { id: 14, name: 'Garlic Naan', price: 80, description: 'Soft bread with garlic', category: 'Breads' },
      { id: 15, name: 'Mango Lassi', price: 120, description: 'Sweet yogurt drink', category: 'Beverages' },
    ],
  },
  {
    id: 2,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '25-35 min',
    deliveryFee: 30,
    image: 'https://images.pexels.com/photos/3996016/pexels-photo-3996016.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Wood-fired pizzas and Italian pastas',
    menu: [
      { id: 21, name: 'Margherita Pizza', price: 350, description: 'Classic cheese pizza', category: 'Pizza' },
      { id: 22, name: 'Pepperoni Pizza', price: 420, description: 'With fresh mozzarella', category: 'Pizza' },
      { id: 23, name: 'Carbonara Pasta', price: 380, description: 'Creamy pasta with bacon', category: 'Pasta' },
      { id: 24, name: 'Garlic Bread', price: 120, description: 'Crispy and buttery', category: 'Starters' },
      { id: 25, name: 'Tiramisu', price: 180, description: 'Classic Italian dessert', category: 'Desserts' },
    ],
  },
  {
    id: 3,
    name: 'Dragon Wok',
    cuisine: 'Chinese',
    rating: 4.3,
    deliveryTime: '35-45 min',
    deliveryFee: 50,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Authentic Chinese dishes with fresh ingredients',
    menu: [
      { id: 31, name: 'Chow Mein', price: 280, description: 'Stir-fried noodles', category: 'Noodles' },
      { id: 32, name: 'Kung Pao Chicken', price: 320, description: 'Spicy chicken with peanuts', category: 'Main Course' },
      { id: 33, name: 'Fried Rice', price: 250, description: 'With egg and vegetables', category: 'Rice' },
      { id: 34, name: 'Spring Rolls', price: 150, description: 'Crispy vegetable rolls', category: 'Starters' },
      { id: 35, name: 'Green Tea', price: 80, description: 'Traditional Chinese tea', category: 'Beverages' },
    ],
  },
  {
    id: 4,
    name: 'Burger Station',
    cuisine: 'American',
    rating: 4.4,
    deliveryTime: '20-30 min',
    deliveryFee: 25,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Gourmet burgers and classic American comfort food',
    menu: [
      { id: 41, name: 'Classic Burger', price: 280, description: 'Beef patty with cheddar', category: 'Burgers' },
      { id: 42, name: 'Double Cheese Burger', price: 350, description: 'Two patties, two cheeses', category: 'Burgers' },
      { id: 43, name: 'Chicken Sandwich', price: 260, description: 'Crispy fried chicken', category: 'Sandwiches' },
      { id: 44, name: 'French Fries', price: 100, description: 'Crispy and golden', category: 'Sides' },
      { id: 45, name: 'Milkshake', price: 140, description: 'Vanilla, chocolate or strawberry', category: 'Beverages' },
    ],
  },
  {
    id: 5,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: '30-40 min',
    deliveryFee: 40,
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Authentic Mexican street food and vibrant flavors',
    menu: [
      { id: 51, name: 'Chicken Tacos', price: 280, description: 'Three soft tacos', category: 'Tacos' },
      { id: 52, name: 'Beef Burrito', price: 320, description: 'Loaded with rice and beans', category: 'Burritos' },
      { id: 53, name: 'Nachos Supreme', price: 300, description: 'With cheese and jalapeños', category: 'Starters' },
      { id: 54, name: 'Quesadilla', price: 270, description: 'With grilled chicken', category: 'Mains' },
      { id: 55, name: 'Churros', price: 120, description: 'With chocolate sauce', category: 'Desserts' },
    ],
  },
];

export function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    setRestaurants(MOCK_RESTAURANTS);
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurants() {
  const context = React.useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurants must be used within RestaurantProvider');
  }
  return context;
}
