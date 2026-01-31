import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';

const ResetPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setStatus("Error: Passwords do not match.");
            return;
        }

        setLoading(true);
        setStatus('');

        try {
            const res = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword: password })
            });

            const data = await res.json();

            if (res.ok) {
                setIsSuccess(true);
                setStatus("Credentials updated successfully. Redirecting to login...");
                setTimeout(() => navigate('/sign-in'), 3000);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (_err) {
            setStatus("Network failure. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!token) return (
        <div className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
            <h1 style={{ color: '#ff4444' }}>/INVALID_TOKEN</h1>
            <p>Access denied. No reset token detected.</p>
            <Link to="/sign-in" className="btn secondary-btn">RETURN TO LOGIN</Link>
        </div>
    );

    return (
        <div className="container" style={{
            paddingTop: '6rem',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{ marginBottom: '0.5rem' }}>/CREDENTIAL_OVERRIDE</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>&gt; SET_NEW_PASSWORD</p>

            <div className="tech-card" style={{ maxWidth: '450px', width: '100%', borderColor: isSuccess ? '#0f0' : 'var(--border)' }}>
                {!isSuccess ? (
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>New Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
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

                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={8}
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
                            {loading ? 'UPDATING...' : 'CONFIRM NEW CREDENTIALS'}
                        </button>
                    </form>
                ) : (
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ color: '#0f0', border: 'none' }}>/SUCCESS</h3>
                        <p style={{ color: '#aaa' }}>Password has been updated. Terminating reset session...</p>
                    </div>
                )}

                {status && !isSuccess && (
                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1rem',
                        border: '1px solid #ff4444',
                        color: '#ff4444',
                        fontSize: '0.9rem'
                    }}>
                        ⚠ {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResetPasswordPage;