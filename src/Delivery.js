import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Delivery() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Validate or store form data in context/localStorage
    navigate('/payment');
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">🚚 Delivery Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" required placeholder="Full Name"
          className="w-full border p-2 rounded" onChange={handleChange} />
        <textarea name="address" required placeholder="Full Address"
          className="w-full border p-2 rounded" onChange={handleChange} />
        <input type="text" name="city" required placeholder="City"
          className="w-full border p-2 rounded" onChange={handleChange} />
        <input type="text" name="pincode" required placeholder="Pincode"
          className="w-full border p-2 rounded" onChange={handleChange} />
        <input type="text" name="phone" required placeholder="Phone Number"
          className="w-full border p-2 rounded" onChange={handleChange} />
        <button type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Continue to Payment
        </button>
      </form>
    </div>
  );
}

export default Delivery;
