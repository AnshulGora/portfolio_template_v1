import React from "react";
import ReviewCard from "./ReviewCard";

export default function Testimonials() {
  return (
    <div className="container-fluid testimonialsdiv">
      <div className="text-center pb-4">
        <h1>What they say!</h1>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-4">
          <ReviewCard
            avatar={require("../assets/avatar-1.jpg")}
            name="Aryan Mishra"
            company="Web Developer"
            review="Got Portfolio designed by Anshul, Results are Outstanding. Professional and always delivers on time."
          ></ReviewCard>
        </div>

        <div className="col-md-4 col-sm-4">
          <ReviewCard
            avatar={require("../assets/avatar-2.jpg")}
            name="Tejasva Sharma"
            company="Educational Youtuber"
            review="He is a great designer and a great person to work with. Professional and always delivers on time."
          ></ReviewCard>
        </div>

        <div className="col-md-4 col-sm-4">
          <ReviewCard
            avatar={require("../assets/avatar-3.jpg")}
            name="Arihant Pokharna"
            company="Data Analyst"
            review="Anshul is a great communicator and an even better designer. Highly recommended!"
          ></ReviewCard>
        </div>
      </div>
    </div>
  );
}
