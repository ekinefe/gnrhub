import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Py101 from './docs/Py101';
import './App.css';

// Placeholder for About and Projects (Create these files later!)
const About = () => <div className="page-content"><h1>About Me & CV</h1></div>;
const Projects = () => <div className="page-content"><h1>Micro-SaaS Projects</h1></div>;
const Login = () => <div className="page-content"><h1>Login Area (Coming Soon)</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/docs/py101" element={<Py101 />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;