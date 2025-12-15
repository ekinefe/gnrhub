import React from 'react';

const PythonWeb = () => {
    return (
        <div className="blog-article">

            {/* === INTRO === */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>/module_16: WEB_FRAMEWORKS (FLASK)</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    To make your code accessible over the internet, you need a <span className="accent-text">Web Framework</span>. Frameworks handle the complex networking protocols (HTTP) so you can focus on writing application logic.
                    <br /><br />
                    We will use **Flask**, a lightweight, minimalist framework ideal for building **APIs** (Application Programming Interfaces) to power your data science applications.
                </p>
            </section>

            {/* ================================================= */}
            {/* 1. SETUP AND THE MINIMAL APP                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#4ec9b0' }}>
                    /setup: MICRO_SERVER
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    First, install Flask in your virtual environment: <code>pip install flask</code>.
                    <br />
                    Every Flask application requires three main parts: 1) importing Flask, 2) creating an instance, and 3) running the server.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#9cdcfe' }}>flask</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>Flask</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 1. Create the Flask application instance</span><br />
                    <span style={{ color: '#9cdcfe' }}>app</span> = <span style={{ color: '#9cdcfe' }}>Flask</span>(__name__)<br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 2. Define a route (the URL path)</span><br />
                    <span style={{ color: '#9cdcfe' }}>@app</span>.<span style={{ color: '#dcdcaa' }}>route</span>(<span style={{ color: '#ce9178' }}>"/"</span>)<br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>home</span>():<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#ce9178' }}>"Hello, Cyber World!"</span><br />
                    <br />
                    <span style={{ color: '#6a9955' }}># 3. Run the development server</span><br />
                    <span style={{ color: '#c586c0' }}>if</span> __name__ == <span style={{ color: '#ce9178' }}>"__main__"</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>app</span>.<span style={{ color: '#dcdcaa' }}>run</span>(<span style={{ color: '#9cdcfe' }}>debug</span>=<span style={{ color: '#569cd6' }}>True</span>)
                </div>

                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    **How it works:** When you run this file and navigate your browser to <code>http://127.0.0.1:5000/</code>, the `home()` function is executed, and its returned string is sent back to the browser.
                </p>
            </div>

            {/* ================================================= */}
            {/* 2. CREATING JSON APIS (THE DATA SCIENCE NEED)     */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--accent)' }}>
                    /concept: API_ENDPOINT
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    As a Data Scientist, you rarely serve HTML. You serve **JSON data**. Flask has a dedicated function to make this easy.
                </p>



                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#9cdcfe' }}>flask</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>Flask</span>, <span style={{ color: '#9cdcfe' }}>jsonify</span> <span style={{ color: '#6a9955' }}># Import jsonify</span><br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>app</span> = <span style={{ color: '#9cdcfe' }}>Flask</span>(__name__)<br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>@app</span>.<span style={{ color: '#dcdcaa' }}>route</span>(<span style={{ color: '#ce9178' }}>"/model_status"</span>)<br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>status_check</span>():<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>data</span> = &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"model_name"</span>: <span style={{ color: '#ce9178' }}>"NLP_v2"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"trained"</span>: <span style={{ color: '#569cd6' }}>True</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"accuracy"</span>: <span style={{ color: '#b5cea8' }}>0.985</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#9cdcfe' }}>jsonify</span>(<span style={{ color: '#9cdcfe' }}>data</span>)
                </div>

                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    Now, navigating to <code>/model_status</code> returns perfect JSON data, ready to be consumed by any web or mobile application.
                </p>
            </div>

            {/* ================================================= */}
            {/* 3. CAPTURING URL PARAMETERS                       */}
            {/* ================================================= */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: '#dcdcaa' }}>
                    /action: ROUTE_VARIABLES
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                    To make the API dynamic, we can capture values directly from the URL path. This is vital for fetching data for specific IDs.
                </p>

                <div style={{ background: '#000', border: '1px solid #333', padding: '1rem', fontFamily: 'monospace' }}>
                    <span style={{ color: '#9cdcfe' }}>@app</span>.<span style={{ color: '#dcdcaa' }}>route</span>(<span style={{ color: '#ce9178' }}>"/user/&lt;string:username&gt;"</span>)<br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>get_user_info</span>(<span style={{ color: '#9cdcfe' }}>username</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#6a9955' }}># The part after /user/ is passed as the 'username' argument</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#ce9178' }}>f"Fetching data for user: &#123;username.upper()&#125;"</span>
                </div>

                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    If a user visits <code>/user/ekin</code>, the function receives `"ekin"` and returns the message.
                </p>
            </div>


            {/* ================================================= */}
            {/* 4. CHALLENGE                                      */}
            {/* ================================================= */}
            <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>&gt; MISSION: SIMPLE_CALCULATOR_API</h3>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                    Create a Flask app with one endpoint: <code>/add/&lt;int:num1&gt;/&lt;int:num2&gt;</code>
                    <br />
                    The function must receive both numbers, calculate the sum, and return the result as a simple string.
                </p>

                <div style={{ background: '#000', border: '1px dashed #444', padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                    <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#9cdcfe' }}>flask</span> <span style={{ color: '#c586c0' }}>import</span> <span style={{ color: '#9cdcfe' }}>Flask</span><br />
                    <span style={{ color: '#9cdcfe' }}>app</span> = <span style={{ color: '#9cdcfe' }}>Flask</span>(__name__)<br />
                    <br />
                    <span style={{ color: '#9cdcfe' }}>@app</span>.<span style={{ color: '#dcdcaa' }}>route</span>(<span style={{ color: '#ce9178' }}>"/add/&lt;int:num1&gt;/&lt;int:num2&gt;"</span>)<br />
                    <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>add_numbers</span>(<span style={{ color: '#9cdcfe' }}>num1</span>, <span style={{ color: '#9cdcfe' }}>num2</span>):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>result</span> = <span style={{ color: '#9cdcfe' }}>num1</span> + <span style={{ color: '#9cdcfe' }}>num2</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> <span style={{ color: '#ce9178' }}>f"The sum is: &#123;result&#125;"</span><br />
                    <br />
                    <span style={{ color: '#c586c0' }}>if</span> __name__ == <span style={{ color: '#ce9178' }}>"__main__"</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>app</span>.<span style={{ color: '#dcdcaa' }}>run</span>(<span style={{ color: '#9cdcfe' }}>debug</span>=<span style={{ color: '#569cd6' }}>True</span>)
                </div>
            </div>

        </div>
    );
};

export default PythonWeb;