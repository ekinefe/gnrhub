import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; // Import the new page
import './App.css';

// Placeholder for Blog
const Blog = () => (
  <div className="sidebar-layout">
    <aside className="context-sidebar">
      <h3>Categories</h3>
      <a href="#">Tech</a>
      <a href="#">Linux</a>
      <a href="#">Life</a>
    </aside>
    <div className="layout-content"><h1>Blog Posts</h1></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-main">
        <Navbar /> {/* Top Bar is OUTSIDE the Routes */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;