import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [adminNumber, setAdminNumber] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { adminNumber });
      alert(res.data.message);
    } catch (error) {
      alert('Error sending password to email');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleForgotPassword} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5">Forgot Password</h2>
        <input
          type="text"
          placeholder="Admin Number"
          value={adminNumber}
          onChange={(e) => setAdminNumber(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Send Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;