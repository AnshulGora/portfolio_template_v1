import React from "react";

export default function Skills() {
  return (
    <div className="container-fluid skillsdiv">
      <div className="text-center py-4">
        <h1>Skills, I have</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="news-text">
            <marquee behavior="scroll" direction="left" className="fw-light">
              HTML &nbsp; &nbsp; &nbsp; CSS &nbsp; &nbsp; &nbsp; Javascript
              &nbsp; &nbsp; &nbsp; React Js &nbsp; &nbsp; &nbsp; Data Structures
              & Algorithms &nbsp; &nbsp; &nbsp; DBMS &nbsp; &nbsp; &nbsp; SQL
              &nbsp; &nbsp; &nbsp; Firebase(Authentication & Database) &nbsp;
              &nbsp; &nbsp; Event Management &nbsp;&nbsp;&nbsp; Amazon Web
              Services &nbsp;&nbsp;&nbsp; C++ &nbsp;&nbsp;&nbsp; Java
              &nbsp;&nbsp;&nbsp; Github &nbsp;&nbsp;&nbsp; Git
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
