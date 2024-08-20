import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import PricingBox from "./PricingBox/PricingBox";

const PricingSection = () => {
  return (
    <div
      className="w-[100%]  h-[100vh] grid grid-cols-2 text-white "
      id="pricing"
    >
      {/* left section */}
      <div className="w-[100%] h-[100%] flex flex-col justify-start items-center pl-[70px]">
        <div>
          <p className="uppercase flex w-fit items-center gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
            <IoMdAnalytics size={30} />
            OUR PRICING PLANS
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] md:py-4">
            Basic or Advanced? <br /> We've got you Covered
          </h1>
          <p className="md:text-[16px] mt-4 leading-[24px] tracking-[1px] w-[99%] text-xl text-gray-500">
            Unlock the power of big data and analytics to gain invaluable
            insights into your business operations. Our platform provides
            advanced tools and techniques to analyze vast datasets.
          </p>
          <p className=" text-[#00df25] text-[14px] tracking-[2px] p-2 font-[500] my-[20px]">
            Accepted Payment Methods
          </p>

          <div className="w-[370px] h-[80px] bg-[#151515]"></div>
        </div>
      </div>

      {/* right section */}
      <div className="w-[100%] h-[100%]  relative grid grid-cols-2">
        <PricingBox title={"Basic Package"} price="200" />
        <PricingBox title={"Advanced Package"} price="300" />
      </div>
    </div>
  );
};

export default PricingSection;
