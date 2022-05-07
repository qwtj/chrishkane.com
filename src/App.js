import { Routes, Route, Link } from "react-router-dom";
import resume from './resume.png'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chris H Kane
        </p>
        <a
          className="App-link"
          href="resume"
          rel="noopener noreferrer"
        >
          Peek Resume
        </a>
      </header>
    </div>
  );
}

function Resume() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={resume} className="App-resume" alt="resume" />
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default App;
