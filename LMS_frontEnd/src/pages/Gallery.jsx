import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col my-28 font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Smooth fade-in effect for the whole page
    >
      <span className="text-2xl font-bold px-12">Gallery</span>
      <section className="container mx-auto px-4 py-12 pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3, delayChildren: 0.2 } // Delays card loading
            }
          }}
        >
          {events.map((event, index) => (
            <motion.article
              key={event._id}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-xl hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={event.images[0]?.url || ''}
                alt={event.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-sm font-medium text-gray-200">
                  {new Date(event.date).toLocaleDateString()}
                </span>
                <h3 className="text-xl font-bold">{event.name}</h3>
                <button
                  onClick={() => navigate(`/event/${event._id}`)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20"
                >
                  View Event
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;
