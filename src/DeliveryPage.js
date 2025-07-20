import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveryPage() {
  const [form, setForm] = useState({ name: '', address: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('delivery', JSON.stringify(form));
    navigate('/payment');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">📦 Delivery Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="address" required placeholder="Address" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="phone" required placeholder="Phone Number" className="w-full p-2 border rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Continue to Payment</button>
      </form>
    </div>
  );
}

export default DeliveryPage;
