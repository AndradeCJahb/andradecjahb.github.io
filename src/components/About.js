import React from 'react';
import '../css/About.css';

const About = () => (
  <section className="content-section">
    <div className="about-title">About</div>
    <div className="about-content">
      <div className="about-image-container">
        <img 
          src={require('../graduation-photo.jpg')} 
          alt="Chris" 
          className="graduation-image"
        />
      </div>
      <div className="about-text">
        <h3>Hey, I'm Chris.</h3>
        <p>
          I'm a recent graduate from the University of Washington with a B.S. in Electrical and Computer Engineering,
          and I'll be starting as a Software Development Engineer I at Amazon in August 2025.
        </p>
        <p>
          Outside of coding, you'll often find me practicing Brazilian Ju Jitsu, 
          weightlifting or bouldering.
        </p>
        <div className="social-buttons">
          <a 
            href="https://github.com/AndradeCJahb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/andrade-christopher/" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            LinkedIn
          </a>
          <a 
            href="/Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
