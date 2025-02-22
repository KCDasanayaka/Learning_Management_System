export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return !!token; // Add token validation logic if needed
  };
  
  export const logout = () => {
    localStorage.removeItem('authToken');
    // Add any additional cleanup logic here
  };