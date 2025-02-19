import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateNotice from './pages/CreateNotice';
import Header from './components/Header';


const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/create-notice" element={<CreateNotice />} />
      </Routes>
    </Router>
  );
};

export default App;