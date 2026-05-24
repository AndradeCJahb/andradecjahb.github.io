import Header from "./Header";
import "../css/App.css";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="content-container">
          <About />
          <Education />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App;
