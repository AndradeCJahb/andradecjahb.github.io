import React, { useState } from 'react';
import NavigationHeader from './Header';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <section className="content-section">
            <h2>About</h2>
            <div className="about-content">
              <div className="about-image-container">
                <img 
                  src={require('./graduation-photo.jpg')} 
                  alt="Chris at graduation ceremony" 
                  className="graduation-image"
                />
              </div>
              <div className="about-text">
                <h3>Hey, I'm Chris,</h3>
                <p>
                  I'm a recent graduate from the University of Washington with a B.S. in Electrical and Computer Engineering,
                  and I'll be starting as a Software Development Engineer I at Amazon in August 2025.
                </p>
                <p>
                  Outside of tech, you'll often find me practicing Brazilian Ju Jitsu, 
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
      case 'education':
        return (
          <section className="content-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>University of Washington</h3>
              <p>B.S. Electrical and Computer Engineering 2022-2025</p>
              <p>Cum Laude - College of Engineering</p>
              <p><strong>Concentrations:</strong> Embedded Systems, Computing, VLSI, Computer Architecture</p>
            </div>
          </section>
        );
      case 'experience':
        return (
          <section className="content-section">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Amazon Web Services</h3>
              <p>Seattle, WA Aug 2025 - Present</p>
              <p>Software Development Engineer I</p>
            </div>
            <div className="experience-item">
              <h3>UW Department of Electrical & Computer Engineering</h3>
              <p>Seattle, WA Sep 2024 - Mar 2025</p>
              <p>Undergraduate Teaching Assistant: Embedded Sys. & Computer Arch.</p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <NavigationHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
