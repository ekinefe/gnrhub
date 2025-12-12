import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HowToDownload from './01_pythonDownload';
import IdeSetup from './02_IDEDownload';
import HelloWorld from './03_helloWorld';

const PythonIntroduction = () => {
    const location = useLocation();
    const hash = location.hash;

    // Scroll to top when hash changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [hash]);

    const renderContent = () => {
        switch (hash) {
            case '#download':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <HowToDownload />
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="#ide" className="btn primary-btn">Next: IDE Setup →</Link>
                        </div>
                    </div>
                );
            case '#ide':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <IdeSetup />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#download" className="btn secondary-btn">← Previous: Download</Link>
                            <Link to="#helloworld" className="btn primary-btn">Next: Hello World →</Link>
                        </div>
                    </div>
                );
            case '#helloworld':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <HelloWorld />
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="#ide" className="btn secondary-btn">← Previous: IDE Setup</Link>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="table-of-contents">
                        <h3>Table of Contents</h3>
                        <p>Select a topic to start learning:</p>

                        <div className="toc-list">
                            <Link to="#download" className="toc-item">
                                <span className="toc-number">01</span>
                                <div className="toc-details">
                                    <h4>01_Download</h4>
                                    <p>Getting Python installed on your machine.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#ide" className="toc-item">
                                <span className="toc-number">02</span>
                                <div className="toc-details">
                                    <h4>02_IDE_Download</h4>
                                    <p>Choosing and setting up VS Code or PyCharm.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#helloworld" className="toc-item">
                                <span className="toc-number">03</span>
                                <div className="toc-details">
                                    <h4>03_Hello_World</h4>
                                    <p>Writing and running your first Python script.</p>
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
            <h2>Python Introduction</h2>
            <p>
                Welcome to the Python Introduction series. In this guide, we will cover everything from setting up your environment
                to writing your first Python program.
            </p>
            <hr />

            {renderContent()}

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

export default PythonIntroduction;
