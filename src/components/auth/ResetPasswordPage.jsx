import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword: password })
            });

            const data = await res.json();

            if (res.ok) {
                setIsSuccess(true);
                setStatus("Credentials updated successfully. Redirecting...");
                setTimeout(() => navigate('/sign-in'), 3000);
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (err) {
            setStatus("Network failure.");
        }
    };

    if (!token) return <div style={{ color: 'red', textAlign: 'center', marginTop: '5rem' }}>ERROR: MISSING_TOKEN</div>;

    return (
        <div className="container" style={{ paddingTop: '5rem', display: 'flex', justifyContent: 'center' }}>
            <div className="tech-card" style={{ maxWidth: '400px', width: '100%' }}>
                <h3>/SET_NEW_CREDENTIALS</h3>

                {!isSuccess ? (
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                        <input
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
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
                            style={{
                                background: '#fff',
                                color: '#000',
                                border: 'none',
                                padding: '10px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            UPDATE PASSWORD
                        </button>
                    </form>
                ) : (
                    <div style={{ marginTop: '1rem', color: '#0f0' }}>
                        > SUCCESS. TERMINATING SESSION...
                    </div>
                )}

                {status && !isSuccess && (
                    <div style={{ marginTop: '1rem', color: 'red', fontSize: '0.9rem' }}>
                        > {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResetPasswordPage;