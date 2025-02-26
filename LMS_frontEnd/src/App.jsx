import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Academic from './pages/Academic';
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
import Footer from './components/footer';
import EventDetailsPage from './pages/EventDetailsPage';


const App = () => {
  return (
    <Router>

      {/*header */}
      <Header />

      {/* Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event/:eventId" element={<EventDetailsPage />} />
        <Route path="/notice" element={<News />} />
        <Route path="/academic" element={<Academic />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;

