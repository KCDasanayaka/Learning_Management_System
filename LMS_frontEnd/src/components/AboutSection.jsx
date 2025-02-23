import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "../assets/ImageCarousel/Bg-2.jpg";
import { MdSchool, MdGroups, MdLibraryBooks } from "react-icons/md";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <MdGroups />, value: "600+", label: "Students" },
    { icon: <MdSchool />, value: "55+", label: "Teachers" },
    { icon: <MdLibraryBooks />, value: "12", label: "Classes" }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",  // Keeps background fixed
          backgroundPosition: "center",   // Ensures proper positioning
          backgroundSize: "cover",        // Ensures it covers the whole area
        }}
      ></motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content Section */}
      <div ref={ref} className="relative container mx-auto flex flex-col items-center text-center px-6 sm:px-10 py-32">
        {/* Heading */}
        <motion.h2
          className="text-white text-4xl sm:text-5xl font-bold tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          55 Years of Excellence
        </motion.h2>

        {/* Divider Line */}
        <motion.div
          className="w-16 h-1 bg-yellow-500 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-200 text-lg sm:text-xl max-w-3xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to <span className="text-yellow-400">R/Pathagama Maha Vidyalaya</span>, where we provide a nurturing environment for students to learn, grow, and excel. Our dedicated faculty and 
          state-of-the-art facilities ensure a well-rounded education that prepares students for success in the modern world.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/20 transition-all"
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: { scale: 1, opacity: 1 }
              }}
            >
              <div className="text-yellow-400 text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
