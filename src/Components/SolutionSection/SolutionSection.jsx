import React from "react";
import img1 from "../../Assets/feature-1.png";
import img2 from "../../Assets/feature-2.png";
import img3 from "../../Assets/feature-3.png";
import SolutionBox from "./SolutionBox/SolutionBox";
import { IoMdAnalytics } from "react-icons/io";

const SolutionSection = () => {
  return (
    <div className="text-white w-[100%] h-[100%] flex flex-col items-center pb-6">
      {/* top text */}
      <div className="text-center mb-[50px] w-[50%]">
        <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          OUR FEATURES
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] md:py-4">
          Actionable Analytics For Your Business
        </h1>
      </div>
      {/* bottom box */}
      <div className=" w-[90%] grid md:grid-cols-3 gap-8">
        <SolutionBox image={img1} title={"Data Analysis"} />
        <SolutionBox image={img2} title={"AI Solutions"} />
        <SolutionBox image={img3} title={"Data Security"} />
      </div>
    </div>
  );
};

export default SolutionSection;
