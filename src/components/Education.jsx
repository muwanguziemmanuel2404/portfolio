const education = [
  {
    period: "2025 — 2026",
    degree: "Msc Data Science",
    institution: "Roehampton University, London",
    description:
      "Research focused on artificial intelligence, machine learning and computer vision.",
  },
  {
    period: "2019 — 2023",
    degree: "Computer Science",
    institution: "Makerere University",
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
