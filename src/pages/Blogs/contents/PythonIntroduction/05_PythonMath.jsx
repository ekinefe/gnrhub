import React from 'react';

const PythonMath = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_05: ARITHMETIC_OPERATORS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    At its core, a CPU is just a glorified calculator.
                    <br />
                    Python provides standard mathematical operators, but also includes
                    <span className="accent-text"> special operators</span> for integer division and remainders
                    that are essential for Computer Science algorithms.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. STANDARD OPERATIONS                            */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#b5cea8' }}>
                    /mode: STANDARD_MATH
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>The basics you expect from any calculator.</p>

                <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                    {/* ADDITION */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#9cdcfe' }}>ADDITION (+)</h3>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                            <span style={{ color: '#569cd6' }}>print</span>(10 + 5)
                        </div>
                        <div style={{ background: '#111', padding: '0.5rem', borderLeft: '3px solid #b5cea8', fontSize: '0.8rem', color: '#ccc' }}>
                            &gt; 15
                        </div>
                    </div>

                    {/* SUBTRACTION */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#9cdcfe' }}>SUBTRACTION (-)</h3>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                            <span style={{ color: '#569cd6' }}>print</span>(10 - 5)
                        </div>
                        <div style={{ background: '#111', padding: '0.5rem', borderLeft: '3px solid #b5cea8', fontSize: '0.8rem', color: '#ccc' }}>
                            &gt; 5
                        </div>
                    </div>

                    {/* MULTIPLICATION */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#9cdcfe' }}>MULTIPLICATION (*)</h3>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                            <span style={{ color: '#569cd6' }}>print</span>(10 * 5)
                        </div>
                        <div style={{ background: '#111', padding: '0.5rem', borderLeft: '3px solid #b5cea8', fontSize: '0.8rem', color: '#ccc' }}>
                            &gt; 50
                        </div>
                    </div>

                    {/* TRUE DIVISION */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#9cdcfe' }}>TRUE DIVISION (/)</h3>
                        <p style={{ fontSize: '0.75rem', color: '#666' }}>Always returns a FLOAT.</p>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace' }}>
                            <span style={{ color: '#569cd6' }}>print</span>(10 / 2)
                        </div>
                        <div style={{ background: '#111', padding: '0.5rem', borderLeft: '3px solid #b5cea8', fontSize: '0.8rem', color: '#ccc' }}>
                            &gt; 5.0
                        </div>
                    </div>

                </div>
            </div>

            {/* ================================================= */}
            {/* 2. ADVANCED OPERATIONS (THE IMPORTANT PART)       */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /mode: INTEGER_LOGIC
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    These operators are crucial for logic, loops, and data processing.
                </p>

                {/* FLOOR DIVISION */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>// FLOOR DIVISION</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        Divides and <b>removes the decimal</b>. It rounds <i>down</i> to the nearest whole number.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>x</span> = <span style={{ color: '#b5cea8' }}>10</span> // <span style={{ color: '#b5cea8' }}>3</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>x</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; 3 <span style={{ color: '#666' }}>(Not 3.333)</span>
                    </div>
                </div>

                {/* MODULO */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>% MODULO (Remainder)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        Returns <b>only the remainder</b> of a division. Essential for finding even/odd numbers.
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>rem</span> = <span style={{ color: '#b5cea8' }}>10</span> % <span style={{ color: '#b5cea8' }}>3</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>rem</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; 1 <span style={{ color: '#666' }}>(3 goes into 10 three times, with 1 left over)</span>
                    </div>
                </div>

                {/* EXPONENT */}
                <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>** EXPONENT (Power)</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        Raises a number to a power. (Do not use <code>^</code>, that is bitwise XOR).
                    </p>
                    <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#9cdcfe' }}>power</span> = <span style={{ color: '#b5cea8' }}>2</span> ** <span style={{ color: '#b5cea8' }}>3</span><br />
                        <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>power</span>)
                    </div>
                    <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                        &gt; 8 <span style={{ color: '#666' }}>(2 * 2 * 2)</span>
                    </div>
                </div>

            </div>

            {/* ================================================= */}
            {/* 3. STRING MATH                                    */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ce9178' }}>
                    /mode: STRING_CONCATENATION
                </h2>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                    The <code>+</code> operator behaves differently with Strings. It joins them together.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>first</span> = <span style={{ color: '#ce9178' }}>"Cyber"</span><br />
                    <span style={{ color: '#9cdcfe' }}>last</span> = <span style={{ color: '#ce9178' }}>"Punk"</span><br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>first</span> + <span style={{ color: '#ce9178' }}>" "</span> + <span style={{ color: '#9cdcfe' }}>last</span> + <span style={{ color: '#ce9178' }}>" 2077"</span>)
                </div>
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #ce9178', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; Cyber Punk 2077
                </div>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: TIME_CONVERTER</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Write a script that takes <b>7500 seconds</b> and calculates how many <b>Hours</b>,
                    <b>Minutes</b>, and <b>Seconds</b> that is.
                    <br /><br />
                    <i>Hint: Use Floor Division (//) to get hours, and Modulo (%) to get the remainder.</i>
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#9cdcfe' }}>total_seconds</span> = <span style={{ color: '#b5cea8' }}>7500</span><br /><br />

                    <span style={{ color: '#6a9955' }}># 1. Get Hours (3600 seconds in an hour)</span><br />
                    <span style={{ color: '#9cdcfe' }}>hours</span> = <span style={{ color: '#9cdcfe' }}>total_seconds</span> // <span style={{ color: '#b5cea8' }}>3600</span><br />
                    <span style={{ color: '#9cdcfe' }}>remaining_sec</span> = <span style={{ color: '#9cdcfe' }}>total_seconds</span> % <span style={{ color: '#b5cea8' }}>3600</span><br /><br />

                    <span style={{ color: '#6a9955' }}># 2. Get Minutes from the remainder</span><br />
                    <span style={{ color: '#9cdcfe' }}>minutes</span> = <span style={{ color: '#9cdcfe' }}>remaining_sec</span> // <span style={{ color: '#b5cea8' }}>60</span><br />
                    <span style={{ color: '#9cdcfe' }}>seconds</span> = <span style={{ color: '#9cdcfe' }}>remaining_sec</span> % <span style={{ color: '#b5cea8' }}>60</span><br /><br />

                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>hours</span>, <span style={{ color: '#ce9178' }}>"Hrs"</span>, <span style={{ color: '#9cdcfe' }}>minutes</span>, <span style={{ color: '#ce9178' }}>"Mins"</span>, <span style={{ color: '#9cdcfe' }}>seconds</span>, <span style={{ color: '#ce9178' }}>"Secs"</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonMath;