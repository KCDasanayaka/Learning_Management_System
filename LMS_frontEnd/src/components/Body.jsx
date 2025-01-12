import { useEffect } from 'react';
import { motion } from 'framer-motion';
import image from "../assets/SchoolLogos/image1.png"
import StatsSection from './StatsSection';
import AboutSection from './AboutSection';
import SchAbout from './SchAbout';

const Body = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-inter">

            {/* About Section */}
            <AboutSection />
            <SchAbout/>

            {/* Stats Section */}
            <StatsSection />

            {/* Learning Online Section */}
            <section className="relative py-12 text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>

                {/* Yellow Layer */}
                <div className="absolute inset-0 bg-yellow-600 opacity-80"></div>

                <motion.div
                    className="relative container mx-auto text-center px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Learning Online</h2>
                    <p className="max-w-2xl mx-auto mb-6">
                        The Learning Management System has evolved into more than just a medium for e-learning. It fosters a collaborative environment where teachers and students can communicate effectively, streamlining the educational process.
                    </p>
                    <a
                        href="/lms"
                        className="bg-white text-yellow-600 px-6 py-3 rounded shadow hover:bg-red-custom hover:text-white"
                    >
                        Access the LMS &gt;&gt;&gt;
                    </a>
                </motion.div>
            </section>

        </div>
    );
};


export default Body;
