import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import PricingBox from "./PricingBox/PricingBox";
import {
  FaApplePay,
  FaCcAmazonPay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";

const PricingSection = () => {
  return (
    <div
      className="w-[100%]  h-[100%] grid md:grid-cols-2 text-white  py-[50px]"
      id="pricing"
    >
      {/* left section */}
      <div className="w-[100%] h-[100%] flex flex-col justify-start items-center md:pl-[70px]">
        <div>
          <p className="md:text-[16px] text-[13px] mx-auto md:ml-[0.0001px] uppercase flex w-fit items-center gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
            <IoMdAnalytics size={30} />
            OUR PRICING PLANS
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-[24px] text-center md:text-left font-[700] md:py-4">
            Basic or Advanced? <br /> We've got you Covered
          </h1>
          <p className="text-[13px] mt-4 leading-[24px] tracking-[1px] w-[80%] mx-auto md:w-[99%] text-center md:text-left text-gray-500">
            Unlock the power of big data and analytics to gain invaluable
            insights into your business operations. Our platform provides
            advanced tools and techniques to analyze vast datasets.
          </p>

          <p className=" text-[#00df25] text-[14px] tracking-[2px] p-2 font-[500] my-[20px] text-center md:text-left">
            Accepted Payment Methods
          </p>

          <div className="w-[370px] mx-auto md:ml-[.0001px] h-[80px] bg-[#151515] flex items-center justify-around text-[40px]">
            <FaCcVisa className="hover:text-[#00df25] cursor-pointer hover:scale-90 duration-200" />
            <FaCcMastercard className="hover:text-[#00df25] cursor-pointer hover:scale-90 duration-200" />
            <FaCcPaypal className="hover:text-[#00df25] cursor-pointer hover:scale-90 duration-200" />
            <FaCcAmazonPay className="hover:text-[#00df25] cursor-pointer hover:scale-90 duration-200" />
            <FaApplePay className="hover:text-[#00df25] cursor-pointer hover:scale-90 duration-200" />
          </div>
        </div>
      </div>

      {/* right section */}
      {/* desktop */}
      <div className=" w-[80%] mx-auto md:w-[100%] h-[100%] mt-[-50px] md:mt-[0]   relative grid md:grid-cols-2 gap-10 md:gap-0">
        <PricingBox title={"Basic Package"} price="200" />
        <PricingBox title={"Advanced Package"} price="300" />
      </div>
    </div>
  );
};

export default PricingSection;
