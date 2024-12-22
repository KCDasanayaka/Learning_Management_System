import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Academic from './pages/Academic';
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/academic" element={<Academic />} />
      </Routes>

      {/* Footer */}

    </Router>
  );
}

export default App;

