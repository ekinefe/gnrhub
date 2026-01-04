import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (res.ok) {
                // Success! Force reload to update ProtectedRoute state
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
            <p>Sign in to access your account & services</p>
            <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <input
                    className="text-input"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    style={{ marginBottom: '1rem', width: '100%' }}
                />
                <input
                    type="password"
                    className="text-input"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    style={{ marginBottom: '1rem', width: '100%' }}
                />
                <button className="btn primary-btn" style={{ width: '100%' }}>
                    LOGIN
                </button>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>                    New user? <Link to="/sign-up" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;