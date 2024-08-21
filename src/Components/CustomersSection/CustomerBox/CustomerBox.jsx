import React from "react";

const CustomerBox = (props) => {
  return (
    <div className="w-[95%] mx-auto h-[100px] relative flex flex-col items-center  pl-[30px]">
      <p className="text-[70px] opacity-30">{props.icon}</p>
      <p className=" opacity-35  text-[20px] font-[900] mt-[-10px]">
        {props.name}
      </p>
    </div>
  );
};

export default CustomerBox;
