import { useState } from 'react';
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
      case 'education':
        return (
          <section className="content-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>University of Washington</h3>
              <div className="education-header">
                <span className="degree-details">B.S. Electrical and Computer Engineering</span>
                <span className="degree-details">2022 - 2025</span>
              </div>
              <span className="degree-details">Cum Laude in the College of Engineering</span>
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
              <div className="experience-header">
                <span className="location">Seattle, WA</span>
                <span className="date">2025 - Present</span>
              </div>
              <p>Software Development Engineer I</p>
            </div>
            <div className="experience-item">
              <h3>UW Department of Electrical & Computer Engineering</h3>
              <div className="experience-header">
                <span className="location">Seattle, WA</span>
                <span className="date">2024 - 2025</span>
              </div>
              <p>Teaching Assistant: Embedded Systems & Computer Architecture</p>
            </div>
          </section>
        );

        case 'projects':
        return (
          <section className="content-section">
            <h2>Projects</h2>
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

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <NavigationHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <div className="content-container">
          <div className="desktop-view">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
