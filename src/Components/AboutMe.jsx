import React from "react";
import bg from "../assets/frontend_webdeveloper.jpg";
import img from "../assets/20230905_131711.jpg"
import { FcPhone, FcHome } from "react-icons/fc";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { RiMailAddFill } from "react-icons/ri";
import resume from "../assets/Resume-Md.Shahin Hossain.pdf"
const AboutMe = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="font-serif text-white mt-5  md:px-32 px-5 "
      id="aboutMe"
    >
      <div
        className="hero min-h-screen "
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left relative aos-init aos-animate">
            <h1 className="text-5xl text-center">About Me</h1>
            <h1 className="text-xl text-center">
              Here are some Skills and Tools what i know
            </h1>
            <h1 className="text-4xl md:mt-12">Front-End Developer</h1>
            <p className="text-xl font-mono md:mt-3">
              I am a self-motivated Front-End Web Developer
              My expertise spans a variety of technologies, including React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind, allowing me to create visually stunning and highly functional websites and mobile responsive web development.I also have a solid foundation in programming languages such as C and C++. My knowledge of Data Structures and Algorithms my problem-solving abilities, enabling me to create efficient and performant web applications.
            </p>
            <div className="md:mt-3">
              <p className="flex items-center mt-2">
                <FaUserGraduate className="w-7 h-7" />
                <span className="text-xl ml-3">
                  International University of Business Agriculture and
                  Technology
                </span>
              </p>
              <p className="flex items-center mt-2">
                <BsBookHalf className="w-7 h-7" />
                <span className="text-xl ml-3">
                  Bachelor of Science in Computer Science and Engineering
                </span>
              </p>
              <p className="flex items-center mt-2">
                <FaGraduationCap className="w-7 h-7" />
                <span className="text-xl ml-3">
                  Expected Graduation in January, 2024
                </span>
              </p>
              <p className="flex items-center mt-2">
                <FcPhone className="w-7 h-7" />
                <span className="text-xl ml-3"> +8801303461699</span>
              </p>
              <p className="flex items-center mt-2">
                <RiMailAddFill className="w-7 h-7" />
                <span className="text-xl ml-3">shahiniubat99@gmail.com</span>
              </p>
              <p className="flex items-center mt-2">
                <FcHome className="w-7 h-7" />
                <span className="text-xl ml-3">
                  Uttara-10, Dhaka, Bangladesh
                </span>
              </p>

              <a
                href={resume}
                target="_black"
                className="btn btn-outline btn-accent hover:btn-primary mt-5"
              >
                Download My Resume
              </a>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm md:ml-14 bg-base-200 shadow-2xl relative aos-init aos-animate">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;