import React from "react";
import react from "../assets/React-icon.svg.png";
import JavaScript from "../assets/javascript-logo-transparent-logo-javascript-images-3.png";
import Bootstrap from "../assets/Bootstrap_logo.svg.png";
import Tailwind from "../assets/Tailwind_CSS_Logo.svg.png";
import css from "../assets/CSS3_logo.svg.png";
import Html from "../assets/html-1.svg";
import c from "../assets/C_Logo.png";
import cpp from "../assets/ISO_C++_Logo.svg.png";
import dsa from "../assets/dsa.png";
import netlify from "../assets/netlify-logo-png-transparent.png";
import gitHub from "../assets/github-logo.png";
import vercel from "../assets/vercel-icon-512x449-3422jidz.png"

const Skills = () => {
  return (
    <div className="font-serif my-5 md:mb-20 md:mx-32 mx-5" id="skills">
      <h1 className="text-5xl text-center">My Skills</h1>
      <h1 className="text-xl text-center">
        Here are some Skills and Tools what i know
      </h1>

      <div className=" ">
        <div className="grid md:grid-cols-4  grid-cols-2 gap-5 my-5 ">
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              src={JavaScript}
              alt=""
              className="md:w-16 md:h-16 w-14 h14 "
            />
            <h1>JavaScript</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={react} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>React.Js</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={Bootstrap} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>Bootstrap</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={Tailwind} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>Tailwind</h1>
          </div>
         
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={css} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>CSS</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={Html} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>HTML</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={c} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>C</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={cpp} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>C++</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={dsa} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>Data Structure Algorithm</h1>
          </div>
          
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={netlify} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>Netlify</h1>
          </div>
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={vercel} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>Vercel</h1>
          </div>
     
          <div
            className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif md:text-xl rounded-xl relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img src={gitHub} alt="" className="md:w-16 md:h-16 w-14 h14 " />
            <h1>GitHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;