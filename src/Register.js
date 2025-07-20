import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
    alert("Registered successfully!");
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" required placeholder="Email"
          className="w-full p-2 border rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" required placeholder="Password"
          className="w-full p-2 border rounded" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
