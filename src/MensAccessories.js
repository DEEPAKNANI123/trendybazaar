import React from 'react';
import { useCart } from './CartContext';

const accessories = [
  {
    id: 1,
    name: 'Leather Wallet',
    brand: 'Wildhorn',
    color: 'Brown',
    category: 'Wallet',
    price: '₹999',
    image: 'https://rukminim1.flixcart.com/image/612/612/l4rd0280/wallet/e/e/h/-original-imagf9fuhgz9c4xz.jpeg?q=70'
  },
  {
    id: 2,
    name: 'Titan Watch',
    brand: 'Titan',
    color: 'Black',
    category: 'Watch',
    price: '₹2,499',
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/watch/z/i/x/-original-imagpfd62dgbkdzj.jpeg?q=70'
  }
];

function MensAccessories() {
  const { addToCart } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">🕶️ Men's Accessories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {accessories.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Color: {item.color}</p>
            <p>Category: {item.category}</p>
            <p className="font-bold text-indigo-700">{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensAccessories;
