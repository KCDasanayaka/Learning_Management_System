import "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
    
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <section className="py-12">
      <div
        ref={ref}
        className="container mx-auto flex flex-wrap justify-around text-center px-4 font-kumbh"
      >
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0 ">
          <h3 className="text-5xl font-bold text-yellow-custom">
            {inView && <CountUp end={600} duration={2.5} separator="," />}+
          </h3>
          <p className="text-gray-700 text-2xl font-bold">Students</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-5xl font-bold text-yellow-custom">
            {inView && <CountUp end={30} duration={2.5} />}+
          </h3>
          <p className="text-gray-700 text-2xl font-bold">Teachers</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
