import React from 'react';
import '../css/Experience.css';

const Experience = () => (
  <section className="content-section">
    <div className="experience-title">Experience</div>
    <div className="experience-item">
      <h3>Amazon Music</h3>
      <div className="experience-header">
        <span className="location">Seattle, WA</span>
        <span className="date">2025 - Present</span>
      </div>
      <p>Software Development Engineer I</p>
    </div>
    <div className="experience-item">
      <h3>UW Dept. of Electrical & Computer Engineering</h3>
      <div className="experience-header">
        <span className="location">Seattle, WA</span>
        <span className="date">2024 - 2025</span>
      </div>
      <p>Teaching Assistant: Embedded Systems & Computer Architecture</p>
    </div>
  </section>
);

export default Experience;
