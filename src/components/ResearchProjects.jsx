const projects = [
  {
    number: "01",
    title: "Product Sales Performance, Discount Strategy & Customer Profitability",
    category: "Data Visualisation & Commercial Analytics",
    description:
      "The project combined data preparation, exploratory analysis, statistical testing, segmentation and temporal analysis to identify commercially meaningful patterns. Key findings included a strong negative relationship between discount rate and profit margin, significant profitability differences across product categories and regions, and a consistent Q4 seasonal sales peak.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Google Colab",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    number: "02",
    title: "Tomato Disease Detection Using Lightweight CNN",
    category: "Machine Leaning / Computer Vision / Web Application",
    description:
      "An end-to-end machine learning application for detecting and classifying tomato plant diseases from leaf images using a lightweight Convolutional Neural Network. The project involved image data preparation, preprocessing, model development and evaluation, followed by integration of the trained model into a web application. A Flask backend connects the machine learning model to a React frontend, allowing users to submit plant images and receive model predictions.",
    technologies: [
      "Python",
      "Deep Learning",
      "React",
      "Flask",
      "PyTorch",
      "Computer Vision",
      "CNN",
    ],
  },

];

function ResearchProjects() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">RESEARCH</p>
        <h2>Selected Research Projects</h2>
        <p>
          Projects exploring the application of artificial
          intelligence and computer vision to real-world problems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a href="#contact" className="project-link">
              Discuss project →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ResearchProjects;
