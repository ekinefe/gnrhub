import React from 'react';

const IdeSetup = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_02: ENVIRONMENT_CONFIG</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    To maximize throughput, you need an <span className="accent-text">Integrated Development Environment (IDE)</span>.
                    The two industry standards for Python are <b>VS Code</b> (Modular) and <b>PyCharm</b> (Integrated).
                </p>
            </section>

            {/* === DECISION MATRIX === */}
            <div className="grid-layout" style={{ marginBottom: '3rem' }}>

                {/* OPTION A: VS CODE */}
                <div className="tech-card" style={{ borderColor: '#007acc' }}>
                    <h3 style={{ color: '#007acc', margin: 0 }}>VS CODE</h3>
                    <span className="badge" style={{ borderColor: '#007acc', color: '#007acc', marginBottom: '1rem' }}>Architecture: MODULAR</span>

                    <ul style={{ listStyle: 'none', lineHeight: '1.6', fontSize: '0.9rem' }}>
                        <li><b>+</b> Extremely lightweight.</li>
                        <li><b>+</b> Supports every language (Polyglot).</li>
                        <li><b>+</b> Great terminal integration.</li>
                        <br></br>
                        <li><b>-</b> Requires manual setup of extensions.</li>
                    </ul>

                    <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        &gt; RECOMMENDED FOR: Generalists, Web Devs, and those who want full control.
                    </p>
                </div>

                {/* OPTION B: PYCHARM */}
                <div className="tech-card" style={{ borderColor: '#FC801D' }}>
                    <h3 style={{ color: '#FC801D', margin: 0 }}>PYCHARM</h3>
                    <span className="badge" style={{ borderColor: '#FC801D', color: '#FC801D', marginBottom: '1rem' }}>Architecture: MONOLITHIC</span>

                    <ul style={{ listStyle: 'none', lineHeight: '1.6', fontSize: '0.9rem' }}>
                        <li><b>+</b> "Batteries Included" (No setup).</li>
                        <li><b>+</b> Best-in-class debugger & refactoring.</li>
                        <li><b>+</b> Deep understanding of Python code.</li>
                        <br></br>
                        <li><b>-</b> Heavy on system resources (RAM).</li>
                    </ul>

                    <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        &gt; RECOMMENDED FOR: Dedicated Python/Data Science work and large codebases.
                    </p>
                </div>

            </div>

            {/* ================================================= */}
            {/* DEPLOYMENT: VS CODE                 */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid #007acc' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#007acc' }}>
                    /deploy_target: VS_CODE
                </h2>

                {/* --- WINDOWS --- */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>// OS: WINDOWS</h3>
                    <p>Download the "System Installer" for 64-bit Windows.</p>
                    <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer" className="btn secondary-btn" style={{ borderColor: '#007acc', color: '#007acc' }}>
                        Get Installer.exe
                    </a>
                </div>

                {/* --- MACOS --- */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: MACOS</h3>
                    <p>If you have Homebrew installed (Recommended):</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> brew install --cask visual-studio-code
                    </div>
                </div>

                {/* --- LINUX (DEBIAN/UBUNTU) --- */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: LINUX (Debian/Ubuntu/Kali)</h3>
                    <p>Install via the official Microsoft repository and <code>apt</code>:</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        <span style={{ color: '#666' }}># 1. Install dependencies</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo apt install wget gpg<br /><br />
                        <span style={{ color: '#666' }}># 2. Import Microsoft Key</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor &gt; packages.microsoft.gpg<br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg<br /><br />
                        <span style={{ color: '#666' }}># 3. Install VS Code</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo apt install apt-transport-https<br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo apt update && sudo apt install code
                    </div>
                </div>

                {/* --- LINUX (FEDORA/RHEL) --- */}
                <div>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: LINUX (Fedora/RHEL/CentOS)</h3>
                    <p>Import the key and install via <code>dnf</code>:</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        <span style={{ color: '#666' }}># 1. Import Key</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc<br /><br />
                        <span style={{ color: '#666' }}># 2. Add Repo</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" &gt; /etc/yum.repos.d/vscode.repo'<br /><br />
                        <span style={{ color: '#666' }}># 3. Install</span><br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo dnf check-update<br />
                        <span style={{ color: '#00ff9d' }}>$</span> sudo dnf install code
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* DEPLOYMENT: PYCHARM                 */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid #FC801D' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#FC801D' }}>
                    /deploy_target: PYCHARM
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    <b>Note:</b> Always choose the <span className="accent-text">Community Edition</span> (Free/Open Source) unless you have a paid license.
                </p>

                {/* --- WINDOWS --- */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: WINDOWS</h3>
                    <p>Download the .exe installer from JetBrains.</p>
                    <a href="https://www.jetbrains.com/pycharm/download/?section=windows" target="_blank" rel="noreferrer" className="btn secondary-btn" style={{ borderColor: '#FC801D', color: '#FC801D' }}>
                        Get Installer.exe
                    </a>
                </div>

                {/* --- MACOS --- */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: MACOS</h3>
                    <p>Using Homebrew Cask:</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> brew install --cask pycharm-ce
                    </div>
                </div>

                {/* --- LINUX (UBUNTU SNAP) --- */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: LINUX (Ubuntu/Debian)</h3>
                    <p>The easiest method on Ubuntu is via <code>snap</code> (pre-installed on Ubuntu):</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> sudo snap install pycharm-community --classic
                    </div>
                </div>

                {/* --- LINUX (FEDORA FLATPAK) --- */}
                <div>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>// OS: LINUX (Fedora/RHEL)</h3>
                    <p>On Fedora, the cleanest way is via <code>Flatpak</code> (Flathub):</p>
                    <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        <span style={{ color: '#00ff9d' }}>$</span> flatpak install flathub com.jetbrains.PyCharm-Community
                    </div>
                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
                        (Alternative: You can also download the tar.gz from JetBrains and extract it manually to /opt).
                    </p>
                </div>
            </div>

        </div>
    );
};

export default IdeSetup;