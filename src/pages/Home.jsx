import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home-page">
      
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">👋 Welcome to my digital garden</span>
          <h1 className="hero-title">
            Hi, I'm <span className="accent-text">Ekin Efe</span>
          </h1>
          <h2 className="hero-subtitle">
            Building <span className="highlight">Micro-SaaS</span> & exploring <br />
            the frontiers of AI & Data Science.
          </h2>
          <p className="hero-desc">
            I am a Computer Science student and researcher. GNRHUB is where I document 
            my journey, host my tools, and share knowledge about Linux, Python, and Web Development.
          </p>
          
          <div className="cta-group">
            <Link to="/services" className="btn primary-btn">
              Explore My SaaS Tools 🚀
            </Link>
            <Link to="/about" className="btn secondary-btn">
              Read My Story
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT IS THIS? (Grid) === */}
      <section className="features-section">
        <h3 className="section-label">WHAT YOU WILL FIND HERE</h3>
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="icon">🛠️</div>
            <h3>Micro-SaaS Tools</h3>
            <p>Free, privacy-focused web utilities like PDF converters and JSON formatters.</p>
            <Link to="/services">Try them out &rarr;</Link>
          </div>

          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Documentation</h3>
            <p>My personal wiki (Py_101, Linux guides) to help others learn from my notes.</p>
            <Link to="/blog">Read Docs &rarr;</Link>
          </div>

          <div className="feature-card">
            <div className="icon">💼</div>
            <h3>Portfolio & CV</h3>
            <p>A showcase of my academic and freelance projects, plus my professional resume.</p>
            <Link to="/about">View Career &rarr;</Link>
          </div>

        </div>
      </section>

      {/* === CURRENT FOCUS === */}
      <section className="focus-section">
        <div className="focus-card">
          <div className="focus-label">CURRENTLY WORKING ON</div>
          <h3>Integrating AI into Automation Workflows</h3>
          <p>
            I am researching how LLMs can be used to automate Linux system administration tasks. 
            Check back soon for a case study on this project.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;