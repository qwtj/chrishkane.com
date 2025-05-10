import { Routes, Route } from "react-router-dom";
import Layout from 'core/Layout';
import Home from 'features/Home';
import Resume from 'features/Resume';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
