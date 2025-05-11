import { Routes, Route } from "react-router-dom";
import Layout from 'core/Layout';
import Home from 'features/Home';
import Certifications from "features/Certifications";
import About from 'features/About';
import Roles from 'features/Roles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Roles" element={<Roles />} />
        <Route path="certifications" element={<Certifications />} />
      </Route>
    </Routes>
  );
}

export default App;
