import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdSchool, MdPeople, MdStars, MdLibraryBooks } from 'react-icons/md';
import image1 from "../assets/ImageCarousel/Bg-2.jpg";
import image2 from "../assets/ImageCarousel/Bg-1.jpg";

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <MdSchool />,
      title: "55+ Years",
      description: "Of academic excellence and tradition",
      image: image1
    },
    {
      icon: <MdPeople />,
      title: "600+ Students",
      description: "Nurturing young minds every year",
      image: image2
    },
    {
      icon: <MdStars />,
      title: "30+ Faculty",
      description: "Dedicated and experienced staff",
      image: image1
    },
    {
      icon: <MdLibraryBooks />,
      title: "Modern Curriculum",
      description: "Balancing tradition and innovation",
      image: image2
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About R/Pathagama Maha Vidyalaya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Established in 1968, we have been shaping futures with a perfect blend of tradition and innovation.
          </p>
        </motion.div>

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
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To provide a nurturing environment that fosters academic excellence, 
            personal growth, and social responsibility, preparing students to 
            thrive in a rapidly changing world.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;