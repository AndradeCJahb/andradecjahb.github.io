import React from 'react';
import '../css/Education.css';

const Education = () => (
  <section className="content-section">
    <div className="education-title">Education</div>
    <div className="education-item">
      <h3>University of Washington</h3>
      <div className="education-header">
        <span className="degree-details">B.S. Electrical and Computer Engineering</span>
        <span className="degree-details">2022 - 2025</span>
      </div>
      <span className="degree-details">Cum Laude in the College of Engineering</span>
      <p><strong>Concentrations:</strong> Embedded Systems, Computing, VLSI, Computer Arch.</p>
    </div>
  </section>
);

export default Education;
