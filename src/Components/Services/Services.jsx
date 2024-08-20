import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import img1 from "../../Assets/analytics.png";
import ServiceBox from "./ServiceBox/ServiceBox";

const Services = () => {
  return (
    <div className="bg-red-300 py-7">
      {/* top section */}
      <div className="text-center mb-[20px] text-white">
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
      <div className=" w-[97%] mx-auto mt-[20px] grid md:grid-cols-4 gap-5">
        <ServiceBox image={img1} />
        <ServiceBox image={img1} />
        <ServiceBox image={img1} />
        <ServiceBox image={img1} />
      </div>
    </div>
  );
};

export default Services;
