import React, { useState } from "react";
import data from "../data/content.json";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container-fluid experiencediv">
      <div className="text-center py-4">
        <h1>Career Highlights</h1>
      </div>
      <div className="experience-list">
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div
              className="experience-header"
              onClick={() => toggleExpand(index)}
            >
              <div className="experience-main">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-duration">{exp.duration}</p>
                </div>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="expand-icon">
                <i
                  className={`fas fa-chevron-down ${
                    expandedIndex === index ? "rotated" : ""
                  }`}
                ></i>
              </div>
            </div>
            {expandedIndex === index && (
              <div className="experience-content">
                <p className="experience-description">{exp.description}</p>
                {exp.tags && (
                  <div className="experience-tags">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="experience-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
