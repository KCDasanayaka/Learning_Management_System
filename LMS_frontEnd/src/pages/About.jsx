import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/SchoolLogos/image1.png";
import Logo from "../assets/SchoolLogos/School_logo.png";
import sin_text from "../assets/SchoolLogos/sinhala_Text.png";
import PrincipalCards from "../components/PrincipalCard";


const About = () => {
  
    const [aboutRef, aboutInView] = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
    });

    const [infoRef, infoInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="font-inter bg-gray-100">

            <motion.div
                    className="bg-primary py-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-red-custom p-6 mt-12 sm:mt-16 md:mt-16 lg:mt-14' ">
                        <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">
                            ABOUT US
                        </h1>
                    </div>

                  </motion.div>

            {/* Mission Section Info */}
            <section className="py-6">
                <motion.div
                    ref={infoRef} 
                    className="container mx-auto text-center px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ duration: 0.8 }}
                >
    
                    <div className="mb-6">
                    <img
                        src={Logo}
                        alt="School Logo"
                        className="mx-auto w-40 sm:w-48 md:w-56 lg:w-72 object-contain" 
                        />
                    <img
                        src={sin_text}
                        alt="School Logo"
                        className="mx-auto w-64 sm:w-72 md:w-80 lg:w-96 object-contain mt-6"
                        />



                    </div>
                    <div>
                        <h2 className="font-kumbh text-3xl sm:text-4xl font-bold mb-4 mt-12 uppercase">Our Mission</h2>
                        <p className="font-sans text-gray-500 font-normal text-2xl max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                        Ensuring a culturally diverse environment for students from all over the country, to enable them to become active learners and well rounded citizens who contribute positively to the world.
                        </p>
                    </div>
                        
                </motion.div>
            </section>

            {/* Vision Section */}
            <section className="py-2">
                <motion.div
                    ref={aboutRef} 
                    className="container mx-auto text-center px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ duration: 0.9 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase font-kumbh">Vision</h2>
                    <p className="font-sans text-gray-500 font-normal text-2xl max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                    Providing each and every student with a unique learning environment to grow and excel from the time he begins his educational journey while offering a vibrant and enjoyable educational opportunity to face lifelong challenges.
                    </p>
                </motion.div>
            </section>

            {/* History Section */}
            <div className="py-6 mt-9">
                <section className="relative py-12 text-white">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>

                    <div className="absolute inset-0 bg-black opacity-70"></div>

                    <motion.div
                        className="relative container mx-auto text-center px-4 sm:px-6 lg:px-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">History</h2>
                        <p className="max-w-4xl mx-auto mb-6 px-4 sm:px-6 md:px-1">

                            R/Pathagama Maha Vidyalaya, located in the Southern region of Sri Lanka, has a rich history of educational excellence that dates back several decades. Established with the mission of providing quality education to the local community, the school has grown from a small rural institution to a recognized educational establishment. Over the years, R/Pathagama Maha Vidyalaya has played a significant role in the academic and personal development of its students, producing numerous successful individuals who have contributed to various fields. The school has continuously adapted to changing educational needs, incorporating modern teaching methods and facilities while maintaining a strong connection to the local culture and traditions. Today, R/Pathagama Maha Vidyalaya stands as a beacon of knowledge and a vital part of the community educational landscape.
                        </p>
                    </motion.div>
                </section>
            </div>
            
            <PrincipalCards/>

        </div>
    );
};

export default About;
