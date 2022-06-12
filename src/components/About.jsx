import React from 'react';
import { Link } from 'react-scroll';

import SocialLine from './ruc/SocialLine';

import venom from '../assets/V.png';
import geekweb from '../assets/gw.png';
import uphero from '../assets/uphero.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0b0b0b] py-10 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right py-8 pl-4 xs:pb-10'>
            <p className='text-4xl font-bold inline border-b-4 border-[#0e6067]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className=' sm:text-right text-4xl font-normal'>
            <p>
              <small>I'm Anesu Napsta,
                <br /> This is my portifolio site.
                <br /><br />
                Take a look around and don't
                hesitate to get in touch.</small>
            </p>
            <br /><br />
            <p className='companies'>
              <u style={{ 'fontFamily': 'verdana', 'fontSize':'20px', 'color':'#bbb' }}>Associated Organizations</u>
              <div className='flex flex-row py-10 justify-end items-center'>
                  <img className='md:mr-15 sm:mr-1' src={venom} alt='venom' style={{ width: '60px' }} />
                  <img className='md:mr-15 sm:mr-1' src={geekweb} alt='geekweb' style={{ width: '70px' }} />
                  <img src={uphero} alt='upher' style={{ width: '60px' }} />
              </div>
            </p>

          </div>
          <div>
            <p><br />
              I am an open-minded learner, who
              is able to adapt to agile changes in
              the Information Technology field.
              As a self-driven programmer, a linux kernel lover and
              an aspiring data scientist, I have an
              exceptional drive, good
              organizational skills and
              professional etiquette.
              <br /><br />
              I love making a conversation with data, discovering
              the hidden message behind it. As a result I'm in the process
              of certifying my skills as a data scientist.
              <br /><br />
              Currently, I’m working on the implementation of deep learning algorithms to
              my existing ecommerce project built with React.JS.
              <br />
              <Link to='about' smooth={true} duration={500}>
                <button className='text-[#0e6067] my-3 flex items-center hover:text-[#232]' href="#">Project Repo here... </button>
              </Link>
              The much respect I have for Open Source
              development, makes up the
              intermediate experience I have in
              JavaScript and Python for both mobile
              and web development towards the
              field of <b>Data Science</b> and <b>
                Statisctical Research.</b>
            </p>
          </div>
        </div>
        <SocialLine />
      </div>
    </div>
  );
};

export default About;
