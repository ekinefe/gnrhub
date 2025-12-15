import React from 'react';

const PythonModules = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_10: MODULAR_SYSTEMS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Real-world software isn't written in a single file. It is broken down into separate files called <span className="accent-text">Modules</span>.
                    <br /><br />
                    Furthermore, Python comes with "Batteries Included"—a massive collection of pre-written modules called the <b>Standard Library</b>.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. IMPORTING STANDARD MODULES                     */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /tool: THE_IMPORT_KEYWORD
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    To use code that lives outside your current file, use the <code>import</code> keyword.
                    <br />
                    Common libraries include <code>math</code>, <code>random</code>, and <code>datetime</code>.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>math</span><br />
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>random</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Using the 'math' module</span><br />
                    <span style={{ color: '#9cdcfe' }}>root</span> = <span style={{ color: '#9cdcfe' }}>math</span>.<span style={{ color: '#dcdcaa' }}>sqrt</span>(<span style={{ color: '#b5cea8' }}>16</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Root: &#123;root&#125;"</span>)<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Using the 'random' module</span><br />
                    <span style={{ color: '#9cdcfe' }}>chance</span> = <span style={{ color: '#9cdcfe' }}>random</span>.<span style={{ color: '#dcdcaa' }}>randint</span>(<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>100</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Random Roll: &#123;chance&#125;"</span>)
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #569cd6', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; Root: 4.0<br />
                    &gt; Random Roll: 42
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. SPECIFIC IMPORTS (FROM ... IMPORT)             */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#dcdcaa' }}>
                    /technique: SELECTIVE_LOADING
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    If you only need one specific tool, you don't need to load the entire toolbox.
                    Use <code>from ... import ...</code> to keep your code clean.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#9cdcfe' }}>datetime</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>datetime</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>now</span> = <span style={{ color: '#9cdcfe' }}>datetime</span>.<span style={{ color: '#dcdcaa' }}>now</span>()<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>now</span>)<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Notice we didn't type 'datetime.datetime.now()'</span>
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. CREATING YOUR OWN MODULE                       */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /creation: CUSTOM_MODULES
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Any Python file ending in <code>.py</code> is a module.
                    <br />
                    <b>Scenario:</b> You are building a game. You want to keep the "Combat Logic" separate from the "Main Game".
                </p>



                <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                    {/* FILE 1 */}
                    <div>
                        <span style={{ fontSize: '0.8rem', color: '#aaa', borderBottom: '1px solid #555', display: 'block', marginBottom: '0.5rem' }}>📄 combat.py</span>
                        <div style={{ background: '#000', padding: '1rem', border: '1px dashed #555', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>attack</span>():<br />
                            &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Sword Slash!"</span>)
                        </div>
                    </div>

                    {/* FILE 2 */}
                    <div>
                        <span style={{ fontSize: '0.8rem', color: '#00ff9d', borderBottom: '1px solid #00ff9d', display: 'block', marginBottom: '0.5rem' }}>📄 main.py (The entry point)</span>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #00ff9d', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>combat</span><br />
                            <br />
                            <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Fight starts!"</span>)<br />
                            <span style={{ color: '#9cdcfe' }}>combat</span>.<span style={{ color: '#dcdcaa' }}>attack</span>()
                        </div>
                    </div>

                </div>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: DICE_SIMULATOR</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Use the <code>random</code> module.
                    <br />
                    Write a script that simulates rolling two 6-sided dice. Print the result of each, and the total.
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>random</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>die1</span> = <span style={{ color: '#9cdcfe' }}>random</span>.<span style={{ color: '#dcdcaa' }}>randint</span>(<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>6</span>)<br />
                    <span style={{ color: '#9cdcfe' }}>die2</span> = <span style={{ color: '#9cdcfe' }}>random</span>.<span style={{ color: '#dcdcaa' }}>randint</span>(<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>6</span>)<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"You rolled &#123;die1&#125; and &#123;die2&#125;"</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Total: &#123;die1 + die2&#125;"</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonModules;