import React from 'react';

const PythonVariables = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_04: COMPLETE_DATA_TYPES</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    In strict memory-managed languages (like C++ or Java), you must declare types manually (e.g., <code>int x = 10;</code>).
                    <br /><br />
                    Python is <b>Dynamically Typed</b>. It automatically detects the type based on the data you assign.
                    Below is the complete registry of Python's standard primitives and containers.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. NUMERIC TYPES                                  */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#b5cea8' }}>
                    /category: NUMERICS
                </h2>

                {/* INT */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>01. INT (Integer)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Whole numbers. Python 3 integers have <b>unlimited precision</b> (they automatically act like `long` in other languages).
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>lives</span> = <span style={{ color: '#b5cea8' }}>3</span><br />
                        <span style={{ color: '#9cdcfe' }}>big_num</span> = <span style={{ color: '#b5cea8' }}>9223372036854775807</span> <span style={{ color: '#6a9955' }}># Huge number? No problem.</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>big_num</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #b5cea8', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; 9223372036854775807
                    </div>
                </div>

                {/* FLOAT */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>02. FLOAT (Floating Point)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Numbers with decimals.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>price</span> = <span style={{ color: '#b5cea8' }}>19.99</span><br />
                        <span style={{ color: '#9cdcfe' }}>scientific</span> = <span style={{ color: '#b5cea8' }}>2.5e-3</span> <span style={{ color: '#6a9955' }}># Scientific notation (0.0025)</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>scientific</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #b5cea8', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; 0.0025
                    </div>
                </div>

                {/* COMPLEX */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>03. COMPLEX</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Used in engineering/math. Written as <code>real + imaginary(j)</code>.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>z</span> = <span style={{ color: '#b5cea8' }}>2</span> + <span style={{ color: '#b5cea8' }}>3j</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>z</span>.real)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #b5cea8', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; 2.0
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. TEXT TYPES                                     */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ce9178' }}>
                    /category: TEXT_SEQUENCE
                </h2>

                {/* STRING */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>04. STR (String)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Text data inside quotes. <br />
                        <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>NOTE:</span> Python has no <code>char</code> type. A single character is just a string with length 1.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>user</span> = <span style={{ color: '#ce9178' }}>"Ekin"</span><br />
                        <span style={{ color: '#9cdcfe' }}>letter</span> = <span style={{ color: '#ce9178' }}>'A'</span> <span style={{ color: '#6a9955' }}># Still a String</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#569cd6' }}>type</span>(<span style={{ color: '#9cdcfe' }}>letter</span>))
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #ce9178', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; &lt;class 'str'&gt;
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. LOGIC & BINARY TYPES                           */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /category: LOGIC & RAW
                </h2>

                {/* BOOL */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>05. BOOL (Boolean)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        True or False values. <b style={{ color: 'var(--accent)' }}>Must be capitalized.</b>
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>is_online</span> = <span style={{ color: '#569cd6' }}>True</span><br />
                        <span style={{ color: '#9cdcfe' }}>has_error</span> = <span style={{ color: '#569cd6' }}>False</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>is_online</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #569cd6', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; True
                    </div>
                </div>

                {/* NONE */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>06. NONE (Null)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Represents the absence of a value (similar to `null` in Java/JS).
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>empty_box</span> = <span style={{ color: '#569cd6' }}>None</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>empty_box</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #569cd6', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; None
                    </div>
                </div>

                {/* BYTES */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>07. BYTES</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Immutable sequence of integers (0-255). Used for binary data handling.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>data</span> = <span style={{ color: '#ce9178' }}>b"Hello"</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>data</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #569cd6', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; b'Hello'
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* 4. CONTAINER TYPES (Advanced)                     */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: '#dcdcaa' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#dcdcaa' }}>
                    /category: CONTAINERS
                </h2>

                {/* LIST */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>08. LIST (Array)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Ordered, mutable collection. Uses square brackets <code>[]</code>.</p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>fruits</span> = [<span style={{ color: '#ce9178' }}>"apple"</span>, <span style={{ color: '#ce9178' }}>"banana"</span>]<br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>fruits</span>[0])
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #dcdcaa', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; apple
                    </div>
                </div>

                {/* TUPLE */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>09. TUPLE</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Ordered, <b>immutable</b> (cannot change). Uses parentheses <code>()</code>.</p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>coords</span> = (<span style={{ color: '#b5cea8' }}>10.5</span>, <span style={{ color: '#b5cea8' }}>20.1</span>)<br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>coords</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #dcdcaa', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; (10.5, 20.1)
                    </div>
                </div>

                {/* DICT */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>10. DICT (Dictionary)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Key-Value pairs. Like JSON. Uses curly braces <code>&#123;&#125;</code>.</p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>user</span> = &#123;<span style={{ color: '#ce9178' }}>"name"</span>: <span style={{ color: '#ce9178' }}>"Jhon"</span>, <span style={{ color: '#ce9178' }}>"id"</span>: <span style={{ color: '#b5cea8' }}>1</span>&#125;<br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>user</span>[<span style={{ color: '#ce9178' }}>"name"</span>])
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #dcdcaa', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; Jhon
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PythonVariables;