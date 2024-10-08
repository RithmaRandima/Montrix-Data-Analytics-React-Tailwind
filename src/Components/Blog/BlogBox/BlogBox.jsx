import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogBox = (props) => {
  return (
    <div className="blog-box w-[90%]  md:w-[100%] mx-auto flex flex-col md:flex-row  justify-between items-center cursor-pointer">
      {/* image section */}
      <div className="blog-box-img-container w-[100%] md:w-[35%]  overflow-hidden h-[300px] md:h-[150px]">
        <img
          src={props.img}
          alt=""
          className="w-[100%] object-cover h-[100%]"
        />
      </div>
      {/* text section */}
      <div className="w-[100%] md:w-[60%] text-left font-sans">
        <div className="bg-[#00df25] w-fit text-white  my-4 md:my-2  px-6 py-1 md-5 md:px-3 text-[16px] md:text-[10px] rounded-lg md:rounded-md hover:scale-75 duration-500">
          {props.date}
        </div>

        <h1 className="my-3 font-extrabold text-[22px] md:text-[19px]">
          {props.title}
        </h1>
        <p className="font-[200] text-[15px] md:text-[18px] mb-3">
          {props.description}
        </p>
        <button className="hidden md:block md:py-1 md:text-[13px] mb-3 hover:text-red-400 ">
          Read More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default BlogBox;
