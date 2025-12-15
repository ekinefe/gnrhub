import React from 'react';

const PythonFunctions = () => {
  return (
    <div className="blog-article">

      {/* === INTRO === */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_08: FUNCTIONS_DECONSTRUCTED</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          As programs grow, code needs to be organized, reusable, and readable. This is **Modular Programming**.
          <br /><br />
          A **Function** is a named block of code that only runs when it is called. It allows you to package a sequence of operations into a single unit, which is vital for building complex AI and Data Science pipelines.
        </p>
      </section>

      {/* ================================================= */}
      {/* 1. DEFINITION AND EXECUTION                       */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
          /tool: DEFINE_CALL
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          We define a function using the keyword <code>def</code>. Remember that the code inside the function must be **indented** (just like `if` statements).
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#4ec9b0' }}>display_status</span>(): <span style={{ color: '#6a9955' }}># 1. Definition (Name and Parentheses)</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"SYSTEM: Online"</span>)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"STATUS: Nominal"</span>)<br />
          <br />
          <span style={{ color: '#4ec9b0' }}>display_status</span>() <span style={{ color: '#6a9955' }}># 2. Execution (Calling the function)</span><br />
          <span style={{ color: '#4ec9b0' }}>display_status</span>() <span style={{ color: '#6a9955' }}># 3. Call it again, reuse the code!</span>
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #4ec9b0', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; SYSTEM: Online<br />
          &gt; STATUS: Nominal<br />
          &gt; SYSTEM: Online<br />
          &gt; STATUS: Nominal
        </div>
      </div>

      {/* ================================================= */}
      {/* 2. ARGUMENTS AND PARAMETERS                       */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#dcdcaa' }}>
          /mechanism: PASSING_DATA
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          **Parameters** are variables defined in the function header. **Arguments** are the values you pass into the function when you call it. This lets a function operate on different data each time.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>calculate_fuel_cost</span>(<span style={{ color: '#9cdcfe' }}>distance</span>, <span style={{ color: '#9cdcfe' }}>rate</span>): <span style={{ color: '#6a9955' }}># Parameters: distance, rate</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>cost</span> = <span style={{ color: '#9cdcfe' }}>distance</span> * <span style={{ color: '#9cdcfe' }}>rate</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Total Cost: ${cost}"</span>)<br />
          <br />
          <span style={{ color: '#dcdcaa' }}>calculate_fuel_cost</span>(<span style={{ color: '#b5cea8' }}>1500</span>, <span style={{ color: '#b5cea8' }}>0.25</span>) <span style={{ color: '#6a9955' }}># Arguments: 1500, 0.25</span><br />
          <span style={{ color: '#dcdcaa' }}>calculate_fuel_cost</span>(<span style={{ color: '#b5cea8' }}>400</span>, <span style={{ color: '#b5cea8' }}>0.50</span>)
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #dcdcaa', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; Total Cost: $375.0<br />
          &gt; Total Cost: $200.0
        </div>
      </div>

      {/* ================================================= */}
      {/* 3. RETURN STATEMENT (OUTPUT)                      */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#c586c0' }}>
          /mechanism: RETURN_DATA
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          The **`return`** keyword sends a value back to the place where the function was called. This is the **standard way** functions communicate results. Functions can only return one value, but that value can be a complex container like a List or Dictionary.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#c586c0' }}>get_signature</span>(<span style={{ color: '#9cdcfe' }}>name</span>):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>message</span> = <span style={{ color: '#ce9178' }}>"AUTHORISED AGENT: "</span> + <span style={{ color: '#9cdcfe' }}>name</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#9cdcfe' }}>message</span> <span style={{ color: '#6a9955' }}># Returns the string value</span><br />
          <br />
          <span style={{ color: '#9cdcfe' }}>header</span> = <span style={{ color: '#c586c0' }}>get_signature</span>(<span style={{ color: '#ce9178' }}>"Ekin"</span>)<br />
          <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>header</span>)
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #c586c0', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; AUTHORISED AGENT: Ekin
        </div>
      </div>

      {/* ================================================= */}
      {/* 4. SCOPE (ADVANCED)                               */}
      {/* ================================================= */}
      <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
          /concept: SCOPE_LIFECYCLE
        </h2>
        <p style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
          **Scope** dictates where a variable can be accessed. Variables created inside a function are **Local** and cease to exist once the function finishes running.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#9cdcfe' }}>GLOBAL_KEY</span> = <span style={{ color: '#ce9178' }}>"AccessCode1"</span> <span style={{ color: '#6a9955' }}># Global Scope</span><br />
          <br />
          <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#4ec9b0' }}>process_data</span>():<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>local_count</span> = <span style={{ color: '#b5cea8' }}>5</span> <span style={{ color: '#6a9955' }}># Local Scope - Dies when function ends</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>local_count</span>)<br />
          <br />
          <span style={{ color: '#4ec9b0' }}>process_data</span>()<br />
          <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>GLOBAL_KEY</span>)<br />
          <span style={{ color: '#6a9955' }}># print(local_count) - THIS WOULD CAUSE A CRASH (NameError)</span>
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; 5<br />
          &gt; AccessCode1
        </div>
      </div>

    </div>
  );
};

export default PythonFunctions;