import React, { useState, useEffect, useRef } from 'react';
import studentsImg from '../assets/image 1.png'; // Updated to use the uploaded image
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver logic to detect when the section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Trigger animation when in view
          } else {
            setAnimate(false); // Reset animation when out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger the animation when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants with Zoom effect
  const fadeInZoom = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, // Initial state with smaller scale and hidden
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }, // Fade in and zoom in when visible
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      variants={fadeInZoom}
      className="font-kumbh"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center m-12 relative">
        {/* Image Section with Gradient Overlay */}
        <div className="relative w-full lg:w-1/2 ml-10 lg:order-1 order-1">
          <img
            src={studentsImg}
            alt="Students"
            className="w-full h-auto rounded-t-lg lg:rounded-t-lg"  // Apply rounded corners only on top-left and top-right
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-white rounded-t-lg lg:rounded-lg"></div>
        </div>

        {/* Text Section */}
        <div className="text-black font-kumbh flex-1 lg:ml-10 mr-10 lg:order-2 order-1">
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
