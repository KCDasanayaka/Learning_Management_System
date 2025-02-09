import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* News Header */}
      <motion.div
        className="bg-primary py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='bg-red-custom p-6 mt-12 sm:mt-16 md:mt-14 lg:mt-14'>
        <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">Announcement</h1>
        </div>
      </motion.div>

      {/* News Cards */}
      <div className="flex flex-col items-center justify-center m-12 mt-4 space-y-10">
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-3/4 bg-yellow-custom rounded-b-[25px] shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Title Section */}
            <div className="p-4">
              <h2 className="font-kumbh text-2xl text-center font-bold text-red-custom">
                Admission to A/L Section – Online Application 2024
              </h2>
            </div>

            {/* Description Section */}
            <div className="bg-red-custom text-white px-6 py-4">
              <p className="font-kumbh text-lg leading-relaxed">
                This application is for both students of Royal College as well as External
                students who wish to pursue their A/L education at R/Pathagama Maha Vidyalaya.
                <br />
                <br />
                <strong>Dear students,</strong>
                <br />
                Please note the requirements for admission to Advanced Level Classes:
                General Requirements: At least SIX passes with a minimum of THREE credits
                including Sinhala and Mathematics at the GCE (O/L) – 2024 December Examination.
                One of the credits should be for a relevant subject offered at the Advanced Level.
              </p>
              {/* See More Link */}
              <div className="mb-2 text-right text-2xl font-semibold">
                <a
                  href="#"
                  className="text-yellow-custom font-bold hover:underline"
                >
                  See More&gt;&gt;&gt;
                </a>
              </div>
            </div>
            
          </motion.div>
        ))}
        {[2].map((_, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-3/4 bg-yellow-custom rounded-b-[25px] shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Title Section */}
            <div className="p-4">
              <h2 className="font-kumbh text-2xl text-center font-bold text-red-custom">
                GCE O/L Examination 2024 – Online Application Now Open
              </h2>
            </div>

            {/* Description Section */}
            <div className="bg-red-custom text-white px-6 py-4">
              <p className="font-kumbh text-lg leading-relaxed">
                The GCE Ordinary Level Examination 2024 online application is now open. All students
                wishing to sit for the O/L exam must complete their registration by the end of this month. 
                Please ensure that you meet the following general requirements:
                <br /><br />
                <strong>Requirements:</strong>
                <br />
                – At least 5 passes in the GCE O/L 2023 or equivalent examination.
                <br />
                – Registration and payment must be done through the official online portal.
              </p>
              {/* See More Link */}
              <div className="mb-2 text-right text-2xl font-semibold">
                <a
                  href="#"
                  className="text-yellow-custom font-bold hover:underline"
                >
                  See More&gt;&gt;&gt;
                </a>
              </div>
            </div>
          </motion.div>
        ))}
        {[3].map((_, index)=> (
          <motion.div
          key={index}
          className="w-full lg:w-3/4 bg-yellow-custom rounded-b-[25px] shadow-lg overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Title Section */}
          <div className="p-4">
            <h2 className="font-kumbh text-2xl text-center font-bold text-red-custom">
              Grade 5 Scholarship Examination 2024 – Application Information
            </h2>
          </div>
        
          {/* Description Section */}
          <div className="bg-red-custom text-white px-6 py-4">
            <p className="font-kumbh text-lg leading-relaxed">
              The application process for the Grade 5 Scholarship Examination 2024 has begun. This 
              exam provides students with the opportunity to receive government scholarships to continue
              their education at leading schools across Sri Lanka.
              <br /><br />
              <strong>Eligibility:</strong>
              <br />
              – Applicants must be in Grade 5 at a recognized school in Sri Lanka.
              <br />
              – A valid birth certificate and school records are required for registration.
            </p>
            {/* See More Link */}
            <div className="mb-2 text-right text-2xl font-semibold">
              <a
                href="#"
                className="text-yellow-custom font-bold hover:underline"
              >
                See More&gt;&gt;&gt;
              </a>
            </div>
          </div>
        </motion.div>
        
        ))}
        {[3].map((_, index)=> (
          <motion.div
          key={index}
          className="w-full lg:w-3/4 bg-yellow-custom rounded-b-[25px] shadow-lg overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Title Section */}
          <div className="p-4">
            <h2 className="font-kumbh text-2xl text-center font-bold text-red-custom">
              Parent-Teacher Meeting – 2024 Schedule
            </h2>
          </div>
        
          {/* Description Section */}
          <div className="bg-red-custom text-white px-6 py-4">
            <p className="font-kumbh text-lg leading-relaxed">
              The Parent-Teacher Meeting for the year 2024 is scheduled for the 20th of January. This 
              meeting is an important opportunity for parents to discuss the progress of their children 
              and plan for the upcoming year.
              <br /><br />
              <strong>Agenda:</strong>
              <br />
              – Discuss student progress and any areas needing attention.
              <br />
              – Upcoming educational programs and school events for 2024.
              <br />
              – Special focus on student mental health and well-being.
            </p>
            {/* See More Link */}
            <div className="mb-2 text-right text-2xl font-semibold">
              <a
                href="#"
                className="text-yellow-custom font-bold hover:underline"
              >
                See More&gt;&gt;&gt;
              </a>
            </div>
          </div>
        </motion.div>
        
        ))}
      </div>
    </div>
  );
};

export default News;
