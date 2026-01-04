import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignInPage = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    // unused: const navigate = useNavigate(); // Not needed since we use window.location

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, password })
            });

            if (res.ok) {
                // Success! Force reload ensures the browser sends the new cookie
                window.location.href = '/services';
            } else {
                alert("ACCESS DENIED: Invalid Credentials");
            }
        } catch (error) {
            alert("Connection Error. Please check your network.");
        }
    };

    return (
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <h1>/AUTHENTICATION</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                &gt; ENTER_CREDENTIALS
            </p>

            <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <input
                    className="text-input"
                    placeholder="Email or Username"
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    style={{ marginBottom: '1rem', width: '100%' }}
                    required // Added HTML validation
                />
                <input
                    type="password"
                    className="text-input"
                    placeholder="Password"
                    value={password} // <--- FIXED: Added value binding
                    onChange={e => setPassword(e.target.value)}
                    style={{ marginBottom: '1rem', width: '100%' }}
                    required // Added HTML validation
                />

                <button className="btn primary-btn" style={{ width: '100%' }}>
                    LOGIN
                </button>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                    New user? <Link to="/sign-up" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Initialize Protocol</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;