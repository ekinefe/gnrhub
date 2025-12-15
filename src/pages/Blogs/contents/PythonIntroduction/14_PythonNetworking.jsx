import React from 'react';

const PythonNetworking = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_14: NETWORK_PROTOCOLS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Your code is currently isolated. To build powerful systems, it must connect to the global network.
                    <br /><br />
                    We use <span className="accent-text">APIs (Application Programming Interfaces)</span> to talk to other servers.
                    Python's <code>requests</code> library is the industry standard for this task.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. INSTALLATION                                   */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /setup: INSTALL_DEPENDENCY
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    The `requests` library is not built-in (it's external), so we must install it first.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#00ff9d' }}>$</span> pip install requests
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. THE GET REQUEST (FETCHING DATA)                */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#569cd6' }}>
                    /action: HTTP_GET
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    <b>GET</b> is the method used to retrieve data from a URL.
                    We check the <code>status_code</code> to ensure the server replied with "200 OK".
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>requests</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Target: GitHub's public API</span><br />
                    <span style={{ color: '#9cdcfe' }}>url</span> = <span style={{ color: '#ce9178' }}>"https://api.github.com/users/defunkt"</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>response</span> = <span style={{ color: '#9cdcfe' }}>requests</span>.<span style={{ color: '#dcdcaa' }}>get</span>(<span style={{ color: '#9cdcfe' }}>url</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>response</span>.<span style={{ color: '#9cdcfe' }}>status_code</span> == <span style={{ color: '#b5cea8' }}>200</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"CONNECTION ESTABLISHED."</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#9cdcfe' }}>response</span>.<span style={{ color: '#dcdcaa' }}>text</span>)<br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"CONNECTION FAILED."</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. PARSING JSON (MAKING IT USEABLE)               */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /format: JSON_DECODING
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    Raw text is hard to use. We convert the response into a <b>Python Dictionary</b> using <code>.json()</code>.
                    This allows us to access specific fields like "name" or "id".
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>data</span> = <span style={{ color: '#9cdcfe' }}>response</span>.<span style={{ color: '#dcdcaa' }}>json</span>()<br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>user</span> = <span style={{ color: '#9cdcfe' }}>data</span>[<span style={{ color: '#ce9178' }}>"login"</span>]<br />
                    <span style={{ color: '#9cdcfe' }}>repo_count</span> = <span style={{ color: '#9cdcfe' }}>data</span>[<span style={{ color: '#ce9178' }}>"public_repos"</span>]<br />
                    <br />
                    <span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"User: &#123;user&#125; | Repos: &#123;repo_count&#125;"</span>)
                </div>

                {/* OUTPUT */}
                <div style={{ background: '#111', padding: '0.5rem 1rem', borderLeft: '3px solid var(--accent)', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#ccc' }}>
                    &gt; User: defunkt | Repos: 107
                </div>
            </div>

            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: CRYPTO_TICKER</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Write a script that fetches the current price of **Bitcoin**.
                    <br />
                    1. Use this URL: <code>https://api.coindesk.com/v1/bpi/currentprice.json</code>
                    <br />
                    2. Parse the JSON.
                    <br />
                    3. Print the USD rate (inside <code>bpi['USD']['rate']</code>).
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>requests</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>url</span> = <span style={{ color: '#ce9178' }}>"https://api.coindesk.com/v1/bpi/currentprice.json"</span><br />
                    <span style={{ color: '#9cdcfe' }}>res</span> = <span style={{ color: '#9cdcfe' }}>requests</span>.<span style={{ color: '#dcdcaa' }}>get</span>(<span style={{ color: '#9cdcfe' }}>url</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>res</span>.<span style={{ color: '#9cdcfe' }}>status_code</span> == <span style={{ color: '#b5cea8' }}>200</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>data</span> = <span style={{ color: '#9cdcfe' }}>res</span>.<span style={{ color: '#dcdcaa' }}>json</span>()<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>price</span> = <span style={{ color: '#9cdcfe' }}>data</span>[<span style={{ color: '#ce9178' }}>'bpi'</span>][<span style={{ color: '#ce9178' }}>'USD'</span>][<span style={{ color: '#ce9178' }}>'rate'</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>f"BTC Price: $&#123;price&#125;"</span>)<br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"API Error"</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonNetworking;