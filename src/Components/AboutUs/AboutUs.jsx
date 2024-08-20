import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import bg_img from "../../Assets/sl_022321_41020_35.jpg";
import about_video from "../../Assets/about_video.mp4";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="text-white w-[100%] h-[100%] flex flex-col items-center py-16"
    >
      {/* top section */}
      <div className="text-center mb-[50px] ">
        <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          About us
        </p>
        <h1 className="md:text-5xl sm:text-3xl text-4xl font-[700] md:py-4">
          Unleashing Insights: <br /> Empowering Data Discoveries
        </h1>
        <p className="md:text-[16px] mt-4 leading-[30px] tracking-[2px] w-[67%] mx-auto text-xl text-gray-500">
          Unlock the power of big data and analytics to gain invaluable insights
          into your business operations. Our platform provides advanced tools
          and techniques to analyze vast datasets, enabling you to make informed
          decisions and drive strategic growth.
        </p>
      </div>

      {/* middle section */}
      <div className="w-[100%] h-[100%] grid grid-cols-2">
        {/* left */}
        <div className="w-[100%] h-[100%] flex flex-col gap-5 justify-between pl-3">
          {/* item box */}
          <div className="w-[100%] h-[200px] pl-1">
            {/* top */}
            <div className="flex items-center gap-4 py-3">
              <div className="w-[80px] h-[80px] bg-[#181818] rounded-lg">
                {/* <img src="" alt="" /> */}
              </div>
              <p className="text-[24px] font-[700] tracking-[2px]">
                Precision in predictive analytics.
              </p>
            </div>
            {/* bottom */}
            <p className="md:text-[14px] leading-[23px] tracking-[1px] text-gray-500">
              Unlock the power of big data and analytics to gain invaluable
              insights into your business operations. Our platform provides
              advanced tools and, enabling you to make informed decisions.
            </p>
          </div>

          {/* item box */}
          <div className="w-[100%] h-[200px] pl-1">
            {/* top */}
            <div className="flex items-center gap-4 py-3">
              <div className="w-[80px] h-[80px] bg-[#181818] rounded-lg">
                {/* <img src="" alt="" /> */}
              </div>
              <p className="text-[24px] font-[700] tracking-[2px]">
                Precision in predictive analytics.
              </p>
            </div>
            {/* bottom */}
            <p className="md:text-[14px] leading-[23px] tracking-[1px] text-gray-500">
              Unlock the power of big data and analytics to gain invaluable
              insights into your business operations. Our platform provides
              advanced tools and, enabling you to make informed decisions.
            </p>
          </div>

          {/* item box */}
          <div className="w-[100%] h-[200px] pl-1">
            {/* top */}
            <div className="flex items-center gap-4 py-3">
              <div className="w-[80px] h-[80px] bg-[#181818] rounded-lg">
                {/* <img src="" alt="" /> */}
              </div>
              <p className="text-[24px] font-[700] tracking-[2px]">
                Precision in predictive analytics.
              </p>
            </div>
            {/* bottom */}
            <p className="md:text-[14px] leading-[23px] tracking-[1px] text-gray-500">
              Unlock the power of big data and analytics to gain invaluable
              insights into your business operations. Our platform provides
              advanced tools and, enabling you to make informed decisions.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="w-[100%] h-[100%] flex items-center justify-end pr-2">
          <div
            className="w-[95%] h-fit border-[1px] border-gray-700 rounded-md p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url(${bg_img})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-[100%] h-[300px]">
              <video
                autoPlay
                loop
                muted
                className="h-[100%] w-[100%] object-cover"
              >
                <source src={about_video} type="video/mp4" />
              </video>
            </div>
            <p className="md:text-[13px] mt-3 leading-[30px] tracking-[2px]  mx-auto text-xl text-gray-500 mb-[15px]">
              Unlock the power of big data and analytics to gain invaluable
              insights Our platform analyze vast datasets, enabling you to make
              informedic growth.
            </p>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="w-[99%] h-[100%]  mt-16 border-[1px] border-gray-600 rounded-md grid grid-cols-4 place-items-center py-6">
        {/* col */}
        <div className="text-center py-8  w-[100%] border-r-[1px]  border-gray-600">
          <h1 className="text-[45px] font-[900] mt-1 text-[#00df25]">
            150 TB+
          </h1>
          <p className="uppercase tracking-[3px] text-[12px] mt-1 font-[300]">
            Data Processed
          </p>
        </div>

        {/* col */}
        <div className="text-center py-8 w-[100%] border-r-[1px]  border-gray-600">
          <h1 className="text-[45px] font-[900] mt-1 text-[#00df25]">25+</h1>
          <p className="uppercase tracking-[3px] text-[12px] mt-1 font-[300]">
            Years Experienced​
          </p>
        </div>

        {/* col */}
        <div className="text-center py-8 w-[100%] border-r-[1px]  border-gray-600">
          <h1 className="text-[45px] font-[900] mt-1 text-[#00df25]">1500+</h1>
          <p className="uppercase tracking-[3px] text-[12px] mt-1 font-[300]">
            Trusted Partners​
          </p>
        </div>

        {/* col */}
        <div className="text-center py-8">
          <h1 className="text-[45px] font-[900] mt-1 text-[#00df25]">50+</h1>
          <p className="uppercase tracking-[3px] text-[12px] mt-1 font-[300]">
            Professional Analyst​
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
