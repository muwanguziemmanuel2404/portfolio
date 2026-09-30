const interests = [
  {
    title: "Data Analysis",
    description:
      "Preparing, transforming and exploring datasets to uncover patterns, relationships, trends and anomalies.",
  },
  {
    title: "Data Visualisation",
    description:
      "Turning analytical results into clear visual representations that make complex information easier to understand.",
  },
  {
    title: "Machine Learning",
    description:
      "Developing and evaluating models to identify patterns and make predictions from structured and unstructured data.",
  },
  {
    title: "Applied AI",
    description:
      "Combining machine learning with software development to create practical, usable applications.",
  },
];

function ResearchInterests() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">DATA & ANALYTICS</p>
        <h2>Areas I am exploring</h2>
      </div>

      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div className="interest-card" key={interest.title}>
            <span>0{index + 1}</span>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchInterests;
