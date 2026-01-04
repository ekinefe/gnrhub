import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            try {
                // Ask the backend if we are logged in
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    setIsAuthorized(true);
                } else {
                    navigate('/sign-in');
                }
            } catch (err) {
                navigate('/sign-in');
            } finally {
                setIsLoading(false);
            }
        };
        checkSession();
    }, [navigate]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#050505', color: '#FF318C' }}>
                /VERIFYING_CREDENTIALS...
            </div>
        );
    }

    return isAuthorized ? children : null;
};

export default ProtectedRoute;