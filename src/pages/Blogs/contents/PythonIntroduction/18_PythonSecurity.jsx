import React from 'react';

const PythonSecurity = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_18: CODE_SECURITY</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Functionality is useless if your system is vulnerable.
                    <br /><br />
                    As a developer, you must adhere to the principle of <span className="accent-text">Zero Trust</span>. Never trust user input, never hardcode secrets, and never store passwords in plain text.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. SECRETS MANAGEMENT (ENV VARS)                  */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ff3333' }}>
                    /warning: HARDCODED_SECRETS
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    <b>NEVER</b> type your API Keys or Passwords directly into your code. If you push that code to GitHub, bots will steal your credentials in seconds.
                    <br /><br />
                    Instead, use **Environment Variables**. These are values stored in the Operating System, not the file.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>os</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># BAD: Hardcoded (Vulnerable)</span><br />
                    <span style={{ color: '#666' }}># API_KEY = "12345-SECRET-PASSWORD"</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># GOOD: Load from Environment</span><br />
                    <span style={{ color: '#9cdcfe' }}>api_key</span> = <span style={{ color: '#9cdcfe' }}>os</span>.<span style={{ color: '#dcdcaa' }}>getenv</span>(<span style={{ color: '#ce9178' }}>"MY_API_KEY"</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>api_key</span> <span style={{ color: '#c586c0' }}>is</span> <span style={{ color: '#569cd6' }}>None</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"⚠ Security Alert: No Key Found!"</span>)<br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"System Authenticated."</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. DANGEROUS FUNCTIONS (EVAL)                     */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#ce9178' }}>
                    /exploit: ARBITRARY_EXECUTION
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Python has a function called <code>eval()</code> that executes text as code.
                    <br />
                    <b>It is evil.</b> If you use it on user input, a hacker can delete your files or steal data.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>user_input</span> = <span style={{ color: '#ce9178' }}>"__import__('os').remove('important_file.txt')"</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># VULNERABLE CODE:</span><br />
                    <span style={{ color: '#6a9955' }}># result = eval(user_input)  &lt;-- This would delete the file!</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># SECURE CODE:</span><br />
                    <span style={{ color: '#6a9955' }}># Use specific casting like int() or float()</span><br />
                    <span style={{ color: '#c586c0' }}>try</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>val</span> = <span style={{ color: '#4ec9b0' }}>int</span>(<span style={{ color: '#9cdcfe' }}>user_input</span>) <span style={{ color: '#6a9955' }}># This will safely fail</span><br />
                    <span style={{ color: '#c586c0' }}>except</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"Attack blocked."</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. HASHING PASSWORDS (CRYPTOGRAPHY)               */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /protocol: SHA_256_HASHING
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    You should never store passwords. You store their **Hash**.
                    <br />
                    A Hash is a one-way mathematical fingerprint. You can turn "password123" into a hash, but you cannot turn the hash back into the password.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>hashlib</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>password</span> = <span style={{ color: '#ce9178' }}>"supersecret"</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 1. Encode string to bytes, then hash it</span><br />
                    <span style={{ color: '#9cdcfe' }}>hashed_obj</span> = <span style={{ color: '#9cdcfe' }}>hashlib</span>.<span style={{ color: '#dcdcaa' }}>sha256</span>(<span style={{ color: '#9cdcfe' }}>password</span>.<span style={{ color: '#dcdcaa' }}>encode</span>())<br />
                    <span style={{ color: '#9cdcfe' }}>secure_hash</span> = <span style={{ color: '#9cdcfe' }}>hashed_obj</span>.<span style={{ color: '#dcdcaa' }}>hexdigest</span>()<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Stored in DB: &#123;secure_hash&#125;"</span>)
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc', wordBreak: 'break-all' }}>
                    &gt; Stored in DB: f5d2047... (gibberish string)
                </div>
            </div>


            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: SECURE_LOGIN</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Create a script that simulates a login.
                    <br />
                    1. Store the hash of the correct password ("admin123").
                    <br />
                    2. Ask the user for input.
                    <br />
                    3. Hash their input and compare it to the stored hash.
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>hashlib</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># The hash for "admin123" (Pre-calculated)</span><br />
                    <span style={{ color: '#9cdcfe' }}>stored_hash</span> = <span style={{ color: '#ce9178' }}>"240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>attempt</span> = <span style={{ color: '#569cd6' }}>input</span>(<span style={{ color: '#ce9178' }}>"Enter Password: "</span>)<br />
                    <span style={{ color: '#9cdcfe' }}>attempt_hash</span> = <span style={{ color: '#9cdcfe' }}>hashlib</span>.<span style={{ color: '#dcdcaa' }}>sha256</span>(<span style={{ color: '#9cdcfe' }}>attempt</span>.<span style={{ color: '#dcdcaa' }}>encode</span>()).<span style={{ color: '#dcdcaa' }}>hexdigest</span>()<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>attempt_hash</span> == <span style={{ color: '#9cdcfe' }}>stored_hash</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"ACCESS GRANTED"</span>)<br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"ACCESS DENIED"</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonSecurity;