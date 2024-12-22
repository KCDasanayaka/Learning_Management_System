import { useState } from 'react';
import { Link } from 'react-router-dom';
import School_logo from "../assets/SchoolLogos/School_white_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="bg-red-900 text-white py-4 fixed w-full top-0 left-0 z-50 font-inter">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src={School_logo} alt="Logo" className="h-10 mr-6" />
            <h1 className="text-lg font-bold hidden sm:block">R/Pathagama Maha Vidyalaya</h1>
          </div>

        
          <nav className="flex items-center">
            {/* Desktop Menu */}
            <ul className="hidden sm:flex space-x-6">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
              <li><Link to="/academic" className="hover:text-yellow-500">Academic</Link></li>
              <li><Link to="/news" className="hover:text-yellow-500">News</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>

            </ul>

            {/* Mobile Menu Button */}
            <div className="sm:hidden relative z-20">
              <button onClick={toggleMenu} className="text-white text-3xl">
                {isMenuOpen ? '' : '☰'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Mobile Dropdown Menu */}
        <div
          className={`sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Close button inside the menu */}
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-white text-xl">
              ✖
            </button>
          </div>
          <ul
            className={`bg-red-900 text-white space-y-4 py-4 mt-2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <li><Link to="/" className="block px-4 py-2 hover:bg-yellow-500" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block px-4 py-2 hover:bg-yellow-500" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/academics" className="block px-4 py-2 hover:bg-yellow-500" onClick={toggleMenu}>Academics</Link></li>
            <li><Link to="/news" className="block px-4 py-2 hover:bg-yellow-500" onClick={toggleMenu}>News</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 hover:bg-yellow-500" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Header;
