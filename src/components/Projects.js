import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <div className="container-fluid projectsdiv">
      <div className="text-center">
        <h1>My work :)</h1>
      </div>

      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          content={project.content}
          url={project.url}
          // img={require(project.img)}
          tech={project.tech}
        />
      ))}
    </div>
  );
}
