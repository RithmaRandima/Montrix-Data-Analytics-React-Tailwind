import React from "react";
import home_video from "../../Assets/newsletter_video.mp4";

function NewsLetter() {
  return (
    <div className="w-full h-[350px]  text-white bg-red-300 relative">
      <video autoPlay loop muted className="h-[100%] w-[100%] object-cover">
        <source src={home_video} type="video/mp4" />
      </video>

      <div className="absolute left-0 top-0 w-[100%] h-[100%] py-6 px-5 flex items-center justify-center flex-col  text-center align-middle bg-gradient-to-t from-black/70 to-black/2">
        <div className=" my-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to Our newsletter and stay up to date</p>
        </div>

        <div className="mt-2 my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex rounded-md text-black w-full"
              type="email"
              placeholder="Enter Email"
            />
            <button className="text-[#000] w-[200px] rounded-md ml-4 font-medium my-6 mx-auto py-3 bg-[#00df9a]">
              Notify Me
            </button>
          </div>
          <p>
            we care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
