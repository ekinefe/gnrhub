import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await fetch('/api/auth/me', {
                    headers: { 'Accept': 'application/json' }
                });

                if (res.ok) {
                    const data = await res.json();
                    // Check if role is admin (case-insensitive)
                    // The backend returns { user: { role: '...' } }
                    const user = data.user;
                    if (user && user.role && user.role.toUpperCase() === 'ADMIN') {
                        setIsAdmin(true);
                    } else {
                        // User is logged in but not admin
                        // Redirect to services or show alert
                        window.alert("ACCESS DENIED: Administrator privileges required.");
                        navigate('/services');
                    }
                } else {
                    // Not logged in
                    navigate('/sign-in');
                }
            } catch (err) {
                console.error("Admin Auth Check Failed:", err);
                navigate('/sign-in');
            } finally {
                setIsLoading(false);
            }
        };
        checkAdmin();
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
                color: '#ff4444',
                fontSize: '1.2rem',
                fontFamily: 'monospace'
            }}>
                /VERIFYING_PRIVILEGES...
            </div>
        );
    }

    return isAdmin ? children : null;
};

export default AdminRoute;
