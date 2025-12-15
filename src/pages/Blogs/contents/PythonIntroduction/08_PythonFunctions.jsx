import React from 'react';

const PythonFunctions = () => {
  return (
    <div className="blog-article">
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_08: FUNCTIONS</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Functions are reusable blocks of code. They allow you to organize your logic.
        </p>
      </section>

      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
          /tool: DEFINE_CALL
        </h2>
        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#4ec9b0' }}>greet</span>():<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Hello World"</span>)<br />
          <br />
          <span style={{ color: '#4ec9b0' }}>greet</span>()
        </div>
      </div>
    </div>
  );
};

export default PythonFunctions;