import React from 'react';

const PythonPerformance = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_19: HIGH_PERFORMANCE</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    In AI and Big Data, milliseconds matter. A script that takes 1 hour to run is useless if it could run in 5 minutes.
                    <br /><br />
                    To write efficient Python, you must understand <span className="accent-text">Time Complexity</span> and how to manage <span className="accent-text">Memory</span> using Generators.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. PROFILING (MEASURING SPEED)                    */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /tool: PERF_COUNTER
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    You cannot optimize what you cannot measure. Use the <code>time</code> module to benchmark your code.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>time</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>start</span> = <span style={{ color: '#9cdcfe' }}>time</span>.<span style={{ color: '#dcdcaa' }}>perf_counter</span>() <span style={{ color: '#6a9955' }}># Start Clock</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># --- Heavy Task ---</span><br />
                    <span style={{ color: '#9cdcfe' }}>total</span> = <span style={{ color: '#b5cea8' }}>0</span><br />
                    <span style={{ color: '#c586c0' }}>for</span> <span style={{ color: '#9cdcfe' }}>i</span> <span style={{ color: '#c586c0' }}>in</span> <span style={{ color: '#dcdcaa' }}>range</span>(<span style={{ color: '#b5cea8' }}>1_000_000</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>total</span> += <span style={{ color: '#9cdcfe' }}>i</span><br />
                    <span style={{ color: '#6a9955' }}># ------------------</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>end</span> = <span style={{ color: '#9cdcfe' }}>time</span>.<span style={{ color: '#dcdcaa' }}>perf_counter</span>() <span style={{ color: '#6a9955' }}># Stop Clock</span><br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Execution Time: &#123;end - start:.5f&#125; seconds"</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. LIST COMPREHENSIONS (SPEED)                    */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /technique: COMPREHENSIONS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Standard loops are slow because Python interprets them line-by-line.
                    <b>List Comprehensions</b> are optimized C-speed shortcuts for creating lists.
                </p>

                <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {/* THE SLOW WAY */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#ff3333' }}>THE SLOW WAY</h3>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                            <span style={{ color: '#9cdcfe' }}>squares</span> = []<br />
                            <span style={{ color: '#c586c0' }}>for</span> <span style={{ color: '#9cdcfe' }}>x</span> <span style={{ color: '#c586c0' }}>in</span> <span style={{ color: '#dcdcaa' }}>range</span>(<span style={{ color: '#b5cea8' }}>10</span>):<br />
                            &nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>squares</span>.<span style={{ color: '#dcdcaa' }}>append</span>(<span style={{ color: '#9cdcfe' }}>x</span>**<span style={{ color: '#b5cea8' }}>2</span>)
                        </div>
                    </div>

                    {/* THE FAST WAY */}
                    <div>
                        <h3 style={{ fontSize: '1rem', color: '#00ff9d' }}>THE FAST WAY</h3>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                            <span style={{ color: '#6a9955' }}># [expression for item in list]</span><br />
                            <span style={{ color: '#9cdcfe' }}>squares</span> = [<span style={{ color: '#9cdcfe' }}>x</span>**<span style={{ color: '#b5cea8' }}>2</span> <span style={{ color: '#c586c0' }}>for</span> <span style={{ color: '#9cdcfe' }}>x</span> <span style={{ color: '#c586c0' }}>in</span> <span style={{ color: '#dcdcaa' }}>range</span>(<span style={{ color: '#b5cea8' }}>10</span>)]
                        </div>
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. GENERATORS (MEMORY EFFICIENCY)                 */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /concept: LAZY_EVALUATION
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    <b>Scenario:</b> You need to process 1 Billion numbers.
                    <br />
                    If you use a List, Python tries to load all 1 Billion into RAM instantly. <b>Your PC crashes.</b>
                    <br />
                    <b>Generators</b> (using <code>yield</code>) produce one number at a time, use almost 0 RAM, and wait until you ask for the next one.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>number_generator</span>():<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>for</span> <span style={{ color: '#9cdcfe' }}>i</span> <span style={{ color: '#c586c0' }}>in</span> <span style={{ color: '#dcdcaa' }}>range</span>(<span style={{ color: '#b5cea8' }}>1000000</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>yield</span> <span style={{ color: '#9cdcfe' }}>i</span> <span style={{ color: '#6a9955' }}># Pauses here, returns value, saves state</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>gen</span> = <span style={{ color: '#dcdcaa' }}>number_generator</span>()<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#569cd6' }}>next</span>(<span style={{ color: '#9cdcfe' }}>gen</span>)) <span style={{ color: '#6a9955' }}># 0</span><br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#569cd6' }}>next</span>(<span style={{ color: '#9cdcfe' }}>gen</span>)) <span style={{ color: '#6a9955' }}># 1</span>
                </div>
            </div>


            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: SPEED_TEST</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Prove that **List Comprehensions** are faster.
                    <br />
                    1. Create a loop that squares 10 million numbers. Time it.
                    <br />
                    2. Create a comprehension that does the same. Time it.
                    <br />
                    3. Print the difference.
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>time</span><br />
                    <span style={{ color: '#9cdcfe' }}>N</span> = <span style={{ color: '#b5cea8' }}>10_000_000</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># TEST 1: LOOP</span><br />
                    <span style={{ color: '#9cdcfe' }}>s1</span> = <span style={{ color: '#9cdcfe' }}>time</span>.<span style={{ color: '#dcdcaa' }}>perf_counter</span>()<br />
                    <span style={{ color: '#9cdcfe' }}>lst</span> = []<br />
                    <span style={{ color: '#c586c0' }}>for</span> <span style={{ color: '#9cdcfe' }}>i</span> <span style={{ color: '#c586c0' }}>in</span> <span style={{ color: '#dcdcaa' }}>range</span>(<span style={{ color: '#9cdcfe' }}>N</span>):<br />
                    &nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>lst</span>.<span style={{ color: '#dcdcaa' }}>append</span>(<span style={{ color: '#9cdcfe' }}>i</span>*<span style={{ color: '#9cdcfe' }}>i</span>)<br />
                    <span style={{ color: '#9cdcfe' }}>e1</span> = <span style={{ color: '#9cdcfe' }}>time</span>.<span style={{ color: '#dcdcaa' }}>perf_counter</span>()<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># TEST 2: COMPREHENSION</span><br />
                    <span style={{ color: '#9cdcfe' }}>s2</span> = <span style={{ color: '#9cdcfe' }}>time</span>.<span style={{ color: '#dcdcaa' }}>perf_counter</span>()<br />
                    <span style={{ color: '#9cdcfe' }}>lst2</span> = [<span style={{ color: '#9cdcfe' }}>i</span>*<span style={{ color: '#9cdcfe' }}>i</span> <span style={{ color: '#c586c0' }}>for</span> <span style={{ color: '#9cdcfe' }}>i</span> <span style={{ color: '#c586c0' }}>in</span> <span style={{ color: '#dcdcaa' }}>range</span>(<span style={{ color: '#9cdcfe' }}>N</span>)]<br />
                    <span style={{ color: '#9cdcfe' }}>e2</span> = <span style={{ color: '#9cdcfe' }}>time</span>.<span style={{ color: '#dcdcaa' }}>perf_counter</span>()<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Loop Time: &#123;e1-s1:.4f&#125;"</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Comp Time: &#123;e2-s2:.4f&#125;"</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonPerformance;