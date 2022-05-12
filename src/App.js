import { Routes, Route, Link } from "react-router-dom";
import resume from './resume.png'
import associateArchitect from './aws-certified-solutions-architect-associate.png'
import cloudPractitioner from './aws-certified-cloud-practitioner.png'
import './App.css';
import { Component } from 'react';

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

class Home extends Component {
  render() {
  return (
    <div className="App">
      <link rel="preload" as="image" href={associateArchitect} />
      <link rel="preload" as="image" href={cloudPractitioner} />
      <link rel="preload" as="image" href={resume} />
      <header className="App-header">
        <div className="certifications">
          <a
            href="https://www.credly.com/badges/3821b7d4-8993-4e28-9569-2a8dedb83b8a/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cloudPractitioner}
              className="App-logo"
              loading="lazy"
              alt="cloud practitioner"
            />
          </a>
          <a
            href="https://www.credly.com/badges/3821b7d4-8993-4e28-9569-2a8dedb83b8a/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={associateArchitect}
              className="App-logo"
              loading="lazy"
              alt="associate architect"
            />
          </a>
        </div>
        <p className="name">
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
}}

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
