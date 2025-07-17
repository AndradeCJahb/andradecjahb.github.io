import { useState } from 'react';

import Header from './Header';
import '../css/App.css';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

function App() {
	const [activeSection, setActiveSection] = useState('about');

	const renderContent = () => {
		switch (activeSection) {
			case 'about':
				return <About />;
			case 'education':
				return <Education />;
			case 'experience':
				return <Experience />;
			case 'projects':
				return <Projects />;
			default:
				return null;
		}
	};

  return (
	<div className="App">
	  <Header activeSection={activeSection} setActiveSection={setActiveSection} />
	  <main className="main-content">
		<div className="content-container">
			{renderContent()}
		</div>
	  </main>
	</div>
  );
}

export default App;
