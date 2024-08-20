import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import TestimonialBox from "./TestimonialBox/TestimonialBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "../../Data/TestimonialData";

const Testimonials = () => {
  var settings = {
    dots: false,
    arrow: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center py-10 text-white pb-24">
      {/* top section */}
      <div className="text-center mb-[50px] ">
        <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          Our Testimonial
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] md:py-4">
          Unlocking Insights with Big Data
        </h1>
        <p className="md:text-[13px] mt-4 leading-[30px] tracking-[2px] w-[75%] mx-auto text-xl text-gray-500">
          Discover what our clients have to say about the transformative power
          of big data analysis.
        </p>
      </div>

      {/* bottom section */}
      <div className="w-[99%] h-[40vh] border-[1px] border-gray-600 rounded-xl py-5 px-6 ">
        <div className="grid grid-cols-4 w-[100%] h-[100%]">
          {/* left */}
          <div className="col-span-3 bg-[#111111] h-[45vh] rounded-br-[200px] shadow-inner shadow-[#1a1a1a] overflow-hidden">
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <TestimonialBox
                    img={data.img}
                    key={data.id}
                    name={data.name}
                    position={data.position}
                    message={data.message}
                  />
                );
              })}
            </Slider>
          </div>
          {/* right */}
          <div className=" h-[100%] w-[100%] flex items-center justify-center flex-col">
            <h1 className="text-[50px] font-[900] mt-[-60px] text-[#00df25]">
              50+
            </h1>
            <p className="uppercase tracking-[3px] text-[12px] mt-1 font-[300]">
              Professional Analyst​
            </p>
            <button className="bg-[#00df25] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
