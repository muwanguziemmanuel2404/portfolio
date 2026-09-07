function CV() {
  return (
    <div className="cv-section">
      <div className="section-container cv-content">
        <div>
          <p className="eyebrow">CURRICULUM VITAE</p>

          <h2>
            Interested in my academic and research background?
          </h2>

          <p>
            Download my CV for a detailed overview of my education,
            research experience, projects, publications and
            technical skills.
          </p>
        </div>

        <a
          href="/cv.pdf"
          className="btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV ↓
        </a>
      </div>
    </div>
  );
}

export default CV;
