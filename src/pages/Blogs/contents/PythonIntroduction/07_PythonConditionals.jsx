import React from 'react';

const PythonConditionals = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_07: CONTROL_FLOW</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Up until now, your code ran in a straight line from top to bottom.
                    <br />
                    To build intelligent systems, code must be able to branch. It needs to check a condition
                    (True or False) and execute different blocks of code based on the result.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. COMPARISON OPERATORS                           */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /tool: COMPARISON_OPS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Before we write an <code>if</code> statement, we need to know how to compare values.
                    These operators always return a <b>BOOLEAN</b> (True/False).
                </p>

                <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

                    <div style={{ background: 'var(--bg-panel)', padding: '0.5rem 1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                        <span style={{ color: '#ce9178' }}>==</span> <span style={{ color: '#666' }}>// Equal to</span>
                    </div>
                    <div style={{ background: 'var(--bg-panel)', padding: '0.5rem 1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                        <span style={{ color: '#ce9178' }}>!=</span> <span style={{ color: '#666' }}>// Not Equal</span>
                    </div>
                    <div style={{ background: 'var(--bg-panel)', padding: '0.5rem 1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                        <span style={{ color: '#ce9178' }}>&gt;</span> <span style={{ color: '#666' }}>// Greater Than</span>
                    </div>
                    <div style={{ background: 'var(--bg-panel)', padding: '0.5rem 1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                        <span style={{ color: '#ce9178' }}>&lt;</span> <span style={{ color: '#666' }}>// Less Than</span>
                    </div>
                    <div style={{ background: 'var(--bg-panel)', padding: '0.5rem 1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                        <span style={{ color: '#ce9178' }}>&gt;=</span> <span style={{ color: '#666' }}>// Greater/Equal</span>
                    </div>
                    <div style={{ background: 'var(--bg-panel)', padding: '0.5rem 1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                        <span style={{ color: '#ce9178' }}>&lt;=</span> <span style={{ color: '#666' }}>// Less/Equal</span>
                    </div>

                </div>
            </div>

            {/* ================================================= */}
            {/* 2. THE IF STATEMENT                               */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#c586c0' }}>
                    /structure: IF_ELSE
                </h2>

                {/* INDENTATION WARNING */}
                <div style={{ borderLeft: '3px solid #ff3333', paddingLeft: '1rem', marginBottom: '1.5rem', background: 'rgba(255, 50, 50, 0.05)', padding: '1rem' }}>
                    <strong style={{ color: '#ff3333' }}>⚠ CRITICAL SYNTAX RULE:</strong><br />
                    Python relies on <b>INDENTATION</b> (Whitespace). <br />
                    Code inside the <code>if</code> block MUST be indented (usually 4 spaces or 1 tab).
                    Without indentation, the code will crash.
                </div>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>age</span> = <span style={{ color: '#b5cea8' }}>18</span><br /><br />

                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>age</span> &gt;= <span style={{ color: '#b5cea8' }}>18</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Access Granted"</span>) <span style={{ color: '#6a9955' }}># Indented code runs if True</span><br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Access Denied"</span>) <span style={{ color: '#6a9955' }}># Runs if False</span>
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. ELIF (Multiple Options)                        */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#c586c0' }}>
                    /structure: ELIF_CHAIN
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Use <code>elif</code> (Else If) when you have more than two possible outcomes.
                    Python checks them from top to bottom. It stops as soon as it finds ONE that is True.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>score</span> = <span style={{ color: '#b5cea8' }}>75</span><br /><br />

                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>score</span> &gt;= <span style={{ color: '#b5cea8' }}>90</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Rank: S"</span>)<br />

                    <span style={{ color: '#c586c0' }}>elif</span> <span style={{ color: '#9cdcfe' }}>score</span> &gt;= <span style={{ color: '#b5cea8' }}>70</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Rank: A"</span>)<br />

                    <span style={{ color: '#c586c0' }}>elif</span> <span style={{ color: '#9cdcfe' }}>score</span> &gt;= <span style={{ color: '#b5cea8' }}>50</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Rank: B"</span>)<br />

                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Rank: F (Failed)"</span>)
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #c586c0', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; Rank: A
                </div>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: SECURITY_GATE</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Create a script that asks for a <b>password</b>.
                    <br />
                    1. If the password is "python123", print "Welcome Admin".
                    <br />
                    2. If the password is "guest", print "Welcome Guest".
                    <br />
                    3. Otherwise, print "INTRUDER DETECTED".
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#9cdcfe' }}>password</span> = <span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Enter Password: "</span>)<br /><br />

                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>password</span> == <span style={{ color: '#ce9178' }}>"python123"</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Welcome Admin"</span>)<br />
                    <span style={{ color: '#c586c0' }}>elif</span> <span style={{ color: '#9cdcfe' }}>password</span> == <span style={{ color: '#ce9178' }}>"guest"</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Welcome Guest"</span>)<br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"⚠ INTRUDER DETECTED"</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonConditionals;