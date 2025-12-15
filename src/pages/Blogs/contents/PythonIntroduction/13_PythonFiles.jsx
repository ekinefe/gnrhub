import React from 'react';

const PythonFiles = () => {
  return (
    <div className="blog-article">

      {/* === INTRO === */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_13: FILE_SYSTEM_IO</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Variables live in <span className="accent-text">RAM</span> (Volatile Memory). When your script ends, they vanish.
          <br /><br />
          To create persistent software (Logs, Save Games, Databases), we must learn to read from and write to the <span className="accent-text">Disk</span>.
        </p>
      </section>

      {/* ================================================= */}
      {/* 1. THE OPEN FUNCTION & MODES                      */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
          /mechanism: ACCESS_MODES
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          We use the <code>open(filename, mode)</code> function. The <b>mode</b> tells Python what we intend to do.
        </p>

        <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#9cdcfe' }}>'r' (Read)</strong>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Default. Opens for reading. Crashes if file doesn't exist.</p>
          </div>
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#ce9178' }}>'w' (Write)</strong>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Creates new file. <span style={{ color: '#ff3333' }}>Deletes old content!</span></p>
          </div>
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#b5cea8' }}>'a' (Append)</strong>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Adds data to the end. Does not delete old content.</p>
          </div>
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#c586c0' }}>'x' (Create)</strong>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Creates specific file. Returns error if it exists.</p>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* 2. THE SAFE WAY (WITH CONTEXT MANAGER)            */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
          /protocol: CONTEXT_MANAGER
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          <b>The Old Way:</b> You had to manually `close()` the file. If code crashed before closing, the file could get corrupted.
          <br />
          <b>The New Way:</b> Use the <code>with</code> keyword. It automatically closes the file for you, even if errors occur.
        </p>



        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#6a9955' }}># Writing to a file</span><br />
          <span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#569cd6' }}>open</span>(<span style={{ color: '#ce9178' }}>"data.txt"</span>, <span style={{ color: '#ce9178' }}>"w"</span>) <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>file</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>file</span>.<span style={{ color: '#dcdcaa' }}>write</span>(<span style={{ color: '#ce9178' }}>"Log Entry 01\n"</span>)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>file</span>.<span style={{ color: '#dcdcaa' }}>write</span>(<span style={{ color: '#ce9178' }}>"System Stable."</span>)<br />
          <br />
          <span style={{ color: '#6a9955' }}># Reading from a file</span><br />
          <span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#569cd6' }}>open</span>(<span style={{ color: '#ce9178' }}>"data.txt"</span>, <span style={{ color: '#ce9178' }}>"r"</span>) <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>file</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>content</span> = <span style={{ color: '#9cdcfe' }}>file</span>.<span style={{ color: '#dcdcaa' }}>read</span>()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>content</span>)
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #4ec9b0', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; Log Entry 01<br />
          &gt; System Stable.
        </div>
      </div>

      {/* ================================================= */}
      {/* 3. WORKING WITH JSON (DATA SCIENCE)               */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
          /format: JSON_STRUCTURES
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Text files are simple, but for complex data (Lists, Dictionaries), we use <b>JSON</b>.
          It is the standard for Web APIs and Config files.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>json</span><br />
          <br />
          <span style={{ color: '#9cdcfe' }}>user_data</span> = &#123;<span style={{ color: '#ce9178' }}>"name"</span>: <span style={{ color: '#ce9178' }}>"Ekin"</span>, <span style={{ color: '#ce9178' }}>"level"</span>: <span style={{ color: '#b5cea8' }}>99</span>&#125;<br />
          <br />
          <span style={{ color: '#6a9955' }}># SAVE (Dump)</span><br />
          <span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#569cd6' }}>open</span>(<span style={{ color: '#ce9178' }}>"save.json"</span>, <span style={{ color: '#ce9178' }}>"w"</span>) <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>json</span>.<span style={{ color: '#dcdcaa' }}>dump</span>(<span style={{ color: '#9cdcfe' }}>user_data</span>, <span style={{ color: '#9cdcfe' }}>f</span>)<br />
          <br />
          <span style={{ color: '#6a9955' }}># LOAD</span><br />
          <span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#569cd6' }}>open</span>(<span style={{ color: '#ce9178' }}>"save.json"</span>, <span style={{ color: '#ce9178' }}>"r"</span>) <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>loaded_data</span> = <span style={{ color: '#9cdcfe' }}>json</span>.<span style={{ color: '#dcdcaa' }}>load</span>(<span style={{ color: '#9cdcfe' }}>f</span>)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>loaded_data</span>[<span style={{ color: '#ce9178' }}>"name"</span>])
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; Ekin
        </div>
      </div>

      {/* ================================================= */}
      {/* 4. CHALLENGE                                      */}
      {/* ================================================= */}
      <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
        <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: LOGGING_SYSTEM</h3>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>
          Create a script that asks the user for a message.
          <br />
          Append that message to a file called <code>history.txt</code>.
          <br />
          Then, read the whole file and print it back to show the history.
        </p>

        <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
          <span style={{ color: '#9cdcfe' }}>msg</span> = <span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Enter Log: "</span>)<br />
          <br />
          <span style={{ color: '#6a9955' }}># Use 'a' for Append mode</span><br />
          <span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#569cd6' }}>open</span>(<span style={{ color: '#ce9178' }}>"history.txt"</span>, <span style={{ color: '#ce9178' }}>"a"</span>) <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>f</span>.<span style={{ color: '#dcdcaa' }}>write</span>(<span style={{ color: '#9cdcfe' }}>msg</span> + <span style={{ color: '#ce9178' }}>"\n"</span>)<br />
          <br />
          <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"--- LOG HISTORY ---"</span>)<br />
          <span style={{ color: '#c586c0' }}>with</span> <span style={{ color: '#569cd6' }}>open</span>(<span style={{ color: '#ce9178' }}>"history.txt"</span>, <span style={{ color: '#ce9178' }}>"r"</span>) <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>f</span>.<span style={{ color: '#dcdcaa' }}>read</span>())
        </div>
      </div>

    </div>
  );
};

export default PythonFiles;