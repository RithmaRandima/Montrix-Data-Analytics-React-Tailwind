import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { GiCheckMark, GiRotaryPhone } from "react-icons/gi";
import { RiUserLocationFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-[100%] text-white  bg-[#050505]">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-9 pt-3 ">
        {/*col-1  */}
        <div className="md:w-[100%] w-[80%] mx-auto text-center md:text-right h-[100%] p-6 pr-0">
          {/* logo Section */}
          <div className="relative w-fit mx-auto  pb-1 pl-1 pr-5 mb-10">
            <h1 className="text-[15px] font-bold">
              <span className="font-extrabold text-[20px]  text-[#00df25]">
                Montrix
              </span>{" "}
            </h1>
            <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-[#00df25] px-1 font-[700] capitalize text-black">
              big data{" "}
              <span className="text-white bg-black p-1">Analytics</span>
            </p>
          </div>
          <p className="hidden md:block w-[100%] mx-auto text-center md:text-left text-[15px] text-gray-400">
            <span className="text-[#00df25] font-bold">Montrix.</span> founded
            in 2025. There are many variations of passages of Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour or randomised words which.
          </p>

          <h1 className="hidden md:block font-bold  md:mr-[142px] my-4 text-[16px]  tracking-[2px]">
            FOLLOW ALONG
          </h1>
          <div className="flex gap-5 items-center w-fit mx-auto md:ml-1 justify-center mt-[13px]">
            <p>
              <FaInstagram
                size={20}
                className="hover:text-[#00df25] hover:scale-125 duration-300"
              />
            </p>
            <p>
              <FaFacebook
                size={20}
                className="hover:text-[#00df25] hover:scale-125 duration-300"
              />
            </p>
            <p>
              <FaTwitter
                size={20}
                className="hover:text-[#00df25] hover:scale-125 duration-300"
              />
            </p>
            <p>
              <FaGooglePlusG
                size={20}
                className="hover:text-[#00df25] hover:scale-125 duration-300"
              />
            </p>
            <p>
              <FaLinkedin
                size={20}
                className="hover:text-[#00df25] hover:scale-125 duration-300"
              />
            </p>
          </div>
        </div>

        {/*col-2  */}
        <div className="hidden md:block text-center">
          <h1 className="font-bold my-5 capitalize text-[20px] tracking-[2px]">
            Our Services
          </h1>

          <div className="flex items-center justify-center my-5 mt-6 gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Big Data Analytics</p>
          </div>

          <div className="flex items-center justify-center my-5  gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Data Visualization</p>
          </div>

          <div className="flex items-center justify-center my-5 gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>UX/UI Strategy</p>
          </div>

          <div className="flex items-center justify-center my-5 gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Machine Learning</p>
          </div>

          <div className="flex items-center justify-center my-5  gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Cloud Automation</p>
          </div>
        </div>

        {/* col-3 */}
        <div className="hidden md:block text-center">
          <h1 className="font-bold my-5 capitalize text-[20px] tracking-[2px]">
            Our Links
          </h1>

          <div className="flex items-center justify-center my-5 mt-6 gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Home</p>
          </div>

          <div className="flex items-center justify-center my-5  gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>About</p>
          </div>

          <div className="flex items-center justify-center my-5 gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Services</p>
          </div>

          <div className="flex items-center justify-center my-5 gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Pricing</p>
          </div>

          <div className="flex items-center justify-center my-5  gap-3 hover:text-[#00df25] cursor-pointer">
            <GiCheckMark
              size={14}
              className="text-[#00df25] hover:scale-125 duration-300"
            />
            <p>Blog</p>
          </div>
        </div>

        {/* col-4 */}
        <div className=" w[100%] text-center md:text-left h-[100%] p-6">
          <h1 className="font-bold mb-5 text-[19px] tracking-[2px] capitalize">
            Contact us
          </h1>
          <div className="flex flex-col md:flex-row items-center my-6 gap-5 cursor-pointer">
            <RiUserLocationFill
              size={26}
              className="hover:scale-125 duration-300  hover:text-[#00df25]"
            />
            <p>317 Pacific C Hwy Huntington, CA 92648</p>
          </div>

          <div className="flex flex-col md:flex-row items-center my-6 gap-5 cursor-pointer">
            <GiRotaryPhone
              size={26}
              className="hover:scale-125 duration-300  hover:text-[#00df25]"
            />
            <div>
              <p>+123 4577 3324</p>
              <p>+853 0735 5475</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center my-6 gap-5  cursor-pointer">
            <SiMinutemailer
              size={26}
              className="hover:scale-125 duration-300  hover:text-[#00df25]"
            />
            <div>
              <p>hello@montrix.com</p>
              <p>data@montrix.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col md:flex-row md:justify-between px-10 justify-center items-center py-4 gap-7 pb-[17px]  bg-[#000000] text-white">
        <p className="text-[6px] md:text-[8px] tracking-[4px]">
          © 2024 <span className="text-[#00df25] font-bold">Montrix</span> ALL
          RIGHTS RESERVED.
        </p>
        {/* logo Section */}
        <div className="hidden md:block relative w-fit  pb-1 pl-1 pr-5 mb-[10px] ">
          <h1 className="text-[15px] font-bold">
            <span className="font-extrabold text-[20px]  text-[#00df25]">
              Montrix
            </span>{" "}
          </h1>
          <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-[#00df25] px-1 font-[700] capitalize text-black">
            big data <span className="text-white bg-black p-1">Analytics</span>
          </p>
        </div>
        <p className="hidden  md:block text-[10px] font-bold uppercase tracking-[4px]">
          SEcure Your Data With Us
        </p>
      </div>
    </div>
  );
};

export default Footer;
