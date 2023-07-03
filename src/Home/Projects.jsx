import { projectData } from "@/data/projectsData";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className=" custom-container py-24">
      <div className="text-center">
        <h6 className=" text-sky-500 tracking-[4px] uppercase mb-4">
          Projects
        </h6>
        <h1>What I&apos;ve built</h1>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
