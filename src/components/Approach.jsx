const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Define the problem and identify the questions the data needs to answer.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Clean, transform and structure data for reliable analysis.",
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Explore patterns, relationships and trends using statistical and machine-learning techniques.",
  },
  {
    number: "04",
    title: "Visualise",
    description:
      "Communicate findings through clear and purposeful visualisations.",
  },
  {
    number: "05",
    title: "Build",
    description:
      "Where appropriate, turn analytical or machine-learning solutions into practical applications.",
  },
  {
    number: "06",
    title: "Communicate",
    description:
      "Translate technical findings into clear conclusions and actionable insights.",
  },
];

export default function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="approach-container">

        <div className="approach-header">
          <span className="approach-eyebrow">
            About My Approach
          </span>

          <h2>From data to insight</h2>

          <p>
            I approach data science as an end-to-end process, combining
            structured analysis, visualisation and practical implementation
            to turn complex data into meaningful insights.
          </p>
        </div>

        <div className="approach-grid">
          {approachSteps.map((step) => (
            <article className="approach-card" key={step.number}>
              <span className="approach-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <span className="approach-accent" />
            </article>
          ))}
        </div>

        <div className="approach-statement">
          <p>
            Good data science is not only about building models. It is about
            understanding the problem, working carefully with data, finding
            meaningful patterns and communicating those findings clearly.
          </p>
        </div>

      </div>
    </section>
  );
}
