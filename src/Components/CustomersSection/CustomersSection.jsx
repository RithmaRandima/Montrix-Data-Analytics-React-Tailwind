import React from "react";
import { IoMdAnalytics } from "react-icons/io";

const CustomersSection = () => {
  return (
    <div className="w-[100%] h-[100%] py-4 bg-[#101010] text-white">
      {/* top section */}
      <div className="text-center mb-[20px] ">
        <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          TRUSTED CUSTOMER
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] ">
          Our Valuable Customers
        </h1>
        <p className="md:text-[13px] mt-2 leading-[20px] tracking-[2px] w-[60%] mx-auto text-xl text-gray-500">
          In our trusted customer section, discover how leading organizations in
          big data analytics rely on our expertise and integrity to drive
          success. Join our network and experience the assurance of working with
          a partner dedicated to your data-driven goals.
        </p>
      </div>
      {/* bottom section */}
      <div className="w-[100%] bg-green-800 h-[200px]"></div>
    </div>
  );
};

export default CustomersSection;
