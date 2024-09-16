import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import bg_img from "../../Assets/about-background.jpeg";
import about_video from "../../Assets/about_video.mp4";
import AboutUsItemBox from "./AboutUsItemBox/AboutUsItemBox";
import { GrServerCluster } from "react-icons/gr";
import { GiServerRack } from "react-icons/gi";
import { FaServer } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="text-white w-[100%] h-[100%] flex flex-col items-center py-16"
    >
      {/* top section */}
      <div className="text-center mb-[50px] ">
        <p className="md:text-[16px] text-[13px]  uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          About us
        </p>
        <h1 className="md:text-5xl sm:text-3xl text-[24px] font-[700] md:py-4">
          Unleashing Insights: <br /> Empowering Data Discoveries
        </h1>
        <p className="md:text-[16px] text-[13px] mt-4 leading-[30px] md:tracking-[2px] w-[80%] md:w-[67%] mx-auto  text-gray-500">
          Unlock the power of big data and analytics to gain invaluable insights
          into your business operations. Our platform provides advanced tools
          and techniques to analyze vast datasets, enabling you to make informed
          decisions and drive strategic growth.
        </p>
      </div>

      {/* middle section */}
      <div className="w-[100%] h-[100%] grid grid-col-1  md:grid-cols-2">
        {/* left */}
        {/* desktop */}
        <div className="w-[100%] h-[100%] md:flex flex-col gap-5 justify-between pl-3">
          <AboutUsItemBox
            icon={<GrServerCluster />}
            title={"Precision in predictive analytics."}
          />

          <AboutUsItemBox
            icon={<GiServerRack />}
            title={"Seamless integration for data synergy."}
          />

          <AboutUsItemBox
            icon={<FaServer />}
            title={"Robust scalability for data growth."}
          />
        </div>

        {/* right */}
        <div className="w-[100%] h-[100%] flex items-center justify-end pr-2 mt-[30px] md:mt-1">
          <div
            className="w-[95%] h-fit border-[1px] border-gray-700 rounded-md p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(${bg_img})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-[100%] h-[340px]">
              <video
                autoPlay
                loop
                muted
                className="h-[100%] w-[100%] object-cover"
              >
                <source src={about_video} type="video/mp4" />
              </video>
            </div>
            <p className="md:text-[13px] mt-3 leading-[30px] tracking-[2px]  mx-auto text-[13px] text-center md:text-left md:text-gray-500 text-white mb-[15px]">
              Unlock the power of big data and analytics to gain invaluable
              insights Our platform analyze vast datasets, enabling you to make
              informedic growth.
            </p>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="w-[90%] h-[100%]  mt-16 border-[1px] border-gray-600 rounded-md grid grid-cols-1 md:grid-cols-4 place-items-center py-2">
        {/* col */}
        <div className="text-center py-4  w-[100%] border-r-[1px]  border-gray-600">
          <h1 className="text-[40px] font-[900] text-[#00df25]">150 TB+</h1>
          <p className="uppercase tracking-[3px] text-[10px] mt-1 font-[300]">
            Data Processed
          </p>
        </div>

        {/* col */}
        <div className="text-center py-4 w-[100%] border-r-[1px]  border-gray-600">
          <h1 className="text-[40px] font-[900]  text-[#00df25]">25+</h1>
          <p className="uppercase tracking-[3px] text-[10px] mt-1 font-[300]">
            Years Experienced​
          </p>
        </div>

        {/* col */}
        <div className="text-center py-8 w-[100%] border-r-[1px]  border-gray-600">
          <h1 className="text-[40px] font-[900]  text-[#00df25]">1500+</h1>
          <p className="uppercase tracking-[3px] text-[10px] mt-1 font-[300]">
            Trusted Partners​
          </p>
        </div>

        {/* col */}
        <div className="text-center py-8">
          <h1 className="text-[40px] font-[900] text-[#00df25]">50+</h1>
          <p className="uppercase tracking-[3px] text-[10px] mt-1 font-[300]">
            Professional Analyst​
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
