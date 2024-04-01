import React from "react";
import project1 from "../assets/project-img-2.jpg";

export default function ProjectCard(props) {
  return (
    <div className="card projectcard">
      <div className="row">
        <div className="col-md py-2">
          <h2 className="fw-bold">{props.title}</h2>
          <p>{props.content}</p>
          <h6 className="projects-tech mt-2">{props.tech}</h6>
          <a
            // href={`https://${props.url}`}
            href={props.url}
            target="blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-primary btn1 px-4">
              <i className="fa-solid fa-up-right-from-square"></i> Project Link
            </button>
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
    </div>
  );
}
