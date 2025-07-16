import React from 'react';
import '../css/Projects.css';

const Projects = () => (
  <section className="content-section">
    <div className="projects-title">Projects</div>
    <div className="project-item">
      <h3>
        <a className="project-title" href="https://suduoku.vercel.app/" target="_blank" rel="noopener noreferrer">
          Suduoku
        </a>
      </h3>
      <p>
        Suduoku is a real-time multiplayer Sudoku platform that enables multiple 
        players to collaboratively solve puzzles with others in real-time.
      </p>
      <a className="project-link" href="https://github.com/AndradeCJahb/suduoku-java" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <div className="project-item">
      <h3>Smart WildFire Defense System</h3>
        <p>
          This comprehensive wildfire detection system combines computer vision, 
          sensor data, and weather information to provide real-time fire monitoring 
          and automated response capabilities. 
        </p>
        <a className="project-link" href="https://github.com/AndradeCJahb/ECE_475" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </section>
);

export default Projects;
