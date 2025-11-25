import React from 'react';

function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <p>
          Hello! I am a Computer Science student specializing in 
          <b> Artificial Intelligence</b> and <b>Data Science</b>.
        </p>
        <p>
          I primarily work on <b>Fedora Linux</b> and enjoy building scalable web applications.
        </p>
      </section>

      <section style={{ marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '2rem' }}>
        <h2>Curriculum Vitae</h2>
        <p>
          You can download my full resume below.
        </p>
        {/* Make sure cv.pdf is in your 'public' folder */}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{
          background: 'var(--accent)',
          color: '#0f172a',
          padding: '10px 20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '5px',
          display: 'inline-block',
          marginTop: '10px'
        }}>
          📄 Download My CV
        </a>
      </section>
    </div>
  );
}

export default About;