import React from "react";
import { Link } from "react-scroll";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <div className="container-fluid navbardiv sticky-top">
      <Link
        className="navbar-link"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Home
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Work
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="testimonials"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Blog
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Resume
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        About
      </Link>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        onClick={onToggleTheme}
      >
        <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      </button>
    </div>
  );
}
