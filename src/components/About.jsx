import React from "react";
import { Link } from "react-scroll";

import SocialLine from "./ruc/SocialLine";

import venom from "../assets/V.png";
// import geekweb from "../assets/gw.png";
// import uphero from "../assets/uphero.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0b0b0b] pb-10 text-gray-300 xs:h-fit ss:h-fit sm:h-fit"
    >
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 py-10">
          <div className="sm:text-right py-8 xs:py-3 sm:py-3 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#0e6067]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="venom sm:text-right text-4xl font-normal ">
            <p>
              <small>
                I'm Anesu Napsta,
                <br /> This is my portifolio site.
                <br />
                <br />
                Please find attached contact info for communication.
              </small>
            </p>
            <br />
            <p className="companies">
              <i style={{ fontSize: "30px" }}>Associated Organizations</i>
              <span className="text-lg flex flex-row pt-10 justify-center items-center">
                Vector_Norms Inc. &nbsp;
                <a href="https://github.com/Vector-Norms-Systems">
                  <img
                    className="md:mr-15 sm:mr-1"
                    src={venom}
                    alt="venom"
                    style={{ width: "60px" }}
                  />
                </a>
              </span>
            </p>
          </div>
          <div>
            <p>
              <br />
              I am an open-minded learner, who is able to adapt to agile changes
              in the Information Technology field. As a self-driven programmer,
              a linux kernel lover and an aspiring data scientist, I have an
              exceptional drive, good organizational skills and professional
              etiquette.
              <br />
              <br />
              I love making a conversation with data, discovering the hidden
              message behind it. As a result I'm in the process of certifying my
              skills as a data scientist.
              <br />
              <br />
              The much respect I have for Open Source development, makes up the
              intermediate experience I have in TypeScript and Python for both
              mobile and web development towards the field of{" "}
              <b>Data Science</b> and <b>Statisctical Research.</b>
            </p>
          </div>
        </div>
        <SocialLine />
      </div>
    </div>
  );
};

export default About;
