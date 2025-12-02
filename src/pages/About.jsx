import React from 'react';

function About() {
  return (
    <div className="container">
      
      {/* === PAGE TITLE === */}
      <section style={{ marginBottom: '3rem' }}>
        <h1>/about_me</h1>
      </section>

      {/* === HERO PROFILE SECTION === */}
      <section style={{ 
        borderBottom: '1px solid var(--border)', 
        paddingBottom: '3rem', 
        marginBottom: '3rem', 
        display: 'flex', 
        gap: '2rem', 
        alignItems: 'start', 
        flexWrap: 'wrap' 
      }}>
        {/* Profile Image */}
        <img 
          src="/IMG_9050E.jpg" 
          alt="Ekin Efe Gungor" 
          style={{ 
            width: '140px', 
            height: '140px', 
            border: '2px solid var(--accent)', 
            padding: '5px',
            objectFit: 'cover'
          }} 
        />
        
        <div style={{ flex: 1 }}>
          <h1 style={{ marginBottom: '0.5rem' }}>EKIN_EFE_GUNGOR</h1>
          <p style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '1rem' }}>
            &gt; CS_STUDENT | AI_&_Data_Science
          </p>
          <p style={{ maxWidth: '700px', marginBottom: '1.5rem' }}>
            I build practical tools across web, data, and embedded systems—everything from 
            Morse code hardware to Linux automation scripts. Currently studying AI & Data Science 
            in Warsaw, Poland.
          </p>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['Warsaw-PL', '|', 'English (C1)', '|', 'Turkish (Native)', '|', 'Polish (A1)'].map((tag, index) => (
              <span key={index} className="badge" style={{ marginBottom: 0, border: tag === '|' ? 'none' : '' }}>{tag}</span>
            ))}
          </div>

          <div className="btn-group">
            <a href="mailto:ekinefegnr@gmail.com" className="btn primary-btn">Email_Me</a>
            <a href="https://linkedin.com/in/ekin-efe-gungor" target="_blank" rel="noreferrer" className="btn secondary-btn">LinkedIn</a>
            <a href="https://github.com/ekinefe" target="_blank" rel="noreferrer" className="btn secondary-btn">GitHub</a>
            <a href="/Ekin_Efe_GUNGOR-CV-ATS.pdf" target="_blank" className="btn secondary-btn">Download_CV</a>
          </div>
        </div>
      </section>

      {/* === MAIN GRID CONTENT === */}
      <div className="grid-layout">

        {/* 1. PROFESSIONAL SUMMARY */}
        <div className="tech-card" style={{ gridColumn: '1 / -1' }}>
          <h2>/professional_summary</h2>
          <p>
            CS student (AI and Data Science) with 3+ years of Python and Bash on Linux and hands-on embedded work
            (Arduino, C/C++, KiCad). I build small, reliable tools (CLI utilities and microcontroller apps) that remove
            manual steps and clarify workflows. Looking for opportunities to learn quickly and contribute directly by solving
            real problems for teams.
          </p>
        </div>

        {/* 2. SKILLS */}
        <div className="tech-card">
          <h2>/skills_cache</h2>
          <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
            <li><b className="accent-text">Programming:</b> Python, Bash, Java, C/C++, SQL</li>
            <li><b className="accent-text">Systems:</b> Linux, shell scripting, cron, Git/GitHub</li>
            <li><b className="accent-text">Embedded/Electronics:</b> Arduino (C/C++), microcontrollers, KiCad (schematics)</li>
            <li><b className="accent-text">Tools:</b> Git, JetBrains/VS Code, Figma, DaVinci Resolve</li>
          </ul>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {['Automation', 'Machine Learning', 'Linux', 'Workers'].map(tag => (
              <span key={tag} style={{ border: '1px solid var(--border)', padding: '2px 6px', fontSize: '0.8rem' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* 3. PROFESSIONAL EXPERIENCE (Keep Separate) */}
        <div className="tech-card">
          <h2>/prof_experience</h2>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Nobel Learning PBC</h3>
            <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Intern | 2024–2025</span>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              • Built LMS-ready modules and interactive content.<br/>
              • Partnered with instructors to scope features and ship prototypes.<br/>
              • Integrated modern learning tools into course workflows.<br/>
              • Collected feedback and iterated to improve usability.
            </p>
          </div>
        </div>

        {/* 4. OTHER EXPERIENCE (Optimized Layout) */}
        <div className="tech-card" style={{ gridRow: 'span 2' }}> 
          <h2>/experience_log</h2>
          
          {/* Using CSS Grid here to make it compact (2 Columns) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Benefit Bike</h3>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Bike Technician | 2024–2025</span>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                • Diagnose mechanical issues and complete same-day repairs.<br/>
                • Communicate repair options, costs, and timelines.<br/>
                • Own the workflow end-to-end–from intake to pickup.<br/>
                • Prepare/store bikes to preserve condition.           
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Freelance</h3>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Photographer & Tech Consultant | 2019–Present</span>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                • Managed portrait, event, and commercial shoots.<br/>
                • Built a terminal utility to launch editing workflows.<br/>
                • Advised clients on asset management.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Turkish Aeronautical Assoc</h3>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>PR/Social Media Manager | 2016–2020</span>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                • Led a 5-member youth team to plan national events.<br/>
                • Produced/published cross-channel social content.<br/>
                • Liaised with local media to increase visibility.            
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Private Tümevarım HS</h3>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Photographer | 2017–2020</span>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                • Delivered high-quality sports and event photography.<br/>
                • Collaborated with staff on run-of-show.
              </p>
            </div>

          </div>
        </div>

        {/* 5. EDUCATION */}
        <div className="tech-card">
          <h2>/education_log</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>UEHS, Warsaw</h3>
            <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>2023 – Present</span>
            <p style={{ fontSize: '0.9rem' }}>BSc Computer Science, AI & Data Science</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>PJAIT, Warsaw</h3>
            <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>2021–2023</span>
            <p style={{ fontSize: '0.9rem' }}>BSc Computer Science</p>
          </div>
        </div>

        {/* 6. PROJECTS */}
        <div className="tech-card">
          <h2>/featured_projects</h2>
          <ul style={{ listStyle: 'none', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong className="accent-text">CW Keyer</strong><br/>
              Real-time Morse keyer (Arduino, LCD). <a href="https://github.com/ekinefe/CW_keyer" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>git_repo</a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong className="accent-text">CW Trainer</strong><br/>
              Python terminal trainer with adaptive difficulty. <a href="https://github.com/ekinefe/CW_Trainer" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>git_repo</a>
            </li>
            <li>
              <strong className="accent-text">EasyAdmin</strong><br/>
              Multilingual Bash framework for Linux admin tasks.
            </li>
          </ul>
        </div>

        {/* 7. CERTIFICATIONS */}
        <div className="tech-card">
          <h2>/certs_&_courses</h2>
          <ul style={{ listStyle: 'none', marginBottom: '1rem', lineHeight: '1.6' }}>
            <li>ChatGPT Prompt Engineering <span style={{ color: 'var(--text-muted)' }}>// DeepLearning.AI</span></li>
            <li>Fundamentals Program (90h) <span style={{ color: 'var(--text-muted)' }}>// [Provider Name?]</span></li>
            <li>Academic Skills <span style={{ color: 'var(--text-muted)' }}>// NAVOICA</span></li>
            <li>Website Development <span style={{ color: 'var(--text-muted)' }}>// NAVOICA</span></li>
            <li>Daily & Business English <span style={{ color: 'var(--text-muted)' }}>// WSEiZ</span></li>
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {['Programming', 'Camping', 'Hiking', 'Photography', 'Travel'].map(tag => (
              <span key={tag} style={{ border: '1px solid var(--border)', padding: '2px 6px', fontSize: '0.8rem' }}>{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;