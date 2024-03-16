import React from "react";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Tagline />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <About />
      <Element name="services">
        <Skills />
      </Element>
      <Element name="contact">
        <Connect />
      </Element>
    </div>
  );
}

export default App;
