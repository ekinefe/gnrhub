import React from 'react';

function About() {
  return (
    <div className="container">
      <section style={{ marginBottom: '3rem' }}>
        <h1>/about_me</h1>
        <p>
          Target: Ekin Efe Gungor<br/>
          Status: Computer Science Student<br/>
          OS: Fedora Linux (ThinkPad T480s)
        </p>
      </section>

      <div className="grid-layout">
        
        {/* Skills Card */}
        <div className="tech-card" style={{ gridColumn: 'span 2' }}>
          <h2>Tech_Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Python', 'React', 'Linux', 'TensorFlow', 'Git', 'Docker'].map(skill => (
              <span key={skill} style={{ 
                border: '1px solid var(--border)', 
                padding: '5px 10px', 
                fontSize: '0.85rem' 
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="tech-card">
          <h2>Timeline</h2>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent)' }}>2023-NOW</span><br/>
              <b>CS Student</b><br/>
              <span style={{ fontSize: '0.85rem', color: '#666' }}>AI & Data Science</span>
            </li>
            <li>
              <span style={{ color: 'var(--accent)' }}>2020-2023</span><br/>
              <b>Freelance</b><br/>
              <span style={{ fontSize: '0.85rem', color: '#666' }}>Web & Automation</span>
            </li>
          </ul>
        </div>

        {/* CV Download */}
        <div className="tech-card">
          <h2>Data_File</h2>
          <p>Access full work history and academic records.</p>
          <a href="/cv.pdf" className="btn primary-btn" style={{ width: '100%', justifyContent: 'center' }}>
            Download_CV
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;