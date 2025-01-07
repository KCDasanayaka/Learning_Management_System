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
      <header className="bg-red-custom text-white py-4 fixed w-full top-0 left-0 z-50 font-inter">
        <div className="container mx-auto flex justify-between items-center px-4">
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
                <Link
                  to="/"
                  className="rounded transition hover:text-yellow-custom focus:outline-none focus:ring-1 focus:ring-yellow-custom focus:ring-offset-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="rounded transition hover:text-yellow-custom focus:outline-none focus:ring-1 focus:ring-yellow-custom focus:ring-offset-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="rounded transition hover:text-yellow-custom focus:outline-none focus:ring-1 focus:ring-yellow-custom focus:ring-offset-2"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="rounded transition hover:text-yellow-custom focus:outline-none focus:ring-1 focus:ring-yellow-custom focus:ring-offset-2"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="rounded transition hover:text-yellow-custom focus:outline-none focus:ring-1 focus:ring-yellow-custom focus:ring-offset-2"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="rounded transition hover:text-yellow-custom focus:outline-none focus:ring-1 focus:ring-yellow-custom focus:ring-offset-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="sm:hidden relative z-20">
              <label
                className="cursor-pointer text-white text-3xl"
                onClick={toggleMenu}
              >
                {isMenuOpen ? "" : "☰"}
              </label>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Mobile Dropdown Menu */}
        <div
          className={`sm:hidden fixed inset-0 bg-red-custom bg-opacity-95 z-50 flex items-center justify-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="absolute top-8 right-8">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-custom text-2xl shadow-lg focus:outline-none hover:bg-yellow-custom"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Menu Container */}
          <div className="relative text-white rounded-lg p-6 w-full max-w-sm h-screen flex flex-col justify-center items-center">
            <ul className="flex flex-col items-center space-y-8 text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
            </ul>
            <div className="absolute bottom-8">
              <Link
                to="/contact"
                className="hover:text-yellow-custom text-lg"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Header;
