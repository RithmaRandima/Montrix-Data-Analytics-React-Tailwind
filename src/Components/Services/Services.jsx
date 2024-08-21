import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import img1 from "../../Assets/feature-1.png";
import img2 from "../../Assets/feature-2.png";
import img3 from "../../Assets/feature-3.png";
import img4 from "../../Assets/feature-4.png";
import bgImg from "../../Assets/geometry-7723325.jpg";
import ServiceBox from "./ServiceBox/ServiceBox";
import { Background, Parallax } from "react-parallax";

const Services = () => {
  return (
    <div className="bg-white h-[100%] w-[100%]" id="services">
      <Parallax strength={300} className="w-[100%] h-[100%] bg-red-300">
        <Background className="custom-bg w-[100vw] h-[100%]">
          <img src={bgImg} alt="fill murray" />
        </Background>

        {/* overlay */}
        {/* <div className="w-[100%] h-[100%] z-10 bg-gradient-to-t z-10 from-black to-transparent absolute "></div> */}
        {/* content */}
        <div className="w-[100%] h-[100%] absolute z-20"></div>
        {/* top section */}
        <div className="text-center  text-white py-6">
          <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
            <IoMdAnalytics size={30} />
            OUR SERVICES
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] ">
            We Provide Big Data Analytics <br /> Technical Data Issues
          </h1>
          <p className="md:text-[13px] mt-2 leading-[20px] tracking-[2px] w-[60%] mx-auto text-xl text-gray-500">
            Unlock the power of your data.
          </p>
        </div>

        {/* bottom box */}
        <div className=" w-[97%] mx-auto mt-[20px] grid md:grid-cols-4 gap-5 pb-6">
          <ServiceBox img={img1} title="Big Data Consulting" />
          <ServiceBox img={img2} title="Data Visualization" />
          <ServiceBox img={img3} title="Machine Learning" />
          <ServiceBox img={img4} title="Artificial Intelligence" />
        </div>
      </Parallax>
    </div>
  );
};

export default Services;
