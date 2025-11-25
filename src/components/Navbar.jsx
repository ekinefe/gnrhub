import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* The centered container */}
      <div className="nav-inner">
        
        <div className="logo">GNRHUB</div>
        
        <ul className="nav-links">
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Me</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;