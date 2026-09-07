const interests = [
  {
    title: "Computer Vision",
    description:
      "Visual perception, image understanding, object detection and semantic segmentation.",
  },
  {
    title: "Deep Learning",
    description:
      "Developing and applying neural network architectures for complex learning problems.",
  },
  {
    title: "Remote Sensing",
    description:
      "Extracting useful information from satellite, aerial and geospatial imagery.",
  },
  {
    title: "Multimodal AI",
    description:
      "Exploring systems that combine visual and language information for intelligent understanding.",
  },
  {
    title: "AI for Agriculture",
    description:
      "Applying machine learning to agricultural monitoring, crop health and plant disease detection.",
  },
  {
    title: "Urban Analytics",
    description:
      "Using computer vision and spatial data to understand and analyse urban environments.",
  },
];

function ResearchInterests() {
  return (
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">RESEARCH INTERESTS</p>
        <h2>Areas I am exploring</h2>
      </div>

      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div className="interest-card" key={interest.title}>
            <span>0{index + 1}</span>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchInterests;
