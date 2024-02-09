import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaToggleOn,
  FaKaggle,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/V.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="relative w-full h-[80px] flex justify-between items-center px-4 bg-[#010101] text-[#ccc]">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="hover:cursor-pointer ml-4"
      >
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </Link>

      {/* menu */}
      <ul className="lis hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <FaHome size={26} />
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <span className="arrow_nav"> | </span>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <span className="arrow_nav"> | </span>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <span className="arrow_nav"> | </span>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
{/*
      <ul>
        <li>
          <FaToggleOn size={38} />
        </li>
      </ul> */}

      {/* Hamburger 
      <div
        onClick={handleClick}
        className="hover:cursor-pointer md:hidden z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      */}

      {/* Mobile menu 
      <ul
        className={
          !nav
            ? "hidden"
            : "relative top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            My Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      */}

      {/* Social icons */}
      <div className="hidden lg:flex relative flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a1a1a]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/venom-napsta"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
