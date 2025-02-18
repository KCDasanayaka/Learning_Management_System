import React from 'react';
import { motion } from 'framer-motion';
import event1Image from "../assets/Event1.jpg";
import event2Image from "../assets/Event2.jpeg";
import event3Image from "../assets/Event3.jpg";

const callouts = [
  {
    name: '2025/01/02',
    description: 'Pre Poya Program',
    imageSrc: event1Image,
    imageAlt: 'Group meditation session in temple',
    href: '#'
  },
  {
    name: '2025/01/15',
    description: 'ABHINIMNNA - 2025',
    imageSrc: event2Image,
    imageAlt: 'Cultural dance performance stage',
    href: '#'
  },
  {
    name: '2025/01/24',
    description: 'Student Saviya - 2025',
    imageSrc: event3Image,
    imageAlt: 'Students participating in workshop',
    href: '#'
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col my-28 font-inter">
       
       <span className='text-2xl font-bold px-12 '>Gallery</span>
     
           {/* Modern Gallery Grid */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {callouts.map((event, index) => (
            <motion.article
              key={event.name}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={event.imageSrc}
                alt={event.imageAlt}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-sm font-medium text-gray-200">
                  {event.name}
                </span>
                <h3 className="text-xl font-bold">{event.description}</h3>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20">
                  View Event
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;