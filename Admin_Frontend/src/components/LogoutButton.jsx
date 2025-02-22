// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setIsLoggedIn }) => { // Accept setIsLoggedIn as a prop
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsLoggedIn(false); // Update login state
    navigate('/', { replace: true }); // Redirect to the login page and replace history
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-900 text-white px-4 py-2 rounded hover:bg-yellow-custom hover:text-red-custom transition duration-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;