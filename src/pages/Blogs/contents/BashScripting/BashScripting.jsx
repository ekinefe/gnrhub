import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Import Sub-modules
import BashIntro from './01_BashIntro';
import BashVariables from './02_BashVariables';
import BashLogic from './03_BashLogic';
import BashLoops from './04_BashLoops';
import BashFunctions from './05_BashFunctions';
import BashAutomation from './06_BashAutomation';

const BashScripting = () => {
    const location = useLocation();
    const hash = location.hash;

    // Scroll to top when hash changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [hash]);

    const renderContent = () => {
        switch (hash) {
            case '#intro':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <BashIntro />
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="#variables" className="btn primary-btn">Next: Variables →</Link>
                        </div>
                    </div>
                );
            case '#variables':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <BashVariables />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#intro" className="btn secondary-btn">← Previous: Intro</Link>
                            <Link to="#logic" className="btn primary-btn">Next: Logic (If/Else) →</Link>
                        </div>
                    </div>
                );
            case '#logic':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <BashLogic />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#variables" className="btn secondary-btn">← Previous: Variables</Link>
                            <Link to="#loops" className="btn primary-btn">Next: Loops →</Link>
                        </div>
                    </div>
                );
            case '#loops':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <BashLoops />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#logic" className="btn secondary-btn">← Previous: Logic</Link>
                            <Link to="#functions" className="btn primary-btn">Next: Functions →</Link>
                        </div>
                    </div>
                );
            case '#functions':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <BashFunctions />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#loops" className="btn secondary-btn">← Previous: Loops</Link>
                            <Link to="#automation" className="btn primary-btn">Next: Automation Project →</Link>
                        </div>
                    </div>
                );
            case '#automation':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <BashAutomation />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#functions" className="btn secondary-btn">← Previous: Functions</Link>
                            <Link to="#" className="btn primary-btn">Back to Index (Complete) →</Link>
                        </div>
                    </div>
                );

            // DEFAULT: TABLE OF CONTENTS
            default:
                return (
                    <div className="table-of-contents">
                        <h3>Table of Contents</h3>
                        <p>Automate your workflow with Bash scripts:</p>

                        <div className="toc-list">
                            <Link to="#intro" className="toc-item">
                                <span className="toc-number">01</span>
                                <div className="toc-details">
                                    <h4>01_Scripting_Basics</h4>
                                    <p>The Shebang, file permissions, and execution.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#variables" className="toc-item">
                                <span className="toc-number">02</span>
                                <div className="toc-details">
                                    <h4>02_Variables</h4>
                                    <p>Storing data, strings, and command outputs.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#logic" className="toc-item">
                                <span className="toc-number">03</span>
                                <div className="toc-details">
                                    <h4>03_Logic_Conditionals</h4>
                                    <p>If/Else statements and file checks.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#loops" className="toc-item">
                                <span className="toc-number">04</span>
                                <div className="toc-details">
                                    <h4>04_Loops</h4>
                                    <p>For loops, While loops, and iterating files.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#functions" className="toc-item">
                                <span className="toc-number">05</span>
                                <div className="toc-details">
                                    <h4>05_Functions</h4>
                                    <p>Reusable code blocks and arguments ($1, $2).</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#automation" className="toc-item">
                                <span className="toc-number">06</span>
                                <div className="toc-details">
                                    <h4>06_Project_Automation</h4>
                                    <p>Building a real-world backup tool.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="blog-content">
            <h2>/module: BASH_SCRIPTING</h2>
            <p>
                If you perform a task more than once, script it.
                Bash scripts are the backbone of DevOps and System Automation.
            </p>
            <hr />

            {renderContent()}

            <style>{`
                .btn-back { display: inline-block; margin-bottom: 1rem; color: var(--text-secondary); text-decoration: none; font-size: 0.9rem; }
                .btn-back:hover { color: var(--accent); }
                .toc-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
                .toc-item { display: flex; align-items: center; padding: 1.5rem; background: var(--bg-panel); border: 1px solid var(--border); border-radius: 8px; text-decoration: none; color: var(--text-primary); transition: all 0.2s ease; }
                .toc-item:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                .toc-number { font-family: monospace; font-size: 1.5rem; color: var(--text-secondary); margin-right: 1.5rem; opacity: 0.5; }
                .toc-details { flex: 1; }
                .toc-details h4 { margin: 0 0 0.5rem 0; font-size: 1.1rem; }
                .toc-details p { margin: 0; font-size: 0.9rem; color: var(--text-secondary); }
                .toc-arrow { font-size: 1.2rem; color: var(--accent); opacity: 0; transform: translateX(-10px); transition: all 0.2s ease; }
                .toc-item:hover .toc-arrow { opacity: 1; transform: translateX(0); }
            `}</style>
        </div>
    );
};

export default BashScripting;