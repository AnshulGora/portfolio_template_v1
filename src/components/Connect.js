import React from "react";
import { Fade } from "react-awesome-reveal";

import data from "../data/content.json";

export default function Connect() {
  const links = [
    {
      label: "Email",
      href: `mailto:${data.profile.email}`,
      icon: "fa-solid fa-envelope-circle-check",
    },
    {
      label: "Instagram",
      href: data.profile.socials.instagram,
      icon: "fa-brands fa-instagram",
    },
    {
      label: "X / Twitter",
      href: data.profile.socials.twitter,
      icon: "fa-brands fa-x-twitter",
    },
    {
      label: "LinkedIn",
      href: data.profile.socials.linkedin,
      icon: "fa-brands fa-linkedin",
    },
  ];

  return (
    <footer className="container-fluid connectdiv">
      <div className="section-heading connect-heading">
        <div>
          <span className="section-kicker">Open to ideas</span>
          <h1>Let&apos;s make something useful.</h1>
        </div>
      </div>

      <p className="connect-intro">
        Have a product to shape, a frontend to refine, or a problem worth
        untangling? Send a note and I&apos;ll get back to you.
      </p>

      <div className="row connect-grid">
        {links.map((link) => (
          <div className="col-md-3 col-6" key={link.label}>
            <a
              className="card connect-card"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect on ${link.label}`}
            >
              <i className={`${link.icon} iconf`}></i>
              <span>{link.label}</span>
              <i className="fa-solid fa-arrow-up-right-from-square connect-arrow"></i>
            </a>
          </div>
        ))}
      </div>

      <Fade direction="down" delay={2}>
        <div className="connect-footer">
          <h6>
            Built with <i className="fa-solid fa-heart iconred"></i> by
            <a
              href="https://anshulwork.netlify.app/"
              className="Anshul-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {data.profile.name}
            </a>
          </h6>
        </div>
      </Fade>
    </footer>
  );
}
