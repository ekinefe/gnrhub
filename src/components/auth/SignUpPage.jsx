import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // 1. Basic Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        try {
            // 2. Send to Cloudflare Backend
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    surname: formData.surname,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await res.json();

            if (res.ok) {
                // Success! Redirect to Login
                alert("Account created! Please log in.");
                navigate('/sign-in');
            } else {
                setError(data.error || "Registration failed");
            }
        } catch (err) {
            setError("Network Error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>/INIT_USER</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>&gt; CREATE_NEW_IDENTITY</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Sign up to access your account & services</p>

            <form onSubmit={handleRegister} style={{ maxWidth: '350px', width: '100%' }}>

                {/* Name Fields Row */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <input
                        name="name"
                        placeholder="Name"
                        className="text-input"
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="surname"
                        placeholder="Surname"
                        className="text-input"
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    onChange={handleChange}
                    required
                />

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    onChange={handleChange}
                    required
                />

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
                    {isLoading ? 'PROCESSING...' : 'REGISTER IDENTITY'}
                </button>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Already have access? <Link to="/sign-in" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Login here</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;