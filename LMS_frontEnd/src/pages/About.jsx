import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

        <div className="font-inter my-16">

            {/* Mission & Vision Sections */}
            <section className="container mx-auto px-4 py-16">
                <div className="mb-14 flex flex-col items-center">
                    <img
                        src={Logo}
                        alt="School Logo"
                        className="w-48 h-48 object-contain mb-4"
                    />
                    <img
                        src={sin_text}
                        alt="Sinhala Text"
                        className="w-48 object-contain opacity-90"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    {/* Mission Card */}
                    <motion.div
                        ref={infoRef}
                        className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={infoInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >

                        <h2 className="text-3xl font-bold mb-6 text-red-custom text-center">
                            Mission
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-center">
                            Ensuring a culturally diverse environment for students from all over the country,
                            to enable them to become active learners and well-rounded citizens who contribute
                            positively to the world.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        ref={aboutRef}
                        className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >

                        <h2 className="text-3xl font-bold mb-6 text-red-custom text-center">
                            Vision
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-center">
                            Providing each and every student with a unique learning environment to grow and excel
                            from the time they begin their educational journey while offering a vibrant and
                            enjoyable educational opportunity to face lifelong challenges.
                        </p>
                    </motion.div>
                </div>

                {/* History Section */}
                <motion.div
                    ref={historyRef}
                    className="bg-white rounded-lg  overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={historyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="relative h-96">
                            <img
                                src={history}
                                alt="School History"
                                className="w-full h-full rounded-lg object-cover transform transition duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-4xl font-bold mb-2">Established 1920</h3>
                                <p className="text-lg opacity-90">A Legacy of Excellence</p>
                            </div>
                        </div>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-6 text-red-custom">History</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                R/Pathagama Maha Vidyalaya, a cornerstone of education in the region, was established
                                with the mission of providing quality education to the children of Pathagama and its
                                surrounding areas. The school was founded in 1920, under the guidance of visionary
                                educators and community leaders who recognized the need for accessible and inclusive
                                education.
                            </p>
                            <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-800">
                                <p className="text-gray-700 italic">
                                    "From humble beginnings to academic excellence - shaping futures for over a century"
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Principal Cards Section */}
            <section className="container mx-auto px-4 py-16">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 text-red-custom"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Leadership Through the Years
                </motion.h2>
                <PrincipalCards />
            </section>
        </div>
    );
};

export default About;