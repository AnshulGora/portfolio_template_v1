import data from "../data/content.json";

export default function Experience() {
  return (
    <section className="container-fluid experiencediv">
      <div className="experience-heading">
        <span className="section-kicker">Selected timeline</span>
        <h1>Experience</h1>
      </div>
      <div className="experience-list">
        {data.experience.map((exp, index) => (
          <article key={index} className="experience-item">
            <div className="experience-main">
              <div className="experience-company-row">
                <h2 className="experience-company-name">{exp.company}</h2>
                {exp.status && (
                  <span className="experience-status">
                    <span></span>
                    {exp.status}
                  </span>
                )}
              </div>
              <p className="experience-title">{exp.title}</p>
            </div>
            <div className="experience-details">
              <p>{exp.duration}</p>
              <p>{exp.location}</p>
            </div>
          </article>
        ))}
      </div>
      <button type="button" className="experience-more">
        Show all work experiences <i className="fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
}
