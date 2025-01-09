import React from 'react';
import { motion } from 'framer-motion';
import event1Image from "../assets/Event1.jpg";
import event2Image from "../assets/Event2.jpeg";
import event3Image from "../assets/Event3.jpg";

const callouts = [
  {
    name: '2025/01/09',
    description: 'Description for event 1',
    imageSrc: event1Image,
    imageAlt: 'Image 1',
    href: '#'
  },
  {
    name: 'Event 2',
    description: 'Description for event 2',
    imageSrc: event2Image,
    imageAlt: 'Image 2',
    href: '#'
  },
  {
    name: 'Event 3',
    description: 'Description for event 3',
    imageSrc: event3Image,
    imageAlt: 'Image 3',
    href: '#'
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <motion.div
        className="bg-primary py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        role="banner"
      >
        <div className="bg-red-custom p-6 mt-12 sm:mt-16 md:mt-16 lg:mt-14">
          <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">
            Gallery
          </h1>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="bg-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-6">
            <motion.div
              className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              {callouts.map((callout) => (
                <motion.div
                  key={callout.name}
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
