const skills = {
  "Programming & Data": [
    "Python",
    "JavaScript",
    "SQL",
    "Pandas",
    "NumPy",
    "Scikit-learn",
  ],
  "Machine Learning": [
    "CNNs",
    "Machine Learning",
    "Image Classification",
    "Model Training",
    "Deep Learning",
    "Model Evaluation",
  ],
  "Computer Vision": [
    "OpenCV",
    "Image Classification",
    "Object Detection",
    "Feature Extraction",
  ],
  "Development Tools": [
    "Git",
    "GitHub",
    "Jupyter Notebook",
    "Google Colab",
    "VS Code",
  ],
  "Application Development": [
    "Flask",
    "React",
    "REST APIs",
    "FrontEnd / BackEnd Integration",
    "Machine Learning Model Deployment",
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
