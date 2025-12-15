import React from 'react';

const BashFunctions = () => {
    return (
        <div className="blog-article">
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_05: FUNCTIONS</h2>
            </section>
            <div className="tech-card" style={{ borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/structure: FUNCTIONS</h2>
                <p>Bash functions do not have named parameters in the brackets <code>()</code>. Instead, you use <code>$1, $2, $3</code> to access arguments passed to them.</p>

                <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                    <span style={{ color: '#dcdcaa' }}>greet_user</span>() &#123;<br />
                    &nbsp;&nbsp;<span style={{ color: '#6a9955' }}># $1 is the first argument provided</span><br />
                    &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Hello, $1!"</span><br />
                    &#125;<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Calling the function</span><br />
                    <span style={{ color: '#dcdcaa' }}>greet_user</span> <span style={{ color: '#ce9178' }}>"Ekin"</span><br />
                    <span style={{ color: '#dcdcaa' }}>greet_user</span> <span style={{ color: '#ce9178' }}>"Admin"</span>
                </div>
            </div>
        </div>
    );
};
export default BashFunctions;