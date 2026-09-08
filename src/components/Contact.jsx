function Contact() {
  return (
    <div className="section-container contact">
      <div className="section-heading">
        <p className="eyebrow">CONTACT</p>

        <h2>Let's connect</h2>

        <p>
          I am always interested in discussing research,
          collaboration, computer vision and artificial
          intelligence.
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
