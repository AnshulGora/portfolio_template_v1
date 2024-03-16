import React from "react";
import Mishra from "../assets/mishra-about.jpg";

export default function About() {
  return (
    <div className="container-fluid aboutdiv">
      <div className="text-center pb-4">
        <h1>About me</h1>
      </div>

      <div className="row">
        <div className="col-md aboutdivcol">
          <img
            src={Mishra}
            alt="about-mishra-img"
            className="img-fluid about-img"
          />
        </div>

        <div className="col-md aboutdivcol">
          <p>
            Sup mate! I am Aryan Mishra, a Web Developer from Bhiwabhindi,
            India! It all started back in 2002 when I was born and doing my
            Btech, I realised the entire engineering, networking stuff wasn't my
            jam.
            <br />
            <br /> Have always been hyped about friends and doing my own thing,
            then one day, stumbled upon Dhoom machale vids on youtube, did the
            course from Boriwala and it was like a lightbulb moment.
            <br />
            <br /> Enrolled in '10k dhoomers' and haven't looked back since.
            Been hustling as a freelance Web Developer for a year now, have
            assisted SaaS and Fitness websites and have served 5+ super happy
            clients! So.. What are you waiting for ? Connect now , let's design
            and build your startup before someone else does!
          </p>
        </div>
      </div>
    </div>
  );
}
