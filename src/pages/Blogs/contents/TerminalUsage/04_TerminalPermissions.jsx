import React from 'react';

const TerminalPermissions = () => {
    return (
        <div className="blog-article">
            <section>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_04: TERMINAL_PERMISSIONS</h2>
            </section>

            <div className="tech-card" style={{ borderLeft: '4px solid var(--accent)' }}>
                <section>
                    <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                        /security: CHMOD
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Linux permissions control who can Read (r), Write (w), or Execute (x) a file.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#6a9955' }}># Make a script executable</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> chmod +x run_bot.sh<br />
                        <br />
                        <span style={{ color: '#6a9955' }}># Full permissions (Dangerous)</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> chmod 777 file.txt
                    </div>
                </section>
            </div>
        </div>
    );
};
export default TerminalPermissions;