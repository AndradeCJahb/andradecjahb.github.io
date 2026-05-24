import '../css/Projects.css';

const Projects = () => (
	<section className="content-section" id="projects">
		<div className="projects-title">Projects</div>
		<div className="project-item">
			<div className="projects-logo-name">
				<a href="https://suduoku.vercel.app/" target="_blank" rel="noopener noreferrer">
					<img src={process.env.PUBLIC_URL + '/suduoku-logo.ico'} alt="Suduoku Logo" className="suduoku-logo" />
				</a>
				<h3>Suduoku</h3>				
			</div>
			
			<p>
				Suduoku is a real-time multiplayer Sudoku platform that enables multiple 
				players to collaboratively solve puzzles with others in real-time.
			</p>
			<ul>
				<li>Full-Stack web app using React, Maven, Docker, Vercel</li>
				<li>UX features include chat, player position tracking, candidates and solution validation</li>
			</ul>

			<a className="project-link" href="https://github.com/AndradeCJahb/suduoku-java" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
	</section>
);

export default Projects;
