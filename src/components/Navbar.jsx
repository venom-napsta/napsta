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
    </div>
  );
};

export default Navbar;
