import React from "react";

const AboutUsItemBox = (props) => {
  return (
    <div className="w-[100%] h-[200px] pl-1">
      {/* top */}
      <div className="flex items-center gap-4 py-3">
        <div className="w-[80px] h-[80px] bg-[#181818] rounded-lg flex items-center justify-center text-[25px]">
          {props.icon}
        </div>
        <p className="text-[24px] font-[700] tracking-[2px]">{props.title}.</p>
      </div>
      {/* bottom */}
      <p className="md:text-[14px] leading-[23px] tracking-[1px] text-gray-500">
        Unlock the power of big data and analytics to gain invaluable insights
        into your business operations. Our platform provides advanced tools and,
        enabling you to make informed decisions. {props.description}
      </p>
    </div>
  );
};

export default AboutUsItemBox;
