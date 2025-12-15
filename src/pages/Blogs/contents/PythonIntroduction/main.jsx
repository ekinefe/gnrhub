import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HowToDownload from './01_PythonDownload';
import IdeSetup from './02_PythonIDEDownload';
import HelloWorld from './03_PythonHelloWorld';
import PythonVariables from './04_PythonVariables';
import PythonMath from './05_PythonMath';
import PythonInput from './06_PythonInput';
import PythonConditionals from './07_PythonConditionals';
import PythonFunctions from './08_PythonFunctions';
import PythonClasses from './09_PythonClasses';
import PythonModules from './10_PythonModules';
import PythonPackages from './11_PythonPackages';
import PythonExceptions from './12_PythonExceptions';
import PythonFiles from './13_PythonFiles';
import PythonNetworking from './14_PythonNetworking';
import PythonGUI from './15_PythonGUI';
import PythonWEB from './16_PythonWEB';
import PythonData from './17_PythonData';
import PythonSecurity from './18_PythonSecurity';
import PythonPerformance from './19_PythonPerformance';
import PythonTesting from './20_PythonTesting';
import PythonDeployment from './21_PythonDeployment';
import PythonFuture from './22_PythonFuture';

const PythonIntroduction = () => {
    const location = useLocation();
    const hash = location.hash;

    // DEBUG: Remove after fixing
    // console.log("Current Hash:", hash);


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
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#ide" className="btn secondary-btn">← Previous: IDE Setup</Link>
                            <Link to="#variables" className="btn primary-btn">Next: Variables →</Link>
                        </div>
                    </div>
                );
            case '#variables':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonVariables />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#helloworld" className="btn secondary-btn">← Previous: Hello World</Link>
                            <Link to="#math" className="btn primary-btn">Next: Math →</Link>
                        </div>
                    </div>
                );
            case '#math':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonMath />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#variables" className="btn secondary-btn">← Previous: Variables</Link>
                            <Link to="#input" className="btn primary-btn">Next: Input →</Link>
                        </div>
                    </div>
                );
            case '#input':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonInput />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#math" className="btn secondary-btn">← Previous: Math</Link>
                            <Link to="#conditionals" className="btn primary-btn">Next: Conditionals →</Link>
                        </div>
                    </div>
                );
            case '#conditionals':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonConditionals />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#input" className="btn secondary-btn">← Previous: Input</Link>
                            <Link to="#functions" className="btn primary-btn">Next: Functions →</Link>
                        </div>
                    </div>
                );
            case '#functions':
                return (
                    <div>
                        {/* <h2 style={{ color: 'orange' }}>DEBUG: CASE #functions HIT</h2> */}
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonFunctions />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#conditionals" className="btn secondary-btn">← Previous: Conditionals</Link>
                            <Link to="#classes" className="btn primary-btn">Next: Classes →</Link>
                        </div>
                    </div>
                );
            case '#classes':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonClasses />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#functions" className="btn secondary-btn">← Previous: Functions</Link>
                            <Link to="#modules" className="btn primary-btn">Next: Modules →</Link>
                        </div>
                    </div>
                );
            case '#modules':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonModules />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#classes" className="btn secondary-btn">← Previous: Classes</Link>
                            <Link to="#packages" className="btn primary-btn">Next: Packages →</Link>
                        </div>
                    </div>
                );
            case '#packages':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonPackages />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#modules" className="btn secondary-btn">← Previous: Modules</Link>
                            <Link to="#exceptions" className="btn primary-btn">Next: Exceptions →</Link>
                        </div>
                    </div>
                );
            case '#exceptions':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonExceptions />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#packages" className="btn secondary-btn">← Previous: Packages</Link>
                            <Link to="#files" className="btn primary-btn">Next: Files →</Link>
                        </div>
                    </div>
                );
            case '#files':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonFiles />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#exceptions" className="btn secondary-btn">← Previous: Exceptions</Link>
                            <Link to="#networking" className="btn primary-btn">Next: Networking →</Link>
                        </div>
                    </div>
                );
            case '#networking':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonNetworking />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#files" className="btn secondary-btn">← Previous: Files</Link>
                            <Link to="#gui" className="btn primary-btn">Next: GUI →</Link>
                        </div>
                    </div>
                );
            case '#gui':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonGUI />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#networking" className="btn secondary-btn">← Previous: Networking</Link>
                            <Link to="#web" className="btn primary-btn">Next: Web →</Link>
                        </div>
                    </div>
                );
            case '#web':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonWEB />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#gui" className="btn secondary-btn">← Previous: GUI</Link>
                            <Link to="#data" className="btn primary-btn">Next: Data →</Link>
                        </div>
                    </div>
                );
            case '#data':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonData />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#web" className="btn secondary-btn">← Previous: Web</Link>
                            <Link to="#security" className="btn primary-btn">Next: Security →</Link>
                        </div>
                    </div>
                );
            case '#security':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonSecurity />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#data" className="btn secondary-btn">← Previous: Data</Link>
                            <Link to="#performance" className="btn primary-btn">Next: Performance →</Link>
                        </div>
                    </div>
                );
            case '#performance':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonPerformance />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#security" className="btn secondary-btn">← Previous: Security</Link>
                            <Link to="#testing" className="btn primary-btn">Next: Testing →</Link>
                        </div>
                    </div>
                );
            case '#testing':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonTesting />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#performance" className="btn secondary-btn">← Previous: Performance</Link>
                            <Link to="#deployment" className="btn primary-btn">Next: Deployment →</Link>
                        </div>
                    </div>
                );
            case '#deployment':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonDeployment />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#testing" className="btn secondary-btn">← Previous: Testing</Link>
                            <Link to="#future" className="btn primary-btn">Next: Future →</Link>
                        </div>
                    </div>
                );
            case '#future':
                return (
                    <div>
                        <Link to="#" className="btn-back">← Back to Index</Link>
                        <PythonFuture />
                        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="#deployment" className="btn secondary-btn">← Previous: Deployment</Link>
                            <Link to="#" className="btn primary-btn">Back to Index (Complete) →</Link>
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

                            <Link to="#variables" className="toc-item">
                                <span className="toc-number">04</span>
                                <div className="toc-details">
                                    <h4>04_Variables</h4>
                                    <p>Understanding data types: Int, Float, String, and Bool.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#math" className="toc-item">
                                <span className="toc-number">05</span>
                                <div className="toc-details">
                                    <h4>05_Math</h4>
                                    <p>Arithmetic operations: +, -, *, /, //, %, **.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#input" className="toc-item">
                                <span className="toc-number">06</span>
                                <div className="toc-details">
                                    <h4>06_Input</h4>
                                    <p>Getting user input and handling type conversions.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#conditionals" className="toc-item">
                                <span className="toc-number">07</span>
                                <div className="toc-details">
                                    <h4>07_Conditionals</h4>
                                    <p>Control flow with if, elif, and else statements.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#functions" className="toc-item">
                                <span className="toc-number">08</span>
                                <div className="toc-details">
                                    <h4>08_Functions</h4>
                                    <p>Reusable code blocks, parameters, return values, and scope.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#classes" className="toc-item">
                                <span className="toc-number">09</span>
                                <div className="toc-details">
                                    <h4>09_Classes</h4>
                                    <p>Object-Oriented Programming: classes, objects, and self.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#modules" className="toc-item">
                                <span className="toc-number">10</span>
                                <div className="toc-details">
                                    <h4>10_Modules</h4>
                                    <p>Organizing code into separate files and importing them.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#packages" className="toc-item">
                                <span className="toc-number">11</span>
                                <div className="toc-details">
                                    <h4>11_Packages</h4>
                                    <p>Structuring larger applications with `__init__.py`.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#exceptions" className="toc-item">
                                <span className="toc-number">12</span>
                                <div className="toc-details">
                                    <h4>12_Exceptions</h4>
                                    <p>Handling errors gracefully with try, except, finally.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#files" className="toc-item">
                                <span className="toc-number">13</span>
                                <div className="toc-details">
                                    <h4>13_Files</h4>
                                    <p>Reading from and writing to files (I/O).</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#networking" className="toc-item">
                                <span className="toc-number">14</span>
                                <div className="toc-details">
                                    <h4>14_Networking</h4>
                                    <p>Sockets, HTTP requests, and client-server communication.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#gui" className="toc-item">
                                <span className="toc-number">15</span>
                                <div className="toc-details">
                                    <h4>15_GUI</h4>
                                    <p>Building desktop applications with Tkinter.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#web" className="toc-item">
                                <span className="toc-number">16</span>
                                <div className="toc-details">
                                    <h4>16_Web</h4>
                                    <p>Introduction to web development with Python.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#data" className="toc-item">
                                <span className="toc-number">17</span>
                                <div className="toc-details">
                                    <h4>17_Data</h4>
                                    <p>Data types, structures, and manipulation techniques.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#security" className="toc-item">
                                <span className="toc-number">18</span>
                                <div className="toc-details">
                                    <h4>18_Security</h4>
                                    <p>Basic security concepts and best practices.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#performance" className="toc-item">
                                <span className="toc-number">19</span>
                                <div className="toc-details">
                                    <h4>19_Performance</h4>
                                    <p>Optimizing code for speed and efficiency.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#testing" className="toc-item">
                                <span className="toc-number">20</span>
                                <div className="toc-details">
                                    <h4>20_Testing</h4>
                                    <p>Writing unit tests to ensure code reliability.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#deployment" className="toc-item">
                                <span className="toc-number">21</span>
                                <div className="toc-details">
                                    <h4>21_Deployment</h4>
                                    <p>Packaging and distributing your Python applications.</p>
                                </div>
                                <span className="toc-arrow">→</span>
                            </Link>

                            <Link to="#future" className="toc-item">
                                <span className="toc-number">22</span>
                                <div className="toc-details">
                                    <h4>22_Future</h4>
                                    <p>Exploring advanced topics and the future of Python.</p>
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
            {/* <div style={{ background: '#333', color: '#fff', padding: '10px', marginBottom: '10px' }}>
                DEBUG INFO: Hash = "{hash}"
            </div> */}
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
