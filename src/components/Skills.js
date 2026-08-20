import React from "react";
import data from "../data/content.json";

export default function Skills() {
  const icons = [
    "fa-solid fa-code",
    "fa-solid fa-pen-ruler",
    "fa-solid fa-gauge-high",
    "fa-solid fa-layer-group",
    "fa-solid fa-share-nodes",
    "fa-solid fa-file-lines",
  ];

  return (
    <section className="container-fluid skillsdiv">
      <div className="section-heading skills-heading">
        <div>
          <span className="section-kicker">How I can help</span>
          <h1>Capabilities that ship.</h1>
        </div>
        <span className="skills-status">
          <span></span> Available for work
        </span>
      </div>

      <div className="row skills-grid">
        {data.services.map((service, index) => (
          <div key={index} className="col-md-6">
            <article className="servicecard">
              <div className="service-topline">
                <span className="service-index">0{index + 1}</span>
                <i className={`${icons[index]} service-icon`}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
