import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const { loginOrRegister } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    loginOrRegister(email);
    navigate('/categories');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to TrendyBazaar</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white p-2 rounded">
          Login / Signup
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
