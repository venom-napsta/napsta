import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import "./Contact.css";

const Home = () => {
  return (
    <div name='home' className='bg-image w-full h-screen bg-[#0a0a0a]'>
      {/* Container */}
      {/* <div className="bg-image"></div> */}
      <div className='bg-text max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-400 text-2xl sm:text-4xl'>Hi,</p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'>
          <small>I'm Napsta </small>
        </h1><p></p>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
          <strong className='text-4xl sm:text-7xl'>Web & Mobile App</strong> Developer.
        </h2>
        <p className='text-[#ccc] py-4 max-w-[700px] no-shadow'>
          I’m a junior full-stack developer, with a big interest in the application of Machine Learning & Deep Learning algorithms to Mobile and Web Apps.
          <Link to='about' smooth={true} duration={500}>
            <button className='text-gray-200 my-3 flex items-center hover:text-[#2e6067]' href="#"><em>More about me... </em> </button>
          </Link>
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#2e6067] hover:border-[#6c6067]'>
              Check out my Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-5 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
