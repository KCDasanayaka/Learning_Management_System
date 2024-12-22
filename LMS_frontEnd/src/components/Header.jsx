import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import School_logo from "../assets/SchoolLogos/School_white_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="bg-red-900 text-white py-4 fixed w-full top-0 left-0 z-50 font-inter">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo and Heading */}
          <div className="flex items-center">
            <img src={School_logo} alt="Logo" className="h-10 mr-6" />
            <h1 className="text-lg font-bold hidden sm:block">
              R/Pathagama Maha Vidyalaya
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            {/* Desktop Menu */}
            <ul className="hidden sm:flex space-x-6">
              <li>
                <Link to="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-yellow-500">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-yellow-500">
                  News
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-yellow-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="sm:hidden relative z-20">
              <button onClick={toggleMenu} className="text-white text-3xl">
                {isMenuOpen ? "" : "☰"}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content (Below Header) */}
      <main>
        {/* Mobile Dropdown Menu */}
        <div
          className={`sm:hidden fixed inset-0 bg-red-900 bg-opacity-95 z-50 flex items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
         

          {/* Close button */}
          <div className="absolute top-48">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-900 text-2xl shadow-lg focus:outline-none hover:bg-yellow-500"
            >
              <IoMdClose />
            </button>
          </div>
           {/* Menu Container */}
          <div className="relative  text-white rounded-lg p-6 w-full max-w-sm">
            {/* Centered Menu Items */}
            <ul className="flex flex-col items-center space-y-8 text-lg mt-10">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
