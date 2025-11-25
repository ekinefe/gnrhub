import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // We'll use the main CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">GNRHUB 🚀</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Services</Link></li>
        <li><Link to="/docs/py101">Blog</Link></li>
        {/* Future Login Button */}
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;