import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import img from "../assets/20230905_131711.jpg";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content md:px-32 px-5">
      <div className="items-center grid-flow-col">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <p className="ms-3">Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a target="_blank" href="https://github.com/shahin5-Tec">
          <BsGithub className="text-white w-7 h-7" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/shahin-hossain-a3ab6823a/">
          <BsLinkedin className="text-white w-7 h-7" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;