import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/SchoolLogos/image1.png";
import history from "../assets/History.jpg";
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

    const [historyRef, historyInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="font-inter bg-gray-100">
            {/* Header Section */}
            <motion.div
                className="bg-primary py-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-red-custom p-6 mt-12 sm:mt-16 md:mt-16 lg:mt-14">
                    <h1 className="font-kumbh text-4xl text-center text-yellow-custom uppercase font-custom-custom">
                        ABOUT US
                    </h1>
                </div>
            </motion.div>

            {/* Mission Section */}
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
                            alt="Sinhala Text"
                            className="mx-auto w-64 sm:w-72 md:w-80 lg:w-96 object-contain mt-6"
                        />
                    </div>
                    <div>
                        <h2 className="font-kumbh text-3xl sm:text-4xl font-bold mb-4 mt-12 uppercase">
                            Our Mission
                        </h2>
                        <p className="font-sans text-gray-500 font-normal text-2xl max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                            Ensuring a culturally diverse environment for students from all over the country, to enable them to become active learners and well-rounded citizens who contribute positively to the world.
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
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase font-kumbh">
                        Vision
                    </h2>
                    <p className="font-sans text-gray-500 font-normal text-2xl max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                        Providing each and every student with a unique learning environment to grow and excel from the time they begin their educational journey while offering a vibrant and enjoyable educational opportunity to face lifelong challenges.
                    </p>
                </motion.div>
            </section>

            {/* History Section */}
            <motion.div
                ref={historyRef}
                className="container mx-auto text-center px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={historyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mt-14 uppercase font-kumbh">
                Our history
                    </h2>
                <div className="flex flex-col lg:flex-row items-center justify-center m-4 relative py-6 mt-9 gap-6">
                    {/* Image Section with Gradient Overlay */}
                    <div className="relative w-full lg:w-1/2 ml-5 lg:order-1 order-1">
                        <img
                            src={history}
                            alt="Students"
                            className="w-full h-auto rounded-2xl lg:rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r "></div>
                    </div>

                    {/* Text Section */}
                    <div className="font-sans text-gray-500 font-normal flex-1 lg:ml-10 mr-5 lg:order-2 order-1">
                        <p className="text-base lg:text-base lg:text-justify text-center mt-2">
                            R/Pathagama Maha Vidyalaya, a cornerstone of education in the region, was established with the mission of providing quality education to the children of Pathagama and its surrounding areas. The school was founded in 1920, under the guidance of visionary educators and community leaders who recognized the need for accessible and inclusive education.
                            From its humble beginnings with a small number of students and limited resources, R/Pathagama Maha Vidyalaya has grown into a vibrant educational institution. Over the years, it has expanded its facilities, introduced innovative teaching methods, and cultivated a tradition of academic and extracurricular excellence.
                            The school takes pride in its holistic approach to education, fostering intellectual, cultural, and moral development among its students. Its alumni have gone on to achieve success in various fields, making significant contributions to society.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Principal Cards Section */}
            <PrincipalCards />
        </div>
    );
};

export default About;
