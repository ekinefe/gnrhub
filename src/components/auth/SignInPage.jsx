import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
    // const navigate = useNavigate(); // Unused
    const [formData, setFormData] = useState({ identifier: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok) {
                // Force a reload to refresh the cookie status in App.jsx
                window.location.href = '/services';
            } else {
                setError(data.error || "Access Denied");
            }
        } catch (_err) {
            setError("Network Error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container" style={{ textAlign: 'center', paddingTop: '5rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>/AUTHENTICATION</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>&gt; ENTER_CREDENTIALS</p>

            <form onSubmit={handleLogin} style={{ maxWidth: '350px', width: '100%' }}>
                <input
                    name="identifier"
                    placeholder="Email or Username"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    value={formData.identifier}
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="text-input"
                    style={{ width: '100%' }}
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {/* --- ADDED FORGOT PASSWORD LINK HERE --- */}
                <div style={{ textAlign: 'right', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                    <Link
                        to="/forgot-password"
                        style={{ color: '#666', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                        onMouseOut={(e) => e.target.style.color = '#666'}
                    >
                        &gt; FORGOT_CREDENTIALS?
                    </Link>
                </div>
                {/* --------------------------------------- */}

                {error && (
                    <div style={{ color: '#ff4444', marginBottom: '1rem', border: '1px solid #ff4444', padding: '0.5rem', fontSize: '0.9rem' }}>
                        ⚠ {error}
                    </div>
                )}

                <button
                    className="btn primary-btn"
                    style={{ width: '100%', marginBottom: '1rem' }}
                    disabled={isLoading}
                >
                    {isLoading ? 'VERIFYING...' : 'LOGIN'}
                </button>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    New user? <Link to="/sign-up" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Initialize Protocol</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;