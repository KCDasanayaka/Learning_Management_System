import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <motion.div
        className="bg-primary py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-red-custom p-6 mt-12 sm:mt-16 md:mt-16 lg:mt-14"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">
            Contact Us
          </h1>
        </motion.div>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-left mb-6 text-2xl font-semibold text-black-500">
          <ContactDetail
            icon={MdEmail}
            text="Web – info@PathagamaMahaVidyalaya.lk"
          />
          <ContactDetail icon={MdPhone} text="Call Us – 0711587988" />
          <ContactDetail
            icon={MdLocationOn}
            text="Address – Pathagama, Kuruwita"
          />
          <ContactDetail
            icon={MdEmail}
            text="Mail Us – pathagamamahavidyalaya@gmail.com"
          />
        </div>
      </motion.div>

      {/* Main Section: Map and Form */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Map Embed */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <MapEmbed />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

const MapEmbed = () => (
  <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md p-6">
    <motion.iframe
      title="Pathagama Maha Vidyalaya Location"
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.343071444176!2d80.36561306439972!3d6.72312721765982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f56b74d3f0db%3A0x53cb8993772b29b6!2sPathagama%2C%20Kuruwita!5e0!3m2!1sen!2slk!4v1678931984326!5m2!1sen!2slk"
      allowFullScreen=""
      loading="lazy"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    ></motion.iframe>
  </div>
);

const ContactDetail = ({ icon: Icon, text }) => (
  <motion.h2
    className="text-black-500 mb-1"
    whileHover={{ scale: 1.05, color: "#ff0000" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="inline-block text-xl sm:text-2xl text-red-custom mr-3" />
    {text}
  </motion.h2>
);

const ContactForm = () => {
  React.useEffect(() => {
    emailjs.init("L4CaTullqPk0rzPrK");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const params = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send("service_5w6xbdq", "template_mibqze9", params)
      .then(
        (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send email!",
            text: error.text,
            showConfirmButton: true,
          });
        }
      );
  };

  return (
    <motion.form
      className="p-6 rounded-lg shadow-md"
      onSubmit={handleFormSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full bg-yellow-custom p-2 mb-5">
        <h2 className="text-2xl font-bold text-red-custom mb-2 text-center">
          Get In Touch
        </h2>
      </div>
      <FormField label="Name" name="name" type="text" placeholder="Your Name" />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Your Email"
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        placeholder="Your Message"
        rows="4"
      />
      <motion.div
        className="flex items-center justify-end"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="btn-primary" type="submit">
          Submit
        </button>
      </motion.div>
    </motion.form>
  );
};

const FormField = ({ label, name, type, placeholder, rows }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default ContactUs;
