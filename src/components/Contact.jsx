function Contact() {
  return (
    <div className="section-container contact">
      <div className="section-heading">
        <p className="eyebrow">CONTACT</p>

        <h2>Let's connect</h2>

        <p>
          I'm interested in opportunities involving <strong>data analytics, 
          data visualisation, data engineering, machine learning and applied AI.</strong>
        </p>
      </div>

      <div className="contact-grid">
        <a href="mailto:your.email@example.com" className="contact-card">
          <span>Email</span>
          <strong>muwanguziemmah64@gmail.com</strong>
        </a>

        <a
          href="https://github.com/muwanguziemmanuel2404"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
          <strong>View my projects →</strong>
        </a>

        <a
          href="https://www.linkedin.com/in/emmanuel-muwanguzi-511821216"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
          <strong>Connect with me →</strong>
        </a>
      </div>
    </div>
  );
}

export default Contact;
