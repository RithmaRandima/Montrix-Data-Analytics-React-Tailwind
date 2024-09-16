import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingBox = (props) => {
  return (
    <div className="pricing-box rounded-md w-[95%] mx-auto h-fit bg-white text-black p-6 hover:bg-[#1a1919] hover:text-white">
      <p className="text-[17px] font-[700] mb-[1px] tracking-[1px]">
        {props.title}
      </p>
      <p className="text-gray-400 text-[15px] mb-2">
        <span className="font-[900] text-[#00df25] text-[50px]">
          ${props.price}
        </span>{" "}
        Monthly
      </p>
      <hr />

      {/* package list */}
      <div className="mt-7 hidden md:block">
        <div className="flex items-center justify-between my-3">
          <p className="font-[500] tracking-[1px] text-[15px]">
            Unlimited Site licenses
          </p>
          <FaCheck className="text-[14px] text-[#00df25]" />
        </div>

        <div className="flex items-center justify-between my-3">
          <p className="font-[500] tracking-[1px] text-[15px]">1 Database</p>
          <FaCheck className="text-[14px] text-[#00df25]" />
        </div>

        <div className="flex items-center justify-between my-3">
          <p className="font-[500] tracking-[1px] text-[15px]">
            10 Free Optimization
          </p>
          <FaCheck className="text-[14px] text-[#00df25]" />
        </div>

        <div className="flex items-center justify-between my-3">
          <p className="font-[500] tracking-[1px] text-[15px]">Html5 + Css3</p>
          <FaCheck className="text-[14px] text-[#00df25]" />
        </div>

        <div className="flex items-center justify-between my-3">
          <p className="font-[500] tracking-[1px] text-[15px]">
            24/7 Customer Support
          </p>
          <FaCheck className="text-[14px] text-[#00df25]" />
        </div>
      </div>

      {/* button */}
      <button className="bg-[#00df25] w-[100%] rounded-md font-medium mt-[13px] mb-4 mx-auto py-3 text-black">
        Get Started
      </button>
    </div>
  );
};

export default PricingBox;
