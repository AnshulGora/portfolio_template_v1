import React from "react";

export default function Skills() {
  return (
    <div className="container-fluid skillsdiv">
      <div className="text-center py-4">
        <h1>Services, I offer</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="news-text">
            <marquee behavior="scroll" direction="left" className="fw-light">
              {/* ReactJs &nbsp; &nbsp; &nbsp; Bootstrap &nbsp; &nbsp; &nbsp;
              Javascript &nbsp; &nbsp; &nbsp; Data Structures & Algorithms
              &nbsp; &nbsp; &nbsp; OOPs &nbsp; &nbsp; &nbsp; DBMS &nbsp; &nbsp;
              &nbsp; SQL &nbsp; &nbsp; &nbsp; Firebase(Database) &nbsp; &nbsp;
              &nbsp; TailwindCSS &nbsp;&nbsp;&nbsp; Python &nbsp;&nbsp;&nbsp;
              C++ &nbsp;&nbsp;&nbsp; Java &nbsp;&nbsp;&nbsp; Github
              &nbsp;&nbsp;&nbsp; OOPS */}
              Website Development &nbsp; &nbsp; &nbsp; Designing(UI/UX, Landing
              Page, Porduct Page, Portfolio Website) &nbsp; &nbsp; &nbsp; SEO
              &nbsp; &nbsp; &nbsp; Digital Marketing &nbsp; &nbsp; &nbsp; Social
              Media Marketing &nbsp; &nbsp; &nbsp; Content Writing &nbsp; &nbsp;
              &nbsp; Blogging &nbsp; &nbsp; &nbsp; Email Marketing &nbsp; &nbsp;
              &nbsp; E-commerce &nbsp; &nbsp; &nbsp; Web Hosting &nbsp; &nbsp;
              &nbsp; Domain Registration
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
