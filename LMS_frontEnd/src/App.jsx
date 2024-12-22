import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Academic from './pages/Academic';

import Header from './components/Header';
// import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>

      {/*header */}
      <Header />
      {/* <NavBar/> */}

      {/* Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/academic" element={<Academic />} />
      </Routes>

      {/* Footer */}

    </Router>
  );
}

export default App;

