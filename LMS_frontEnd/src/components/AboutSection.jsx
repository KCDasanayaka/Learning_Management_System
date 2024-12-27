import React, { useState, useEffect } from 'react';
import studentsImg from '../assets/image 1.png'; // Updated to use the uploaded image
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('sch-about');
      const rect = section.getBoundingClientRect();

      // Check if the section is fully visible
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        setAnimate(true); // Trigger animation
      } else {
        setAnimate(false); // Reset animation when out of view
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      id="sch-about"
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      variants={fadeIn}
      className="font-kumbh"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center m-12 relative">
        {/* Image Section with Gradient Overlay */}
        <div className="relative w-full lg:w-1/2 ml-10">
          <img
            src={studentsImg}
            alt="Students"
            className="w-full h-auto rounded-lg "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white rounded-lg"></div>
        </div>

        {/* Text Section */}
        <div className="text-black font-kumbh flex-1 lg:ml-10 mr-10">
          <h1 className="text-4xl lg:text-8xl font-bold lg:text-left text-center">
          132 Years of
          Excellence
          </h1>
          <p className="text-base lg:text-base lg:text-justify text-center mt-2">
          Welcome to R/Pathagama Maha Vidyalaya, where we provide a nurturing environment for students to learn, grow, and excel. Our dedicated faculty and state-of-the-art facilities ensure a well-rounded education that prepares students for success in the modern world.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutSection;
