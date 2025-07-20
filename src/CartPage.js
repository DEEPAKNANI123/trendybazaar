import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

 const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="border p-4 rounded mb-2">
              <p>{item.name} - ₹{Number(item.price).toLocaleString('en-IN')}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded mt-2"
              >
                Remove
              </button>
            </div>
          ))}

          <p className="mt-4 font-semibold">Total: ₹{total.toLocaleString('en-IN')}</p>
          <button
            onClick={() => navigate('/delivery')}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
          >
            Proceed to Delivery
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
