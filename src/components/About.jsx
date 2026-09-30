function About() {
  return (
    <div className="section-container about">
      <div className="section-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Data Scientist focused on turning data into insight</h2>
      </div>

      <div className="about-grid">
        <div>
          <p>
            I am an MSc Data Science graduate with practical experience 
            in data analysis, data visualisation, statistical analysis, 
            machine learning and Python-based application development.
          </p>

          <p>
            My projects have involved analysing large transactional datasets, 
            identifying relationships and trends through statistical analysis, 
            creating visualisations to communicate findings, and developing 
            machine learning applications to solve real-world problems.
          </p>

          <p>
            I am particularly interested in the journey from raw data 
            to reliable insight — preparing and transforming data, 
            exploring patterns, applying analytical and machine learning 
            techniques, and communicating results in a way that supports 
            informed decision-making.
          </p>

          <p>
            I also enjoy building practical applications around machine 
            learning models, combining data science with software development 
            to create usable end-to-end solutions.
          </p>
        </div>

        <div className="about-card">
          <div>
            <strong>Core Focus</strong>
            <strong>Data Analytics</strong>
            <span>Data preparation, exploratory analysis, statistical analysis and insight generation.</span>
          </div>

          <div>
            <strong>Data Visualisation</strong>
            <span>Using visual analysis to communicate trends, 
              relationships, comparisons and business insights.</span>
          </div>

          <div>
            <strong>Machine Learning</strong>
            <span>Developing, evaluating and applying machine learning and deep-learning models.</span>
          </div>

          <div>
            <strong>Applied AI</strong>
            <span>Building practical applications that connect machine learning models with usable interfaces.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
