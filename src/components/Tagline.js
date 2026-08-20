import React from "react";
import { Fade } from "react-awesome-reveal";

import data from "../data/content.json";
import profileImage from "../assets/About Section Image.png";

export default function Tagline() {
  return (
    <div className="container-fluid taglinediv">
      <Fade direction="down" triggerOnce>
        <div className="profile-row">
          <img src={profileImage} alt="Profile" className="profile-avatar" />
          <div>
            <h1>{data.profile.name}</h1>
            <p className="profile-meta">
              {data.profile.role} · {data.profile.descriptor}
            </p>
          </div>
        </div>
      </Fade>

      <Fade cascade triggerOnce>
        <p className="profile-intro">{data.profile.tagline}</p>
      </Fade>

      <div className="profile-actions">
        <a className="action-primary" href={`mailto:${data.profile.email}`}>
          Let&apos;s work together{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          className="action-secondary"
          href={data.profile.cv_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View resume
        </a>
      </div>

      <div className="profile-now">
        <span className="spotify-mark">
          <i className="fa-brands fa-spotify"></i>
        </span>
        <span>Last played —</span>
        <strong>{data.profile.now_playing.title}</strong>
        <span>· {data.profile.now_playing.artist}</span>
      </div>

      <div className="social-row">
        <a href={data.profile.socials.twitter} aria-label="Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href={data.profile.socials.linkedin} aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={data.profile.socials.instagram} aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href={`mailto:${data.profile.email}`} aria-label="Email">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
