import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price.replace(/[₹,]/g, '')), 0);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="border p-4 bg-white rounded shadow">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p>Brand: {item.brand}</p>
                    <p>Price: {item.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <button
                      className="text-red-500 mt-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-6">Total: ₹{total}</h3>
          <Link to="/delivery" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Proceed to Address
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
