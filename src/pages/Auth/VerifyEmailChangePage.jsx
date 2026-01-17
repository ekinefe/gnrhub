import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const VerifyEmailChangePage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        if (!token) {
            setStatus("Error: No Token Provided");
            return;
        }

        const verify = async () => {
            try {
                const res = await fetch('/api/user/verify-email-token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token })
                });

                const data = await res.json();
                if (res.ok) {
                    setStatus("SUCCESS: Email Address Updated.");
                    setTimeout(() => navigate('/services/profile'), 3000);
                } else {
                    setStatus(`ERROR: ${data.error}`);
                }
            } catch (err) {
                setStatus("Network Error");
            }
        };
        verify();
    }, [token, navigate]);

    return (
        <div className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
            <h1>/EMAIL_VERIFICATION</h1>
            <div className="tech-card" style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', borderColor: status.includes('SUCCESS') ? '#0f0' : 'var(--border)' }}>
                <p style={{ color: status.includes('SUCCESS') ? '#0f0' : '#fff' }}>
                    {status}
                </p>
                {status.includes('SUCCESS') && <p style={{ fontSize: '0.8rem', color: '#888' }}>Redirecting to profile...</p>}
            </div>
        </div>
    );
};

export default VerifyEmailChangePage;