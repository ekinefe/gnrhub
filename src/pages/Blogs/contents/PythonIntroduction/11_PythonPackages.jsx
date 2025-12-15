import React from 'react';

const PythonPackages = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_11: PACKAGES & PIP</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    A <b>Module</b> is a single file. A <b>Package</b> is a directory containing multiple modules.
                    <br /><br />
                    But the true strength of Python lies in the <span className="accent-text">Python Package Index (PyPI)</span>—a massive global repository of open-source libraries like <b>NumPy</b>, <b>Pandas</b>, and <b>TensorFlow</b>.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. ANATOMY OF A PACKAGE                           */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /structure: DIRECTORY_HIERARCHY
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    To tell Python that a folder is a package (and not just a random folder), we usually include a special file named <code>__init__.py</code> inside it.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    <span style={{ color: '#fff' }}>my_project/</span><br />
                    ├── <span style={{ color: '#aaa' }}>main.py</span><br />
                    └── <span style={{ color: '#4ec9b0' }}>game_engine/</span> <span style={{ color: '#666' }}> (This is the Package)</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;├── <span style={{ color: '#dcdcaa' }}>__init__.py</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;├── <span style={{ color: '#9cdcfe' }}>physics.py</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;└── <span style={{ color: '#9cdcfe' }}>graphics.py</span>
                </div>

                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    <b>Usage in Code:</b>
                </p>
                <div style={{ background: '#000', border: '1px dashed #444', padding: '0.5rem 1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#4ec9b0' }}>game_engine</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>physics</span>
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. PIP (THE PACKAGE INSTALLER)                    */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /tool: PIP_INSTALLER
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    <b>PIP</b> (Pip Installs Packages) is the tool we use to download libraries from the internet.
                    You run this in your <b>Terminal</b>, not inside a Python script.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#666' }}># Generic Syntax</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> pip install &lt;package_name&gt;<br />
                    <br />
                    <span style={{ color: '#666' }}># Example: Installing 'requests' (for web handling)</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> pip install requests
                </div>

                <div style={{ marginTop: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Common Commands:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                        <li><code>pip list</code> - See what is installed.</li>
                        <li><code>pip uninstall &lt;name&gt;</code> - Remove a package.</li>
                        <li><code>pip freeze &gt; requirements.txt</code> - Save list of dependencies.</li>
                    </ul>
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. VIRTUAL ENVIRONMENTS (CRITICAL)                */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ce9178' }}>
                    /safety: VIRTUAL_ENVIRONMENTS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    <b>The Problem:</b> Project A needs <code>django v3.0</code>. Project B needs <code>django v4.0</code>. You cannot install both globally.
                    <br /><br />
                    <b>The Solution:</b> Create a "Virtual Environment" (<code>venv</code>) for every project. It creates a mini-copy of Python just for that folder.
                </p>

                <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {/* WINDOWS */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#9cdcfe' }}>WINDOWS</h3>
                        <code style={{ display: 'block', background: '#000', padding: '1rem', border: '1px solid #333', fontSize: '0.85rem' }}>
                            python -m venv venv<br />
                            .\venv\Scripts\activate
                        </code>
                    </div>

                    {/* MAC / LINUX */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#9cdcfe' }}>MAC / LINUX</h3>
                        <code style={{ display: 'block', background: '#000', padding: '1rem', border: '1px solid #333', fontSize: '0.85rem' }}>
                            python3 -m venv venv<br />
                            source venv/bin/activate
                        </code>
                    </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '1rem' }}>
                    <i>Note: When active, your terminal prompt will change to show <code>(venv)</code>.</i>
                </p>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: EXTERNAL_TOOLS</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    1. Open your terminal and run: <code>pip install colorama</code>
                    <br />
                    2. Create a script that prints text in <b>RED</b> and <b>GREEN</b>.
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#9cdcfe' }}>colorama</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>Fore</span>, <span style={{ color: '#9cdcfe' }}>Style</span><br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>Fore</span>.RED + <span style={{ color: '#ce9178' }}>"SYSTEM FAILURE"</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>Fore</span>.GREEN + <span style={{ color: '#ce9178' }}>"SYSTEM RESTORED"</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>Style</span>.RESET_ALL)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Back to normal."</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonPackages;