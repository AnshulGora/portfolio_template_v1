import React from "react";
import { Fade } from "react-awesome-reveal";

import data from "../data/data.json";

export default function Tagline() {
  return (
    <div className="container-fluid taglinediv text-center">
      <div className="background-overlay"></div>

      <Fade direction="down" triggerOnce="true">
        <h1>Hi, I'm {data.name}</h1>
      </Fade>
      <Fade cascade>
        <h6 className="fw-light">
          {/* A Web Developer who creates websites and do Network Marketing for
          startups and founders. */}
          {data.tagline}
        </h6>
      </Fade>

      <Fade direction="up">
        <div className="my-4">
          <a href={`mailto:${data.email}`}>
            <button type="button" class="btn btn1">
              Contact me
            </button>
          </a>
          <button type="button" class="btn btn2">
            download CV
          </button>
        </div>
      </Fade>
    </div>
  );
}
