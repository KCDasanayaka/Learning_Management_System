import React from "react";
import { motion } from 'framer-motion';

const Academic = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
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

      {/* Main Content Section */}
      <motion.div className="flex-1 px-4 sm:px-6 md:px-8 py-6">
        <h2 className="font-kumbh text-3xl sm:text-4xl font-bold uppercase text-center">
          Grades
        </h2>
        <div className="mt-8 flex flex-col justify-center align-middle">
          <div className="flex flex-wrap gap-6 justify-center text-1xl font-semibold">
              {/* Grade Cards */}
            <button className="btn-primary">
              Grade 1
            </button>
            <button className="btn-primary">
              Grade 2
            </button>
            <button className="btn-primary">
              Grade 3
            </button>
            <button className="btn-primary">
              Grade 4
            </button>
            <button className="btn-primary">
              Grade 5
            </button>
            <button className="btn-primary">
              Grade 6
            </button>
            
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-1xl font-semibold mt-6">
              {/* Grade Cards */}
            <button className="btn-primary">
              Grade 7
            </button>
            <button className="btn-primary">
              Grade 8
            </button>
            <button className="btn-primary">
              Grade 9
            </button>
            <button className="btn-primary">
              Grade 10
            </button>
            <button className="btn-primary">
              Grade 11
            </button>
            <button className="btn-primary">
              Grade 12
            </button>
            
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Academic;
