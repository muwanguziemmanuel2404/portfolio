function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p className="eyebrow">RESEARCHER • COMPUTER VISION • AI</p>

        <h1>
          Hi, I'm <span>Your Name</span>
        </h1>

        <h2>
          Researching intelligent systems through
          computer vision and artificial intelligence.
        </h2>

        <p className="home-description">
          I am interested in developing machine learning and
          computer vision methods that can solve real-world
          problems through visual understanding and intelligent
          data analysis.
        </p>

        <div className="home-buttons">
          <a href="#research" className="btn primary">
            Explore My Research
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
