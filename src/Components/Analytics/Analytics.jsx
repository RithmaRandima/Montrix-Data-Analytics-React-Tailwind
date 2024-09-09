import React from "react";
import bg_img from "../../Assets/analyze-background.jpeg";
import img1 from "../../Assets/analyze-1.jpeg";
import img2 from "../../Assets/analyze-2.jpg";

function Analytics() {
  return (
    <div
      className="w-full py-[50px] px-4 h-[100%] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url(${bg_img})`,
        backgroundSize: "cover",
      }}
    >
      {/* box 01 */}
      <div className="max-w[1240px] mx-auto grid md:grid-cols-2 gap-5">
        {/* left */}
        <div className="my-6 pl-5 flex flex-col md:items-start items-center justify-center">
          <p className="uppercase text-[#00df25] tracking-[2px] py-2 font-bold">
            CASE STUDIES
          </p>
          <h1 className="md:text-5xl sm:text-3xl text-[30px] text-center md:text-left font-[400] py-3">
            Optimizing Supply <br /> Chain Efficiency
          </h1>
          <p className="md:text-[17px] text-center md:text-left mt-4 leading-[30px] tracking-[2px] text-[14px] text-gray-500">
            Unlock the power of big data and analytics to gain invaluable
            insights into your business operations. Our platform provides
            advanced tools and techniques to analyze vast datasets, enabling you
            to make informed decisions and drive strategic growth.
          </p>
        </div>

        {/* right */}
        <div className="hidden md:flex w-[100%] md:w-[90%] md:mx-auto align-middle justify-center h-[600px] p-5 border-[1px] border-gray-600 rounded-lg relative">
          <img
            src={img1}
            alt="/"
            className="w-[100%] h-[100%] object-cover rounded-lg "
          />
          <div className="absolute bottom-8 left-9 bg-black/85 rounded-lg  p-5">
            <p className="font-[500] text-[18px] mb-3">before</p>
            <p className="font-[300] tracking-[1px] text-[14px] mt-6">
              Inventory Turnover Rate
            </p>
            <div className="w-[200px] h-[20px] rounded-3xl my-3 bg-white relative">
              <div className="left-0 top-0 w-[160px] h-[20px] rounded-3xl  bg-[#00df25] absolute"></div>
            </div>

            <p className="font-[300] tracking-[1px] text-[14px] mt-6">
              Sales Revenue
            </p>
            <div className="w-[200px] h-[20px] rounded-3xl my-3 bg-white relative">
              <div className="left-0 top-0 w-[110px] h-[20px] rounded-3xl  bg-[#00df25] absolute"></div>
            </div>
          </div>
        </div>
      </div>

      {/* box 02 */}
      <div className="max-w[1240px] mx-auto grid md:grid-cols-2 gap-5 md:mt-[50px]">
        {/* left */}
        <div className="flex align-middle justify-center h-[600px] p-5 border-[1px] border-gray-600 rounded-lg relative">
          <img
            src={img2}
            alt="/"
            className="w-[100%] h-[100%] object-cover rounded-lg "
          />
          <div className="absolute bottom-9 right-9 bg-black/85 rounded-lg  p-5">
            <p className="font-[500] text-[18px] mb-3">After</p>
            <p className="font-[300] tracking-[1px] text-[14px] mt-6">
              Inventory Turnover Rate
            </p>
            <div className="w-[200px] h-[20px] rounded-3xl my-3 bg-white relative">
              <div className="left-0 top-0 w-[160px] h-[20px] rounded-3xl  bg-[#00df25] absolute"></div>
            </div>

            <p className="font-[300] tracking-[1px] text-[14px] mt-6">
              Sales Revenue
            </p>
            <div className="w-[200px] h-[20px] rounded-3xl my-3 bg-white relative">
              <div className="left-0 top-0 w-[110px] h-[20px] rounded-3xl  bg-[#00df25] absolute"></div>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="my-6 pl-5 flex flex-col md:items-start items-center justify-center">
          <p className="uppercase text-[#00df25] tracking-[2px] py-2 font-bold">
            SOLUTIONS
          </p>
          <h1 className="md:text-5xl sm:text-3xl text-[30px] text-center md:text-left font-[400] py-3">
            Revolutionizing Retail <br /> with Data Analytics
          </h1>
          <p className="md:text-[17px] mt-4 leading-[30px] tracking-[2px] text-center md:text-left text-[14px] text-gray-500">
            Unlock the power of big data and analytics to gain invaluable
            insights into your business operations. Our platform provides
            advanced tools and techniques to analyze vast datasets, enabling you
            to make informed decisions and drive strategic growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
