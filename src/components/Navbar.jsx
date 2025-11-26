import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        
        {/* Boxed Tech Logo */}
        <NavLink to="/" className="nav-logo">
          GNRHUB_
        </NavLink>
        
        <ul className="nav-links">
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>/home</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>/services</NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>/docs</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>/about_me</NavLink></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;