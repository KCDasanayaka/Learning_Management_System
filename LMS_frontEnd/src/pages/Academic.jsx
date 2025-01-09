import React from "react";
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Academic = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <motion.div
        className="bg-primary py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-red-custom p-6 mt-12 sm:mt-16 md:mt-16 lg:mt-14">
          <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">
            Academic
          </h1>
        </div>
      </motion.div>

      {/* First Content Section */}
      <motion.div
        className="flex-1 px-4 sm:px-6 md:px-8 py-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mt-4">
          <h2 className="font-kumbh text-3xl sm:text-4xl font-bold uppercase text-center">
            Grades
          </h2>
          <div className="mt-8 flex flex-col justify-center align-middle">
            <div className="flex flex-wrap gap-6 justify-center text-1xl font-semibold">
              {/* Grade Cards */}
              <button className="btn-primary">Grade 1</button>
              <button className="btn-primary">Grade 2</button>
              <button className="btn-primary">Grade 3</button>
              <button className="btn-primary">Grade 4</button>
              <button className="btn-primary">Grade 5</button>
              <button className="btn-primary">Grade 6</button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-1xl font-semibold mt-6">
              {/* Grade Cards */}
              <button className="btn-primary">Grade 7</button>
              <button className="btn-primary">Grade 8</button>
              <button className="btn-primary">Grade 9</button>
              <button className="btn-primary">Grade 10</button>
              <button className="btn-primary">Grade 11</button>
              <button className="btn-primary">Grade 12</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Centered Black Line */}
      <motion.div
        className="flex items-center justify-center my-12"
      >
        <div className="bg-black h-1 w-3/4 rounded-3xl" />
      </motion.div>

      {/* News Cards Section */}
      <motion.div>
        <div className="flex flex-col items-center justify-center m-12 mt-4 space-y-10">
          {[1].map((_, index) => (
            <motion.div
              key={index}
              className="w-full lg:w-3/4 bg-yellow-custom rounded-b-[25px] shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Title Section */}
              <div className="p-4">
                <h2 className="font-kumbh text-2xl text-center font-bold text-red-custom">
                  Admission to A/L Section – Online Application 2024
                </h2>
              </div>

              {/* Description Section */}
              <div className="bg-red-custom text-white px-6 py-4">
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
                <div className="mb-2 text-right text-2xl font-semibold">
                  <a
                    href="#"
                    className="text-yellow-custom font-bold hover:underline"
                  >
                    See More&gt;&gt;&gt;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Academic;
