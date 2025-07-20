import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function Payment() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price.replace(/[₹,]/g, '')), 0);

  const handlePayment = () => {
    clearCart(); // Clear the cart
    navigate('/success'); // Go to success page
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">💳 Payment</h2>
      <p className="mb-2">Select Payment Method:</p>
      <select className="border p-2 w-full mb-4 rounded">
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit/Debit Card</option>
      </select>
      <p className="text-lg font-semibold">Total: ₹{total}</p>
      <button
        onClick={handlePayment}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
