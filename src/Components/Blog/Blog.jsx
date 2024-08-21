import React from "react";
import BlogBox from "./BlogBox/BlogBox";
import "./BlogBox/BlogBox.css";
import img1 from "../../Assets/blog-1.jfif";
import bgImg from "../../Assets/panoramic-view-dubai-city-illuminated-neon-spectrum.jpg";

import { blogData } from "../../Data/BlogData";
import { IoMdAnalytics } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Background, Parallax } from "react-parallax";

const Blog = () => {
  return (
    <div id="blog" className="h-[100%] w-[100%] text-white md:mt-[100px] ">
      <Parallax strength={300} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] h-[100%]">
          <img src={bgImg} alt="fill murray" className="h-[200vh]" />
        </Background>

        <div className="w-[100%] h-[100%] bg-gradient-to-t from-black/80 to-black/70">
          <div className="flex flex-col items-center justify-center px-7 w-[100%]">
            <p className="md:text-[16px] text-[13px] uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
              <IoMdAnalytics size={30} />
              News & Blog
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-[24px] font-[700] text-center md:py-4">
              Stay Update with Tiva From Latest & <br /> Popular News
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  w-full h-[100%]">
            <div className="blog-box w-full h-[100%] p-2 py-6 font-sans">
              <div className="blog-box-img-container w-[90%] mx-auto text-left">
                <div className="w-[100%]  overflow-hidden  h-[300px]">
                  <img
                    src={img1}
                    alt=""
                    className="w-[100%] object-cover h-[100%]"
                  />
                </div>
                <div className="bg-[#00df25] w-fit text-white my-4 p-1 px-5 rounded-lg hover:scale-75 duration-500">
                  April 7, 2024
                </div>
                <h1 className="my-3 font-extrabold text-[22px]">
                  Plan to Secure Your Sensitive Data
                </h1>
                <p className="font-[200] md:text-[18px] text-[15px] my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  itaque. Tempore, quaerat? Illum quidem labore, aut ducimus
                  tenetur adipisci iste et illo fuga alias unde dolore velit ex
                  dolores temporibus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Reprehenderit.
                </p>
                <button className="hover:scale-110 duration-500 hover:text-red-500">
                  Read More <FaArrowRightLong />
                </button>
              </div>
            </div>

            {/* blog box Section*/}
            <div className="w-full h-[100%] p-2 py-6 ">
              {/* BlogBox Container */}
              <div className="flex flex-col justify-between gap-2 md:gap-5">
                {blogData.map((data) => {
                  return (
                    <BlogBox
                      img={data.img}
                      date={data.date}
                      title={data.title}
                      description={data.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Blog;
