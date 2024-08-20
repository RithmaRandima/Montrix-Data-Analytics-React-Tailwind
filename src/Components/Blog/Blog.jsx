import React from "react";
import BlogBox from "./BlogBox/BlogBox";
import "./BlogBox/BlogBox.css";
import img1 from "../../Assets/blog-01.jpg";
import { blogData } from "../../Data/BlogData";
import { IoMdAnalytics } from "react-icons/io";

const Blog = () => {
  return (
    <div id="blog" className="h-[100%] w-[100%] py-3 text-white">
      <div className="flex flex-col items-center justify-center h-[50vh] px-7 w-[100%]">
        <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          Our Testimonial
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] text-center md:py-4">
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
            <div className="bg-black w-fit text-white my-4 p-1 px-5 rounded-lg hover:scale-75 duration-500">
              April 7, 2024
            </div>
            <h1 className="my-3 font-extrabold text-[22px]">
              Plan the Perfect Vacation
            </h1>
            <p className="font-[200] text-[18px] my-4">
              Planning a vacation can be overwhelming, but this post offers a
              step-by-step guide to help readers create a comprehensive travel
              itinerary. From choosing a destination to booking accommodations
              and activities, readers will learn how to plan a stress-free and
              enjoyable trip.
            </p>
            <button className="hover:scale-110 duration-500">Read More</button>
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
  );
};

export default Blog;
