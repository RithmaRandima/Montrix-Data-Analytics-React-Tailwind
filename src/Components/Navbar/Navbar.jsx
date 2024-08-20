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
      <h1 className="w-full text-3xl font-bold text-[#00df25]">Montrix.</h1>
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
        <ul className=" uppercase  bg-[#000300] p-4 h-full">
          <h1 className="capitalize w-full text-3xl font-bold text-[#00df9a] pt-4 pl-2">
            React.
          </h1>

          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
