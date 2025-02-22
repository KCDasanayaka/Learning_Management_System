// import React, { useEffect, useState } from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import CreateNotice from './pages/CreateNotice';
// import CreateEventPage from './pages/CreateEventPage';
// import Login from './pages/Login';
// import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';
// import { isAuthenticated, logout } from './services/authService';

// const AppRoutes = () => {
//   const location = useLocation();
//   const [authChecked, setAuthChecked] = useState(false);
//   const [authenticated, setAuthenticated] = useState(false);

//   // Authentication check and cleanup
//   useEffect(() => {
//     const verifyAuth = () => {
//       const checkAuth = isAuthenticated();
//       setAuthenticated(checkAuth);
//       setAuthChecked(true);
//     };

//     verifyAuth();
//     window.addEventListener('storage', verifyAuth);

//     return () => {
//       window.removeEventListener('storage', verifyAuth);
//     };
//   }, [location]);

//   const handleLogout = () => {
//     logout();
//     setAuthenticated(false);
//   };

//   if (!authChecked) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   return (
//     <>
//       {authenticated && <Header logout={handleLogout} />}
//       <Routes>
//         {/* Public route - only login accessible when not authenticated */}
//         <Route
//           path="/"
//           element={
//             authenticated ? (
//               <Navigate to="/create-notice" replace />
//             ) : (
//               <Login setAuthenticated={setAuthenticated} />
//             )
//           }
//         />

//         {/* Protected routes */}
//         <Route element={<PrivateRoute authenticated={authenticated} />}>
//           <Route path="/create-notice" element={<CreateNotice />} />
//           <Route path="/create-gallery" element={<CreateEventPage />} />
//         </Route>

//         {/* Redirect all other paths */}
//         <Route
//           path="*"
//           element={
//             authenticated ? (
//               <Navigate to="/create-notice" replace />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// export default AppRoutes;