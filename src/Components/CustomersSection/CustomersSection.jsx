import React from "react";
import {
  IoLogoDropbox,
  IoLogoPlaystation,
  IoLogoSass,
  IoLogoXing,
  IoMdAnalytics,
} from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomerBox from "./CustomerBox/CustomerBox";
import { IoLogoCapacitor, IoLogoLaravel } from "react-icons/io5";

const CustomersSection = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2600,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-[100%] h-[100%] py-4 bg-[#141414] text-white">
      {/* top section */}
      <div className="text-center mb-[20px] py-5 ">
        <p className="uppercase flex w-fit items-center mx-auto gap-4 text-[#00df25] tracking-[2px] p-2 font-bold">
          <IoMdAnalytics size={30} />
          TRUSTED CUSTOMER
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-4xl font-[700] mt-[10px] ">
          Our Valuable Customers
        </h1>
        <p className="md:text-[13px] mt-[25px] leading-[20px] tracking-[2px] w-[60%] mx-auto text-xl text-gray-500">
          In our trusted customer section, discover how leading organizations in
          big data analytics rely on our expertise and integrity to drive
          success. Join our network and experience the assurance of working with
          a partner dedicated to your data-driven goals.
        </p>
      </div>
      {/* bottom section */}
      <div className="w-[100%] h-[100%] py-4">
        <Slider {...settings}>
          <CustomerBox icon={<IoLogoDropbox />} name={"DropBoxCp"} />
          <CustomerBox icon={<IoLogoPlaystation />} name="PlayStationAp" />
          <CustomerBox icon={<IoLogoCapacitor />} name="CapacitorPlus" />
          <CustomerBox icon={<IoLogoLaravel />} name="LaravelPvt" />
          <CustomerBox icon={<IoLogoSass />} name="SassCope" />
          <CustomerBox icon={<IoLogoXing />} name="Xking+" />
        </Slider>
      </div>
    </div>
  );
};

export default CustomersSection;
