import React from "react";

import { IoMdAnalytics } from "react-icons/io";
import img1 from "../../Assets/feature-1.png";
import img2 from "../../Assets/feature-2.png";
import img3 from "../../Assets/feature-3.png";
import img4 from "../../Assets/feature-4.png";
import img5 from "../../Assets/feature-5.png";
import img6 from "../../Assets/feature-6.png";
import bgImg from "../../Assets/about-background.jpeg";

import ServiceBox from "./ServiceBox/ServiceBox";

import { Background, Parallax } from "react-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="h-[100%] w-[100%] text-center" id="services">
      <Parallax strength={300} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] h-[100%]">
          <img src={bgImg} alt="fill murray" className="w-[100%] h-[120vh]" />
        </Background>

        {/* content */}
        {/* top section */}
        <div className="text-center  text-white py-6">
          <p className="md:text-[16px] text-[13px] uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
            <IoMdAnalytics size={30} />
            OUR SERVICES
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-[24px] font-[700] ">
            We Provide Big Data Analytics <br /> Technical Data Issues
          </h1>
          <p className="text-[13px] mt-2 leading-[20px] tracking-[2px] w-[60%] mx-auto text-gray-500">
            Unlock the power of your data.
          </p>
        </div>

        {/* bottom box */}
        <div className=" w-[97%] mx-auto  h-[100%] py-4 pb-6">
          <Slider {...settings}>
            <ServiceBox img={img1} title="Big Data Consulting" />
            <ServiceBox img={img2} title="Data Visualization" />
            <ServiceBox img={img3} title="Machine Learning" />
            <ServiceBox img={img4} title="Artificial Intelligence" />
            <ServiceBox img={img5} title="UI/UX Strategy" />
            <ServiceBox img={img6} title="Cloud Automation" />
          </Slider>
        </div>

        <button className="hover:bg-[#00df25] w-fit  rounded-full tracking-[2px] mb-[50px] mx-auto py-2 px-7 text-[14px] text-black font-bold bg-white">
          view more
        </button>
      </Parallax>
    </div>
  );
};

export default Services;
