import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";
import academicData from "../data/academicData";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Academic = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-inter">
      {/* Grade Navigation */}
      <nav className="sticky top-10 bg-white z-10 mb-8">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap justify-center gap-3">
            {academicData.map((grade) => (
              <Link
                key={grade.id}
                to={`grade-${grade.id}`}
                smooth={true}
                duration={500}
                offset={-100}
                className="px-5 py-2 rounded-full bg-white text-red-custom border-2 border-gray-100 transition-all cursor-pointer font-medium hover:bg-red-custom hover:text-yellow-custom active:scale-95"
                activeClass="bg-blue-100 border-blue-500 text-blue-900"
              >
                {grade.grade}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {academicData.map((data, index) => (
            <motion.section
              key={data.id}
              id={`grade-${data.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Grade Header */}
              <div className="bg-red-custom p-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  {data.grade} Division
                </h2>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-red-custom mb-2">
                    Sectional Head:
                  </h3>
                  <p className="text-gray-700 text-lg">{data.sectionalHead}</p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-red-custom mb-4">
                    Teaching Staff:
                  </h3>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {data.teachers.map((teacher, index) => (
                      <li
                        key={index}
                        className="flex items-start pl-3 border-l-4 border-yellow-custom"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {teacher.section}
                          </p>
                          <p className="text-gray-600">{teacher.teacher}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Back to Top Button */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="grade-1"
            smooth={true}
            duration={800}
            className="bg-white text-red-custom p-3 border rounded-full shadow-lg hover:bg-yellow-custom transition-colors cursor-pointer flex items-center justify-center"
          >
            <FiArrowUp className="w-5 h-5" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Academic;
