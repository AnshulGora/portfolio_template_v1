import React from "react";

export default function ReviewCard(props) {
  return (
    <article className="card testimonial-card">
      <div className="card-body">
        <div className="testimonial-topline">
          <span className="testimonial-index">0{props.index + 1}</span>
          <span className="testimonial-mark">&ldquo;</span>
        </div>
        <p className="card-text testimonial-quote">{props.review}</p>
        <div className="testimonial-person">
          <img
            src={props.avatar}
            className="avatar-img img-fluid rounded-circle"
            alt={`${props.name} avatar`}
          />
          <div className="testimonial-info">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-subtitle">{props.company}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
