import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  // 1. State to track if menu is open
  const [isOpen, setIsOpen] = useState(false);

  // 2. Function to toggle state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 3. Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        
        {/* LOGO */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          GNRHUB_
        </NavLink>
        
        {/* HAMBURGER BUTTON (Visible only on Mobile) */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        {/* NAV LINKS (Desktop + Mobile Dropdown) */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu}>/home</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>/services</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMenu}>/BLOG</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>/about_me</NavLink></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;