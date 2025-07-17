import '../css/Education.css';

const Education = () => (
	<section className="content-section">
		<div className="education-title">Education</div>
		
		<div className="education-item">
			<a href="https://www.ece.uw.edu/" target="_blank" rel="noopener noreferrer">
				<img src={process.env.PUBLIC_URL + '/uw-ece-logo.png'} alt="UW ECE Logo" className="uw-ece-logo" />
			</a>
			<h3>University of Washington</h3>
			<div className="education-header">
				<span className="degree-details">B.S. Electrical and Computer Engineering</span>
				<span className="degree-details">2022 - 2025</span>
			</div>
			<span className="degree-details">GPA: 3.9, Cum Laude (Top 10%)</span>

			<p>Concentrations:</p> 
			<ul>
				<li>Embedded Systems</li>
				<li>Computing</li>
				<li>Computer Architecture</li>
				<li>VLSI</li>
			</ul>

			<p>Relevant Coursework:</p>
			<ul>
				<li>Data Structures & Algorithms</li>
				<li>Computer Architecture</li>
				<li>Digital Design</li>
				<li>Embedded Systems Capstone</li>
				<li>Database Design</li>
				<li>VLSI Layout Design</li>
			</ul>
		</div>
	</section>
);

export default Education;
