import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateNotice from './pages/CreateNotice';
import Header from './components/Header';
import CreateEventPage from './pages/CreateEventPage';

const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/create-notice" element={<CreateNotice />} />
        <Route path="/create-gallery" element={<CreateEventPage />} />
      </Routes>
    </Router>
  );
};

export default App;