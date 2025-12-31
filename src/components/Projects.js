import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../data/content.json";

export default function Projects() {
  return (
    <div className="container-fluid projectsdiv">
      <div className="text-center">
        <h1>My work :)</h1>
      </div>

      {data.projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          content={project.content}
          url={project.url}
          img={require(`../assets/${project.img}`)}
          tech={project.tech}
        />
      ))}
    </div>
  );
}
