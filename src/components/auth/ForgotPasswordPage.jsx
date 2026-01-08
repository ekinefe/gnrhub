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

            // Always show success message to prevent user enumeration
            setStatus("If this email exists in our records, a recovery signal has been dispatched.");
        } catch (err) {
            setStatus("System Error: signal_transmission_failed. Please retry.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{
            paddingTop: '6rem',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{ marginBottom: '0.5rem' }}>/RECOVERY_PROTOCOL</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>&gt; INITIATE_CREDENTIAL_RESET</p>

            <div className="tech-card" style={{ maxWidth: '450px', width: '100%', borderColor: 'var(--border)' }}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Target Email</label>
                        <input
                            type="email"
                            placeholder="user@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                background: '#000',
                                border: '1px solid #333',
                                color: '#eee',
                                padding: '12px',
                                fontFamily: 'var(--font-main)',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                            onBlur={(e) => e.target.style.borderColor = '#333'}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn primary-btn"
                        disabled={loading}
                        style={{ width: '100%' }}
                    >
                        {loading ? 'TRANSMITTING...' : 'SEND RECOVERY SIGNAL'}
                    </button>
                </form>

                {status && (
                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1rem',
                        border: '1px solid var(--accent)',
                        background: 'rgba(255, 49, 140, 0.05)',
                        color: 'var(--accent)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                    }}>
                        &gt; {status}
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <Link to="/sign-in" style={{ color: '#666', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.target.style.color = '#fff'}
                    onMouseOut={(e) => e.target.style.color = '#666'}>
                    &lt; RETURN_TO_LOGIN
                </Link>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;