import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen font-inter mt-32">
      {/* Contact Content */}
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Information */}
          <motion.div
            className="bg-white p-8 "
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-10">
              Contact Information
            </h2>
            <div className="space-y-6">
              <ContactDetail
                icon={MdEmail}
                title="Email"
                text="info@PathagamaMahaVidyalaya.lk"
                subtext="pathagamamahavidyalaya@gmail.com"
              />
              <ContactDetail
                icon={MdPhone}
                title="Phone"
                text="+94 711 587 988"
              />
              <ContactDetail
                icon={MdLocationOn}
                title="Address"
                text="Pathagama, Kuruwita"
              />
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-md overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MapEmbed />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Updated MapEmbed component
const MapEmbed = () => (
  <div className="relative h-96 w-full">
    <iframe
      title="School Location"
      className="absolute inset-0 w-full h-full rounded-xl"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.343071444176!2d80.36561306439972!3d6.72312721765982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f56b74d3f0db%3A0x53cb8993772b29b6!2sPathagama%2C%20Kuruwita!5e0!3m2!1sen!2slk!4v1678931984326!5m2!1sen!2slk"
      allowFullScreen
      loading="lazy"
    />
  </div>
);

// Enhanced ContactDetail component
const ContactDetail = ({ icon: Icon, title, text, subtext }) => (
  <div className="flex items-start space-x-4 group">
    <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-yellow-custom transition-colors">
      <Icon className="text-2xl text-red-800 group-hover:text-white" />
    </div>
    <div>
      <h3 className="text-md font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-600">{text}</p>
      {subtext && <p className="text-gray-500 text-sm mt-1">{subtext}</p>}
    </div>
  </div>
);

export default ContactUs;