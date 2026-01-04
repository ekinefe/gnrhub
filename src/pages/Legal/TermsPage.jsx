import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', maxWidth: '800px' }}>
            <h1 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>/TERMS_OF_SERVICE</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h3>1. Introduction</h3>
                <p>Welcome to GNRHUB. By accessing our website and tools (including the Brand Book Generator), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h3>2. Usage License</h3>
                <p>GNRHUB is a personal portfolio and software development project. Access is granted for educational and demonstration purposes. You may use the tools provided for personal or professional projects, but you may not reverse engineer, resell, or redistribute the source code without explicit permission.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h3>3. Disclaimer of Warranties</h3>
                <p>The materials on GNRHUB are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties. We do not warrant that the tools will be error-free, uninterrupted, or that your data will be preserved indefinitely.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h3>4. Account Security</h3>
                <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>
            </section>

            {/* NEW SECTION ADDED BELOW */}
            <section style={{ marginBottom: '2rem', border: '1px solid var(--accent)', padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--accent)', marginTop: 0 }}>5. Limitation of Liability</h3>
                <p><strong>I do not accept any responsibility</strong> for any damages, data loss, or business interruptions that may occur while using GNRHUB.</p>
                <p>In no event shall the developer (Ekin Efe Gungor) or GNRHUB be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we have been notified orally or in writing of the possibility of such damage.</p>
                <p>This is a personal project provided for free; use it at your own risk.</p>
            </section>

            <div style={{ marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                <Link to="/sign-up" className="btn primary-btn">← Back to Registration</Link>
            </div>
        </div>
    );
};

export default TermsPage;