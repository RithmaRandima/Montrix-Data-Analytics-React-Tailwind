import React from "react";
import bg_img from "../../../Assets/panoramic-view-dubai-city-illuminated-neon-spectrum.jpg";

function SolutionBox(props) {
  return (
    <div
      className=" border-[1px] border-gray-800 w-full shadow-xl flex flex-col p-4 pt-6 my-4 round-lg text-white hover:scale-105 duration-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.8)),url(${bg_img})`,
        backgroundSize: "cover",
      }}
    >
      {/* img container */}
      <div className="w-[85%] h-[170px] mx-auto">
        <img
          src={props.image}
          className="w-[100%] h-[100%] object-contain"
          alt=""
        />
      </div>
      <h2 className="text-[23px] tracking-[2px] font-bold text-center py-4">
        {props.title}
      </h2>
      <p className="text-center text-[14px] w-[90%] mx-auto font-[300]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo
        totam vitae soluta veritatis velit sunt natus nobis.
        {props.description}
      </p>
      <button className="bg-[#00df25] w-fit rounded-full tracking-[2px] my-4 mt-6 mx-auto py-2 px-7 text-[13px] text-black font-bold hover:bg-white">
        view more
      </button>
    </div>
  );
}

export default SolutionBox;
