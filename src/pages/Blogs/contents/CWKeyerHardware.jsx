import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css'; // Ensure we have access to global styles

const CWKeyerHardware = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>

            {/* HEADER SECTION */}
            <div style={{ marginBottom: '3rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                    <span className="status-tag status-active">HARDWARE</span>
                    <span className="status-tag status-beta">V3.0.0</span>
                    <span className="status-tag" style={{ color: '#aaa', borderColor: '#444' }}>ARDUINO</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '0.5rem' }}>
                    /ULTIMATE_CW_KEYER
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--accent)', maxWidth: '800px' }}>
                    &gt; A standalone, dual-mode Morse Code station powered by Arduino Nano Every.
                </p>
            </div>

            {/* INTRO GRID */}
            <div className="grid-layout" style={{ marginBottom: '4rem' }}>
                <div className="tech-card">
                    <h3 style={{ color: 'var(--accent)' }}>// MISSION_PROFILE</h3>
                    <p>
                        The <strong>Ultimate CW Keyer</strong> is a versatile Morse Code ecosystem designed to bridge the gap between analog tradition and digital training.
                    </p>
                    <p>
                        It functions as a <strong>standalone keyer</strong> (no PC required) for radio operation, while simultaneously acting as a <strong>digital interface</strong> for the companion desktop app.
                    </p>
                </div>
                <div className="tech-card">
                    <h3 style={{ color: '#0f0' }}>// CAPABILITIES</h3>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                        <li><strong>[01] Dual Mode:</strong> Manual Paddle Keyer & Serial Encoder.</li>
                        <li><strong>[02] Decoder:</strong> Real-time text decoding on 16x2 LCD.</li>
                        <li><strong>[03] Audio:</strong> LM386 Amplified Output + Headphone Jack.</li>
                        <li><strong>[04] Training:</strong> Built-in practice modules (Echo/Drill).</li>
                        <li><strong>[05] Connectivity:</strong> USB Serial I/O for PC Integration.</li>
                    </ul>
                </div>
            </div>

            {/* HARDWARE ARCHITECTURE */}
            <h2 style={{ color: '#fff', borderBottom: '1px solid var(--accent)' }}>/SYSTEM_ARCHITECTURE</h2>
            <p>
                The core is built around the <strong>Arduino Nano Every</strong> (ATMega4809), chosen for its expanded memory and superior serial handling compared to the standard Nano.
            </p>

            <div className="grid-layout" style={{ marginBottom: '4rem' }}>
                {/* MCU & LOGIC */}
                <div className="tech-card">
                    <h3>01_COMPUTATION</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        The <strong>Arduino Nano Every</strong> handles all signal processing. It polls the paddle inputs (Dot/Dash) with interrupt-like precision while managing the I2C display and Serial communication simultaneously.
                    </p>
                </div>

                {/* AUDIO STAGE */}
                <div className="tech-card">
                    <h3>02_AUDIO_ENGINE</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        A dedicated <strong>LM386 Power Amplifier</strong> drives the onboard buzzer and headphone output.
                        Digital potentiometers (controlled via Analog Inputs) allow for on-the-fly Volume and Tone frequency adjustment (400Hz - 1200Hz).
                    </p>
                </div>

                {/* I/O INTERFACE */}
                <div className="tech-card">
                    <h3>03_USER_INTERFACE</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        <span style={{ color: 'var(--accent)' }}>INPUT:</span> 3.5mm Jack for Paddles + Rotary Encoder for menu navigation.<br />
                        <span style={{ color: 'var(--accent)' }}>OUTPUT:</span> 16x2 LCD (via PCF8574 I2C) provides real-time WPM, decoded text, and menu feedback.
                    </p>
                </div>
            </div>

            {/* SCHEMATICS SECTION */}
            <h2 style={{ color: '#fff' }}>/SCHEMATICS_V3</h2>
            <div className="tech-card" style={{ padding: '0', overflow: 'hidden', marginBottom: '4rem', border: '1px solid #444' }}>
                {/* SCHEMATIC IMAGE */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img
                        src="/Blogs/CW_keyer/display-01.png"
                        alt="Circuit Schematic"
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                            border: '1px solid #444',
                            borderRadius: '4px'
                        }}
                    />
                </div>

                {/* DOWNLOAD ACTIONS */}
                <div className="btn-group" style={{ justifyContent: 'center' }}>
                    <a href="/Blogs/CW_keyer/display-01.png" download="CW_Keyer_Schematic.png">
                        <button className="btn secondary-btn">
                            DOWNLOAD PNG
                        </button>
                    </a>
                    <a href="/Blogs/CW_keyer/Schmeatic.pdf" download="CW_Keyer_Schematic.pdf">
                        <button className="btn secondary-btn">
                            DOWNLOAD PDF
                        </button>
                    </a>
                    <a href="/Blogs/CW_keyer/BUILD.kicad_sch" download="CW_Keyer_Schematic.kicad_sch">
                        <button className="btn primary-btn">
                            DOWNLOAD KiCad FILE
                        </button>
                    </a>
                </div>
                <div style={{ padding: '2rem' }}>
                    <h3>Technical Implementation Notes:</h3>
                    <ul style={{ marginLeft: '1.5rem', color: '#ccc', listStyleType: 'square' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>I2C Bus:</strong> The WC1602A LCD uses a <strong>PCF8574T</strong> expander (Address 0x27) to save digital pins.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Input Ladder:</strong> The 5 function buttons use a resistor ladder network connected to a single Analog Pin (A3) to conserve GPIO.
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Signal Path:</strong> Paddle inputs are pulled up internally. Audio output is filtered via 10uF capacitors before reaching the LM386 to remove DC offset.
                        </li>
                    </ul>
                </div>
            </div>

            {/* FIRMWARE UPLOAD GUIDE */}
            <h2 style={{ color: '#fff' }}>/DEPLOYMENT_PROTOCOL</h2>
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }}>

                <div className="tech-card">
                    <h3>STEP 1: ACQUIRE SOURCE</h3>
                    <p>Clone the repository to your local machine.</p>
                    <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#0f0', fontFamily: 'monospace', marginBottom: '1rem' }}>
                        git clone https://github.com/YourUsername/Ultimate_CW_Keyer.git
                    </div>
                    <a href="https://github.com/YourUsername/Ultimate_CW_Keyer" target="_blank" rel="noopener noreferrer">
                        <button className="btn primary-btn">
                            ACCESS GITHUB REPOSITORY
                        </button>
                    </a>
                </div>

                <div className="tech-card">
                    <h3>STEP 2: FLASH FIRMWARE</h3>
                    <p>This project uses the standard Arduino IDE or PlatformIO.</p>
                    <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8', color: '#ccc' }}>
                        <li>Open <code>Ultimate_CW_Keyer.ino</code> in Arduino IDE.</li>
                        <li>Install Library: <strong>LiquidCrystal_I2C</strong> by Frank de Brabander.</li>
                        <li>Select Board: <strong>Arduino Nano Every</strong>.</li>
                        <li>Select Port: (e.g., COM3 or /dev/ttyUSB0).</li>
                        <li>Click <strong>Upload</strong>.</li>
                    </ol>
                </div>

                <div className="tech-card">
                    <h3>STEP 3: CALIBRATION</h3>
                    <p>Once uploaded, the keyer will boot into <strong>IDLE MODE</strong>.</p>
                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8', color: '#ccc' }}>
                        <li><strong>Tone:</strong> Adjust the TONE potentiometer until the frequency is comfortable (Default: 700Hz).</li>
                        <li><strong>Speed:</strong> Adjust WPM potentiometer (Range: 5-45 WPM).</li>
                        <li><strong>Test:</strong> Press the paddle. You should see decoded text on the LCD.</li>
                    </ul>
                </div>

            </div>

            {/* FOOTER NAV */}
            <div style={{ marginTop: '4rem', borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/blog" style={{ color: '#888', textDecoration: 'none' }}>
                    &lt; RETURN_TO_BLOG_INDEX
                </Link>
                <div style={{ color: '#444' }}>
                    END_OF_FILE
                </div>
            </div>

        </div >
    );
};

export default CWKeyerHardware;