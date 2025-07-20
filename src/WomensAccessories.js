import React from 'react';
import { useCart } from './CartContext';

const accessories = [
  {
    id: 1,
    name: 'Handbag',
    brand: 'Lavie',
    color: 'Pink',
    category: 'Bag',
    price: '₹1,299',
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/hand-messenger-bag/w/o/j/-original-imagr9hfcgphczgc.jpeg?q=70'
  },
  {
    id: 2,
    name: 'Fastrack Sunglasses',
    brand: 'Fastrack',
    color: 'Black',
    category: 'Sunglasses',
    price: '₹899',
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sunglass/c/u/k/-original-imagpyvfxhvbgfgs.jpeg?q=70'
  }
];

function WomensAccessories() {
  const { addToCart } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">👜 Women's Accessories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {accessories.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Color: {item.color}</p>
            <p>Category: {item.category}</p>
            <p className="font-bold text-pink-700">{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomensAccessories;
