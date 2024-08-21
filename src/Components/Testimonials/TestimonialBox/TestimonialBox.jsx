import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonialBox = (props) => {
  return (
    <div className="relative w-[99%] md:w-[90%] h-[90%] flex flex-col px-2 md:px-5 py-2 md:py-6 ">
      {/* user details */}
      <div className="flex items-center gap-[20px]">
        <div className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] overflow-hidden rounded-full">
          <img
            src={props.img}
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[18px] md:text-[23px] font-[900]">
            {props.name}
          </h1>
          <p className="uppercase tracking-[1px]  text-[#00df25] text-[10px]  md:text-[12px] mt-1 font-[400]">
            {props.position}
          </p>
        </div>
      </div>
      {/* user message */}
      <p className="md:text-[15px] text-[13px] mt-[15px] md:mt-[35px] leading-[30px] tracking-[2px]  text-gray-500">
        {props.message}
      </p>
      <RiDoubleQuotesR className=" text-[200px] md:text-[350px] absolute right-[20px] top-[-70px] opacity-5" />
    </div>
  );
};

export default TestimonialBox;
