import React from "react";
import anshul from "../assets/About Section Image.jpeg";

import data from "../data/content.json";

export default function About() {
  const { profile } = data;
  const paragraphs = profile.about_text.split(/\n\s*\n/);

  return (
    <section className="container-fluid aboutdiv">
      <div className="section-heading about-heading">
        <div>
          <span className="section-kicker">A little context</span>
          <h1>About the developer.</h1>
        </div>
      </div>

      <div className="row about-layout">
        <div className="col-md-4 aboutdivcol">
          <img
            src={anshul}
            alt={`${profile.name} working on a project`}
            className="img-fluid about-img"
          />
          <div className="about-facts">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <div className="col-md-8 aboutdivcol about-copy">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
