import React from "react";
import { useLoaderData } from "react-router-dom";

const Project = () => {
  const projects = useLoaderData();
  console.log(projects);
  return (
    <div className="font-serif my-5 md:mb-20 lg:mx-48 md:mx-32" id="project5">
        <h1 className="text-3xl text-center">My Projects</h1>
        <h1 className="text-xl text-center mb-5"> Here are some projects, <br /> If you want see more please visit my
        GitHub</h1>
      <div className="grid md:grid-cols-2  mx-3 md:mx-0  gap-5 my-5  ">
        {projects.map((project) => (
          <div className=" card md:w-96 bg-base-100 shadow-xl  relative aos-init aos-animate">
            <figure className="transition-transform duration-500 transform ease-in-out hover:scale-110 hover:opacity-40">
              <img className="h-[200px]" src={project.img} alt="" />
            </figure>
            <div className="mt-3 py-3 my-3 pb-5 ms-5">
            <h2 className="card-title">{project.name}</h2>
              <p className="text-xl mt-3">Technology: {project.technology}</p>
              <div>
                <a className="btn btn-outline btn-xs px-1 transition-transform duration-500 transform ease-in-out hover:scale-110"
                 href={project.liveLink} target="_blank">
                    LiveLink
                 </a>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Project;
