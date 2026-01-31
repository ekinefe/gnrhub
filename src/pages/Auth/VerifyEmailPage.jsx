import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        if (!token) {
            setStatus("Error: No token provided.");
            return;
        }

        const verify = async () => {
            try {
                const res = await fetch('/api/auth/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token })
                });

                if (res.ok) {
                    setStatus("SUCCESS: Identity Verified.");
                    setTimeout(() => navigate('/sign-in'), 2000);
                } else {
                    const data = await res.json();
                    setStatus(`ERROR: ${data.error}`);
                }
            } catch (_err) {
                setStatus("ERROR: Network failure.");
            }
        };
        verify();
    }, [token, navigate]);

    return (
        <div className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
            <div className="tech-card" style={{ maxWidth: '400px', margin: '0 auto', borderColor: status.includes('SUCCESS') ? '#0f0' : 'var(--accent)' }}>
                <h3>/IDENTITY_VERIFICATION</h3>
                <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
                    {status}
                </p>
                {status.includes('SUCCESS') && <p style={{ fontSize: '0.8rem', color: '#666' }}>Redirecting to login...</p>}
            </div>
        </div>
    );
};

export default VerifyEmailPage;