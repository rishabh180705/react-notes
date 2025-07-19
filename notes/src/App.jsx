import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './lectures/intro.jsx';
import Project from './projects/project.jsx';
import Notes from './lectures/notes.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;

