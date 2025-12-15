import React from 'react';

const PythonInput = () => {
  return (
    <div className="blog-article">
      
      {/* === INTRO === */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_06: INTERACTIVE_INPUTS</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Static programs are boring. A true application accepts data from the user, processes it, and returns a result.
          <br/><br/>
          In Python, we open a channel for user interaction using the <span className="accent-text">input()</span> function.
        </p>
      </section>

      {/* ================================================= */}
      {/* 1. BASIC INPUT                                    */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#9cdcfe' }}>
          /mechanism: INPUT_FUNCTION
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          The program will <b>pause</b> and wait for the user to type something and press Enter. 
          The result is then stored in a variable.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#6a9955' }}># The text inside ("...") is the prompt shown to user</span><br/>
          <span style={{ color: '#9cdcfe' }}>agent_name</span> = <span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Identify yourself: "</span>)<br/>
          <br/>
          <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Access granted, "</span> + <span style={{ color: '#9cdcfe' }}>agent_name</span>)
        </div>

        {/* OUTPUT SIMULATION */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #9cdcfe', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem' }}>
          Identify yourself: <span style={{ color: '#fff', fontWeight: 'bold' }}>Ekin</span><br/>
          <span style={{ color: '#ccc' }}>&gt; Access granted, Ekin</span>
        </div>
      </div>

      {/* ================================================= */}
      {/* 2. THE TYPE TRAP (CRITICAL)                       */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid #ff3333' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ff3333' }}>
          /warning: TYPE_MISMATCH
        </h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          <b>CRITICAL RULE:</b> The <code>input()</code> function ALWAYS returns a <b>STRING</b>, even if the user types a number.
        </p>

        <div style={{ background: '#220000', border: '1px solid #ff3333', padding: '1rem', fontFamily: 'monospace', color: '#ffcccc' }}>
          <span style={{ color: '#9cdcfe' }}>age</span> = <span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Enter age: "</span>) <span style={{ color: '#ff3333' }}># User types 20</span><br/>
          <br/>
          <span style={{ color: '#6a9955' }}># THIS WILL CRASH!</span><br/>
          <span style={{ color: '#6a9955' }}># You cannot add a Number to a String ("20" + 1)</span><br/>
          <span style={{ color: '#9cdcfe' }}>next_year</span> = <span style={{ color: '#9cdcfe' }}>age</span> + <span style={{ color: '#b5cea8' }}>1</span>
        </div>
        
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#ff3333' }}>
          &gt; TypeError: can only concatenate str (not "int") to str
        </p>
      </div>

      {/* ================================================= */}
      {/* 3. TYPE CASTING (THE FIX)                         */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
          /solution: TYPE_CASTING
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          We must convert (cast) the string data into the correct type manually.
        </p>

        <div className="grid-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          
          {/* INT CASTING */}
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#4ec9b0' }}>int()</strong><br/>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.5rem' }}>Converts "5" to 5.</p>
            <code style={{ background: '#000', padding: '2px 5px' }}>x = int(input())</code>
          </div>

          {/* FLOAT CASTING */}
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#4ec9b0' }}>float()</strong><br/>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.5rem' }}>Converts "5.5" to 5.5.</p>
            <code style={{ background: '#000', padding: '2px 5px' }}>y = float(input())</code>
          </div>

          {/* STR CASTING */}
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', border: '1px solid #333' }}>
            <strong style={{ color: '#4ec9b0' }}>str()</strong><br/>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.5rem' }}>Converts 5 to "5".</p>
            <code style={{ background: '#000', padding: '2px 5px' }}>msg = "Age: " + str(age)</code>
          </div>
        </div>

        {/* CORRECTED CODE EXAMPLE */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>&gt; CORRECT IMPLEMENTATION</h3>
          <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
            <span style={{ color: '#6a9955' }}># Wrap the input function directly</span><br/>
            <span style={{ color: '#9cdcfe' }}>age</span> = <span style={{ color: '#4ec9b0' }}>int</span>(<span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Enter age: "</span>))<br/>
            <br/>
            <span style={{ color: '#9cdcfe' }}>next_year</span> = <span style={{ color: '#9cdcfe' }}>age</span> + <span style={{ color: '#b5cea8' }}>1</span><br/>
            <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Next year you will be"</span>, <span style={{ color: '#9cdcfe' }}>next_year</span>)
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* 4. CHALLENGE                                      */}
      {/* ================================================= */}
      <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
        <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: BIRTH_YEAR_CALCULATOR</h3>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>
          Create a script that asks the user for their <b>Name</b> and <b>Age</b>.
          Calculate the year they were born (assuming current year is 2025).
          <br/>
          Print a full sentence using the result.
        </p>

        <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
          <span style={{ color: '#9cdcfe' }}>name</span> = <span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Name: "</span>)<br/>
          <span style={{ color: '#9cdcfe' }}>age</span> = <span style={{ color: '#4ec9b0' }}>int</span>(<span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Age: "</span>))<br/>
          <br/>
          <span style={{ color: '#9cdcfe' }}>birth_year</span> = <span style={{ color: '#b5cea8' }}>2025</span> - <span style={{ color: '#9cdcfe' }}>age</span><br/>
          <br/>
          <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Agent "</span> + <span style={{ color: '#9cdcfe' }}>name</span> + <span style={{ color: '#ce9178' }}>", you were born in "</span> + <span style={{ color: '#4ec9b0' }}>str</span>(<span style={{ color: '#9cdcfe' }}>birth_year</span>))
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          Name: <span style={{ color: '#fff', fontWeight: 'bold' }}>Neo</span><br/>
          Age: <span style={{ color: '#fff', fontWeight: 'bold' }}>30</span><br/>
          &gt; Agent Neo, you were born in 1995
        </div>
      </div>

    </div>
  );
};

export default PythonInput;