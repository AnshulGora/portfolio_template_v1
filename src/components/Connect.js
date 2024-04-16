import React from "react";
import { Fade } from "react-awesome-reveal";

import data from "../data/data.json";

export default function Connect() {
  return (
    <div className="container-fluid connectdiv">
      <div className="text-center py-4">
        <h1>Connect with me!</h1>
      </div>

      <div className="row">
        <div className="col-md card text-center connect-card">
          <a
            href={`mailto:${data.email}`}
            target="blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-envelope-circle-check iconf fa-3x"></i>
          </a>
          <h5 className="py-2">Mail me</h5>
        </div>
        <div className="col-md card text-center connect-card">
          <a
            href={data.link_instagram}
            target="blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram fa-3x iconf"></i>
          </a>

          <h5 className="py-2">Instagram</h5>
        </div>
        <div className="col-md card text-center connect-card">
          <a href={data.link_twitter} target="blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter fa-3x iconf"></i>
          </a>
          <h5 className="py-2">Twitter/X</h5>
        </div>
        <div className="col-md card text-center connect-card">
          <a href={data.link_linkedin} target="blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-3x iconf"></i>
          </a>
          <h5 className="py-2">Linked-in</h5>
        </div>
      </div>

      <Fade direction="down" delay={2}>
        <div className="text-center">
          <h6 className="pt-4">
            {/* <span className="promo-box"> */}
            <i class="fa-solid fa-wand-magic-sparkles"></i> Made with{" "}
            <i class="fa-solid fa-heart iconred"></i> by
            <a
              href="https://anshulwork.netlify.app/"
              className="Anshul-link"
              target="blank"
            >
              {" "}
              Anshul Gora
            </a>
            {/* </span> */}
          </h6>
        </div>
      </Fade>
    </div>
  );
}
