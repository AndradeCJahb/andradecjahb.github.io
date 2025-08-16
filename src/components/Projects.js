import '../css/Projects.css';

const Projects = () => (
	<section className="content-section">
		<div className="projects-title">Projects</div>
		<div className="project-item">
			<div className="projects-logo-name">
				<a href="https://suduoku.vercel.app/" target="_blank" rel="noopener noreferrer">
					<img src={process.env.PUBLIC_URL + '/suduoku-logo.ico'} alt="Suduoku Logo" className="suduoku-logo" 
					/>
				</a>
				<h3>Suduoku</h3>				
			</div>
			
			<p>
				Suduoku is a real-time multiplayer Sudoku platform that enables multiple 
				players to collaboratively solve puzzles with others in real-time.
			</p>
			<ul>
				<li>Architected a full-stack web application using React, Java, Jakarta WebSockets, Docker, and cloud deployment</li>
				<li>Developed extensive UX features including generated player names/colors, real-time player position tracking, and solution validation</li>
			</ul>

			<a className="project-link" href="https://github.com/AndradeCJahb/suduoku-java" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
		<div className="project-item">
			<div className="projects-logo-name">
				<h3>Smart WildFire Defense System</h3>
			</div>

			<p>
				This comprehensive wildfire detection system combines computer vision, 
				sensor data, and weather information to provide real-time fire monitoring 
				and automated response capabilities. 
			</p>

			<ul>
				<li>Led a team of five ECE/CS students in developing a fire risk and detection system using a Pi4, STM32, sensor suite, and computer vision</li>
				<li>Wrote Python firmware for Bluetooth communication, TensorFlow computer vision, UI rendering, and API weather data integration</li>
			</ul>

			<a className="project-link" href="https://github.com/AndradeCJahb/ECE_475" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
	</section>
);

export default Projects;
