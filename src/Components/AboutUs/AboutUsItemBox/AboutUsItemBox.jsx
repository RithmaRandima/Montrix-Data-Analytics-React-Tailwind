import React from "react";

const AboutUsItemBox = (props) => {
  return (
    <div className="md:w-[100%] w-[95%] mx-auto md:ml-[0.0001px] h-[200px] md:pl-1 mb-10 md:mb-0">
      {/* top */}
      <div className="flex md:flex-row flex-col items-center gap-4 py-3">
        <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#181818] rounded-lg flex items-center justify-center md:text-[25px] text-[20px]">
          {props.icon}
        </div>
        <p className="md:text-[24px] text-[16px] font-[700] tracking-[2px]">
          {props.title}.
        </p>
      </div>
      {/* bottom */}
      <p className="md:text-[14px] text-center md:text-left leading-[23px] tracking-[1px] text-gray-500">
        Unlock the power of big data and analytics to gain invaluable insights
        into your business operations. Our platform provides advanced tools and,
        enabling you to make informed decisions. {props.description}
      </p>
    </div>
  );
};

export default AboutUsItemBox;
