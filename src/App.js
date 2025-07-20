// src/AppContent.js
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

import Order from './Order';

import MensAccessories from './MensAccessories';
import WomensAccessories from './WomensAccessories';
import MensCategory from './MensCategory';
import WomensCategory from './WomensCategory';
import PaymentSuccess from './PaymentSuccess';
import AuthPage from './AuthPage';
import LoginPage from './LoginPage';
import CategoryPage from './CategoryPage';
import CartPage from './CartPage';
import DeliveryPage from './DeliveryPage';
import PaymentPage from './PaymentPage';
import OrderSuccess from './OrderSuccess';
import PrivateRoute from './PrivateRoute';

function AppContent() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth' || location.pathname === '/';

  return (
    <div className="text-center p-10 bg-gradient-to-r from-purple-200 to-indigo-300 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to TrendyBazaar 🏍️</h1>
      <p className="text-lg text-gray-700 mb-6">Discover stylish clothing, accessories, and more for everyone.</p>

      {!isAuthPage && (
        <>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/cart" className="bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-800 transition">View Cart</Link>
            <Link to="/delivery" className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition">Delivery</Link>
            <Link to="/payment" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">Pay Now</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/mens-accessories" className="bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition">Men's Accessories</Link>
            <Link to="/womens-accessories" className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition">Women's Accessories</Link>
            <Link to="/mens-category" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Men’s Clothing</Link>
            <Link to="/womens-category" className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">Women’s Clothing</Link>
          </div>
          {user && (
            <div>
              <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
            </div>
          )}
        </>
      )}

      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
        <Route path="/delivery" element={<PrivateRoute><DeliveryPage /></PrivateRoute>} />
        <Route path="/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
        <Route path="/order-success" element={<PrivateRoute><OrderSuccess /></PrivateRoute>} />
        <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>} />
        <Route path="/mens-accessories" element={<MensAccessories />} />
        <Route path="/womens-accessories" element={<WomensAccessories />} />
        <Route path="/mens-category" element={<MensCategory />} />
        <Route path="/womens-category" element={<WomensCategory />} />
        <Route path="/success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default AppContent;