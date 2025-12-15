import React from 'react';

const TerminalNav = () => {
    return (
        <div className="tech-card">
            <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                /cmd: NAVIGATION
            </h2>
            <p style={{ marginBottom: '1rem' }}>Moving through the directory structure.</p>

            <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
                    <strong style={{ color: '#4ec9b0' }}>pwd</strong>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Print Working Directory. "Where am I?"</p>
                </div>
                <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
                    <strong style={{ color: '#4ec9b0' }}>ls -la</strong>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>List all files (including hidden).</p>
                </div>
                <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
                    <strong style={{ color: '#4ec9b0' }}>cd directory_name</strong>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Change directory.</p>
                </div>
                <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
                    <strong style={{ color: '#4ec9b0' }}>cd ..</strong>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Go up one level.</p>
                </div>
            </div>
        </div>
    );
};
export default TerminalNav;
