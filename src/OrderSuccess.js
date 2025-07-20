import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
  const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-green-600">✅ Order Placed Successfully!</h2>
      <p className="mt-2">Your Order ID: <strong>{orderId}</strong></p>
      <p className="mt-4">🚚 Delivery tracking will be available soon.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Go to Home</Link>
    </div>
  );
}

export default OrderSuccess;
