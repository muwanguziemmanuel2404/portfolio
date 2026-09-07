const projects = [
  {
    number: "01",
    title: "Plant Disease Detection",
    category: "Computer Vision / Agriculture",
    description:
      "A computer vision system designed to identify and classify plant diseases from leaf imagery using machine learning and deep learning techniques.",
    technologies: [
      "Python",
      "Deep Learning",
      "CNNs",
      "Image Classification",
    ],
    link: "https://drive.google.com/file/d/1YAoaMs72cZWAMANAjcbzXlH6N9UWe_y6/view?usp=drive_link", 
  },
  {
    number: "02",
    title: "Image Captioning",
    category: "Computer Vision / Natural Language",
    description:
      "An image understanding project that combines visual feature extraction with natural language generation to automatically produce meaningful descriptions of images.",
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "NLP",
    ],
    link: "https://drive.google.com/file/d/1ALvH4_o1esUqe0uhpUZ8HDSKuRVmsK3c/view?usp=drive_link", 
  },
  {
    number: "03",
    title: "Urban Infrastructure Extraction",
    category: "Remote Sensing / Computer Vision",
    description:
      "A vision-based approach for extracting and identifying urban infrastructure from imagery to support spatial analysis and intelligent urban planning.",
    technologies: [
      "Computer Vision",
      "Remote Sensing",
      "Segmentation",
      "GIS",
    ],
    link: "https://drive.google.com/file/d/1jIv4Mv5xxNGATOzATOEjFKmiNHE7j8lF/view?usp=drive_link", 
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
