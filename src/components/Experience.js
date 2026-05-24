import "../css/Experience.css";

const Experience = () => (
  <section className="content-section" id="experience">
    <div className="experience-title">Experience</div>
    <div className="experience-item">
      <div className="experience-logo-name">
        <a
          href="https://www.aboutamazon.com/news/entertainment/what-is-amazon-music"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/amazon-music-logo.png"}
            alt="Amazon Music Logo"
            className="amazon-music-logo"
          />
        </a>
        <h3>Amazon Music</h3>
      </div>
      <div className="experience-header">
        <span className="location">Seattle, WA</span>
        <span className="date">2025 - Present</span>
      </div>
      <p>Software Development Engineer I</p>
      <ul>
        <li>
          Maintain Voice orchestration services handling 100K+ TPS across major
          voice assistant integrations
        </li>
        <li>
          Aided in region migration using CDK/CloudFormation with VPC updates
          and cross-region data validation
        </li>
        <li>
          Delivered voice UX backend features in Java Spring; built on AWS ECS,
          Fargate, Lambda, DDB, SQS, SNS, and S3
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <div className="experience-logo-name">
        <a
          href="https://www.cs.washington.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/paul-allen-logo.png"}
            alt="UW Mini ECE Logo"
            className="uw-ece-logo-mini"
          />
        </a>
        <h3>Paul G. Allen School of CSE</h3>
      </div>

      <div className="experience-header">
        <span className="location">Seattle, WA</span>
        <span className="date">2024 - 2025</span>
      </div>
      <p>Computer Architecture TA</p>
      <ul>
        <li>
          Held 20+ weekly office hours supporting 80+ students in RTL, CPU, and
          memory fundamentals
        </li>
        <li>Reviewed student component implementations via oral exams</li>
      </ul>
      <p>Embedded Systems TA</p>
      <ul>
        <li>
          Graded C/C++ assignments for 70+ students on the ESP32 microcontroller
        </li>
        <li>
          Assessed core embedded concepts: interrupts, GPIO, timers, and RTOS
          scheduling
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
