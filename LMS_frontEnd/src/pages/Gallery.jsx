import React from 'react'

const Gallery = () => {
  return (
    <div>
      {/* Gallery Header */}
      <div className="bg-primary py-12">
        <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase">Gallery</h1>
      </div>

      {/* Gallery Cards */}
      <div className="flex flex-col items-center justify-center m-12 space-y-6">
        {/* Single Gallery Card */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full lg:w-3/4 bg-yellow-custom rounded-lg shadow-lg overflow-hidden"
          >
            {/* Title Section */}
            <div className="p-4">
              <h2 className="font-kumbh text-2xl text-center font-bold text-black">
                Admission to A/L Section – Online Application 2024
              </h2>
            </div>

            {/* Description Section */}
            <div className="bg-maroon-500 text-white px-6 py-4">
              <p className="font-kumbh text-lg leading-relaxed">
                This application is for both students of Royal College as well as External
                students who wish to pursue their A/L education at R/Pathagama Maha Vidyalaya.
                <br />
                <br />
                <strong>Dear students,</strong>
                <br />
                Please note the requirements for admission to Advanced Level Classes:
                General Requirements: At least SIX passes with a minimum of THREE credits
                including Sinhala and Mathematics at the GCE (O/L) – 2024 December Examination.
                One of the credits should be for a relevant subject offered at the Advanced Level.
              </p>
              {/* See More Link */}
              <div className="mt-4 text-right">
                <a
                  href="#"
                  className="text-yellow-300 font-bold hover:underline"
                >
                  See More&gt;&gt;&gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
