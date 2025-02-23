import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MdPeople, MdSchool, MdClass } from "react-icons/md";

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="z-20 py-10">
      <div ref={ref} className="container mx-auto px-8 font-inter">
        {/* Centered Grid Container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-4xl">
            {/* Students Stat */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              variants={statItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <MdPeople className="text-3xl text-red-custom" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-red-custom mb-2">
                {inView && <CountUp end={600} duration={2.5} separator="," />}+
              </h3>
              <p className="text-gray-700 text-xl font-semibold">Students</p>
            </motion.div>

            {/* Teachers Stat */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              variants={statItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <MdSchool className="text-3xl text-red-custom" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-red-custom mb-2">
                {inView && <CountUp end={30} duration={2.5} />}+
              </h3>
              <p className="text-gray-700 text-xl font-semibold">Teachers</p>
            </motion.div>

            {/* Classes Stat */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              variants={statItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <MdClass className="text-3xl text-red-custom" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-red-custom mb-2">
                {inView && <CountUp end={12} duration={2.5} separator="," />}
              </h3>
              <p className="text-gray-700 text-xl font-semibold">Classes</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;