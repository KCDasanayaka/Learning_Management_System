import React from "react";

const Academic = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Header Section */}
      <header className="bg-maroon text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/path-to-logo.png"
              alt="School Logo"
              className="w-10 h-10 mr-2"
            />
            <h1 className="text-xl font-bold">R/Pathagama Maha Vidyalaya</h1>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="underline decoration-yellow-500 decoration-2"
                >
                  Academics
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <button className="bg-yellow-500 text-maroon px-4 py-2 rounded hover:bg-yellow-600">
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Academic Section */}
      <main className="container mx-auto py-8 px-4">
        {/* Academic Title */}
        <h1 className="text-maroon text-4xl font-bold text-center mb-8">
          ACADEMIC
        </h1>
        <h2 className="text-black text-2xl font-semibold text-center mb-6">
          GRADES
        </h2>

        {/* Grade Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Array.from({ length: 12 }, (_, i) => (
            <button
              key={i}
              className="bg-yellow-500 text-maroon px-6 py-3 font-semibold rounded hover:bg-yellow-600 transition"
            >
              Grade {i + 1}
            </button>
          ))}
        </div>

        {/* Grade Details */}
        {[1, 2, 3].map((grade) => (
          <div
            key={grade}
            className="bg-yellow-500 mb-6 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-maroon text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Grade {grade}</h3>
            </div>
            <div className="bg-yellow-100 px-6 py-4">
              <p className="font-semibold mb-4">
                Sectional Head – Rev. Hanguranketha Kumarawansha Thero
              </p>
              <ul className="list-disc pl-6">
                <li>Grade {grade}-A – Mrs. L.D. Tennakoon</li>
                <li>Grade {grade}-B – Mrs. I.A.A. Dilinu Fernando</li>
                <li>Grade {grade}-C – Mrs. R.M.D.R. Ranasinghe</li>
              </ul>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-maroon text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 R/Pathagama Maha Vidyalaya. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Academic;
