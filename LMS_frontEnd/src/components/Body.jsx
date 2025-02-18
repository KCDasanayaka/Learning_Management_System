import { useEffect } from 'react';
import { motion } from 'framer-motion';
import image from "../assets/SchoolLogos/image1.png"
import StatsSection from './StatsSection';
import AboutSection from './AboutSection';
import SchAbout from './SchAbout';

const Body = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-inter">
            {/* Stats Section */}
            {/* <StatsSection/> */}

            {/* About Section */}
            <AboutSection />
            <SchAbout />


      {/* Learning Online Section */}
<section
  className="relative py-20 text-white"
  style={{
    backgroundImage: `url(${image})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-red-custom opacity-85"></div>

  <motion.div
    className="relative container mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
     e-Learning 
    </h2>
    <p className="max-w-3xl mx-auto mb-8 text-md md:text-lg leading-relaxed">
      Our Learning Management System transforms e-learning into an immersive experience.
      Engage in interactive sessions, collaborate seamlessly, and access world-class resources all on one innovative platform.
    </p>
    <a
      href="/lms"
      className="inline-block bg-white text-red-custom font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-yellow-custom hover:text-white"
    >
      Explore LMS &rarr;
    </a>
  </motion.div>
</section>


        </div>
    );
};


export default Body;
