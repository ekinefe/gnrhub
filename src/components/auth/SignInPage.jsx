import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import '../../App.css'; // Use your global CSS variables

const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (res.ok) {
        // Success! Browser automatically saves the HttpOnly cookie.
        // We just redirect.
        window.location.href = '/services'; // Force reload to ensure state updates
    } else {
        alert("ACCESS DENIED: Invalid Credentials");
    }
};

const SignInPage = () => {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            flexDirection: 'column',
            textAlign: 'center'
        }}>
            <h1 style={{ marginBottom: '1rem', fontSize: '2rem' }}>/IDENTIFY_USER</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                &gt; AWAITING CREDENTIALS...
            </p>

            <div style={{
                border: '1px solid var(--accent)',
                padding: '2rem',
                background: 'var(--bg-panel)',
                boxShadow: '0 0 20px rgba(255, 49, 140, 0.2)'
            }}>
                <SignIn
                    path="/sign-in"
                    routing="path"
                    signUpUrl="/sign-up"
                    forceRedirectUrl="/services" // Where to go after login
                />
            </div>
        </div>
    );
};

export default SignInPage;