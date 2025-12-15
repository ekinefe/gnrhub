import React from 'react';

const BashAutomation = () => {
    return (
        <div className="blog-article">
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_06: AUTOMATION</h2>
            </section>
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h2 style={{ color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>&gt; MISSION: AUTO_BACKUP</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Combine everything (Vars, Logic, Commands) into a script that backs up your project.
                </p>

                <div style={{ background: '#000', padding: '1rem', border: '1px dashed #444', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    <span style={{ color: '#569cd6' }}>#!/bin/bash</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 1. Variables</span><br />
                    <span style={{ color: '#9cdcfe' }}>TIMESTAMP</span>=$(<span style={{ color: '#dcdcaa' }}>date</span> +%Y%m%d_%H%M%S)<br />
                    <span style={{ color: '#9cdcfe' }}>BACKUP_DIR</span>=<span style={{ color: '#ce9178' }}>"./backups"</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 2. Logic: Check if folder exists</span><br />
                    <span style={{ color: '#c586c0' }}>if</span> [ ! -d <span style={{ color: '#9cdcfe' }}>"$BACKUP_DIR"</span> ]; <span style={{ color: '#c586c0' }}>then</span><br />
                    &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>mkdir</span> <span style={{ color: '#9cdcfe' }}>"$BACKUP_DIR"</span><br />
                    <span style={{ color: '#c586c0' }}>fi</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 3. Action: Zip the project</span><br />
                    <span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Starting Backup..."</span><br />
                    <span style={{ color: '#dcdcaa' }}>zip</span> -r <span style={{ color: '#9cdcfe' }}>"$BACKUP_DIR/project_$TIMESTAMP.zip"</span> . -x <span style={{ color: '#ce9178' }}>"node_modules/*"</span><br />
                    <br />
                    <span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#00ff9d' }}>"✔ Backup Complete: $BACKUP_DIR/project_$TIMESTAMP.zip"</span>
                </div>
            </div>
        </div>
    );
};
export default BashAutomation;