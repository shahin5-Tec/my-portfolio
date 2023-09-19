import React from "react";
import bg from "../assets/background.jpg";
import img1 from "../assets/20230905_131711.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="pt-5 ">
      <div className="hero min-h-screen mt-20 md:mb-20 md:mt-0">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="md:text-center text-justify text-white lg:text-left  md:w-1/2">
            <h1 className="md:text-5xl text-2xl font-bold font-serif">
              Hi, <br />{" "}
              <span className="md:text-3xl">This is Md Shahin Hossain</span>
            </h1>
           
            <p className="py-6 text-xl font-mono">
            I am a highly motivated individual currently pursuing a Bachelor of Science in Computer Science and Engineering. With a basic understanding of web development, I am ready to take on new challenges in the field of technology.To me, consistency is the key to unlocking the doors of success. I am passionate about learning and growing in the world of computer science, and I'm excited to apply my knowledge and determination to tackle the challenges that come my way.
            </p>
            <div>
              <h1 className="text-3xl  font-serif my-5">Find Me</h1>

              <div >
                 <a
                  href="https://github.com/shahin5-Tec" target="_blank"
                  className="btn bg-white hover:btn-warning w-20 h-16 ml-3"
                >
                  <BsGithub className="text-black w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shahin-hossain-a3ab6823a/"
                  className="btn bg-white hover:btn-warning w-20 h-16 ml-3"
                >
                  <BsLinkedin className="text-black w-7 h-7" />
                </a>
                <a
                  href="mailto:shahiniubat99m@gmail.com" target="_blank"
                  className="btn bg-white hover:btn-warning w-20 h-16 ml-3 "
                 >
                   <MdEmail className="text-black w-7 h-7" />
                </a> 
              </div>
            </div>
          </div>
          <div>
            <img className="w-full  h-96" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;