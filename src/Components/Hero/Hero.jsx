import React from "react";
import { ReactTyped } from "react-typed";
import home_video from "../../Assets/home_video.mp4";

function Hero() {
  return (
    <div className="text-white h-[100vh] w-[100%] relative">
      <video autoPlay loop muted className="h-[100%] w-[100%] object-cover">
        <source src={home_video} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 bg-gradient-to-t from-black/80 to-black/40 w-[100%] h-[100vh] text-center flex flex-col justify-center">
        <div>
          <p className="uppercase text-[#00df25] tracking-[2px] p-2 font-bold">
            Growing With Data Analytics
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-[700] md:py-4">
            Grow with data.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl font-bold pr-1 py-4">
              Fast, flexible financing for
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl md:pl-4 font-bold text-[#00df25]"
              strings={["BTB", "SASS", "BTC"]}
              typeSpeed={120}
              backSpeed={130}
              loop
            />
          </div>
          <p className="md:text-[16px] mt-4 leading-[30px] tracking-[2px] w-[67%] mx-auto text-xl text-gray-500">
            Unlock the power of big data and analytics to gain invaluable
            insights into your business operations. Our platform provides
            advanced tools and techniques to analyze vast datasets, enabling you
            to make informed decisions and drive strategic growth.
          </p>
          <button className="bg-[#00df25] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

//   <div>
// <p className="uppercase text-[#00df9a] p-2 font-bold">
//           Growing With Data Analytics
//         </p>
//         <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
//           Grow with data.
//         </h1>
//         <div className="flex justify-center items-center">
//           <p className="md:text-5xl sm:text-4xl font-bold pr-1 py-4">
//             Fast, flexible financing for
//           </p>
//           <ReactTyped
//             className="md:text-5xl sm:text-4xl text-xl md:pl-4 font-bold"
//             strings={["BTB", "SASS", "BTC"]}
//             typeSpeed={120}
//             backSpeed={130}
//             loop
//           />
//         </div>
//         <p className="md:text-2xl text-xl text-gray-500">
//           Monitor your data analytics to increase revenue for BTB, SASS & BTC
//           platforms.
//         </p>
//         <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
//           Get Started
//         </button>
// </div>
