import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import School_logo from "../assets/SchoolLogos/School_white_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Set the active link when a menu item is clicked
    if (isMenuOpen) setIsMenuOpen(false); // Close the menu on mobile when a link is clicked
  };

  // Links for the menu
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" }
  ];

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
              {menuLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`rounded transition relative ${
                      activeLink === name ? "text-yellow-custom" : "hover:text-yellow-custom"
                    }`}
                    onClick={() => handleLinkClick(name)}
                  >
                    {name}
                    {activeLink === name && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-custom"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="sm:hidden relative z-20">
              <label
                className="cursor-pointer text-white text-3xl"
                onClick={toggleMenu}
              >
                {isMenuOpen ? "✖" : "☰"}
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
              {menuLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`hover:text-yellow-custom relative ${
                      activeLink === name ? "text-yellow-custom" : ""
                    }`}
                    onClick={() => handleLinkClick(name)}
                  >
                    {name}
                    {activeLink === name && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-custom"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-8">
              <Link
                to="/contact"
                className="hover:text-yellow-custom text-lg"
                onClick={() => handleLinkClick("Contact Us")}
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
