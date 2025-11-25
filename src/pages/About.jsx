import React from 'react';

function About() {
  return (
    <div className="container about-container">
      
      {/* === HERO SECTION === */}
      <section className="about-hero">
        <div className="profile">
          <img 
            className="avatar" 
            src="/IMG_9050E.jpg" /* Make sure this matches your file in /public */
            alt="Portrait of Ekin Efe Gungor" 
          />
          <div className="profile-info">
            <h1 className="headline">Ekin Efe Gungor</h1>
            <p className="lede">
              CS student (AI & Data Science). I build practical tools across web, data, 
              and embedded systems—everything from Morse projects to automation scripts.
            </p>
            
            <div className="chips-row">
              <span className="chip">📍 Warsaw, Poland</span>
              <span className="chip">🇬🇧 English (Proficient)</span>
              <span className="chip">🇹🇷 Turkish (Native)</span>
              <span className="chip">🇵🇱 Polish (Beginner)</span>
            </div>

            <div className="links-row">
              <a className="btn primary-btn" href="mailto:ekinefegnr@gmail.com">Email Me</a>
              <a className="btn secondary-btn" href="https://linkedin.com/in/ekin-efe-gungor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn secondary-btn" href="https://github.com/ekinefe" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn ghost-btn" href="/Ekin_Efe_GUNGOR-CV-ATS.pdf" target="_blank" rel="noopener noreferrer">📄 Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* === GRID LAYOUT FOR CARDS === */}
      <section className="about-grid">
        {/* 1. Professional Summary */}
        {/*<article className="card summary-card">*/}
        <article className="card">
          <h2>Professional Summary</h2>
          <p>
            Computer Science student specializing in Artificial Intelligence and Data Science, with over 3 years of experience in programming,
            embedded systems, automation, and team leadership. Skilled in Bash scripting, Linux system administration, embedded systems development,
            and Python, with a proven track record in delivering automation tools and real-time applications. Experienced in project management
            and cross-functional collaboration. Seeking to leverage expertise in machine learning and data analysis to contribute to innovative,
            technology-driven projects
          </p>
        </article>

        {/* 2. Skills */}
        <article className="card">
          <h2>Skills at a Glance</h2>
          <ul className="list-styled">
            <li><b>Languages:</b> Python, Bash, Java, C/C++, SQL</li>
            <li><b>AI & Data:</b> Machine Learning, Data Analysis, Visualization</li>
            <li><b>System:</b> Linux Administration, Scripting, Embedded Systems</li>
            <li><b>Tools:</b> Git, IntelliJ, Docker, Figma, KiCAD</li>
          </ul>
          <div className="tags-cloud">
            <span>Arduino</span>
            <span>Automation</span>
            <span>Machine Learning</span>
            <span>Linux</span>
            <span>React</span>
          </div>
        </article>

        {/* 3. Experience Timeline */}
        <article className="card">
          <h2>Experience</h2>
          <div className="timeline">
            
            <div className="timeline-item">
              <div className="timeline-header">
                <h3>Nobel Learning PBC — Intern</h3>
                <span className="date">2024–2025</span>
              </div>
              <p className="muted">Built instructional content; collaborated with teachers & leads; integrated interactive tools.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>Freelance Photographer</h3>
                <span className="date">2019–Present</span>
              </div>
              <p className="muted">Managed event/portrait work, color workflows, and social media growth.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <h3>Turkish Aeronautical Association</h3>
                <span className="date">2016–2020</span>
              </div>
              <p className="muted">PR/Community Lead. Managed team of 5, ran social campaigns & events.</p>
            </div>

          </div>
        </article>

        {/* 4. Education Timeline */}
        <article className="card">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-header">
                <h3>UEHS (Warsaw)</h3>
                <span className="date">2023–Present</span>
              </div>
              <p className="muted">BSc Computer Science — AI & Data Science</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h3>PJAIT</h3>
                <span className="date">2021–2023</span>
              </div>
              <p className="muted">BSc Computer Science</p>
            </div>
          </div>
        </article>

        {/* 5. Projects Highlight */}
        <article className="card">
          <div className="card-header-row">
            <h2>Featured Projects</h2>
          </div>
          <ul className="list-styled">
            <li>
              <b>CW Keyer</b> — Real-time Morse keyer (Arduino, LCD). 
              <a href="https://github.com/ekinefe/CW_keyer" className="link-accent"> GitHub →</a>
            </li>
            <li>
              <b>CW Trainer</b> — Python terminal trainer with adaptive difficulty. 
              <a href="https://github.com/ekinefe/CW_Trainer" className="link-accent"> GitHub →</a>
            </li>
            <li>
              <b>EasyAdmin</b> — Multilingual Bash framework for Linux admin tasks.
            </li>
          </ul>
        </article>

      </section>
    </div>
  );
}

export default About;