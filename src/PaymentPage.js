import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function PaymentPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: total * 100,
      currency: "INR",
      name: "TrendyBazaar",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
        clearCart();
        navigate('/order-success');
      },
      prefill: {
        name: "Customer",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: { color: "#3399cc" }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">💳 Payment</h2>
      <p className="mb-4">Amount: ₹{total.toLocaleString('en-IN')}</p>
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}

export default PaymentPage;
