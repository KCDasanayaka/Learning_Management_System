// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ setIsLoggedIn }) => { // Accept setIsLoggedIn as a prop
  const [adminNumber, setAdminNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/create-notice');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!adminNumber || !password) {
      setMessage('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { adminNumber, password });
      localStorage.setItem('token', res.data.token); // Store token
      setIsLoggedIn(true); // Update login state
      setMessage('Login successful');
      navigate('/create-notice'); // Redirect to protected route
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Admin Login</h2>
        <p className="text-sm text-gray-500 text-center">Enter your credentials to access the dashboard</p>
        
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        
        <form onSubmit={handleLogin} className="mt-6">
          <div>
            <label className="block text-gray-700">Admin Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Admin Number"
              value={adminNumber}
              onChange={(e) => setAdminNumber(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 hover:text-blue-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;