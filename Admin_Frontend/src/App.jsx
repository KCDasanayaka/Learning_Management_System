import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateNotice from './pages/CreateNotice';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateNotice />} />
      </Routes>
    </Router>
  );
};

export default App;