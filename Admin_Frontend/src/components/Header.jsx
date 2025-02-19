import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import School_logo from "../assets/School_white_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-red-custom text-white py-4 fixed w-full top-0 left-0 z-50 font-inter">
        <div className="container mx-auto relative flex items-center px-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src={School_logo} alt="Logo" className="h-10 mr-6" />
          </div>

          {/* Center: Navigation (Notice & Gallery) */}
          <nav className="absolute inset-0 flex justify-center items-center">
            <ul className="hidden sm:flex space-x-6">
              <li>
                <Link
                  to="/create-notice"
                  className="rounded transition hover:text-yellow-custom"
                >
                  Notice
                </Link>
              </li>
              <li>
                <Link
                  to="/create-gallery"
                  className="rounded transition hover:text-yellow-custom"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Log Out & Mobile Menu Button */}
          <div className="flex-1 flex justify-end items-center">
            <ul className="hidden sm:flex space-x-6">
              <li>
                <Link
                  to="/contact"
                  className="rounded transition hover:text-yellow-custom"
                >
                  Log Out
                </Link>
              </li>
            </ul>
            <div className="sm:hidden relative z-20">
              <label
                className="cursor-pointer text-white text-3xl"
                onClick={toggleMenu}
              >
                {isMenuOpen ? "" : "☰"}
              </label>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Mobile Dropdown Menu */}
        <div
          className={`sm:hidden fixed inset-0 bg-red-custom bg-opacity-95 z-50 flex items-center justify-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-8 right-8">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-custom text-2xl shadow-lg focus:outline-none hover:bg-yellow-custom"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Mobile Menu Container */}
          <div className="relative text-white rounded-lg p-6 w-full max-w-sm h-screen flex flex-col justify-center items-center">
            <ul className="flex flex-col items-center space-y-8 text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  Notice
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:text-yellow-custom"
                  onClick={toggleMenu}
                >
                  Log Out
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
