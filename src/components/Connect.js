import React from "react";

export default function Connect() {
  return (
    <div className="container-fluid connectdiv">
      <div className="text-center py-4">
        <h1>Connect with me!</h1>
      </div>

      <div className="row">
        <div className="col-md card text-center connect-card">
          <a
            href="mailto:aryanmishra1404@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-envelope-circle-check iconf fa-3x"></i>
          </a>
          <h5 className="py-2">Mail me</h5>
        </div>
        <div className="col-md card text-center connect-card">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram fa-3x iconf"></i>
          </a>

          <h5 className="py-2">Instagram</h5>
        </div>
        <div className="col-md card text-center connect-card">
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-3x iconf"></i>
          </a>
          <h5 className="py-2">Github</h5>
        </div>
        <div className="col-md card text-center connect-card">
          <a
            href="https://in.linkedin.com/in/aryan-mishra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-3x iconf"></i>
          </a>
          <h5 className="py-2">Linked-in</h5>
        </div>
      </div>

      <div className="text-center">
        <h6 className="pt-4">
          Made with <i class="fa-solid fa-heart iconred"></i> by
          <a
            href="https://anshulwork.netlify.app/"
            target="_blank"
            className="Anshul-link"
          >
            {" "}
            Anshul Gora
          </a>
        </h6>
      </div>
    </div>
  );
}
