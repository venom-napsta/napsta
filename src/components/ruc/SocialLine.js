import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function SocialLine() {
  return (
    <div
          style={{ display: "flex" }}
          className="flex justify-end align-middle my-8 p-2"
        >
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a className="text-xl linkText" href="https://wa.me/263714551865">
              <AiOutlineWhatsApp color="green" className="contactIcons" />
            </a>
          </p>
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="mailto:napstakid@gmail.com"
            >
              <MdOutgoingMail color="#0e6067" className="contactIcons" />
            </a>
          </p>
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="https://www.linkedin.com/in/napsta-kid/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin color="#183b7c" className="contactIcons" />
            </a>
          </p>
          <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="https://www.linkedin.com/in/venom-napsta/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub color="#0e6067" className="contactIcons" />
            </a>
          </p>
        </div>
  )
}
