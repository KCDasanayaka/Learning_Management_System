import "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,// Trigger the animation only once
    threshold: 0.2,// Start animation when 20% of the section is visible
  });

  return (
    <div className="font-kumbh">
      {/* About Section Info */}
      <section className="py-12 bg-gray-100">
        <motion.div
          ref={infoRef} // Attach the ref
          className="container mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={infoInView ? { opacity: 1, y: 0 } : {}} // Animate only if in view
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">132 YEARS OF EXCELLENCE</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
          R/Pathagama Maha Vidyalaya, established in 1891, stands as a pillar
    of Sri Lankan education. With dedicated faculty and a serene
    environment, we provide well-rounded education that fosters growth
    and prepares students for success in the modern world.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;
