import React from "react";
import data from "../data/content.json";

export default function Experience() {
  return (
    <div className="container-fluid experiencediv">
      <div className="text-center py-4">
        <h1>Career Highlights</h1>
      </div>
      <div className="timeline">
        {data.experience.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <div className="card experiencecard">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{exp.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {exp.company}
                  </h6>
                  <p className="card-text text-muted">{exp.duration}</p>
                  <p className="card-text">{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
