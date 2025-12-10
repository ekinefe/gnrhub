import React from 'react';
import ProfileHeader from '../components/sections/ProfileHeader';
import SkillsList from '../components/sections/SkillsList';
import ExperienceLog from '../components/sections/ExperienceLog';
import EducationLog from '../components/sections/EducationLog';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Certifications from '../components/sections/Certifications';

function About() {
  return (
    <div className="container">

      {/* === PAGE TITLE === */}
      <section style={{ marginBottom: '3rem' }}>
        <h1>/about_me</h1>
      </section>

      {/* === HERO PROFILE SECTION === */}
      <ProfileHeader />

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
        <SkillsList />

        {/* 3. EXPERIENCE */}
        <ExperienceLog />

        {/* 5. EDUCATION */}
        <EducationLog />

        {/* 6. PROJECTS */}
        <FeaturedProjects />

        {/* 7. CERTIFICATIONS */}
        <Certifications />

      </div>
    </div>
  );
}

export default About;