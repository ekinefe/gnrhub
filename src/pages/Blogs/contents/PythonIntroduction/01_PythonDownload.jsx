import React from 'react';

const HowToDownload = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_01: DOWNLOAD</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Python is the engine behind modern AI, Data Science, and Micro-SaaS.
                    Before we write any code, we must ensure your local environment is
                    <span className="accent-text"> initialized correctly</span>.
                </p>
            </section>

            {/* === 1. WINDOWS === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    /target_os: WINDOWS
                </h2>

                <p>The standard installer is the most reliable method for Windows 10/11.</p>

                <ol style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li>
                        Navigate to the official payload source: <br />
                        <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="accent-text">
                            python.org/downloads
                        </a>
                    </li>
                    <li style={{ marginTop: '1rem' }}>
                        Click <b>Download Python 3.x.x</b> (Always get the latest stable build).
                    </li>
                    <li style={{ marginTop: '1rem', border: '1px solid var(--accent)', padding: '1rem', background: 'rgba(255, 49, 140, 0.05)' }}>
                        <strong style={{ color: 'var(--accent)' }}>⚠ CRITICAL STEP:</strong><br />
                        On the first screen of the installer, you <b>MUST</b> check the box: <br />
                        <code>Add Python.exe to PATH</code> <br />
                        If you miss this, you cannot run Python from your terminal later.
                    </li>
                    <li style={{ marginTop: '1rem' }}>Click <b>Install Now</b> and wait for completion.</li>
                </ol>
            </div>

            {/* === 2. macOS === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    /target_os: macOS
                </h2>

                <p>
                    macOS comes with an old system Python. <b>Do not use it.</b>
                    Instead, use <code>Homebrew</code> to manage a clean installation.
                </p>

                <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', color: 'var(--text-muted)' }}>// METHOD A: Homebrew (Recommended)</h3>
                <p>Open your terminal (Command + Space, type "Terminal") and run:</p>

                <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', marginBottom: '1rem' }}>
                    <span style={{ color: '#00ff9d' }}>$</span> brew install python
                </div>

                <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', color: 'var(--text-muted)' }}>// METHOD B: Official Installer</h3>
                <p>If you prefer a UI installer, download the macOS 64-bit universal2 installer from <a href="https://www.python.org/downloads/macos/" className="accent-text">python.org</a>.</p>
            </div>

            {/* === 3. LINUX === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    /target_os: LINUX
                </h2>

                <p>Most distros include Python, but you often need the development headers (`python3-dev`) or `pip` separately.</p>

                {/* DEBIAN / UBUNTU */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ color: 'var(--accent)' }}>&gt; Debian / Ubuntu / Kali</h3>
                    <p>Use the <code>apt</code> package manager:</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> sudo apt update<br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo apt install python3 python3-pip python3-venv
                    </div>
                </div>

                {/* FEDORA / RHEL */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ color: 'var(--accent)' }}>&gt; Fedora / RHEL / CentOS</h3>
                    <p>Since you are on a ThinkPad T480s running Fedora, use <code>dnf</code>:</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> sudo dnf install python3 python3-pip
                    </div>
                </div>

                {/* ARCH */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ color: 'var(--accent)' }}>&gt; Arch Linux</h3>
                    <p>For the rolling release users:</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> sudo pacman -S python python-pip
                    </div>
                </div>
            </div>

            {/* === 4. VERIFICATION === */}
            <div className="tech-card">
                <h2>/verification</h2>
                <p>Verify that your system path is linked correctly.</p>

                <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#666' }}># Check Version</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> python3 --version<br />
                    <span style={{ color: '#fff' }}>Python 3.12.0</span>
                </div>

                <p style={{ marginTop: '1rem' }}>
                    If you see a version number, you are ready to code.
                </p>
            </div>

        </div>
    );
};

export default HowToDownload;