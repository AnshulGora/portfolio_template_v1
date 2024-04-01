import React from "react";

export default function ReviewCard(props) {
  return (
    <div className="card testimonial-card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <img
              src={props.avatar}
              className="avatar-img img-fluid rounded-circle"
              alt="avatar-pic"
            />
          </div>
          <div className="col">
            <div className="testimonial-info">
              <h5 className="card-title mb-0 fw-bold">{props.name}</h5>{" "}
              {/* Remove bottom margin */}
              <p className="card-subtitle mb-2">{props.company}</p>
            </div>
          </div>
        </div>
        <p className="card-text py-3">&ldquo;{props.review}&ldquo;</p>
      </div>
    </div>
  );
}
