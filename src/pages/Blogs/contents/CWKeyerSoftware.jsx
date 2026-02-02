import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const CWKeyerSoftware = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>

            {/* HEADER SECTION */}
            <div style={{ marginBottom: '3rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                    <span className="status-tag status-active">SOFTWARE</span>
                    <span className="status-tag status-beta">V1.0.0</span>
                    <span className="status-tag" style={{ color: '#00ff9d', borderColor: '#00ff9d' }}>C++ / QT</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '0.5rem' }}>
                    /CW_TRAINER_DESKTOP
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--accent)', maxWidth: '800px' }}>
                    &gt; The high-performance control center for the Ultimate CW Keyer hardware.
                </p>
            </div>

            {/* INTRO GRID */}
            <div className="grid-layout" style={{ marginBottom: '4rem' }}>
                <div className="tech-card">
                    <h3 style={{ color: 'var(--accent)' }}>// SYSTEM_OVERVIEW</h3>
                    <p>
                        The <strong>CW Trainer</strong> is a native desktop application built with <strong>C++ and Qt 6</strong>. It interfaces directly with the CW Keyer hardware via USB Serial to provide advanced training drills, performance statistics, and real-time decoding visualization.
                    </p>
                </div>
                <div className="tech-card">
                    <h3 style={{ color: '#0f0' }}>// CORE_MODULES</h3>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                        <li><strong>[01] Dashboard:</strong> Real-time Serial I/O & Device Status.</li>
                        <li><strong>[02] Trainer:</strong> Koch method & random group drills.</li>
                        <li><strong>[03] Stats Engine:</strong> Heatmaps of your accuracy & WPM.</li>
                        <li><strong>[04] Audio Synth:</strong> Low-latency software sidetone.</li>
                        <li><strong>[05] Cheat Sheet:</strong> Built-in reference for Morse chars.</li>
                    </ul>
                </div>
            </div>

            {/* SOFTWARE ARCHITECTURE */}
            <h2 id="architecture" style={{ color: '#fff', borderBottom: '1px solid var(--accent)' }}>/INTERNAL_ARCHITECTURE</h2>
            <p style={{ marginBottom: '2rem' }}>
                The application follows a modular architecture designed for stability and low latency.
            </p>

            <div className="grid-layout" style={{ marginBottom: '4rem' }}>
                <div className="tech-card">
                    <h3>01_MAIN_WINDOW</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Orchestrates the UI logic, tab switching, and connects the user interface events to the backend managers. Built on <code>QMainWindow</code>.
                    </p>
                </div>
                <div className="tech-card">
                    <h3>02_SERIAL_MANAGER</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Handles asynchronous communication with the Arduino hardware. Manages COM port detection, baud rate negotiation (9600/115200), and buffer parsing.
                    </p>
                </div>
                <div className="tech-card">
                    <h3>03_SOUND_GENERATOR</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        A dedicated audio engine using <code>QAudioSink</code> to synthesize sine waves for Morse dots/dashes in real-time, allowing for "Offline Mode" practice without hardware.
                    </p>
                </div>
                <div className="tech-card">
                    <h3>04_STATS_TRACKER</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Logs every session to <code>statistics.csv</code>. Calculates accuracy percentages, tracks problem characters, and visualizes progress trends over time.
                    </p>
                </div>
            </div>

            {/* INSTALLATION GUIDE */}
            <h2 id="installation" style={{ color: '#fff' }}>/INSTALLATION_PROTOCOL</h2>

            {/* 1. CLONE */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3>STEP 1: ACQUIRE SOURCE CODE</h3>
                <p style={{ color: '#ccc', marginBottom: '1rem' }}>
                    Open your terminal (Linux/macOS) or Git Bash / PowerShell (Windows) and run:
                </p>
                <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#0f0', fontFamily: 'monospace' }}>
                    git clone https://github.com/ekinefe/CW_trainer-GNR.git
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <a href="https://github.com/ekinefe/CW_trainer-GNR" target="_blank" rel="noopener noreferrer">
                        <button className="btn primary-btn">
                            VIEW ON GITHUB
                        </button>
                    </a>
                </div>
            </div>

            {/* 2. DEPENDENCIES */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3>STEP 2: INSTALL DEPENDENCIES</h3>
                <p style={{ marginBottom: '1rem' }}>You need a C++ Compiler (GCC/Clang/MSVC) and the Qt 6 Development libraries.</p>

                <div style={{ display: 'grid', gap: '1rem' }}>

                    {/* LINUX */}
                    <div>
                        <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.5rem' }}>&gt; LINUX DISTRIBUTIONS</strong>
                        <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #333', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <span style={{ color: '#888' }}># Ubuntu / Debian</span><br />
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                sudo apt update && sudo apt install build-essential qt6-base-dev qt6-multimedia-dev qt6-serialport-dev<br /><br />
                            </div>
                            <br />

                            <span style={{ color: '#888' }}># Fedora</span><br />
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                sudo dnf install gcc-c++ qt6-qtbase-devel qt6-qtmultimedia-devel qt6-qtserialport-devel<br />
                            </div>
                            <br />

                            <span style={{ color: '#888' }}># Arch Linux</span><br />
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                sudo pacman -S base-devel qt6-base qt6-multimedia qt6-serialport
                            </div>
                        </div>
                    </div>

                    {/* MACOS */}
                    <div>
                        <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.5rem' }}>&gt; MACOS</strong>
                        <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #333', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <span style={{ color: '#888' }}># Using Homebrew</span><br />
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                brew install qt
                            </div>
                        </div>
                    </div>

                    {/* WINDOWS */}
                    <div>
                        <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.5rem' }}>&gt; WINDOWS</strong>
                        <div style={{ background: '#111', padding: '1rem', borderLeft: '3px solid #333', fontSize: '0.9rem' }}>
                            1. Download the <a href="https://www.qt.io/download-qt-installer-oss" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Qt Online Installer</a>.<br />
                            2. Run the installer and sign in.<br />
                            3. Select <strong>Qt 6.x</strong> from the list.<br />
                            4. Ensure <strong>MinGW</strong> (or MSVC) compiler is checked under the components list.
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. COMPILE */}
            <div className="tech-card" style={{ marginBottom: '4rem' }}>
                <h3>STEP 3: COMPILATION</h3>
                <p style={{ marginBottom: '1rem' }}>Execute the following commands based on your OS to build the binary.</p>

                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                    {/* LINUX BUILD */}
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>LINUX (Terminal)</h4>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            cd CW_keyer/app\[C++\]/<br />
                            qmake6 UltimateCWKeyer.pro<br />
                            make -j$(nproc)<br />
                            ./UltimateCWKeyer
                        </div>
                    </div>

                    {/* MACOS BUILD */}
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>MACOS (Terminal)</h4>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            cd CW_keyer/app\[C++\]/<br />
                            qmake UltimateCWKeyer.pro<br />
                            make -j$(sysctl -n hw.ncpu)<br />
                            open UltimateCWKeyer.app
                        </div>
                    </div>

                    {/* WINDOWS BUILD */}
                    <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>WINDOWS (Qt Creator)</h4>
                        <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            1. Open <strong>Qt Creator</strong>.<br />
                            2. File &gt; Open Project...<br />
                            3. Select <code>UltimateCWKeyer.pro</code>.<br />
                            4. Click the Green <strong>Play (Run)</strong> button bottom-left.
                        </div>
                    </div>
                </div>
            </div>

            {/* USER MANUAL */}
            <h2 id="manual" style={{ color: '#fff' }}>/OPERATOR_MANUAL</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

                <div className="tech-card">
                    <h3>01_CONNECTION</h3>
                    <ol style={{ marginLeft: '1.5rem', color: '#ccc', lineHeight: '1.8' }}>
                        <li>Connect your Arduino Keyer via USB.</li>
                        <li>Launch the <strong>UltimateCWKeyer</strong> executable.</li>
                        <li>In the "Connection" box (top), select your Port (e.g., <code>COM3</code> or <code>/dev/ttyUSB0</code>).</li>
                        <li>Set Baud Rate to <strong>9600</strong>.</li>
                        <li>Click <strong>CONNECT</strong>. The status label should turn <span style={{ color: '#0f0' }}>GREEN</span>.</li>
                    </ol>
                </div>

                <div className="tech-card">
                    <h3>02_DASHBOARD TAB</h3>
                    <p style={{ color: '#ccc' }}>The primary interface for monitoring your hardware.</p>
                    <ul style={{ marginLeft: '1.5rem', color: '#ccc', lineHeight: '1.8' }}>
                        <li><strong>Status Monitor:</strong> Displays current WPM, Tone Hz, and Decoding Mode synced from the hardware.</li>
                        <li><strong>Inbox (RX):</strong> Shows text decoded by the Arduino from your paddle inputs.</li>
                        <li><strong>Outbox (TX):</strong> Type text here and press "Send" to have the Arduino key it out in Morse automatically.</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>03_TRAINER TAB</h3>
                    <p style={{ color: '#ccc' }}>Improve your skills with automated drills.</p>
                    <ul style={{ marginLeft: '1.5rem', color: '#ccc', lineHeight: '1.8' }}>
                        <li><strong>Drill Type:</strong> Select <em>RX</em> to listen and type what you hear, or <em>TX</em> to read text and key it with your paddle.</li>
                        <li><strong>Mode:</strong> Choose "Meaningful Words" for vocabulary or "Random Characters" for raw decoding practice.</li>
                        <li><strong>Offline Mode:</strong> Check this box to use the PC's speakers instead of the Arduino buzzer. Perfect for silent practice in public spaces.</li>
                    </ul>
                </div>

            </div>

            {/* FOOTER NAV */}
            <div style={{ marginTop: '4rem', borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/blog" style={{ color: '#888', textDecoration: 'none' }}>
                    &lt; RETURN_TO_BLOG_INDEX
                </Link>
                <div style={{ color: '#444' }}>
                    END_OF_DOCUMENT
                </div>
            </div>

        </div>
    );
};

export default CWKeyerSoftware;