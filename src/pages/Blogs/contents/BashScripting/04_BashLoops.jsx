import React from 'react';

const BashLoops = () => {
    return (
        <div className="blog-article">
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_04: LOOPS</h2>
            </section>
            <div className="tech-card">
                <h2 style={{ color: '#ce9178', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/logic: LOOPS</h2>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: '#ce9178' }}>FOR LOOP (Ranges)</h3>
                    <div style={{ background: '#000', padding: '1rem', border: '1px dashed #444', fontFamily: 'monospace' }}>
                        <span style={{ color: '#c586c0' }}>for</span> i <span style={{ color: '#c586c0' }}>in</span> &#123;1..5&#125;; <span style={{ color: '#c586c0' }}>do</span><br />
                        &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Count: $i"</span><br />
                        <span style={{ color: '#c586c0' }}>done</span>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1rem', color: '#ce9178' }}>FOR LOOP (Files - The most useful one)</h3>
                    <div style={{ background: '#000', padding: '1rem', border: '1px dashed #444', fontFamily: 'monospace' }}>
                        <span style={{ color: '#c586c0' }}>for</span> FILE <span style={{ color: '#c586c0' }}>in</span> *.txt; <span style={{ color: '#c586c0' }}>do</span><br />
                        &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>echo</span> <span style={{ color: '#ce9178' }}>"Processing $FILE..."</span><br />
                        &nbsp;&nbsp;<span style={{ color: '#dcdcaa' }}>mv</span> <span style={{ color: '#9cdcfe' }}>"$FILE"</span> <span style={{ color: '#ce9178' }}>"backup_$FILE"</span><br />
                        <span style={{ color: '#c586c0' }}>done</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BashLoops;