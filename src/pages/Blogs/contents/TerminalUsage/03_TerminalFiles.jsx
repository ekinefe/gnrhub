import React from 'react';

const TerminalFiles = () => {
    return (
        <div className="blog-article">

            <section>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_03: TERMINAL_FILES</h2>
            </section>
            <div className="tech-card">
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /cmd: FILESYSTEM
                </h2>
                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#6a9955' }}># Create a directory</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> mkdir project_folder<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Create an empty file</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> touch project_folder/main.py<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Move/Rename file</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> mv main.py new_main.py<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Copy file</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> cp source.txt destination.txt<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># DELETE (Dangerous)</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> rm -rf project_folder
                </div>
            </div>
        </div>
    );
};
export default TerminalFiles;