import React from "react";

const CustomerBox = (props) => {
  return (
    <div className="w-[95%] mx-auto h-[100px] relative flex items-center gap-1  pl-[30px]">
      <p className="text-[50px] opacity-30">{props.icon}</p>
      <p className=" opacity-35  text-[24px] font-[900] left-[50px]">LoremIP</p>
    </div>
  );
};

export default CustomerBox;
