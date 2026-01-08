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
                // We use credentials: 'include' to be explicit, though same-origin defaults to it.
                // This verifies the 'HttpOnly' cookie that JS cannot see.
                const res = await fetch('/api/auth/me', {
                    headers: { 'Accept': 'application/json' }
                });

                if (res.ok) {
                    setIsAuthorized(true);
                } else {
                    // 401 Unauthorized -> Redirect to Login
                    navigate('/sign-in');
                }
            } catch (err) {
                // Network error or 500 -> Fail safely to login
                console.error("Auth Check Failed:", err);
                navigate('/sign-in');
            } finally {
                setIsLoading(false);
            }
        };
        checkSession();
    }, [navigate]);

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                height: '100vh',
                width: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#050505',
                color: '#ededed',
                fontSize: '1.2rem',
                fontFamily: 'monospace'
            }}>
                /VERIFYING_ACCESS...
            </div>
        );
    }

    return isAuthorized ? children : null;
};

export default ProtectedRoute;