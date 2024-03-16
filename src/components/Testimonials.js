import React from "react";
import ReviewCard from "./ReviewCard";

export default function Testimonials() {
  return (
    <div className="container-fluid testimonialsdiv">
      <div className="text-center pb-4">
        {" "}
        <h1>What they say!</h1>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-4">
          <ReviewCard
            avatar={require("../assets/suresh.jpeg")}
            name="Suresh Raina"
            company="Gujarat Lions"
            review="Incredible work! Aryan's expertise transformed my online presence."
          ></ReviewCard>
        </div>

        <div className="col-md-4 col-sm-4">
          <ReviewCard
            avatar={require("../assets/Ankur.jpeg")}
            name="Ankur Dhumchutad"
            company="Rajasthan Royals"
            review="Incredible work! Aryan's expertise transformed my online presence."
          ></ReviewCard>
        </div>

        <div className="col-md-4 col-sm-4">
          <ReviewCard
            avatar={require("../assets/arihant.jpeg")}
            name="Arihant Pokharna"
            company="Mumbai Indians"
            review="Incredible work! Aryan's expertise transformed my online presence."
          ></ReviewCard>
        </div>
      </div>
    </div>
  );
}
