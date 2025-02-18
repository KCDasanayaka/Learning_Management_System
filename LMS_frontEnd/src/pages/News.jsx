import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // News items with proper Date objects for sorting
  const newsItems = [
    {
      title: "Admission to A/L Section – Online Application 2024",
      date: "February 15, 2024",
      timestamp: new Date("2024-02-15")
    },
    {
      title: "GCE O/L Examination 2024 – Online Application Now Open",
      date: "February 10, 2024",
      timestamp: new Date("2024-02-10")
    },
    {
      title: "Grade 5 Scholarship Examination 2024 – Application Information",
      date: "February 5, 2024",
      timestamp: new Date("2024-02-05")
    },
    {
      title: "Parent-Teacher Meeting – 2024 Schedule",
      date: "January 15, 2024",
      timestamp: new Date("2024-01-15")
    }
  ];

  // Sort items by date in ascending order
  const sortedNewsItems = [...newsItems].sort((a, b) => 
    a.timestamp - b.timestamp
  );

  return (
    <div className="min-h-screen my-28 font-inter">
      <span className='text-2xl font-bold px-12'>Notice</span>
      {/* News Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8">
          {sortedNewsItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-md border overflow-hidden hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
        
              <div className="relative">
                <div className="absolute top-4 right-4 bg-yellow-400 text-red-800 px-4 py-1 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="text-sm font-semibold">{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-red-800 mb-4">
                  {item.title}
                </h2>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">Posted {item.date}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-red-800 hover:text-red-600 font-semibold transition-colors duration-200">
                    <span className='text-sm'>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;