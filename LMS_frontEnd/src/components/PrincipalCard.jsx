import { useRef } from "react";
import { principalsData } from "../data/principalsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrincipalCards = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex flex-col items-center px-4 py-12">
            <h2 className="text-4xl font-bold mb-8">Past Principals</h2>
            <div className="relative w-full max-w-5xl">

                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md z-10 hover:bg-gray-300"
                >
                    <FaChevronLeft size={20} />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex space-x-4 overflow-x-auto scroll-smooth hide-scrollbar"
                >
                    {/* Fetch data from principalData */}
                    {principalsData.map((principal) => (
                        <div
                            key={principal.id}
                            className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg p-4"
                        >
                            <img
                                src={principal.image}
                                alt={principal.name}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="text-lg font-semibold mt-4">{principal.name}</h3>
                            <p className="text-gray-500">{principal.period}</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md z-10 hover:bg-gray-300"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default PrincipalCards;
