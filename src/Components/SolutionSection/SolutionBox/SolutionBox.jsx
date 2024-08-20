import React from "react";
import bg_img from "../../../Assets/panoramic-view-dubai-city-illuminated-neon-spectrum.jpg";

function SolutionBox(props) {
  return (
    <div
      className=" border-[1px] border-gray-800 w-full shadow-xl flex flex-col p-4 my-4 round-lg text-white hover:scale-105 duration-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(${bg_img})`,
        backgroundSize: "cover",
      }}
    >
      {/* img container */}
      <div className="w-[90%] h-[200px] mx-auto">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-contain"
          alt=""
        />
      </div>
      <h2 className="text-[25px] font-bold text-center py-4">
        Singer User{props.title}
      </h2>
      <p className="text-center text-[13px] font-[300]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo
        totam vitae soluta veritatis velit sunt natus nobis.
        {props.description}
      </p>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
        view more
      </button>
    </div>
  );
}

export default SolutionBox;
