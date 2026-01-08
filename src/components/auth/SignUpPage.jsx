import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();

    // 1. Form State
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // 2. New State for the Checkbox
    const [agreed, setAgreed] = useState(false);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // 3. Validation: Check Password Match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        // 4. Validation: Check Legal Consent
        if (!agreed) {
            setError("You must agree to the Terms & Privacy Policy.");
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.username,
                    name: formData.name,
                    surname: formData.surname,
                    email: formData.email,
                    password: formData.password,
                    origin: window.location.origin
                })
            });

            const data = await res.json();

            if (res.ok) {
                alert("Registration successful! Please check your inbox to verify your email.");
                navigate('/sign-in');
            } else {
                setError(data.error || "Registration failed");
            }
        } catch (err) {
            setError("Network Error. Please check your connection.");
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

                <input
                    name="username"
                    placeholder="Username (e.g. Neo)"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <input
                        name="name"
                        placeholder="Name"
                        className="text-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="surname"
                        placeholder="Surname"
                        className="text-input"
                        value={formData.surname}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="text-input"
                    style={{ marginBottom: '1rem', width: '100%' }}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {/* --- 5. NEW LEGAL CHECKBOX SECTION --- */}
                <div style={{
                    textAlign: 'left',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                }}>
                    <input
                        type="checkbox"
                        id="legal-consent"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        style={{ marginTop: '3px', cursor: 'pointer' }}
                    />
                    <label htmlFor="legal-consent" style={{ cursor: 'pointer', lineHeight: '1.4' }}>
                        I agree to the <Link to="/terms" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</Link>. I understand that my data will be processed securely.
                    </label>
                </div>

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

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div>
                        Already have access? <Link to="/sign-in" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Login here</Link>
                    </div>

                    {/* --- ADDED FORGOT PASSWORD LINK HERE --- */}
                    <div>
                        <Link to="/forgot-password" style={{ color: '#666', textDecoration: 'none', fontSize: '0.8rem' }}>
                            &gt; RECOVER_LOST_CREDENTIALS
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;