import React from 'react';

const BashLogic = () => {
    return (
        <div className="blog-article">
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_03: LOGIC</h2>
            </section>

            <div className="tech-card">
                <h2 style={{ color: '#dcdcaa', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/logic: IF_ELSE</h2>
                <p>Bash uses <code>[ ]</code> for tests. Spaces inside the brackets are <b>mandatory</b>.</p>

                <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>if</span> [ <span style={{ color: '#9cdcfe' }}>"$USER"</span> == <span style={{ color: '#ce9178' }}>"root"</span> ]; <span style={{ color: '#c586c0' }}>then</span><br />
                    &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"⚠ DANGER: Running as Admin"</span><br />
                    <span style={{ color: '#c586c0' }}>else</span><br />
                    &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Standard User Detected"</span><br />
                    <span style={{ color: '#c586c0' }}>fi</span>
                </div>

                <h3 style={{ marginTop: '2rem', fontSize: '1rem', color: '#ccc' }}>Comparison Cheat Sheet</h3>
                <ul style={{ color: '#aaa', lineHeight: '1.6' }}>
                    <li><code>-eq</code> : Equal (Numbers)</li>
                    <li><code>-ne</code> : Not Equal (Numbers)</li>
                    <li><code>-gt</code> : Greater Than</li>
                    <li><code>-lt</code> : Less Than</li>
                    <li><code>==</code> : Equal (Strings)</li>
                    <li><code>-f</code> : Check if file exists</li>
                    <li><code>-d</code> : Check if directory exists</li>
                </ul>
            </div>
        </div>
    );
};
export default BashLogic;