import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
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
    </div>
  );
}
