import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
// import JavaScript from '../assets/javascript.png';
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import sklearn from "../assets/sklearn.png";
import python from "../assets/python.png";
import GitHub from "../assets/github.png";
// import tf from '../assets/tf.png';
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-full bg-[#0c0c0c] text-gray-300 sm:h-fit xs:h-fit md:h-fit"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#0e6067]">
            Skills
          </p>
          <p className="py-4">Tools I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:gap-8 gap-4 text-center py-8">
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML 5</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="css icon" />
            <p className="my-4">CSS 3</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="reactjs icon" />
            <p className="my-4">REACT JS & React Native</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="node icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="mongo icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GH icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={python} alt="Python icon" />
            <p className="my-4">Python for Data Science</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 h-25 mx-auto" src={sklearn} alt="SKlearn icon" />
            <p className="my-4">Scikit-learn</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 h-25 mx-auto" src={sklearn} alt="Pandas icon" />
            <p className="my-4">Pandas</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 h-25 mx-auto" src={sklearn} alt="Prisma icon" />
            <p className="my-4">Prisma ORM</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 h-25 mx-auto" src={sklearn} alt="Mongoose icon" />
            <p className="my-4">Mongoose ORM</p>
          </div>
          <div className="shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500">
            <img className="w-20 h-25 mx-auto" src={sklearn} alt="Next.js icon" />
            <p className="my-4">Next.js</p>
          </div>
          {/*
              <div className='shadow-md shadow-[rgb(0,100,120)] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tf} alt="HTML icon" />
                  <p className='my-4'>TensoFlow</p>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
