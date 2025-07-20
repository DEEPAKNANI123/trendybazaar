import React from 'react';
import { useCart } from './CartContext'; // Import cart context

const mensItems = [
  {
    id: 1,
    name: 'Casual Shirt',
    brand: 'Roadster',
    category: 'Dress',
    price: 799,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/o/8/g/l-r-279017-roadster-original-imagtygbh6v9qfsj.jpeg?q=70'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    brand: 'Levi\'s',
    category: 'Jeans',
    price: 1899,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/jean/k/q/u/30-18298-1257-levi-s-original-imagt4z32zth9kyv.jpeg?q=70'
  },
  {
    id: 3,
    name: 'Printed T-Shirt',
    brand: 'Jack & Jones',
    category: 'T-Shirt',
    price: 599,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/j/y/s-402387501-jack-jones-original-imaghy8q7vfcgqaf.jpeg?q=70'
  },
  {
    id: 4,
    name: 'Denim Jacket',
    brand: 'HIGHLANDER',
    category: 'Jacket',
    price: 1499,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/jacket/z/i/s/l-hlv0005090-highlander-original-imagpv7rgrqshwdm.jpeg?q=70'
  },
  {
    id: 5,
    name: 'Pack of 2 Shorts',
    brand: 'HRX',
    category: 'Shorts',
    price: 749,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/short/c/z/n/l-112-hrx-original-imagzhgxvvnqmgam.jpeg?q=70'
  }
];

function MensCategory() {
  const { addToCart } = useCart(); // Access cart context

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">👕 Men's Fashion</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {mensItems.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500">Brand: {item.brand}</p>
            <p className="text-gray-600">Category: {item.category}</p>
            <p className="font-bold text-indigo-700">{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensCategory;
