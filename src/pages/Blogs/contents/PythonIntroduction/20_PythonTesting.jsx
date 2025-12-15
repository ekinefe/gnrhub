import React from 'react';

const PythonTesting = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_20: TESTING_DEBUGGING</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    **"Code that hasn't been tested is broken."** This is the fundamental truth of professional software development.
                    <br /><br />
                    Testing gives you the confidence to refactor or expand your code without fear of breaking existing features. Python's built-in <span className="accent-text">`unittest`</span> module is the simplest way to start writing proper tests.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. THE CODE TO BE TESTED                          */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /setup: TARGET_FUNCTION
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    We need a function to test. Create a file named **`calculator.py`**:
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#6a9955' }}># Filename: calculator.py</span><br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>add</span>(<span style={{ color: '#9cdcfe' }}>a</span>, <span style={{ color: '#9cdcfe' }}>b</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#9cdcfe' }}>a</span> + <span style={{ color: '#9cdcfe' }}>b</span><br />
                    <br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>subtract</span>(<span style={{ color: '#9cdcfe' }}>a</span>, <span style={{ color: '#9cdcfe' }}>b</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#9cdcfe' }}>a</span> - <span style={{ color: '#9cdcfe' }}>b</span>
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. THE TEST SUITE (UNITTEST)                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid #4ec9b0' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /protocol: UNIT_TESTING
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Create a file named **`test_calculator.py`** in the same directory.
                    <br />
                    A **Test Case** is a class that inherits from `unittest.TestCase`. Each method starting with `test_` is an individual test.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>unittest</span><br />
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#9cdcfe' }}>calculator</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>add</span>, <span style={{ color: '#9cdcfe' }}>subtract</span><br />
                    <br />
                    <span style={{ color: '#c586c0' }}>class</span> <span style={{ color: '#dcdcaa' }}>TestCalculator</span>(<span style={{ color: '#9cdcfe' }}>unittest</span>.<span style={{ color: '#4ec9b0' }}>TestCase</span>):<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>test_add_basic</span>(<span style={{ color: '#9cdcfe' }}>self</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.<span style={{ color: '#dcdcaa' }}>assertEqual</span>(<span style={{ color: '#dcdcaa' }}>add</span>(<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>2</span>), <span style={{ color: '#b5cea8' }}>3</span>)<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>test_subtract_negatives</span>(<span style={{ color: '#9cdcfe' }}>self</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.<span style={{ color: '#dcdcaa' }}>assertEqual</span>(<span style={{ color: '#dcdcaa' }}>subtract</span>(<span style={{ color: '#b5cea8' }}>10</span>, <span style={{ color: '#b5cea8' }}>5</span>), <span style={{ color: '#b5cea8' }}>5</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.<span style={{ color: '#dcdcaa' }}>assertEqual</span>(<span style={{ color: '#dcdcaa' }}>subtract</span>(<span style={{ color: '#b5cea8' }}>5</span>, <span style={{ color: '#b5cea8' }}>10</span>), -<span style={{ color: '#b5cea8' }}>5</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> __name__ == <span style={{ color: '#ce9178' }}>'__main__'</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>unittest</span>.<span style={{ color: '#dcdcaa' }}>main</span>()
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    **Running the tests:** Open your terminal in the directory and run: <code>python -m unittest test_calculator.py</code>
                </p>
            </div>

            {/* ================================================= */}
            {/* 3. COMMON ASSERTIONS                              */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#dcdcaa' }}>
                    /keywords: ASSERT_METHODS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    These are the most common methods used inside a test method to check if a condition is met:
                </p>

                <ul style={{ listStyle: 'none', paddingLeft: '1rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}><code>self.assertEqual(a, b)</code> - Checks if `a == b`.</li>
                    <li style={{ marginBottom: '0.5rem' }}><code>self.assertTrue(x)</code> - Checks if `x` is `True`.</li>
                    <li style={{ marginBottom: '0.5rem' }}><code>self.assertFalse(x)</code> - Checks if `x` is `False`.</li>
                    <li style={{ marginBottom: '0.5rem' }}><code>self.assertIn(a, b)</code> - Checks if element `a` is present in list/tuple `b`.</li>
                    <li style={{ marginBottom: '0.5rem' }}><code>self.assertRaises(Err, func, *args)</code> - Checks if running `func` raises the specified exception.</li>
                </ul>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: TESTING_THE_DIVIDER</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Add a `divide(a, b)` function to **`calculator.py`**.
                    <br />
                    Then, add a new test method to **`test_calculator.py`** that does the following:
                    <br />
                    1.  Tests a normal division: `self.assertEqual(divide(10, 2), 5)`
                    <br />
                    2.  Tests the **ZeroDivisionError** case: `self.assertRaises(ZeroDivisionError, divide, 10, 0)`
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#6a9955' }}># In calculator.py:</span><br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>divide</span>(<span style={{ color: '#9cdcfe' }}>a</span>, <span style={{ color: '#9cdcfe' }}>b</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#9cdcfe' }}>a</span> / <span style={{ color: '#9cdcfe' }}>b</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># In test_calculator.py:</span><br />
                    <span style={{ color: '#c586c0' }}>class</span> <span style={{ color: '#dcdcaa' }}>TestCalculator</span>(...):<br />
                    &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>test_divide_exceptions</span>(<span style={{ color: '#9cdcfe' }}>self</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#9cdcfe' }}>self</span>.<span style={{ color: '#dcdcaa' }}>assertRaises</span>(<span style={{ color: '#4ec9b0' }}>ZeroDivisionError</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>divide</span>(<span style={{ color: '#b5cea8' }}>10</span>, <span style={{ color: '#b5cea8' }}>0</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonTesting;