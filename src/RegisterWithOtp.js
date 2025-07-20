import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterWithOtp() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setOtpSent(true);
    alert(`🔐 OTP sent to ${email}: ${code}`); // Simulated
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      localStorage.setItem('user', JSON.stringify({ email }));
      alert("✅ Registration successful!");
      navigate('/');
    } else {
      alert("❌ Invalid OTP. Try again.");
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border mb-4 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />
      {otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-2 border mb-4 rounded"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp} className="w-full bg-green-600 text-white py-2 rounded">
            Verify & Register
          </button>
        </>
      ) : (
        <button onClick={handleSendOtp} className="w-full bg-blue-600 text-white py-2 rounded">
          Send OTP
        </button>
      )}
    </>
  );
}

export default RegisterWithOtp;
