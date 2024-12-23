import "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-14 mt-16 font-inter">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-10">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Contact Details Section */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MdLocationOn className="text-xl sm:text-2xl text-red-700" />
                <p className="text-gray-700 text-sm sm:text-base">
                  Pathagama, Kuruwita
                </p>
              </div>
              <div className="flex items-center gap-4">
                <MdPhone className="text-xl sm:text-2xl text-red-700" />
                <p className="text-gray-700 text-sm sm:text-base">
                  078 596 2354 / 045 589 2365
                </p>
              </div>
              <div className="flex items-center gap-4">
                <MdEmail className="text-xl sm:text-2xl text-red-700" />
                <p className="text-gray-700">
                  {" "}
                  <a
                    href="mailto:pathagamamahavidyalaya@gmail.com"
                    className="text-red-700 text-sm sm:text-base hover:underline"
                  >
                    pathagamavidyalaya@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="w-full">
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Pathagama Maha Vidyalaya Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.343071444176!2d80.36561306439972!3d6.72312721765982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f56b74d3f0db%3A0x53cb8993772b29b6!2sPathagama%2C%20Kuruwita!5e0!3m2!1sen!2slk!4v1678931984326!5m2!1sen!2slk"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
