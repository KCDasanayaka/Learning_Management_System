import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      <motion.div
        className="bg-primary py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-red-custom p-6 mt-12 sm:mt-16 md:mt-16 lg:mt-14">
          <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">
            Contact Us
          </h1>
        </div>
      </motion.div>

      <div className="flex justify-center items-center">
        <div className="text-left mb-6 text-2xl font-semibold text-black-500">
          <ContactDetail icon={MdEmail} text="Web – info@PathagamaMahaVidyalaya.lk" />
          <ContactDetail icon={MdPhone} text="Call Us – 0711587988" />
          <ContactDetail icon={MdLocationOn} text="Address – Pathagama, Kuruwita" />
          <ContactDetail icon={MdEmail} text="Mail Us – pathagamamahavidyalaya@gmail.com" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full md:w-1/2 p-6">
          <MapEmbed />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const MapEmbed = () => (
  <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md p-6">
    <iframe
      title="Pathagama Maha Vidyalaya Location"
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.343071444176!2d80.36561306439972!3d6.72312721765982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f56b74d3f0db%3A0x53cb8993772b29b6!2sPathagama%2C%20Kuruwita!5e0!3m2!1sen!2slk!4v1678931984326!5m2!1sen!2slk"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
);

const ContactDetail = ({ icon: Icon, text }) => (
  <h2 className="text-black-500 mb-1">
    <Icon className="inline-block text-xl sm:text-2xl text-red-700 mr-3" />
    {text}
  </h2>
);

const ContactForm = () => {
  React.useEffect(() => {
    emailjs.init("L4CaTullqPk0rzPrK"); // Replace "YOUR_USER_ID" with your EmailJS user ID
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const params = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send("service_5w6xbdq", "template_mibqze9", params) // Replace with your service and template IDs
      .then(
        (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset(); // Clear the form after successful submission
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
    <form className="p-6 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
      <div className="w-full bg-yellow-custom p-2 mb-5">
        <h2 className="text-2xl font-bold text-red-custom mb-2 text-center">Get In Touch</h2>
      </div>
      <FormField label="Name" name="name" type="text" placeholder="Your Name" />
      <FormField label="Email" name="email" type="email" placeholder="Your Email" />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        placeholder="Your Message"
        rows="4"
      />
      <div className="flex items-center justify-end">
        <button className="btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
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
