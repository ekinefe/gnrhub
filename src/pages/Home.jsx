import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home-container">
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="accent-text">Ekin Efe</span> 👋
        </h1>
        <h2>
          Developer & Researcher <br />
          Building <span className="highlight">Micro-SaaS</span> & AI Solutions.
        </h2>
        <p className="subtext">
          Welcome to <b>GNRHUB</b>. This is my digital garden where I share my
          projects, documentation, and research.
        </p>
        
        <div className="cta-group">
          <Link to="/services" className="btn primary-btn">
            View Projects 🚀
          </Link>
          <Link to="/about" className="btn secondary-btn">
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;