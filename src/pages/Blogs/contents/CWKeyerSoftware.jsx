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

            {/* LEVEL 1: DIRECT DOWNLOAD (EASIEST) */}
            <div className="tech-card" style={{ marginBottom: '4rem', borderColor: 'var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)' }}>METHOD 1: DIRECT DOWNLOAD (RECOMMENDED)</h3>
                <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
                    Use this method if you just want to use the app without writing code.
                </p>

                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                    {/* WINDOWS EASY */}
                    <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                            &gt; WINDOWS USERS
                        </strong>
                        <div style={{ background: '#111', padding: '1.5rem', borderLeft: '3px solid #0f0' }}>
                            <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8', color: '#ccc', fontSize: '0.95rem' }}>
                                <li>
                                    Open the <a href="https://github.com/ekinefe/CW_trainer-GNR/tree/main/Download/Windows" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>GitHub Releases Page</a>.
                                </li>
                                <li>
                                    Find the latest version (e.g., <strong>v1.0.0</strong>) at the top.
                                </li>
                                <li>
                                    Click on <strong>UltimateCWKeyer_Windows.exe</strong> (or .zip) to download it.
                                </li>
                                <li>
                                    Double-click the downloaded file to run it.
                                </li>
                                <li style={{ marginTop: '0.5rem', background: '#222', padding: '0.5rem', borderRadius: '4px' }}>
                                    <span style={{ color: '#ffaa00' }}>⚠️ SYSTEM WARNING?</span><br />
                                    If Windows says <em>"Windows protected your PC"</em>:<br />
                                    1. Click <strong><u>More info</u></strong>.<br />
                                    2. Click the <strong>Run anyway</strong> button.<br />
                                    <small>(This happens because we are an indie developer, not a corporation).</small>
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* LINUX EASY */}
                    <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                            &gt; LINUX USERS
                        </strong>
                        <div style={{ background: '#111', padding: '1.5rem', borderLeft: '3px solid #0f0' }}>
                            <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8', color: '#ccc', fontSize: '0.95rem' }}>
                                <li>
                                    Open the <a href="https://github.com/ekinefe/CW_trainer-GNR/tree/main/Download/Linux" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>GitHub Releases Page</a>.
                                </li>
                                <li>
                                    Download the file ending in <strong>.AppImage</strong> (Universal) or <strong>.deb</strong> (Ubuntu/Debian).
                                </li>
                                <li>
                                    <strong>For AppImage:</strong>
                                    <ul style={{ marginTop: '0.5rem' }}>
                                        <li>Right-click the file &gt; <strong>Properties</strong>.</li>
                                        <li>Go to the <strong>Permissions</strong> tab.</li>
                                        <li>Check <strong>"Allow executing file as program"</strong>.</li>
                                        <li>Double-click to run.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* MACOS WARNING */}
                    <div>
                        <strong style={{ color: '#888', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                            &gt; MACOS USERS
                        </strong>
                        <div style={{ background: '#111', padding: '1.5rem', borderLeft: '3px solid #666', color: '#888', fontStyle: 'italic' }}>
                            There is currently no pre-made file for macOS. Please use <strong>METHOD 2</strong> below to build it yourself.
                        </div>
                    </div>

                </div>
            </div>

            {/* LEVEL 2: BUILD FROM SOURCE */}
            <div className="tech-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#888' }}>METHOD 2: BUILD FROM SOURCE (ADVANCED)</h3>
                <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
                    Use this method if you are on macOS or want to modify the code.
                </p>

                {/* 1. CLONE */}
                <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>STEP 1: DOWNLOAD SOURCE</h4>
                    <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#0f0', fontFamily: 'monospace' }}>
                        git clone https://github.com/ekinefe/CW_trainer-GNR.git
                    </div>
                </div>

                {/* 2. DEPENDENCIES */}
                <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>STEP 2: INSTALL TOOLS</h4>
                    <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '1rem' }}>
                        Copy the command for your Operating System and paste it into your Terminal.
                    </p>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {/* MACOS */}
                        <div>
                            <strong style={{ color: 'var(--accent)' }}>&gt; MACOS (Homebrew)</strong>
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                brew install qt
                            </div>
                        </div>

                        {/* LINUX */}
                        <div>
                            <strong style={{ color: 'var(--accent)' }}>&gt; LINUX (Ubuntu/Debian)</strong>
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                sudo apt update && sudo apt install build-essential qt6-base-dev qt6-multimedia-dev qt6-serialport-dev
                            </div>
                        </div>

                        {/* WINDOWS SOURCE */}
                        <div>
                            <strong style={{ color: 'var(--accent)' }}>&gt; WINDOWS (Select One Path)</strong>

                            {/* PATH A: QT CREATOR */}
                            <div style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '1rem', background: '#111', borderLeft: '2px solid #ccc' }}>
                                <span style={{ color: '#fff', fontWeight: 'bold' }}>Path A: Qt Creator (Visual)</span><br />
                                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                    1. Download installer from <a href="https://www.qt.io/download-qt-installer-oss" style={{ color: 'var(--accent)' }}>qt.io</a>.<br />
                                    2. Install <strong>Qt 6.x</strong> + <strong>MinGW Compiler</strong>.<br />
                                    3. Open the project in Qt Creator and click Run.
                                </span>
                            </div>

                            {/* PATH B: MSYS2 */}
                            <div style={{ padding: '1rem', background: '#111', borderLeft: '2px solid #ccc' }}>
                                <span style={{ color: '#fff', fontWeight: 'bold' }}>Path B: MSYS2 (Terminal)</span><br />
                                <div style={{ background: '#000', padding: '0.8rem', marginTop: '0.5rem', color: '#0f0', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                                    # 1. Open PowerShell & Install MSYS2<br />
                                    winget install MSYS2<br /><br />
                                    # 2. Open "MSYS2 MINGW64" & Install Deps<br />
                                    pacman -S mingw-w64-x86_64-qt6-base mingw-w64-x86_64-qt6-multimedia mingw-w64-x86_64-qt6-serialport mingw-w64-x86_64-gcc make git
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. COMPILE */}
                <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>STEP 3: BUILD & RUN</h4>
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                        {/* UNIX BUILD */}
                        <div>
                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>LINUX / MACOS:</span>
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                cd CW_trainer-GNR/app\[C++\]/<br />
                                qmake6 UltimateCWKeyer.pro<br />
                                make -j$(nproc)<br />
                                ./UltimateCWKeyer
                            </div>
                        </div>

                        {/* WINDOWS BUILD */}
                        <div>
                            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>WINDOWS (MSYS2):</span>
                            <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#ccc', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                cd CW_trainer-GNR/app\[C++\]/<br />
                                /mingw64/bin/qmake6 UltimateCWKeyer.pro<br />
                                make -j$(nproc)<br />
                                ./release/UltimateCWKeyer.exe
                            </div>
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