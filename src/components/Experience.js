import '../css/Experience.css';

const Experience = () => (
	<section className="content-section">
		<div className="experience-title">Experience</div>
		<div className="experience-item">
			<div className="experience-logo-name">
				<img src={process.env.PUBLIC_URL + '/amazon-music-logo.png'} alt="Amazon Music Logo" className="amazon-music-logo" />
				<h3>Amazon Music</h3>
			</div>
			<div className="experience-header">
				<span className="location">Seattle, WA</span>
				<span className="date">2025 - Present</span>
			</div>
			<p>Software Development Engineer I</p>
		</div>
		<div className="experience-item">
			<div className="experience-logo-name">
				<a href="https://www.ece.uw.edu/" target="_blank" rel="noopener noreferrer">
					<img src={process.env.PUBLIC_URL + '/uw-ece-logo-mini.png'} alt="UW Mini ECE Logo" className="uw-ece-logo-mini" />
				</a>
				<h3>UW Electrical & Computer Engineering</h3>
			</div>

			<div className="experience-header">
				<span className="location">Seattle, WA</span>
				<span className="date">2024 - 2025</span>
			</div>
			<p>Teaching Assistant: Embedded Systems & Computer Architecture</p>
			<ul>
				<li>Hosted 20+ office hours a week to help 80+ students with assignments on RTL design, CPU architecture, and memory systems</li>
				<li>Evaluated student understanding through verbal reviews of CPU component implementations</li>
				<li>Evaluated C/C++ programming assignments for 70+ students on the ESP32 microcontroller</li>
				<li>Assessed student implementations of embedded systems concepts, including interrupt handling, GPIO register manipulation,
						timer/alarm configuration, and FreeRTOS scheduling</li>
			</ul>
		</div>
	</section>
);

export default Experience;
