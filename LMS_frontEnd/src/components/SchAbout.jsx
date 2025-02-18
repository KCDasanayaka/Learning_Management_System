import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdSchool, MdGroups, MdLibraryBooks, MdHistory } from 'react-icons/md';
import image from "../assets/hImg2.png";

const SchAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <MdSchool />,
      title: "130+ Years",
      description: "Of academic excellence and tradition",
      image: image
    },
    {
      icon: <MdGroups />,
      title: "600+ Students",
      description: "Nurturing young minds every year",
      image: image
    },
    {
      icon: <MdLibraryBooks />,
      title: "30+ Faculty",
      description: "Dedicated and experienced staff",
      image: image
    },
    {
      icon: <MdHistory />,
      title: "Modern Curriculum",
      description: "Balancing tradition and innovation",
      image: image
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="School Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-red-900/60"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About 
          </motion.h2>

          {/* Divider Line */}
        <motion.div
          className="w-16 h-1 bg-yellow-500 mb-8 item-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Established in 1891, we have been shaping futures with a perfect blend of tradition and innovation.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            To provide a nurturing environment that fosters academic excellence, 
            personal growth, and social responsibility, preparing students to 
            thrive in a rapidly changing world.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SchAbout;