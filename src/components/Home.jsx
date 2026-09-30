function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p className="eyebrow">DATA ANALYTICS • DATA VISUALIZATION • MACHINE LEARNING</p>

        <h1>
          Hi, I'm <span>Emmanuel Muwanguzi</span>
        </h1>

        <h2>
          I use data, statistical analysis and machine learning 
          to uncover meaningful patterns, communicate insights clearly 
          and build practical data-driven solutions.
        </h2>

        <p className="home-description">
          My work spans commercial data analysis and visualisation, 
          machine learning, computer vision and application development, 
          with a focus on turning complex datasets and problems into structured, 
          actionable results.
        </p>

        <div className="home-buttons">
          <a href="#research" className="btn primary">
            Explore My Projects
          </a>

          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="home-visual">
        <div className="visual-circle">
          <span>AI</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
