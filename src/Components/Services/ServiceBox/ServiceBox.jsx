import React from "react";
import bg_img from "../../../Assets/bg_image-3.jpeg";

function ServiceBox(props) {
  return (
    <div
      className=" border-[1px] border-gray-800 w-[95%] mx-auto shadow-xl flex flex-col text-white p-4 my-4 round-lg hover:scale-105 duration-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${bg_img})`,
        backgroundSize: "cover",
      }}
    >
      {/* img container */}
      <div className="w-[130px] h-[130px] mx-auto">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-contain"
          alt=""
        />
      </div>
      <h2 className="text-[21px] tracking-[1px] font-bold text-center py-3 hover:text-[#00df25] cursor-pointer">
        {props.title}
      </h2>
      <p className="text-center text-[13px] font-[300]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo
        totam vitae soluta veritatis velit sunt natus nobis.
        {props.description}
      </p>
      <button className="bg-[#00df25] w-fit rounded-full tracking-[2px] my-4 mt-6 mx-auto py-2 px-7 text-[10px] text-black font-bold hover:bg-white">
        view more
      </button>
    </div>
  );
}

export default ServiceBox;
