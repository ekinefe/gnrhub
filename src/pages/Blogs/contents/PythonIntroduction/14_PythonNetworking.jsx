import React from 'react';

const PythonNetworking = () => {
    // === RESPONSIVE STYLES ===
    const styles = {
        // 1. Force the container to fit the screen, no matter what global CSS says
        container: {
            width: '100%',
            maxWidth: '100vw',        // Ensures it never exceeds the viewport width
            boxSizing: 'border-box',  // Ensures padding doesn't make it wider
            padding: '15px',          // Comfortable padding for mobile
            overflowX: 'hidden',      // Prevents horizontal scrolling of the page
            display: 'flex',
            flexDirection: 'column',
        },
        // 2. Ensure text wraps and doesn't push the width out
        section: {
            marginBottom: '2.5rem',
            width: '100%',
            wordWrap: 'break-word',    // CRITICAL: Forces long text to wrap
            overflowWrap: 'break-word' // Modern support for wrapping
        },
        // 3. Responsive Headings (Smaller on mobile, bigger on desktop)
        headingMain: {
            fontSize: 'clamp(1.5rem, 6vw, 2.2rem)',
            marginBottom: '1rem',
            lineHeight: '1.2',
            wordBreak: 'break-word',
        },
        headingSub: {
            fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
            marginBottom: '1rem',
            color: '#4ec9b0', // Syntax highlighting color
            borderBottom: '1px solid #333',
            paddingBottom: '0.5rem',
            wordBreak: 'break-word',
        },
        text: {
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#ccc',
            marginBottom: '1rem',
        },
        // 4. Card Styling
        card: {
            background: 'rgba(255, 255, 255, 0.03)', // Slight background to separate content
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '2rem',
            width: '100%',
            boxSizing: 'border-box', // Critical for fitting within parent
        },
        // 5. Code Block Fix for Mobile
        codeBlock: {
            background: '#0d0d0d',
            border: '1px solid #333',
            borderRadius: '6px',
            padding: '12px',
            fontFamily: "'Fira Code', monospace", // Use monospace font
            fontSize: '0.85rem',
            marginTop: '10px',
            overflowX: 'auto',       // Adds scrollbar ONLY to the code box
            whiteSpace: 'pre',       // Keeps code formatting
            color: '#e6e6e6',
        }
    };

    return (
        <div className="blog-article-responsive" style={styles.container}>

            {/* === INTRO === */}
            <section style={styles.section}>
                <h2 style={styles.headingMain}>/module_14: NETWORK_PROTOCOLS</h2>
                <p style={styles.text}>
                    Your code is currently isolated. To build powerful systems, it must connect to the global network.
                    <br /><br />
                    We use <span style={{ color: '#ff007f' }}>APIs (Application Programming Interfaces)</span> to talk to other servers.
                    Python's <code>requests</code> library is the industry standard for this task.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. INSTALLATION                                   */}
            {/* ================================================= */}
            <div style={styles.card}>
                <h3 style={styles.headingSub}>
                    /setup: INSTALL_DEPENDENCY
                </h3>
                <p style={styles.text}>
                    The `requests` library is not built-in (it's external), so we must install it first.
                </p>

                <div style={styles.codeBlock}>
                    <span style={{ color: '#00ff9d' }}>$</span> pip install requests
                </div>
            </div>

            {/* ================================================= */}
            {/* 2. THE GET REQUEST                                */}
            {/* ================================================= */}
            <div style={styles.card}>
                <h3 style={{ ...styles.headingSub, color: '#569cd6' }}>
                    /action: HTTP_GET
                </h3>
                <p style={styles.text}>
                    <b>GET</b> is the method used to retrieve data from a URL. We check the <code>status_code</code> to ensure the server replied with "200 OK".
                </p>

                <div style={styles.codeBlock}>
                    <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>requests</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># Target: GitHub API</span><br />
                    <span style={{ color: '#9cdcfe' }}>url</span> = <span style={{ color: '#ce9178' }}>"https://api.github.com/users/defunkt"</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>res</span> = <span style={{ color: '#9cdcfe' }}>requests</span>.<span style={{ color: '#dcdcaa' }}>get</span>(<span style={{ color: '#9cdcfe' }}>url</span>)<br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> <span style={{ color: '#9cdcfe' }}>res</span>.<span style={{ color: '#9cdcfe' }}>status_code</span> == <span style={{ color: '#b5cea8' }}>200</span>:<br />
                    &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"CONNECTED"</span>)<br />
                    <span style={{ color: '#c586c0' }}>else</span>:<br />
                    &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>print</span>(<span style={{ color: '#ce9178' }}>"FAILED"</span>)
                </div>
            </div>

            {/* ================================================= */}
            {/* 3. CHALLENGE                                      */}
            {/* ================================================= */}
            <div style={{ ...styles.card, border: '1px solid #ff007f' }}>
                <h3 style={{ ...styles.headingSub, color: '#ff007f', borderBottom: 'none' }}>
                    &gt; MISSION: CRYPTO_TICKER
                </h3>
                <p style={styles.text}>
                    Write a script that fetches the current price of **Bitcoin**.
                    <br />
                    1. URL: <code style={{ wordBreak: 'break-all' }}>https://api.coindesk.com/v1/bpi/currentprice.json</code>
                    <br />
                    2. Parse the JSON.
                </p>

                <div style={{ ...styles.codeBlock, background: '#000', border: '1px dashed #555' }}>
                    <span style={{ color: '#6a9955' }}># Solution hidden... try it yourself first!</span>
                </div>
            </div>

        </div>
    );
};

export default PythonNetworking;