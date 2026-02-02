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

            {/* HARDWARE IO MAP */}
            <h2 style={{ color: '#fff', borderBottom: '1px solid var(--accent)' }}>/HARDWARE_IO_MAP</h2>
            <div className="tech-card" style={{ overflowX: 'auto', marginBottom: '4rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ccc' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #444', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', color: 'var(--accent)' }}>COMPONENT</th>
                            <th style={{ padding: '1rem', color: 'var(--accent)' }}>PIN</th>
                            <th style={{ padding: '1rem', color: 'var(--accent)' }}>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan="3" style={{ padding: '1rem', color: '#fff', backgroundColor: '#222' }}>// PADDLE_INTERFACE</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Dot Paddle</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>D4</td><td style={{ padding: '0.5rem 1rem' }}>Input for Dot</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Dash Paddle</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>D5</td><td style={{ padding: '0.5rem 1rem' }}>Input for Dash</td></tr>

                        <tr><td colSpan="3" style={{ padding: '1rem', color: '#fff', backgroundColor: '#222' }}>// ANALOG_CONTROLS</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>WPM Pot</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>A0</td><td style={{ padding: '0.5rem 1rem' }}>Speed Control</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Vol Pot</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>A1</td><td style={{ padding: '0.5rem 1rem' }}>Volume Control</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Tone Pot</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>A2</td><td style={{ padding: '0.5rem 1rem' }}>Frequency Control</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Func Buttons</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>A3</td><td style={{ padding: '0.5rem 1rem' }}>Analog Ladder Input</td></tr>

                        <tr><td colSpan="3" style={{ padding: '1rem', color: '#fff', backgroundColor: '#222' }}>// DIGITAL_IO</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Mode Button</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>D3</td><td style={{ padding: '0.5rem 1rem' }}>Switch Decoding Mode</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Clean Button</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>D2</td><td style={{ padding: '0.5rem 1rem' }}>Clear Buffers</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Buzzer</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>D9</td><td style={{ padding: '0.5rem 1rem' }}>Audio Output (Sidetone)</td></tr>
                        <tr><td style={{ padding: '0.5rem 1rem' }}>Radio Out</td><td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', color: '#0f0' }}>D6</td><td style={{ padding: '0.5rem 1rem' }}>Keying Interface</td></tr>
                    </tbody>
                </table>
            </div>

            {/* SCHEMATICS SECTION */}
            <h2 style={{ color: '#fff' }}>/SCHEMATICS_V3</h2>
            <div className="tech-card" style={{ padding: '0', overflow: 'hidden', marginBottom: '4rem', border: '1px solid #444' }}>
                {/* SCHEMATIC IMAGE */}
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <img
                        src="/Blogs/CW_keyer/schematic.png"
                        alt="Circuit Schematic"
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                            border: '1px solid #444',
                            borderRadius: '4px',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </div>

                {/* DOWNLOAD ACTIONS */}
                <div className="btn-group" style={{ justifyContent: 'center' }}>
                    <a href="/Blogs/CW_keyer/schematic.png" download="CW_Keyer_Schematic.png">
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

            {/* PROJECT STRUCTURE */}
            <h2 style={{ color: '#fff' }}>/SOURCE_CODE_STRUCTURE</h2>
            <div className="tech-card" style={{ marginBottom: '4rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'monospace', color: '#ccc' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>Ultimate_CW_Keyer.ino</strong> : Main application entry point and loop.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>PinSettings.h</strong> : Hardware pin definitions and configuration.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>CLI_Controller.h</strong> : Serial command parser and text input handler.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>Decoder.h</strong> : Morse-to-Text translation logic.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>Encoder.h</strong> : Text-to-Morse generation logic.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>LCD_Controller.h</strong> : Display rendering and I2C management.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#0f0' }}>Buzzer_LED_Controller.h</strong> : Audio generation and visual feedback.</li>
                </ul>
            </div>

            {/* FIRMWARE UPLOAD GUIDE */}
            <h2 style={{ color: '#fff' }}>/DEPLOYMENT_PROTOCOL</h2>
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }}>

                <div className="tech-card">
                    <h3>STEP 1: ACQUIRE SOURCE</h3>
                    <p>Clone the repository to your local machine.</p>
                    <div style={{ background: '#000', padding: '1rem', border: '1px solid #333', color: '#0f0', fontFamily: 'monospace', marginBottom: '1rem' }}>
                        git clone https://github.com/ekinefe/CW_keyer-GNR.git
                    </div>
                    <a href="https://github.com/ekinefe/CW_keyer-GNR" target="_blank" rel="noopener noreferrer">
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
                        <li><strong>Connect:</strong> Open Serial Monitor at <strong>9600 baud</strong>.</li>
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

            {/* OPERATIONAL MANUAL */}
            <h2 style={{ color: '#fff' }}>/OPERATIONAL_MANUAL</h2>
            <div className="grid-layout">
                <div className="tech-card">
                    <h3 style={{ color: 'var(--accent)' }}>// CLI_COMMANDS</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Access via Serial Monitor. Type `help` for full list.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'monospace', color: '#ccc', fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>wpm &lt;5-50&gt;</span> : Set speed in Words Per Minute.</li>
                        <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>tone &lt;400-1200&gt;</span> : Set sidetone frequency (Hz).</li>
                        <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>mode &lt;0|1|2&gt;</span> : Display Mode (0=CHAR, 1=MRS, 2=BOTH).</li>
                        <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>silent &lt;0|1&gt;</span> : Toggle silent mode.</li>
                        <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>status</span> : Show current settings.</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3 style={{ color: '#0f0' }}>// PADDLE_OPS</h3>
                    <p><strong>Decoding Modes:</strong></p>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', fontSize: '0.9rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>CHAR:</strong> Displays decoded ASCII characters.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>MRS:</strong> Displays pure Dot/Dash sequences.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>BOTH:</strong> Split screen view (Top: Text, Bottom: Morse).</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        Use <strong>Mode Button</strong> (D3) to cycle views.<br />
                        Use <strong>Clean Button</strong> (D2) to reset display.
                    </p>
                </div>
            </div>

            {/* VISUAL INTERFACE */}
            <h2 style={{ color: '#fff' }}>/VISUAL_INTERFACE</h2>
            <div className="tech-card" style={{ marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img
                        src="/Blogs/CW_keyer/display-01.png"
                        alt="LCD Interface Layout"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            border: '1px solid #444',
                            borderRadius: '4px'
                        }}
                    />
                    <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                        Fig. 1: Standard Operating Display
                    </p>
                </div>

                <h3>DISPLAY_SCANNERS</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', lineHeight: '1.8' }}>
                    <li>
                        <strong style={{ color: 'var(--accent)' }}>[TOP_LEFT] MODE:</strong> Current decoding status (CHAR / MRS / BOTH).
                        <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#aaa', borderLeft: '1px solid #444' }}>
                            <li style={{ marginBottom: '0.2rem' }}><strong style={{ color: 'var(--accent)' }}>CHAR example:</strong> <span style={{ fontFamily: 'monospace', color: '#fff' }}>TEST</span></li>
                            <li style={{ marginBottom: '0.2rem' }}><strong style={{ color: 'var(--accent)' }}>MRS example:</strong> <span style={{ fontFamily: 'monospace', color: '#fff' }}>.-. . ... -</span></li>
                            <li><strong style={{ color: 'var(--accent)' }}>BOTH example:</strong> <span style={{ fontFamily: 'monospace', color: '#fff' }}>T[.-.] E[.] S[...] T[...]</span></li>
                        </ul>
                    </li>
                    <li><strong style={{ color: 'var(--accent)', marginTop: '2rem' }}>[TOP_RIGHT] WPM:</strong> Current speed setting (Digits).</li>
                    <li><strong style={{ color: 'var(--accent)' }}>[BOTTOM] STREAM:</strong> Real-time decoded text stream.</li>
                </ul>

                <h3 style={{ marginTop: '2rem' }}>DYNAMIC_FEEDBACK</h3>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Real-time UI updates triggered by hardware controls:</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; WPM_POT</span><br />
                        Updates speed counter instantly.
                    </div>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; TONE_POT</span><br />
                        Displays frequency (Hz) momentarily.
                    </div>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; MODE_BTN</span><br />
                        Cycles decoding layout.
                    </div>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; CLEAN_BTN</span><br />
                        Wipes buffer & display.
                    </div>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; F1_BTN</span><br />
                        Default Action: Sends "CQ" Sequence.
                    </div>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; F2_BTN</span><br />
                        Default Action: Toggle Mute/Unmute.
                    </div>
                    <div style={{ background: '#111', padding: '1rem', border: '1px solid #333' }}>
                        <span style={{ color: '#0f0' }}>&gt; F3-F5_BTN</span><br />
                        Status: Empty / Programmable.
                    </div>
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