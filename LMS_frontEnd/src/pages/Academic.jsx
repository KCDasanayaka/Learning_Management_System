import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll
import point from "../assets/Point.png";
import academicData from "../data/academicData";

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
          <div className="mt-8 flex flex-col justify-center align-middle ">
            <div className="flex flex-wrap gap-6 justify-center text-xl font-semibold ">
              {/* Grade Buttons with react-scroll Link */}
              {academicData.map((grade) => (
                <Link
                  key={grade.id}
                  to={`grade-${grade.id}`} // Smooth scroll target
                  smooth={true} // Enable smooth scrolling
                  duration={500} // Scroll duration (milliseconds)
                  offset={-50} // Adjust for the offset (e.g., for fixed headers)
                  className="btn-primary cursor-pointer px-2 py-1 h-10 w-15  flex align-middle justify-center"
                >
                  {grade.grade}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Centered Black Line */}
      <motion.div className="flex items-center justify-center my-12">
        <div className="bg-black h-1 w-3/4 rounded-3xl" />
      </motion.div>

      {/* Cards Section */}
      <motion.div>
        <div className="flex flex-col items-center justify-center m-12 mt-4 space-y-10">
          {academicData.map((data, index) => (
            <motion.div
              key={data.id}
              id={`grade-${data.id}`} // Unique ID for each grade section
              className="w-full lg:w-3/4 bg-yellow-custom rounded-b-[25px] shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Title Section */}
              <div className="p-4">
                <h2 className="font-kumbh text-2xl text-center font-bold text-red-custom">
                  {data.grade}
                </h2>
              </div>

              {/* Description Section */}
              <div className="bg-red-custom text-white px-6 py-6 flex align-middle justify-center">
                <p className="font-kumbh text-lg leading-relaxed flex justify-center align-center flex-col">
                  <strong className="text-xl-custom">
                    Sectional Head - {data.sectionalHead}
                  </strong>
                  <br />
                  <ul className="list-point-image pl-6 space-y-2 -mt-6">
                    {data.teachers.map((teacher, index) => (
                      <li key={index} className="flex items-center">
                        <img src={point} alt="bullet" className="w-3 h-3 mr-2" />
                        <strong className="mr-2">{teacher.section}</strong> -{" "}
                        {teacher.teacher}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Academic;
