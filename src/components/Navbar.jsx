import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        
        {/* Logo Image (Clickable) */}
        <NavLink to="/" className="logo-link">
          <img 
            src="/svg.svg" 
            alt="GNRHUB Logo" 
            className="nav-logo"
          />
        </NavLink>
        
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