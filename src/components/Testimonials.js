import React from "react";
import ReviewCard from "./ReviewCard";
import data from "../data/content.json";

export default function Testimonials() {
  return (
    <div className="container-fluid testimonialsdiv">
      <div className="text-center pb-4">
        <h1>What they say!</h1>
      </div>

      <div className="row">
        {data.testimonials.map((testimonial, index) => (
          <div className="col-md-4 col-sm-4" key={index}>
            <ReviewCard
              avatar={require(`../assets/${testimonial.avatar}`)}
              name={testimonial.name}
              company={testimonial.company}
              review={testimonial.review}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
