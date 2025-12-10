import React from 'react';

const SkillsList = () => {
    return (
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
    );
};

export default SkillsList;
