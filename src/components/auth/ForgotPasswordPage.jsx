import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const res = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            // We always show success to prevent email enumeration (security)
            setStatus("If that email is in our database, a signal has been sent.");
        } catch (err) {
            setStatus("System Error: Unable to transmit signal.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '5rem', display: 'flex', justifyContent: 'center' }}>
            <div className="tech-card" style={{ maxWidth: '400px', width: '100%' }}>
                <h3>/RECOVERY_MODE</h3>
                <p style={{ color: '#888', marginBottom: '1.5rem' }}>Enter your email to reset access credentials.</p>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                    <input
                        type="email"
                        placeholder="email@address.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            background: '#000',
                            border: '1px solid #333',
                            color: '#fff',
                            padding: '10px',
                            fontFamily: 'monospace'
                        }}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            padding: '10px',
                            fontWeight: 'bold',
                            cursor: loading ? 'wait' : 'pointer'
                        }}
                    >
                        {loading ? 'TRANSMITTING...' : 'SEND RESET SIGNAL'}
                    </button>
                </form>

                {status && (
                    <div style={{ marginTop: '1rem', padding: '10px', border: '1px solid #333', color: '#0f0', fontSize: '0.9rem' }}>
                        > {status}
                    </div>
                )}

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <Link to="/sign-in" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>
                        &lt; RETURN_TO_LOGIN
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;