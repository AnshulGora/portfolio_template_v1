import React from "react";
import anshul from "../assets/About Section Image.png";

import data from "../data/content.json";

export default function About() {
  const { profile } = data;
  const { about_text } = profile;
  return (
    <div className="container-fluid aboutdiv">
      <div className="text-center pb-4">
        <h1>About me</h1>
      </div>

      <div className="row">
        <div className="col-md aboutdivcol text-center">
          <img
            src={anshul}
            alt="about-mishra-img"
            className="img-fluid about-img"
          />
        </div>

        <div className="col-md aboutdivcol">
          {/* Data is Split */}
          {about_text.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
