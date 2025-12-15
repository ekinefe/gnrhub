import React from 'react';

const PythonFuture = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_22: BEYOND_THE_HORIZON</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <b>Congratulations.</b> You have successfully initialized your Python Core database.
                    <br />
                    However, the syntax was just the tutorial level. The real game begins now.
                    <br /><br />
                    As a student of <span className="accent-text">AI & Data Science</span>, your journey branches into three distinct advanced tech trees.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. THE DATA SCIENCE STACK                         */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /path: DATA_ENGINEERING
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    You know NumPy. The next level is **Pandas**. It is "Excel for Python," but million times faster and programmable.
                </p>



                <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
                        <strong style={{ color: '#4ec9b0' }}>Pandas</strong>
                        <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Data manipulation, cleaning, and CSV/Excel processing.</p>
                    </div>
                    <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
                        <strong style={{ color: '#4ec9b0' }}>Matplotlib / Seaborn</strong>
                        <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Visualizing data. Creating graphs, heatmaps, and charts.</p>
                    </div>
                </div>

                <div style={{ marginTop: '1rem', background: '#000', border: '1px dashed #333', padding: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>pandas</span> <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>pd</span><br />
                    <span style={{ color: '#9cdcfe' }}>df</span> = <span style={{ color: '#9cdcfe' }}>pd</span>.<span style={{ color: '#dcdcaa' }}>read_csv</span>(<span style={{ color: '#ce9178' }}>"genome_data.csv"</span>)<br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>df</span>.<span style={{ color: '#dcdcaa' }}>describe</span>()) <span style={{ color: '#6a9955' }}># Automatic statistical summary</span>
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. THE ARTIFICIAL INTELLIGENCE STACK              */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /path: NEURAL_ARCHITECT
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    This is your primary target. You will move from explicit programming (if/else) to **Machine Learning** (pattern recognition).
                </p>

                <div className="grid-layout" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
                    <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #ff9900' }}>
                        <strong style={{ color: '#fff' }}>1. Scikit-Learn (The Basics)</strong>
                        <p style={{ fontSize: '0.85rem', color: '#ccc' }}>Linear Regression, Decision Trees, Clustering. Good for tabular data.</p>
                    </div>
                    <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #ee4c2c' }}>
                        <strong style={{ color: '#fff' }}>2. PyTorch (The Standard)</strong>
                        <p style={{ fontSize: '0.85rem', color: '#ccc' }}>Used by Tesla, Meta, and OpenAI. Deep Learning and Neural Networks.</p>
                    </div>
                    <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #ff6f00' }}>
                        <strong style={{ color: '#fff' }}>3. TensorFlow / Keras</strong>
                        <p style={{ fontSize: '0.85rem', color: '#ccc' }}>Google's massive ML framework. Powering production AI systems.</p>
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. AUTOMATION & MODERN WEB                        */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /path: SYSTEM_AUTOMATION
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Don't just analyze data; control the machine.
                </p>

                <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.9rem' }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{ color: '#569cd6', marginRight: '10px' }}>&gt;</span>
                        <strong>Selenium / Playwright:</strong> You know this one. Controlling browsers to scrape data for your datasets.
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{ color: '#569cd6', marginRight: '10px' }}>&gt;</span>
                        <strong>FastAPI:</strong> The modern successor to Flask. It is faster and auto-generates documentation. Ideal for serving AI models.
                    </li>
                    <li>
                        <span style={{ color: '#569cd6', marginRight: '10px' }}>&gt;</span>
                        <strong>Airflow:</strong> Orchestrating complex data pipelines (e.g., "Every night at 3 AM, retrain the model").
                    </li>
                </ul>
            </div>

            {/* ================================================= */}
            {/* 4. FINAL SYSTEM CHECK                             */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)', background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 100%)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0, textAlign: 'center' }}>&gt; SYSTEM: CURRICULUM_COMPLETE</h3>
                <p style={{ margin: '1rem 0', textAlign: 'center', color: '#fff' }}>
                    You have acquired the foundational syntax.
                    <br />
                    Your logic processors are upgraded.
                    <br />
                    Your next objective is to build something **real**.
                </p>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>End of Line.</p>
                </div>
            </div>

        </div>
    );
};

export default PythonFuture;