import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Call YOUR backend
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            // If successful, the cookie is set automatically by the server
            // We just redirect
            navigate('/services');
        } else {
            alert("ACCESS DENIED");
        }
    };

    return (
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <h1>/MANUAL_OVERRIDE</h1>
            <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto' }}>
                <input
                    className="text-input"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    style={{ marginBottom: '1rem', width: '100%', padding: '10px' }}
                />
                <input
                    type="password"
                    className="text-input"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    style={{ marginBottom: '1rem', width: '100%', padding: '10px' }}
                />
                <button className="btn primary-btn" style={{ width: '100%' }}>
                    AUTHENTICATE
                </button>
            </form>
        </div>
    );
};

export default SignInPage;