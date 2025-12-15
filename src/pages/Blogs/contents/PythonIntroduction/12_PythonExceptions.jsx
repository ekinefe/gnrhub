import React from 'react';

const PythonExceptions = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_12: ERROR_HANDLING</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    In the real world, things break. Users input text instead of numbers, servers go offline, files get deleted.
                    <br /><br />
                    If you don't handle these events, your program crashes (terminates).
                    <span className="accent-text">Exception Handling</span> allows your code to catch these errors and recover gracefully.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. THE CRASH (WITHOUT HANDLING)                   */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid #ff3333' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ff3333' }}>
                    /scenario: SYSTEM_FAILURE
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Without protection, a single error stops the entire execution flow.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Initiating..."</span>)<br />
                    <span style={{ color: '#9cdcfe' }}>result</span> = <span style={{ color: '#b5cea8' }}>10</span> / <span style={{ color: '#b5cea8' }}>0</span> <span style={{ color: '#6a9955' }}># MATH ERROR</span><br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Done."</span>)
                </div>

                <div style={{ marginTop: '1rem', background: '#220000', padding: '1rem', border: '1px solid #ff3333', fontSize: '0.85rem', color: '#ffaaaa' }}>
                    ZeroDivisionError: division by zero<br />
                    <span style={{ color: '#fff' }}>Process finished with exit code 1</span>
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. TRY / EXCEPT (THE SHIELD)                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /mechanism: EXCEPTION_SHIELD
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Wrap risky code in a <code>try</code> block. If it fails, Python jumps to the <code>except</code> block instead of crashing.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>try</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>number</span> = <span style={{ color: '#4ec9b0' }}>int</span>(<span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Enter a number: "</span>))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#b5cea8' }}>100</span> / <span style={{ color: '#9cdcfe' }}>number</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>except</span> <span style={{ color: '#4ec9b0' }}>ZeroDivisionError</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"⚠ ERROR: Cannot divide by zero."</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>except</span> <span style={{ color: '#4ec9b0' }}>ValueError</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"⚠ ERROR: That is text, not a number."</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. FINALLY (CLEANUP)                              */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#dcdcaa' }}>
                    /mechanism: CLEANUP_ROUTINE
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    The <code>finally</code> block runs <b>no matter what happens</b> (Success or Error).
                    It is critical for "closing files" or "disconnecting databases" to prevent memory leaks.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>try</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Opening Secure Connection..."</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#6a9955' }}># Code that might crash...</span><br />
                    <span style={{ color: '#c586c0' }}>except</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Connection Failed."</span>)<br />
                    <span style={{ color: '#c586c0' }}>finally</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"&gt;&gt; CLOSING PORTS (Always runs)"</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: SAFE_CALCULATOR</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Build a divider tool.
                    <br />
                    1. Ask user for Top Number and Bottom Number.
                    <br />
                    2. Use a <code>try/except</code> block.
                    <br />
                    3. Catch <b>ZeroDivisionError</b> and print "Infinity is not allowed."
                    <br />
                    4. Catch <b>ValueError</b> (if they type 'abc') and print "Numbers only."
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>while</span> <span style={{ color: '#569cd6' }}>True</span>:<br />
                    &nbsp;&nbsp;<span style={{ color: '#c586c0' }}>try</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>x</span> = <span style={{ color: '#4ec9b0' }}>int</span>(<span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Top: "</span>))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>y</span> = <span style={{ color: '#4ec9b0' }}>int</span>(<span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Bottom: "</span>))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Result: &#123;x/y&#125;"</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>break</span> <span style={{ color: '#6a9955' }}># Exit loop if successful</span><br />
                    &nbsp;&nbsp;<span style={{ color: '#c586c0' }}>except</span> <span style={{ color: '#4ec9b0' }}>ZeroDivisionError</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Cannot divide by zero!"</span>)<br />
                    &nbsp;&nbsp;<span style={{ color: '#c586c0' }}>except</span> <span style={{ color: '#4ec9b0' }}>ValueError</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Please enter integers only."</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonExceptions;