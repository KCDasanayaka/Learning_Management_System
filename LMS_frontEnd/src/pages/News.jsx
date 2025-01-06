import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* News Header */}
      <motion.div
        className="bg-primary py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='bg-red-900 p-4 mt-14'>
        <h1 className="font-kumbh text-5xl text-center text-yellow-500 uppercase font-bold">News</h1>
        </div>
      </motion.div>

      {/* News Cards */}
      <div className="flex flex-col items-center justify-center m-12 space-y-6">
        {/* Single News Card */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-3/4 bg-yellow-500 rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
                  className="text-yellow-500 font-bold hover:underline"
                >
                  See More&gt;&gt;&gt;
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
