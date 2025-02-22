// src/hooks/useSessionTimeout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useSessionTimeout = (timeoutDuration = 3600000) => { // 60 minutes
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const timeout = setTimeout(() => {
      localStorage.removeItem('token'); // Clear token on timeout
      navigate('/'); // Redirect to login page
    }, timeoutDuration);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [navigate, timeoutDuration]);
};

export default useSessionTimeout;