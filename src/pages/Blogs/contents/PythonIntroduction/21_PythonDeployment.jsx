import React from 'react';

const PythonDeployment = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_21: DEPLOYMENT_PROTOCOLS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Your code works perfectly on your laptop. But when you send it to a server or a colleague, it crashes because they have a different version of Python or are missing a library.
                    <br /><br />
                    <span className="accent-text">Docker</span> solves this. It wraps your code, your libraries, and even the Operating System into a sealed <b>Container</b> that runs exactly the same way everywhere.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. THE DOCKERFILE (THE RECIPE)                    */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /config: DOCKERFILE
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    To containerize your app, you create a file named exactly <code>Dockerfile</code> (no extension).
                    This tells Docker how to build your environment.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#6a9955' }}># 1. Start from a base Linux image with Python installed</span><br />
                    <span style={{ color: '#c586c0' }}>FROM</span> <span style={{ color: '#9cdcfe' }}>python:3.9-slim</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 2. Set the working directory inside the container</span><br />
                    <span style={{ color: '#c586c0' }}>WORKDIR</span> <span style={{ color: '#ce9178' }}>/app</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 3. Copy your requirements file and install dependencies</span><br />
                    <span style={{ color: '#c586c0' }}>COPY</span> <span style={{ color: '#9cdcfe' }}>requirements.txt</span> <span style={{ color: '#ce9178' }}>.</span><br />
                    <span style={{ color: '#c586c0' }}>RUN</span> <span style={{ color: '#9cdcfe' }}>pip install -r requirements.txt</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 4. Copy the rest of your code</span><br />
                    <span style={{ color: '#c586c0' }}>COPY</span> <span style={{ color: '#ce9178' }}>.</span> <span style={{ color: '#ce9178' }}>.</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 5. Command to run when the container starts</span><br />
                    <span style={{ color: '#c586c0' }}>CMD</span> [<span style={{ color: '#ce9178' }}>"python"</span>, <span style={{ color: '#ce9178' }}>"main.py"</span>]
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. BUILDING & RUNNING                             */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /action: BUILD_AND_RUN
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Once you have the file, you execute standard terminal commands to build the <b>Image</b> (the static snapshot) and run the <b>Container</b> (the live instance).
                </p>

                <div className="grid-layout" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>

                    <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #569cd6' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#9cdcfe' }}>STEP A: BUILD</h4>
                        <code style={{ fontFamily: 'monospace', color: '#ccc' }}>
                            docker build -t my-python-app .
                        </code>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>"-t" names the image "my-python-app". The "." means "look in this folder".</p>
                    </div>

                    <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #00ff9d' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#00ff9d' }}>STEP B: RUN</h4>
                        <code style={{ fontFamily: 'monospace', color: '#ccc' }}>
                            docker run -p 5000:5000 my-python-app
                        </code>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>"-p" maps port 5000 on your laptop to port 5000 inside the container.</p>
                    </div>

                </div>
            </div>

            {/* ================================================= */}
            {/* 3. CLOUD DEPLOYMENT (THE FINAL STEP)              */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /target: THE_CLOUD
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Since your app is now Dockerized, you can push it anywhere.
                    <br /><br />
                    <b>Common Platforms for Python AI Apps:</b>
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.9rem' }}>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#ff9900', marginRight: '10px' }}>■</span>
                        <strong>AWS (Elastic Container Service):</strong> The enterprise standard.
                    </li>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#4285f4', marginRight: '10px' }}>■</span>
                        <strong>Google Cloud Run:</strong> Excellent for scaling AI models from 0 to 1000 users instantly.
                    </li>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#fff', marginRight: '10px' }}>■</span>
                        <strong>Render / Railway:</strong> Easiest for beginners. Just connect your GitHub, and they detect the Dockerfile automatically.
                    </li>
                </ul>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: CONTAINER_CHECK</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    You don't need to install Docker right now if you can't, but write the <b>requirements.txt</b> file for a standard Data Science project.
                    <br />
                    It should include the libraries we covered: <b>Flask</b>, <b>Requests</b>, and <b>NumPy</b>.
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#6a9955' }}># This file lists dependencies for pip to install</span><br />
                    <br />
                    <span style={{ color: '#ce9178' }}>flask</span>==2.3.2<br />
                    <span style={{ color: '#ce9178' }}>requests</span>==2.31.0<br />
                    <span style={{ color: '#ce9178' }}>numpy</span>==1.24.3<br />
                    <span style={{ color: '#ce9178' }}>gunicorn</span>==20.1.0 <span style={{ color: '#6a9955' }}># Production web server</span>
                </div>
            </div>

        </div>
    );
};

export default PythonDeployment;