import React from 'react';

const PythonClasses = () => {
  return (
    <div className="blog-article">

      {/* === INTRO === */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_09: OBJECT_ARCHITECTURES</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Functions are great for actions, but what if you need to represent a complex entity?
          Like a User, a Spaceship, or a Neural Network Layer?
          <br /><br />
          This is where <span className="accent-text">Object-Oriented Programming (OOP)</span> begins.
          We define a <b>Class</b> (the blueprint) and create <b>Objects</b> (the actual buildings based on that blueprint).
        </p>
      </section>

      {/* ================================================= */}
      {/* 1. THE CLASS (BLUEPRINT)                          */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
          /structure: THE_BLUEPRINT
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          A Class defines what an object <i>has</i> (Attributes) and what it <i>can do</i> (Methods).
          <br />
          It uses the <code>class</code> keyword. Capitalize class names by convention.
        </p>

        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#569cd6' }}>class</span> <span style={{ color: '#4ec9b0' }}>Droid</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#6a9955' }}># This is the "Constructor" - runs when you create a new Droid</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>__init__</span>(<span style={{ color: '#9cdcfe' }}>self</span>, <span style={{ color: '#9cdcfe' }}>model_name</span>, <span style={{ color: '#9cdcfe' }}>battery</span>):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.model = <span style={{ color: '#9cdcfe' }}>model_name</span> <span style={{ color: '#6a9955' }}># Attribute</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.power = <span style={{ color: '#9cdcfe' }}>battery</span>    <span style={{ color: '#6a9955' }}># Attribute</span><br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#6a9955' }}># A Method (Function inside a class)</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>introduce</span>(<span style={{ color: '#9cdcfe' }}>self</span>):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Unit &#123;self.model&#125; active. Power: &#123;self.power&#125;%"</span>)
        </div>
      </div>

      {/* ================================================= */}
      {/* 2. THE OBJECT (INSTANCE)                          */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#9cdcfe' }}>
          /mechanism: INSTANTIATION
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          The class is just code. To use it, we must create an **Instance** (an actual object in memory).
        </p>



        <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
          <span style={{ color: '#6a9955' }}># Creating two different objects from the same blueprint</span><br />
          <span style={{ color: '#9cdcfe' }}>droid_1</span> = <span style={{ color: '#4ec9b0' }}>Droid</span>(<span style={{ color: '#ce9178' }}>"R2-D2"</span>, <span style={{ color: '#b5cea8' }}>100</span>)<br />
          <span style={{ color: '#9cdcfe' }}>droid_2</span> = <span style={{ color: '#4ec9b0' }}>Droid</span>(<span style={{ color: '#ce9178' }}>"C-3PO"</span>, <span style={{ color: '#b5cea8' }}>45</span>)<br />
          <br />
          <span style={{ color: '#6a9955' }}># Using their methods</span><br />
          <span style={{ color: '#9cdcfe' }}>droid_1</span>.<span style={{ color: '#dcdcaa' }}>introduce</span>()<br />
          <span style={{ color: '#9cdcfe' }}>droid_2</span>.<span style={{ color: '#dcdcaa' }}>introduce</span>()
        </div>

        {/* OUTPUT */}
        <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid #9cdcfe', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
          &gt; Unit R2-D2 active. Power: 100%<br />
          &gt; Unit C-3PO active. Power: 45%
        </div>
      </div>

      {/* ================================================= */}
      {/* 3. THE MYSTERY OF 'SELF'                          */}
      {/* ================================================= */}
      <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
        <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
          /concept: SELF_REFERENCE
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          <b>What is <code>self</code>?</b>
          <br />
          It represents <i>"This specific object right here."</i>
          <br />
          When you call <code>droid_1.introduce()</code>, Python automatically passes <code>droid_1</code> into the function as the <code>self</code> argument.
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '1rem', borderLeft: '1px solid #333', fontSize: '0.9rem', color: '#aaa' }}>
          <li>- <code>self.model</code> belonging to <b>droid_1</b> is "R2-D2".</li>
          <li>- <code>self.model</code> belonging to <b>droid_2</b> is "C-3PO".</li>
          <li>- Without <code>self</code>, the class wouldn't know which data to use.</li>
        </ul>
      </div>

      {/* ================================================= */}
      {/* 4. CHALLENGE                                      */}
      {/* ================================================= */}
      <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
        <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: RPG_CHARACTER</h3>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>
          Create a class <code>Player</code>.
          <br />
          1. It should have attributes: <b>name</b>, <b>hp</b> (Health), and <b>level</b>.
          <br />
          2. It should have a method <code>take_damage(amount)</code> that lowers HP.
          <br />
          3. Create a hero, print their HP, damage them, and print HP again.
        </p>

        <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
          <span style={{ color: '#569cd6' }}>class</span> <span style={{ color: '#4ec9b0' }}>Player</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>__init__</span>(<span style={{ color: '#9cdcfe' }}>self</span>, <span style={{ color: '#9cdcfe' }}>name</span>):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.name = <span style={{ color: '#9cdcfe' }}>name</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.hp = <span style={{ color: '#b5cea8' }}>100</span><br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>take_damage</span>(<span style={{ color: '#9cdcfe' }}>self</span>, <span style={{ color: '#9cdcfe' }}>dmg</span>):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>self</span>.hp = <span style={{ color: '#9cdcfe' }}>self</span>.hp - <span style={{ color: '#9cdcfe' }}>dmg</span><br />
          <br />
          <span style={{ color: '#9cdcfe' }}>hero</span> = <span style={{ color: '#4ec9b0' }}>Player</span>(<span style={{ color: '#ce9178' }}>"Ekin"</span>)<br />
          <span style={{ color: '#9cdcfe' }}>hero</span>.<span style={{ color: '#dcdcaa' }}>take_damage</span>(<span style={{ color: '#b5cea8' }}>20</span>)<br />
          <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"&#123;hero.name&#125; HP: &#123;hero.hp&#125;"</span>)
        </div>
      </div>

    </div>
  );
};

export default PythonClasses;