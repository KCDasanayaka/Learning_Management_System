import "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/SchoolLogos/image1.png";
import Logo from "../assets/SchoolLogos/School_logo.png";
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
        <div className="font-inter mt-16 bg-gray-100">

            {/* Mission Section Info */}
            <section className="py-12">
                <motion.div
                    ref={infoRef} 
                    className="container mx-auto text-center px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ duration: 0.8 }}
                >
    
                    <div className="mb-9">
                        <img
                            src={Logo}
                            alt="School Logo"
                            className="mx-auto w-20 sm:w-24 md:w-28 lg:w-36 object-contain" 
                        />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-8">Mission</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
                        Welcome to R/Pathagama Maha Vidyalaya, where we nurture young minds
                        and guide them toward a brighter future with our dedicated faculty
                        and excellent facilities.
                    </p>
                </motion.div>
            </section>

            {/* Vision Section */}
            <section className="py-6">
                <motion.div
                    ref={aboutRef} 
                    className="container mx-auto text-center px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ duration: 0.9 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vision</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
                        R/Pathagama Maha Vidyalaya, established in 1891, stands as a pillar
                        of Sri Lankan education. With dedicated faculty and a serene
                        environment, we provide well-rounded education that fosters growth
                        and prepares students for success in the modern world.
                    </p>
                </motion.div>
            </section>

            {/* History Section */}
            <div className="mt-9">
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
