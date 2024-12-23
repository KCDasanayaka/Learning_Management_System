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
        className="container mx-auto flex flex-wrap justify-around text-center px-4"
      >
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-yellow-600">
            {inView && <CountUp end={3000} duration={2.5} separator="," />}+
          </h3>
          <p className="text-gray-700">Students</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-4xl font-bold text-yellow-600">
            {inView && <CountUp end={100} duration={2.5} />}+
          </h3>
          <p className="text-gray-700">Teachers</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
