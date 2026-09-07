const skills = {
  "Programming": [
    "Python",
    "JavaScript",
    "SQL",
  ],
  "Machine Learning": [
    "Scikit-learn",
    "PyTorch",
    "TensorFlow",
    "Deep Learning",
  ],
  "Computer Vision": [
    "OpenCV",
    "Image Classification",
    "Object Detection",
    "Semantic Segmentation",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Jupyter",
    "VS Code",
  ],
};

function TechnicalSkills() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">TECHNICAL SKILLS</p>
        <h2>Tools & technologies</h2>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-group" key={category}>
            <h3>{category}</h3>

            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSkills;
