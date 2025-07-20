import React from 'react';
import { useCart } from './CartContext';

const womensItems = [
  {
    id: 1,
    name: 'Floral Maxi Dress',
    brand: 'Tokyo Talkies',
    category: 'Dress',
    price: 1099,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/dress/x/k/q/s-ttj6007323-tokyo-talkies-original-imagzhvgeccywqxa.jpeg?q=70'
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    brand: 'Only',
    category: 'Jeans',
    price: 1599,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/jean/0/z/h/28-119198702-only-original-imagzh2hqsfdmsqq.jpeg?q=70'
  },
  {
    id: 3,
    name: 'Graphic T-Shirt',
    brand: 'H&M',
    category: 'T-Shirt',
    price: 499,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/2/y/k/m-258-pink-vogue-original-imagmbwhhx7nqjyf.jpeg?q=70'
  },
  {
    id: 4,
    name: 'Trendy Jacket',
    brand: 'DressBerry',
    category: 'Jacket',
    price: 1299,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/jacket/y/k/x/m-18412716-dressberry-original-imagrycngh2hbdvg.jpeg?q=70'
  },
  {
    id: 5,
    name: 'Printed Shorts',
    brand: 'Zara',
    category: 'Shorts',
    price: 649,
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/short/y/3/k/m-women-shorts-2382-sassa-original-imagqfnfghhyptb8.jpeg?q=70'
  }
];

function WomensCategory() {
  const { addToCart } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">👗 Women's Fashion</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {womensItems.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500">Brand: {item.brand}</p>
            <p className="text-gray-600">Category: {item.category}</p>
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

export default WomensCategory;
