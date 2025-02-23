import React from "react";
import { motion } from "framer-motion";
import { principalsData } from "../data/principalsData";

// Duplicate the data array to enable seamless infinite scrolling.
const duplicatedPrincipals = [...principalsData, ...principalsData];

const PrincipalCards = () => {
  return (
    <div className="relative py-4">
      <div className="container mx-auto px-4">
        {/* Overflow-hidden container to mask the continuous scroll */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-8"
            // Animate from 0% to -50% of its width, then loop infinitely.
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedPrincipals.map((principal, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 md:w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.img
                    src={principal.image}
                    alt={principal.name}
                    className="w-full h-48 object-cover"
                    // Smoothly scale the image up on hover
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      {principal.name}
                    </h3>
                    <p className="text-gray-50 font-medium">
                      {principal.period}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    {principal.achievements}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalCards;
