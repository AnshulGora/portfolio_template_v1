import React from "react";
import data from "../data/content.json";

export default function Skills() {
  return (
    <div className="container-fluid skillsdiv">
      <div className="text-center py-4">
        <h1>Services, I offer</h1>
      </div>
      <div className="row">
        {data.services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card servicecard">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
