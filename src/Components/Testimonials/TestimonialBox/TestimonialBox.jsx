import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialBox = () => {
  return (
    <div className="w-[90%] h-[90%] flex flex-col px-5 py-6 ">
      {/* user details */}
      <div className="flex items-center gap-[20px]">
        <div className="w-[80px] h-[80px] bg-red-400 rounded-full">
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="text-[23px] font-[900]">Rithma Randima</h1>
          <p className="uppercase tracking-[1px]  text-[#00df25] text-[10px] mt-1 font-[400]">
            Professional Analyst​
          </p>
        </div>
      </div>
      {/* user message */}
      <p className="md:text-[15px] mt-4 leading-[30px] tracking-[2px] text-xl text-gray-500">
        <FaQuoteLeft />
        Unlock the power of big data and analytics to gain invaluable insights
        into your business operations. Our platform provides advanced tools and
        techniques to analyze vast datasets, enabling you to make informed
        decisions and drive strategic growth.
      </p>
    </div>
  );
};

export default TestimonialBox;
