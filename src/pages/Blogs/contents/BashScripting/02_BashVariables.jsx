import React from 'react';

const BashVariables = () => {
    return (
        <div className="blog-article">
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_02: VARIABLES</h2>
            </section>

            <div className="tech-card">
                <h2 style={{ color: '#569cd6', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/syntax: VARIABLES</h2>
                <p>Rules: No spaces around the `=` sign. Use `$` to access the value.</p>

                <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                    <span style={{ color: '#6a9955' }}># DEFINING (No spaces!)</span><br />
                    <span style={{ color: '#9cdcfe' }}>NAME</span>=<span style={{ color: '#ce9178' }}>"Ekin"</span><br />
                    <span style={{ color: '#9cdcfe' }}>LEVEL</span>=99<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># USING (Use dollar sign)</span><br />
                    <span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Welcome back, $NAME"</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># COMMAND SUBSTITUTION (Saving command output)</span><br />
                    <span style={{ color: '#9cdcfe' }}>CURRENT_DATE</span>=$(<span style={{ color: '#dcdcaa' }}>date</span>)<br />
                    <span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Log Entry: $CURRENT_DATE"</span>
                </div>
            </div>
        </div>
    );
};
export default BashVariables;