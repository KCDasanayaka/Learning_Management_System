import "react";
import School_logo from "../assets/SchoolLogos/School_white_logo.png";

const Footer = () => {
  return (
    <footer className="bg-red-custom text-white py-8 font-inter">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src={School_logo}
            alt="Logo"
            className="h-20 mx-auto mb-4 sm:mb-6" 
          />
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-sm sm:text-base">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-custom transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-yellow-custom transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="hover:text-yellow-custom transition duration-200"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="hover:text-yellow-custom transition duration-200"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-yellow-custom transition duration-200"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-yellow-custom transition duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright Message */}
        <p className="text-xs sm:text-sm">
          &copy; 2024 R/Pathagama Maha Vidyalaya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
