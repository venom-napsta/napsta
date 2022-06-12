import React, { /* useState */ } from 'react'

// import { AiOutlineWhatsApp } from "react-icons/ai";
// import { MdOutgoingMail } from "react-icons/md";
// import { AiFillLinkedin } from "react-icons/ai";
// import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  // const [display, setDiplay] = useState(false);
  return (
    <div name='contact' className='w-full h-screen bg-[#0b0b0b] flex justify-center items-center p-4'>
      {/* <div>
        <div className="bg-image"></div>
        <div className="bg-text">
          <h2 className="text-2xl py-3">I am Shubham Tiwari</h2>
          <h1 className="text-4xl py-3 postTitle">WEB DEVELOPER at DevRonnins</h1>

          <div
            style={{ display: display ? "flex" : "none" }}
            className="flex justify-center align-middle my-4 p-2"
          >
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a className="text-xl linkText" href="https://wa.me/YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE">
                <AiOutlineWhatsApp color="#ffcec5" className="contactIcons" />
              </a>
            </p>
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a
                className="text-xl linkText"
                href="mailto:shubhmtiwri00@gmail.com"
              >
                <MdOutgoingMail color="#ffcec5" className="contactIcons" />
              </a>
            </p>
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a
                className="text-xl linkText"
                href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin color="#ffcec5" className="contactIcons" />
              </a>
            </p>
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a
                className="text-xl linkText"
                href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram color="#ffcec5" className="contactIcons" />
              </a>
            </p>
          </div>
          <button
            onClick={() => setDiplay(!display)}
            className="ring-2 ring-red-200 bg-none text-slate-200 rounded-md px-4 py-2 my-4"
          >
            Contacts
          </button>
        </div>
      </div> */}

      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#0e6067] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - napstakid@gmail.com</p>
        </div>
        <input className='bg-[#f5f5f5] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#f5f5f5]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#f5f5f5] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#0e6067] hover:border-[#0e6067] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div >
  )
}

export default Contact