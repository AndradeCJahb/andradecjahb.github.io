import '../css/About.css';

const About = () => (
	<section className="content-section" id="about">
		<div className="about-title">About</div>
		<div className="about-content">
			<div className="about-image-container">
				<img 
					src={process.env.PUBLIC_URL + '/graduation-photo.jpg'} 
					alt="Chris" 
					className="graduation-image"
				/>
			</div>

			<div className="about-text">
				<h3>Hey, I'm Chris!</h3>
				<p>
					I currently work as a Software Development Engineer at Amazon Music in Seattle, WA. I graduated from 
					the University of Washington with a B.S. in Electrical and Computer Engineering.
				</p> 
				<p style={{ color: '#969696' }}>
					When I'm not coding, you'll often find me practicing Brazilian Jiu Jitsu, playing the trumpet,
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
