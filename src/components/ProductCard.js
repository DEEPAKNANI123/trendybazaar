// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">₹{product.price}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
