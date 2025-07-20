import React, { useState } from 'react';
import LoginWithOtp from './LoginWithOtp';
import RegisterWithOtp from './RegisterWithOtp';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l ${activeTab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r ${activeTab === 'register' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' ? <LoginWithOtp /> : <RegisterWithOtp />}
      </div>
    </div>
  );
}

export default AuthPage;
