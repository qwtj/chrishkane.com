import { Routes, Route } from "react-router-dom";
import Layout from 'core/Layout';
import Home from 'features/Home';
import Certifications from "features/Certifications";
import About from 'features/About';
import JobHistory from 'features/JobHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<JobHistory />} />
        <Route path="certifications" element={<Certifications />} />
      </Route>
    </Routes>
  );
}

export default App;
