import { useEffect } from 'react';
import { motion } from 'framer-motion';
import image from "../assets/hImg2.png"

const SchAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Learning Online Section */}
      <section className="relative py-12 text-red-custom">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Yellow Layer */}
        <div className="absolute inset-0 bg-gray-50 opacity-80"></div>

        <motion.div
          className="relative container mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4"> About </h2>
          <p className="max-w-2xl mx-auto mb-6">

            R/Pathagama Maha Vidyalaya, established in 1891, stands as a pillar
            of Sri Lankan education. With dedicated faculty and a serene
            environment, we provide well-rounded education that fosters growth
            and prepares students for success in the modern world.</p>

        </motion.div>
      </section>
    </div>
  );
};

export default SchAbout;
