const education = [
  {
    period: "2024 — Present",
    degree: "Your Degree / Research Programme",
    institution: "Your University",
    description:
      "Research focused on artificial intelligence, machine learning and computer vision.",
  },
  {
    period: "2021 — 2024",
    degree: "Previous Degree",
    institution: "Your University",
    description:
      "Relevant coursework and projects in computer science, data science and artificial intelligence.",
  },
];

function Education() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">EDUCATION</p>
        <h2>Academic background</h2>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <div className="timeline-item" key={item.degree}>
            <div className="timeline-date">{item.period}</div>

            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
