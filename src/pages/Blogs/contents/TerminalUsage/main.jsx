import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Import the sub-modules
import TerminalIntro from './01_TerminalIntro';
import TerminalNav from './02_TerminalNav';
import TerminalFiles from './03_TerminalFiles';
import TerminalPermissions from './04_TerminalPermissions';
import TerminalSearch from './05_TerminalSearch';

const TerminalUsage = () => {
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
                        <TerminalIntro />
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="#navigation" className="btn primary-btn">Next: Navigation →</Link>
                        </div>
                    </div>
                );
            case '#navigation':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <TerminalNav />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#intro" className="btn secondary-btn">← Previous: Intro</Link>
                            <Link to="#files" className="btn primary-btn">Next: File Manipulation →</Link>
                        </div>
                    </div>
                );
            case '#files':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <TerminalFiles />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#navigation" className="btn secondary-btn">← Previous: Navigation</Link>
                            <Link to="#permissions" className="btn primary-btn">Next: Permissions →</Link>
                        </div>
                    </div>
                );
            case '#permissions':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <TerminalPermissions />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#files" className="btn secondary-btn">← Previous: Files</Link>
                            <Link to="#search" className="btn primary-btn">Next: Search & Recon →</Link>
                        </div>
                    </div>
                );
            case '#search':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <TerminalSearch />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#permissions" className="btn secondary-btn">← Previous: Permissions</Link>
                            <Link to="#" className="btn primary-btn">Back to Index (Complete) →</Link>
                        </div>
                    </div>
                );

            // DEFAULT: TABLE OF CONTENTS
            default:
                return (
                    <div className="table-of-contents">
                        <h3>Table of Contents</h3>
                        <p>Master the command line interface:</p>

                        <div className="toc-list">
                            <Link to="#intro" className="toc-item">
                                <span className="toc-number">01</span>
                                <div className="toc-details">
                                    <h4>01_Terminal_Basics</h4>
                                    <p>Why use the terminal? Understanding the Shell.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#navigation" className="toc-item">
                                <span className="toc-number">02</span>
                                <div className="toc-details">
                                    <h4>02_Navigation</h4>
                                    <p>Moving around: pwd, ls, cd.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#files" className="toc-item">
                                <span className="toc-number">03</span>
                                <div className="toc-details">
                                    <h4>03_File_Manipulation</h4>
                                    <p>Creating and destroying: mkdir, touch, rm, cp.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#permissions" className="toc-item">
                                <span className="toc-number">04</span>
                                <div className="toc-details">
                                    <h4>04_Permissions</h4>
                                    <p>Security basics: chmod and ownership.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#search" className="toc-item">
                                <span className="toc-number">05</span>
                                <div className="toc-details">
                                    <h4>05_Search_Recon</h4>
                                    <p>Finding data: grep and find.</p>
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
            <h2>/module: LINUX_TERMINAL</h2>
            <p>
                The Graphical User Interface (GUI) hides the true power of your machine.
                To truly own your system, you must master the Shell.
            </p>
            <hr />

            {renderContent()}

            {/* STYLES (Reusing your existing styles) */}
            <style>{`
                .btn-back {
                    display: inline-block;
                    margin-bottom: 1rem;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.9rem;
                }
                .btn-back:hover {
                    color: var(--accent);
                }
                .toc-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                .toc-item {
                    display: flex;
                    align-items: center;
                    padding: 1.5rem;
                    background: var(--bg-panel);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    text-decoration: none;
                    color: var(--text-primary);
                    transition: all 0.2s ease;
                }
                .toc-item:hover {
                    border-color: var(--accent);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .toc-number {
                    font-family: monospace;
                    font-size: 1.5rem;
                    color: var(--text-secondary);
                    margin-right: 1.5rem;
                    opacity: 0.5;
                }
                .toc-details {
                    flex: 1;
                }
                .toc-details h4 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.1rem;
                }
                .toc-details p {
                    margin: 0;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }
                .toc-arrow {
                    font-size: 1.2rem;
                    color: var(--accent);
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.2s ease;
                }
                .toc-item:hover .toc-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>
        </div>
    );
};

export default TerminalUsage;