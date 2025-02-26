import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const ViewNotices = () => {
  const [notices, setNotices] = useState([]);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notices');
        setNotices(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotices();
  }, []);

  // Sort notices by posted date in descending order
  const sortedNotices = [...notices].sort((a, b) => 
    new Date(b.postedDate) - new Date(a.postedDate)
  );

  // Function to handle opening the PDF link
  const handleViewNotice = (pdfLink) => {
    window.open(pdfLink, '_blank');
  };

  // Date format options for "January 15, 2024"
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <div className="min-h-screen my-28 font-inter">
      <span className='text-2xl font-bold px-12'>Notices</span>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8">
          {sortedNotices.map((notice, index) => (
            <motion.div
              key={notice._id}
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
                    <span className="text-sm font-semibold">
                      {new Date(notice.deadline).toLocaleDateString('en-US', dateOptions)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-red-800 mb-4">
                  {notice.title}
                </h2>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">
                      Posted: {new Date(notice.postedDate).toLocaleDateString('en-US', dateOptions)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleViewNotice(notice.pdfLink)}
                    className="flex items-center space-x-2 bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                  >
                    <span className='text-sm'>View Notice</span>
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

export default ViewNotices;
