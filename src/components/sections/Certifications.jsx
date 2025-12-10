import React from 'react';

const Certifications = () => {
    return (
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
    );
};

export default Certifications;
