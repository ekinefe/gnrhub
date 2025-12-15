import React from 'react';

const PythonGUI = () => {
  return (
    <div className="blog-article">

      {/* === INTRO === */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_15: GRAPHICAL_INTERFACES</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Console apps are efficient, but visual. To make software accessible to humans, we wrap our logic in a <span className="accent-text">GUI (Graphical User Interface)</span>.
          <br /><br />
          Python comes with a standard GUI library called <b>Tkinter</b>. No installation required.
        </p>
      </section>

      {/* ================================================= */}
      {/* 1. THE WINDOW & EVENT LOOP                        */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
          /structure: THE_MAIN_LOOP
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Unlike a script that runs top-to-bottom and quits, a GUI must stay open waiting for clicks.
          This is called the <b>Event Loop</b> (<code>mainloop</code>).
        </p>



        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>tkinter</span> <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>tk</span><br />
          <br />
          <span style={{ color: '#6a9955' }}># 1. Create the main window</span><br />
          <span style={{ color: '#9cdcfe' }}>root</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Tk</span>()<br />
          <span style={{ color: '#9cdcfe' }}>root</span>.<span style={{ color: '#dcdcaa' }}>title</span>(<span style={{ color: '#ce9178' }}>"CyberDeck v1.0"</span>)<br />
          <span style={{ color: '#9cdcfe' }}>root</span>.<span style={{ color: '#dcdcaa' }}>geometry</span>(<span style={{ color: '#ce9178' }}>"400x300"</span>)<br />
          <br />
          <span style={{ color: '#6a9955' }}># 2. Add a Label widget</span><br />
          <span style={{ color: '#9cdcfe' }}>label</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Label</span>(<span style={{ color: '#9cdcfe' }}>root</span>, <span style={{ color: '#9cdcfe' }}>text</span>=<span style={{ color: '#ce9178' }}>"SYSTEM READY"</span>, <span style={{ color: '#9cdcfe' }}>font</span>=(<span style={{ color: '#ce9178' }}>"Arial"</span>, <span style={{ color: '#b5cea8' }}>20</span>))<br />
          <span style={{ color: '#9cdcfe' }}>label</span>.<span style={{ color: '#dcdcaa' }}>pack</span>(<span style={{ color: '#9cdcfe' }}>pady</span>=<span style={{ color: '#b5cea8' }}>20</span>)<br />
          <br />
          <span style={{ color: '#6a9955' }}># 3. Start the infinite loop (Window stays open)</span><br />
          <span style={{ color: '#9cdcfe' }}>root</span>.<span style={{ color: '#dcdcaa' }}>mainloop</span>()
        </div>
      </div>

      {/* ================================================= */}
      {/* 2. INTERACTIVITY (BUTTONS)                        */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
          /action: BUTTON_LOGIC
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          To make a button "do" something, we define a function first, then link it to the button using the <code>command=</code> parameter.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>on_click</span>():<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Button was pressed!"</span>)<br />
          <br />
          <span style={{ color: '#9cdcfe' }}>btn</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Button</span>(<span style={{ color: '#9cdcfe' }}>root</span>, <span style={{ color: '#9cdcfe' }}>text</span>=<span style={{ color: '#ce9178' }}>"LAUNCH"</span>, <span style={{ color: '#9cdcfe' }}>command</span>=<span style={{ color: '#dcdcaa' }}>on_click</span>)<br />
          <span style={{ color: '#9cdcfe' }}>btn</span>.<span style={{ color: '#dcdcaa' }}>pack</span>()
        </div>
      </div>

      {/* ================================================= */}
      {/* 3. INPUT FIELDS (ENTRY)                           */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
          /input: USER_DATA
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          We use the <code>Entry</code> widget to let users type text. We use <code>.get()</code> to retrieve that text.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#9cdcfe' }}>entry_box</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Entry</span>(<span style={{ color: '#9cdcfe' }}>root</span>, <span style={{ color: '#9cdcfe' }}>width</span>=<span style={{ color: '#b5cea8' }}>30</span>)<br />
          <span style={{ color: '#9cdcfe' }}>entry_box</span>.<span style={{ color: '#dcdcaa' }}>pack</span>()<br />
          <br />
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>get_name</span>():<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>user_text</span> = <span style={{ color: '#9cdcfe' }}>entry_box</span>.<span style={{ color: '#dcdcaa' }}>get</span>()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"User typed: &#123;user_text&#125;"</span>)
        </div>
      </div>

      {/* ================================================= */}
      {/* 4. CHALLENGE                                      */}
      {/* ================================================= */}
      <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
        <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: CLICK_COUNTER</h3>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>
          Create a GUI app with a Label "Count: 0" and a Button "Add +1".
          <br />
          Every time you click the button, update the label to show the new number.
        </p>

        <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
          <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>tkinter</span> <span style={{ color: '#c586c0' }}>as</span> <span style={{ color: '#9cdcfe' }}>tk</span><br />
          <br />
          <span style={{ color: '#9cdcfe' }}>count</span> = <span style={{ color: '#b5cea8' }}>0</span><br />
          <br />
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>increase</span>():<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>global</span> <span style={{ color: '#9cdcfe' }}>count</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>count</span> += <span style={{ color: '#b5cea8' }}>1</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>lbl</span>.<span style={{ color: '#dcdcaa' }}>config</span>(<span style={{ color: '#9cdcfe' }}>text</span>=<span style={{ color: '#ce9178' }}>f"Count: &#123;count&#125;"</span>) <span style={{ color: '#6a9955' }}># Update Text</span><br />
          <br />
          <span style={{ color: '#9cdcfe' }}>root</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Tk</span>()<br />
          <span style={{ color: '#9cdcfe' }}>lbl</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Label</span>(<span style={{ color: '#9cdcfe' }}>root</span>, <span style={{ color: '#9cdcfe' }}>text</span>=<span style={{ color: '#ce9178' }}>"Count: 0"</span>, <span style={{ color: '#9cdcfe' }}>font</span>=(<span style={{ color: '#ce9178' }}>"Arial"</span>, <span style={{ color: '#b5cea8' }}>24</span>))<br />
          <span style={{ color: '#9cdcfe' }}>lbl</span>.<span style={{ color: '#dcdcaa' }}>pack</span>(<span style={{ color: '#9cdcfe' }}>pady</span>=<span style={{ color: '#b5cea8' }}>20</span>)<br />
          <br />
          <span style={{ color: '#9cdcfe' }}>btn</span> = <span style={{ color: '#9cdcfe' }}>tk</span>.<span style={{ color: '#dcdcaa' }}>Button</span>(<span style={{ color: '#9cdcfe' }}>root</span>, <span style={{ color: '#9cdcfe' }}>text</span>=<span style={{ color: '#ce9178' }}>"ADD +1"</span>, <span style={{ color: '#9cdcfe' }}>command</span>=<span style={{ color: '#dcdcaa' }}>increase</span>)<br />
          <span style={{ color: '#9cdcfe' }}>btn</span>.<span style={{ color: '#dcdcaa' }}>pack</span>()<br />
          <br />
          <span style={{ color: '#9cdcfe' }}>root</span>.<span style={{ color: '#dcdcaa' }}>mainloop</span>()
        </div>
      </div>

    </div>
  );
};

export default PythonGUI;