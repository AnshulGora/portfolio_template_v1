import React from "react";
import project1 from "../assets/project-img-2.jpg";

export default function ProjectCard(props) {
  return (
    <article className="card projectcard">
      <div className="row project-layout">
        <div className="col-md py-2 project-copy">
          <div className="project-heading">
            <span className="project-index">0{props.index + 1}</span>
            <h2 className="fw-bold">{props.title}</h2>
          </div>
          <p>{props.content}</p>
          <div className="projects-tech mt-2">
            {props.tech.split(" ").map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <span className="project-link">
              View project{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </a>
        </div>

        <div className="col-md">
          <img
            src={props.img ? props.img : project1}
            alt="img-project"
            className="img-fluid project-img"
          />
        </div>
      </div>
    </article>
  );
}
