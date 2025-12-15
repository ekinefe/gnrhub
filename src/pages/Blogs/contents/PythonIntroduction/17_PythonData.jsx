import React from 'react';

const PythonData = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_17: DATA_STRUCTURES (NUMPY)</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    While Python lists are flexible, they are slow for mathematical operations on large datasets.
                    <br /><br />
                    **NumPy** (Numerical Python) is the foundational library for Data Science and Machine Learning. It provides the **ndarray** (N-dimensional Array) which is faster, uses less memory, and is essential for linear algebra operations.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. SETUP AND THE NDARRAY                          */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /structure: NDARRAY_VECTORS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    First, install NumPy: <code>pip install numpy</code>.
                    <br />
                    The **NumPy array** is similar to a list but forces all elements to be the same type, making it highly optimized for numerical tasks.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>numpy</span> <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>np</span> <span style={{ color: '#6a9955' }}># Standard alias</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>python_list</span> = [<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>2</span>, <span style={{ color: '#b5cea8' }}>3</span>, <span style={{ color: '#b5cea8' }}>4</span>]<br />
                    <span style={{ color: '#9cdcfe' }}>numpy_array</span> = <span style={{ color: '#9cdcfe' }}>np</span>.<span style={{ color: '#dcdcaa' }}>array</span>(<span style={{ color: '#9cdcfe' }}>python_list</span>)<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>numpy_array</span>.<span style={{ color: '#9cdcfe' }}>dtype</span>) <span style={{ color: '#6a9955' }}># Check data type (usually int64)</span><br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>numpy_array</span>.<span style={{ color: '#9cdcfe' }}>shape</span>) <span style={{ color: '#6a9955' }}># Check dimensions</span>
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #4ec9b0', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; int64<br />
                    &gt; (4,)
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. VECTORIZATION (SPEED)                          */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /concept: VECTOR_OPERATIONS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    This is the main benefit: NumPy allows **element-wise operations** without needing a manual loop. This is called **vectorization** and is crucial for Machine Learning algorithms.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>data</span> = <span style={{ color: '#9cdcfe' }}>np</span>.<span style={{ color: '#dcdcaa' }}>array</span>([<span style={{ color: '#b5cea8' }}>10</span>, <span style={{ color: '#b5cea8' }}>20</span>, <span style={{ color: '#b5cea8' }}>30</span>])<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># NumPy automatically applies the operation to *every* element:</span><br />
                    <span style={{ color: '#9cdcfe' }}>result</span> = <span style={{ color: '#9cdcfe' }}>data</span> * <span style={{ color: '#b5cea8' }}>2</span> + <span style={{ color: '#b5cea8' }}>5</span><br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>result</span>)<br />
                    <span style={{ color: '#6a9955' }}># Result: [10*2 + 5, 20*2 + 5, 30*2 + 5]</span>
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #569cd6', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; [25 45 65]
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. MULTI-DIMENSIONAL ARRAYS (TENSORS)             */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /ai: TENSORS_MATRICES
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    In AI, data is often represented as **Matrices** (2D) or **Tensors** (3D+). NumPy arrays handle these perfectly.
                    <br />
                    A 2D array is created from a list of lists.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>matrix</span> = <span style={{ color: '#9cdcfe' }}>np</span>.<span style={{ color: '#dcdcaa' }}>array</span>([<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>2</span>, <span style={{ color: '#b5cea8' }}>3</span>], <span style={{ color: '#6a9955' }}># Row 0</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;[<span style={{ color: '#b5cea8' }}>4</span>, <span style={{ color: '#b5cea8' }}>5</span>, <span style={{ color: '#b5cea8' }}>6</span>]  <span style={{ color: '#6a9955' }}># Row 1</span><br />
                    ])<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>matrix</span>.<span style={{ color: '#9cdcfe' }}>shape</span>) <span style={{ color: '#6a9955' }}># (Rows, Columns)</span><br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>matrix</span>[<span style={{ color: '#b5cea8' }}>1</span>, <span style={{ color: '#b5cea8' }}>2</span>]) <span style={{ color: '#6a9955' }}># Access element at Row 1, Column 2</span>
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; (2, 3)<br />
                    &gt; 6
                </div>
            </div>


            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: DATA_NORMALIZATION</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    In Data Science, we often normalize data by subtracting the **mean** and dividing by the **standard deviation**.
                    <br />
                    1. Create a NumPy array from the list: <code>[5, 10, 15, 20]</code>
                    <br />
                    2. Calculate the mean and standard deviation (use <code>.mean()</code> and <code>.std()</code>).
                    <br />
                    3. Apply the formula: **normalized = (data - mean) / std**
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>numpy</span> <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>np</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>data</span> = <span style={{ color: '#9cdcfe' }}>np</span>.<span style={{ color: '#dcdcaa' }}>array</span>([<span style={{ color: '#b5cea8' }}>5</span>, <span style={{ color: '#b5cea8' }}>10</span>, <span style={{ color: '#b5cea8' }}>15</span>, <span style={{ color: '#b5cea8' }}>20</span>])<br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>data_mean</span> = <span style={{ color: '#9cdcfe' }}>data</span>.<span style={{ color: '#dcdcaa' }}>mean</span>()<br />
                    <span style={{ color: '#9cdcfe' }}>data_std</span> = <span style={{ color: '#9cdcfe' }}>data</span>.<span style={{ color: '#dcdcaa' }}>std</span>()<br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>normalized_data</span> = (<span style={{ color: '#9cdcfe' }}>data</span> - <span style={{ color: '#9cdcfe' }}>data_mean</span>) / <span style={{ color: '#9cdcfe' }}>data_std</span><br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Mean: &#123;data_mean&#125;"</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Normalized: &#123;normalized_data&#125;"</span>)
                </div>

                {/* Expected Output */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; Mean: 12.5<br />
                    &gt; Normalized: [-1.34164079 -0.4472136   0.4472136   1.34164079]
                </div>
            </div>

        </div>
    );
};

export default PythonData;
