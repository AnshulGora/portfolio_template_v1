import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="container-fluid projectsdiv">
      <div className="text-center">
        <h1>My work :)</h1>
      </div>

      <ProjectCard
        title="Plutospace"
        content="With interactive content, real-time feedback,
        and collaborative tools, PlutoSpace empowers learners to thrive in a
      dynamic and engaging environment tailored to their individual needs
      and preferences."
        url="www.google.com"
      ></ProjectCard>

      <ProjectCard
        title="Fitness Junction"
        content="Goal of the youth to get fit and healthy, With interactive content, real-time feedback, and collaborative tools, It empowers learners to thrive in a dynamic and engaging environment tailored to their individual needs."
        url="www.google.com"
      ></ProjectCard>

      <ProjectCard
        title="Amazon Clone"
        content="this is a clone of Amazon, With Cloning, real-time feedback,
        and collaborative tools, PlutoSpace empowers learners to thrive in a
        dynamic and engaging environment tailored to their individual needs."
        url="www.google.com"
      ></ProjectCard>

      <ProjectCard
        title="Chat Application"
        content="With interactive content, real-time feedback, and collaborative tools, Application empowers learners to thrive in a dynamic and engaging environment tailored to their individual needs and preferences."
        url="www.google.com"
      ></ProjectCard>
    </div>
  );
}
