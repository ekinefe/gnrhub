import React from 'react';

const FeaturedProjects = () => {
    return (
        <div className="tech-card">
            <h2>/featured_projects</h2>
            <ul style={{ listStyle: 'none', lineHeight: '1.6' }}>
                <li style={{ marginBottom: '1rem' }}>
                    <strong className="accent-text">CW Keyer</strong><br />
                    Real-time Morse keyer (Arduino, LCD). <a href="https://github.com/ekinefe/CW_keyer" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>git_repo</a>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <strong className="accent-text">CW Trainer</strong><br />
                    Python terminal trainer with adaptive difficulty. <a href="https://github.com/ekinefe/CW_Trainer" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>git_repo</a>
                </li>
                <li>
                    <strong className="accent-text">EasyAdmin</strong><br />
                    Multilingual Bash framework for Linux admin tasks.
                </li>
            </ul>
        </div>
    );
};

export default FeaturedProjects;
