import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', maxWidth: '800px' }}>
            <h1 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>/PRIVACY_POLICY</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h3>1. Data Collection</h3>
                <p>We collect minimal information necessary to provide our services:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li><strong>Account Data:</strong> Username, Email address, Name, and Surname.</li>
                    <li><strong>Security Data:</strong> Passwords are <strong>never</strong> stored in plain text. They are hashed using bcrypt before storage.</li>
                    <li><strong>Usage Data:</strong> Brand books or projects you save within the application.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h3>2. How We Use Your Data</h3>
                <p>Your data is used solely for:</p>
                <ul>
                    <li>Authenticating your access to the GNRHUB tools.</li>
                    <li>Saving your personal project preferences (e.g., Brand Book configurations).</li>
                    <li>Sending you exports of your projects via email (upon request).</li>
                </ul>
            </section>

            {/* GÜNCELLENEN KISIM: Veri Satış Hakları */}
            <section style={{ marginBottom: '2rem', border: '1px solid var(--accent)', padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--accent)', marginTop: 0 }}>3. Data Sharing & Future Rights</h3>
                <p><strong>Current Status:</strong> As of today, we do not actively sell, trade, or rent your personal identification information to third parties.</p>

                <p style={{ marginTop: '1rem' }}><strong>Reservation of Rights:</strong> However, GNRHUB and its developer <strong>explicitly reserve the right</strong> to sell, transfer, license, or share user data in the future at their sole discretion (e.g., in the event of a business sale, acquisition, or strategy change).</p>

                <p>By creating an account, you acknowledge that:</p>
                <ul style={{ marginLeft: '1.5rem' }}>
                    <li>The data policy may change in the future.</li>
                    <li>The developer retains all rights regarding the potential future commercialization of the data collected.</li>
                    <li>No further consent will be required for such transfers.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h3>4. Your Rights</h3>
                <p>You have the right to request the deletion of your account and all associated data at any time. Please contact the administrator at <span style={{ color: 'var(--accent)' }}>ekinefegnr@gmail.com</span> for requests.</p>
            </section>

            <div style={{ marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                <Link to="/sign-up" className="btn primary-btn">← Back to Registration</Link>
            </div>
        </div>
    );
};

export default PrivacyPage;