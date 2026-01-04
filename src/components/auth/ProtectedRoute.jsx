import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole = 'user' }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            try {
                // Ask the backend if we are logged in
                const res = await fetch('/api/auth/me');

                if (res.ok) {
                    const data = await res.json();

                    // Optional: Check Access Level (e.g., if page requires 'admin')
                    if (requiredRole === 'admin' && data.user.access_level !== 'admin') {
                        alert("Access Denied: Admins only.");
                        navigate('/'); // Kick them out
                    } else {
                        setIsAuthorized(true);
                    }
                } else {
                    navigate('/sign-in'); // Not logged in
                }
            } catch (err) {
                navigate('/sign-in');
            } finally {
                setIsLoading(false);
            }
        };

        checkSession();
    }, [navigate, requiredRole]);

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