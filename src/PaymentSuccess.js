import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="text-center p-12">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Payment Successful!</h1>
      <p className="text-lg">Thank you for your order.</p>
      <p className="mt-2">Order ID: <strong>ORD{orderId}</strong></p>
      <Link
        to="/"
        className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
        Back to Home
      </Link>
    </div>
  );
}

export default PaymentSuccess;
