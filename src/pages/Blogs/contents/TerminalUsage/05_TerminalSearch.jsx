import React from 'react';

const TerminalSearch = () => {
    return (
        <div className="tech-card" style={{ borderColor: '#ce9178' }}>
            <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ce9178' }}>
                /cmd: RECONNAISSANCE
            </h2>

            <div style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#ce9178' }}>GREP (Search text inside files)</h3>
                <div style={{ background: '#000', padding: '0.5rem 1rem', border: '1px dashed #555', fontFamily: 'monospace' }}>
                    <span style={{ color: '#00ff9d' }}>$</span> grep -r "password" ./project_folder
                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#ce9178' }}>FIND (Search for file names)</h3>
                <div style={{ background: '#000', padding: '0.5rem 1rem', border: '1px dashed #555', fontFamily: 'monospace' }}>
                    <span style={{ color: '#00ff9d' }}>$</span> find . -name "*.py"
                </div>
            </div>
        </div>
    );
};
export default TerminalSearch;