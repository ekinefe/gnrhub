import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      
      {/* Hero Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
          &gt; SYSTEM_READY
        </p>
        <h1>
          EKIN_EFE_GUNGOR<br />
          <span style={{ color: 'var(--text-muted)' }}>FULL_STACK_DEV</span>
        </h1>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          Computer Science Student specializing in AI, Data Science, and Micro-SaaS. 
          Building tools for the modern web on Fedora Linux.
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <Link to="/services" className="btn primary-btn">Initialise_SaaS</Link>
          <Link to="/about" className="btn secondary-btn">Read_Bio</Link>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid-layout">
        <div className="tech-card">
          <span className="icon">🛠️</span>
          <h3>Micro-SaaS</h3>
          <p>Deployable web utilities. PDF tools, Formatters, and Generators.</p>
        </div>
        <div className="tech-card">
          <span className="icon">📄</span>
          <h3>Documentation</h3>
          <p>Personal Wiki, Python Guides (Py_101), and Linux workflows.</p>
        </div>
        <div className="tech-card">
          <span className="icon">📡</span>
          <h3>Research</h3>
          <p>Artificial Intelligence integration and System Automation.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;