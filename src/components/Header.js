import '../css/Header.css';

function Header({ activeSection, setActiveSection }) {
	const navigationItems = [
		{ id: 'about', label: 'About' },
		{ id: 'education', label: 'Education' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
	];

	return (
		<header className="header">
			<div className="header-content">
				<h1 className="header-title">Christopher Andrade</h1>
				<p className="job-title">Software Developer</p>
				<nav className="nav">
					<ul className="nav-list">
						{navigationItems.map((item) => (
							<li key={item.id} className="nav-item">
								<button
									className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
									onClick={() => setActiveSection(item.id)}
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
