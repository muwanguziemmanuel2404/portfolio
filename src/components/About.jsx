function About() {
  return (
    <div className="section-container about">
      <div className="section-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Researcher with a passion for intelligent systems</h2>
      </div>

      <div className="about-grid">
        <div>
          <p>
            I am a researcher interested in artificial intelligence,
            machine learning, and computer vision. My work focuses on
            developing computational methods that allow machines to
            understand and interpret visual information.
          </p>

          <p>
            My research explores applications ranging from plant
            disease detection and image understanding to the
            extraction of urban infrastructure from imagery.
          </p>

          <p>
            I enjoy combining theoretical research with practical
            implementation to develop systems that address
            meaningful real-world challenges.
          </p>
        </div>

        <div className="about-card">
          <div>
            <strong>Research Focus</strong>
            <span>Computer Vision & AI</span>
          </div>

          <div>
            <strong>Approach</strong>
            <span>Machine Learning & Deep Learning</span>
          </div>

          <div>
            <strong>Applications</strong>
            <span>Environment, Agriculture & Urban Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
