import "react";
import Slider from "react-slick";
import Image1 from "../assets/ImageCarousel/Bg-4.jpg";
import Image2 from "../assets/ImageCarousel/Bg-7.jpg";

import Image5 from "../assets/ImageCarousel/Bg-1.jpg";
import Image9 from "../assets/ImageCarousel/Bg-5.jpg";
import Image8 from "../assets/ImageCarousel/Bg-6.jpg";

import Image7 from "../assets/ImageCarousel/Bg-3.jpg";


import Logo from "../assets/SchoolLogos/School_logo.png";
import StatsSection from "./StatsSection";


const HeroImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };

  const images = [Image5, Image9, Image7, Image1, Image8, Image2];

  return (
    <div className="relative bg-gray-50 mt-16">
      {/* Carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 mb-48">
        <img
          src={Logo}
          alt="Logo"
          className="h-20 sm:h-28 md:h-36 lg:h-40 mb-4"
        />
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide fade-in text-center">
          R/Pathagama Maha Vidyalaya
        </h1>
        {/* Paragraph */}
        <p className="text-white mt-3 font-thin max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
          where we nurture young minds
          and guide them toward a brighter future with our dedicated faculty
          and excellent facilities.
        </p>
      </div>

      {/* Move StatsSection Below the Carousel */}
      <div className="relative z-10 -mt-24">
        <StatsSection />
      </div>

    </div>
  );
};

export default HeroImageCarousel;
