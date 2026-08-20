import React from "react";
import ReviewCard from "./ReviewCard";
import data from "../data/content.json";

export default function Testimonials() {
  return (
    <div className="container-fluid testimonialsdiv">
      <div className="section-heading testimonials-heading">
        <div>
          <span className="section-kicker">Client notes</span>
          <h1>Good work travels.</h1>
        </div>
        <span className="testimonial-count">
          0{data.testimonials.length} voices
        </span>
      </div>

      <div className="row testimonial-grid">
        {data.testimonials.map((testimonial, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <ReviewCard
              avatar={require(`../assets/${testimonial.avatar}`)}
              name={testimonial.name}
              company={testimonial.company}
              review={testimonial.review}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
