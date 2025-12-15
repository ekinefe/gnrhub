import React from 'react';

const BashIntro = () => {
    return (
        <div className="blog-article">
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_01: SCRIPT_ANATOMY</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    A Bash script is simply a text file containing terminal commands.
                    To make it work, you need two things: The <b>Shebang</b> and <b>Permissions</b>.
                </p>
            </section>

            <div className="tech-card">
                <h3 style={{ color: '#4ec9b0', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// THE_SHEBANG</h3>
                <p>This MUST be the very first line of your file. It tells Linux "Use Bash to run this."</p>
                <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                    <span style={{ color: '#569cd6' }}>#!/bin/bash</span><br />
                    <span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"System Online"</span>
                </div>
            </div>

            <div className="tech-card" style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#ce9178', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// EXECUTION</h3>
                <p>By default, Linux blocks scripts from running for security. You must authorize it.</p>
                <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                    <span style={{ color: '#6a9955' }}># 1. Give execution permission</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> chmod +x script.sh<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 2. Run the script (Note the ./ prefix)</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> ./script.sh
                </div>
            </div>
        </div>
    );
};
export default BashIntro;