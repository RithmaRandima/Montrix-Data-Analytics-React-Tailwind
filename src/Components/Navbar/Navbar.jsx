import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const handleNav = () => {
    setNav(!nav);
  };

  const changeColor = () => {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color === true
          ? "fixed flex justify-between items-center box-border w-[100%] bg-[#fff]/90 text-black top-0 z-10 py-2 px-6 "
          : "fixed flex justify-between items-center box-border w-[100%] bg-transparent top-0 z-10 py-2 px-6 text-white"
      }
    >
      {/* logo Section */}
      <div className="relative w-fit pb-1 pl-1 pr-5 mb-4">
        <h1 className="text-[15px] font-bold">
          <span className="font-extrabold text-[20px]  text-[#00df25]">
            Montrix
          </span>{" "}
        </h1>
        <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-[#00df25] px-1 font-[700] capitalize text-black">
          big data <span className="text-white bg-black p-1">Analytics</span>
        </p>
      </div>
      <ul className="nav-links hidden md:flex gap-4">
        <li
          className="p-4 flex items-baseline justify-center gap-2"
          onClick={() => {
            setActiveNav("home");
          }}
        >
          <a
            href="#home"
            style={{ color: activeNav === "home" ? "#00df25" : "inherit" }}
          >
            Home
          </a>
          {activeNav === "home" ? (
            <div className="w-[7px] h-[7px] bg-[#00df25] rounded-full"></div>
          ) : (
            <></>
          )}
        </li>

        <li
          className="p-4 flex items-baseline justify-center gap-2"
          onClick={() => {
            setActiveNav("about");
          }}
        >
          <a
            href="#about"
            style={{ color: activeNav === "about" ? "#00df25" : "inherit" }}
          >
            About
          </a>
          {activeNav === "about" ? (
            <div className="w-[7px] h-[7px] bg-[#00df25] rounded-full"></div>
          ) : (
            <></>
          )}
        </li>

        <li
          className="p-4 flex items-baseline justify-center gap-2"
          onClick={() => {
            setActiveNav("services");
          }}
        >
          <a
            href="#services"
            style={{ color: activeNav === "services" ? "#00df25" : "inherit" }}
          >
            Services
          </a>
          {activeNav === "services" ? (
            <div className="w-[7px] h-[7px] bg-[#00df25] rounded-full"></div>
          ) : (
            <></>
          )}
        </li>

        <li
          className="p-4 flex items-baseline justify-center gap-2"
          onClick={() => {
            setActiveNav("pricing");
          }}
        >
          <a
            href="#pricing"
            style={{ color: activeNav === "pricing" ? "#00df25" : "inherit" }}
          >
            Pricing
          </a>
          {activeNav === "pricing" ? (
            <div className="w-[7px] h-[7px] bg-[#00df25] rounded-full"></div>
          ) : (
            <></>
          )}
        </li>

        <li
          className="p-4 flex items-baseline justify-center gap-2"
          onClick={() => {
            setActiveNav("blog");
          }}
        >
          <a
            href="#blog"
            style={{ color: activeNav === "blog" ? "#00df25" : "inherit" }}
          >
            Blog
          </a>
          {activeNav === "blog" ? (
            <div className="w-[7px] h-[7px] bg-[#00df25] rounded-full"></div>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#00300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 ease-in-out duration-500"
        }
      >
        <ul
          className={
            color === true
              ? " capitalize  bg-[#fff] p-4 h-full"
              : " capitalize  bg-[#000300] p-4 h-full"
          }
        >
          <div className="relative w-fit pb-1 pl-1 pr-5 mb-10">
            <h1 className="text-[15px] font-bold">
              <span className="font-extrabold text-[20px]  text-[#00df25]">
                Montrix
              </span>{" "}
            </h1>
            <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-[#00df25] px-1 font-[700] capitalize text-black">
              big data{" "}
              <span className="text-white bg-black p-1">Analytics</span>
            </p>
          </div>

          <li className="p-4 border-b border-gray-600">
            <a
              href="#home"
              style={{ color: activeNav === "home" ? "#00df25" : "inherit" }}
            >
              Home
            </a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a
              href="#about"
              style={{ color: activeNav === "about" ? "#00df25" : "inherit" }}
            >
              About
            </a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a
              href="#services"
              style={{
                color: activeNav === "services" ? "#00df25" : "inherit",
              }}
            >
              Services
            </a>
          </li>

          <li className="p-4 border-b border-gray-600">
            <a
              href="#pricing"
              style={{ color: activeNav === "pricing" ? "#00df25" : "inherit" }}
            >
              Pricing
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#blog"
              style={{ color: activeNav === "blog" ? "#00df25" : "inherit" }}
            >
              Blog
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
