import React from 'react';

const EducationLog = () => {
    return (
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
    );
};

export default EducationLog;
