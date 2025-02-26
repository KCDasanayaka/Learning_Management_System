// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token'); // Check for token

  if (!token) {
    return <Navigate to="/" />; // Redirect to login if no token
  }

  return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;