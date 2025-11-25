import React from 'react';

function About() {
  return (
    <div className="container about-container">
      
      {/* === HEADER SECTION === */}
      <section className="about-header">
        <h1>About Me 👨‍💻</h1>
        <p className="about-subtitle">
          CS Student • AI Enthusiast • Fedora Linux User
        </p>
        <p className="about-bio">
          I am Ekin Efe Gungor, a Computer Science student passionate about 
          <b> Artificial Intelligence</b>, <b>Data Science</b>, and building 
          <b> Micro-SaaS</b> solutions. 
          <br /><br />
          My daily driver is a ThinkPad T480s running <b>Fedora Linux</b>. 
          I love optimizing workflows, writing clean code, and exploring the 
          intersection of software and hardware.
        </p>
      </section>

      <hr className="divider" />

      {/* === EDUCATION & EXPERIENCE (Timeline Style) === */}
      <section className="timeline-section">
        <h2>Journey</h2>
        
        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>Computer Science Student</h3>
              <span className="institution">University Name (Placeholder)</span>
              <p>
                Specializing in AI and Data Science. Working on research projects
                involving machine learning and Python automation.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Freelance Developer</h3>
              <span className="institution">Remote</span>
              <p>
                Built custom web solutions and automation scripts for clients.
                Focused on React and Python backends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* === TECH STACK === */}
      <section className="skills-section">
        <h2>Tech Stack</h2>
        <div className="skills-grid">
          <div className="skill-card">🐍 Python</div>
          <div className="skill-card">⚛️ React (Vite)</div>
          <div className="skill-card">🐧 Linux (Fedora)</div>
          <div className="skill-card">🤖 TensorFlow</div>
          <div className="skill-card">📊 Pandas/NumPy</div>
          <div className="skill-card">☁️ Cloudflare</div>
          <div className="skill-card">🐙 Git & GitHub</div>
          <div className="skill-card">🐳 Docker</div>
        </div>
      </section>

      <hr className="divider" />

      {/* === CONNECT / CV === */}
      <section className="connect-section">
        <h2>Let's Connect</h2>
        <p>I am always open to discussing new projects, creative ideas, or opportunities.</p>
        
        <div className="button-row">
          <a href="mailto:your.email@example.com" className="btn primary-btn">
            📧 Email Me
          </a>
          <a href="https://github.com/ekinefe" target="_blank" className="btn secondary-btn">
            🐙 GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="btn secondary-btn">
            💼 LinkedIn
          </a>
          {/* Ensure cv.pdf is in your /public folder */}
          <a href="/cv.pdf" download className="btn cv-btn">
            📄 Download CV
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;