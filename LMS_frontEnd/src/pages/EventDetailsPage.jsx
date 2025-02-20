import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/events/${eventId}`);
      setEvent(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return (
      <motion.div
        className="min-h-screen flex flex-col my-28 font-inter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-2xl font-bold px-12">Loading Event...</span>
        <section className="container mx-auto px-4 py-12 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full" />
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes shimmer {
              to {
                transform: translateX(100%);
              }
            }
            .animate-shimmer {
              animation: shimmer 1.5s infinite;
            }
          `}</style>
        </section>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col my-28 font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="text-2xl font-bold px-12">{event.name}</span>
      <section className="container mx-auto px-4 py-12 pb-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {event.images.map((img, index) => (
            <motion.article
              key={index}
              className="group relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <img
                src={img.url}
                alt={`event ${index}`}
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
              />
            </motion.article>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default EventDetailsPage;