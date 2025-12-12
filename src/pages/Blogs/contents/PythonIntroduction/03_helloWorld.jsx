import React from 'react';

const HelloWorld = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/init_sequence</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Now that the Python runtime is active, we must verify the environment by executing
                    the standard <span className="accent-text">"Hello, World!"</span> protocol.
                    This confirms the interpreter is correctly processing standard output.
                </p>
            </section>

            {/* === STEP 1: CREATE FILE === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    /step_01: INITIALIZE_SOURCE
                </h2>

                <p>
                    Create a new entry point in your directory. The extension <span className="badge">.py</span>
                    is required for the interpreter to recognize the bytecode source.
                </p>

                <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', marginTop: '1rem' }}>
                    <span style={{ color: '#666' }}># Command to create file (Linux/Mac)</span><br />
                    <span style={{ color: '#00ff9d' }}>$</span> touch hello.py
                </div>
            </div>

            {/* === STEP 2: WRITE CODE === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    /step_02: INJECT_PAYLOAD
                </h2>

                <p>
                    Open <code>hello.py</code> in your editor (VS Code, Vim, or Nano).
                    Input the following print function to send a string to the console stdout.
                </p>

                <div style={{ position: 'relative', marginTop: '1.5rem' }}>
                    {/* File Label */}
                    <span style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '10px',
                        background: 'var(--bg-panel)',
                        padding: '0 10px',
                        fontSize: '0.8rem',
                        color: 'var(--accent)',
                        border: '1px solid var(--border)'
                    }}>
                        hello.py
                    </span>

                    <pre style={{
                        background: '#000',
                        border: '1px solid var(--border)',
                        padding: '1.5rem 1rem 1rem 1rem',
                        color: '#d4d4d4',
                        borderRadius: '0',
                        overflowX: 'auto'
                    }}>
                        <code>print("Hello, World!")</code>
                    </pre>
                </div>
            </div>

            {/* === STEP 3: EXECUTE === */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    /step_03: EXECUTE_RUNTIME
                </h2>

                <p>
                    Invoke the Python binary to run your script. Ensure you are in the correct directory.
                </p>

                <div style={{ background: '#000', border: '1px solid var(--border)', padding: '1rem', fontFamily: 'monospace', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#00ff9d' }}>$</span> python3 hello.py
                </div>

                <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--accent)' }}>&gt; EXPECTED_OUTPUT:</p>

                <div style={{
                    background: 'rgba(0, 255, 157, 0.05)',
                    borderLeft: '4px solid #00ff9d',
                    padding: '1rem',
                    fontFamily: 'monospace',
                    color: '#00ff9d'
                }}>
                    Hello, World!
                </div>
            </div>

            {/* === CONCLUSION === */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; SYSTEM_STATUS: SUCCESS</h3>
                <p style={{ margin: '0.5rem 0 0 0' }}>
                    You have successfully compiled your first logic. The system is ready for advanced algorithms.
                </p>
            </div>

        </div>
    );
};

export default HelloWorld;