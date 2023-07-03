import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group overflow-hidden py-[12px] px-[20px] rounded-md transition-all duration-200  ease-in-out cursor-pointer bg-gradient-to-br from-gray-300 hover:from-[#5651e5]  hover:scale-105 to-white hover:to-[#709dff] shadow-[4px_4px_8px_#cbcbcb,4px_-4px_8px_#ffffff]">
      <Image
        src={project.project_image}
        alt="project image"
        width={1920}
        height={1080}
        className="w-full h-64 md:h-96 lg:h-64 rounded-md group-hover:opacity-[0.04]"
      />
      <div className="absolute inset-0  hidden group-hover:flex flex-col justify-center items-center">
        <h4 className="capitalize text-white text-lg">
          {project.project_name}
        </h4>
        <p className="capitalize text-white my-1">React Js</p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <Link
            href={project.live_site}
            target="_blank"
            className="btn btn_projects uppercase"
          >
            Live Site
          </Link>
          <Link
            href={project.client_side_git}
            target="_blank"
            className="btn btn_projects uppercase flex items-center"
          >
            <FaGithub className="mr-1"></FaGithub> Client Code
          </Link>
          <Link
            href={project.server_side_git}
            target="_blank"
            className="btn btn_projects uppercase flex items-center"
          >
            <FaGithub className="mr-1"></FaGithub> Server Code
          </Link>
          <Link
            href={`/projects/${project.id}`}
            className="btn btn_projects uppercase"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
