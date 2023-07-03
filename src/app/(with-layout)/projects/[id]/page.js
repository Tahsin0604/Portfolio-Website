import { projectData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import React from "react";
import ImageScroller from "./ImageScroller";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
export const metadata = {
  title: "Tahsin || Project Details ",
  description: "Portfolio website",
};
const projectDetails = ({ params }) => {
  const project = projectData.find(
    (project) => project.id === parseInt(params.id)
  );
  if (!project) {
    notFound();
  } else
    return (
      <div className="custom-container py-12">
        <div className="flex justify-between flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3">
            <ImageScroller
              image_url={project.project_full_image}
            ></ImageScroller>
          </div>
          <div className="w-full md:w-2/3">
            <h2>{project.project_name}</h2>
            <h4>{project.projects_types}</h4>
            <h4 className="font-semibold mt-3">Technologies Used:</h4>
            {project.technologies_used.map((tech) => (
              <h1
                key={tech}
                className="py-[4px] px-[7px] rounded-md uppercase  text-sm font-semibold text-white bg-gradient-to-br from-sky-600 to-sky-400 inline-flex mr-2 mt-3"
              >
                {tech}
              </h1>
            ))}
            <h4 className="font-semibold my-3">Features:</h4>

            {project.features.map((feat, index) => (
              <p key={index} className=" mt-1">
                {index + 1}. {feat}
              </p>
            ))}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href={project.live_site}
                target="_blank"
                className="btn btn_project_details uppercase"
              >
                Live Site
              </Link>
              <Link
                href={project.client_side_git}
                className="btn btn_project_details uppercase flex items-center"
              >
                <FaGithub className="mr-1"></FaGithub> Client Code
              </Link>
              <Link
                href={project.server_side_git}
                className="btn btn_project_details uppercase flex items-center"
              >
                <FaGithub className="mr-1"></FaGithub> Server Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default projectDetails;
