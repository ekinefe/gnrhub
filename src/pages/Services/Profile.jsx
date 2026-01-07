import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Password Change State
    const [passData, setPassData] = useState({ current: '', new: '' });
    const [passMsg, setPassMsg] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                } else {
                    // If not logged in, redirect to login or show guest?
                    // Profile page should probably be protected or show login prompt
                    setUser(null);
                    // navigate('/sign-in'); // Optional: redirect if this page is strictly private
                }
            } catch (err) {
                console.error("Failed to load profile");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        window.location.href = '/sign-in';
    };

    const handlePassChange = async (e) => {
        e.preventDefault();
        setPassMsg('Processing...');
        try {
            const res = await fetch('/api/auth/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword: passData.current, newPassword: passData.new })
            });
            const data = await res.json();
            if (res.ok) {
                setPassMsg('SUCCESS: Password Updated');
                setPassData({ current: '', new: '' });
                setTimeout(() => setPassMsg(''), 3000);
            } else {
                setPassMsg(`ERROR: ${data.error}`);
            }
        } catch (err) {
            setPassMsg('ERROR: Network failure');
        }
    };

    if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING_PROFILE...</div>;

    if (!user) {
        return (
            <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
                <div className="tech-card" style={{ borderColor: 'var(--accent)', padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
                    <h3 style={{ color: 'var(--accent)' }}>/ACCESS_DENIED</h3>
                    <p style={{ marginBottom: '1.5rem' }}>You must be logged in to view your profile.</p>
                    <Link to="/sign-in" className="btn primary-btn" style={{ width: '100%' }}>LOGIN</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ marginBottom: 0 }}>/USER_PROFILE</h1>
                </div>
                <button onClick={handleLogout} className="btn secondary-btn" style={{ borderColor: '#ff4444', color: '#ff4444' }}>
                    TERMINATE SESSION
                </button>
            </div>

            {/* CONTENT GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* IDENTITY CARD */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/IDENTITY</h3>
                    <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                        <div><small style={{ color: '#666' }}>FULL NAME</small><div>{user.name} {user.surname}</div></div>
                        <div><small style={{ color: '#666' }}>EMAIL LINK</small><div style={{ color: 'var(--accent)' }}>{user.email}</div></div>
                        <div><small style={{ color: '#666' }}>ACCESS</small><div style={{ display: 'inline-block', padding: '2px 6px', background: '#333', borderRadius: '4px', fontSize: '0.8rem' }}>{user.role?.toUpperCase()}</div></div>
                    </div>
                </div>

                {/* SECURITY CARD */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SECURITY</h3>
                    <form onSubmit={handlePassChange} style={{ marginTop: '1rem' }}>
                        <input type="password" placeholder="Current Password" className="text-input" style={{ width: '100%', marginBottom: '0.5rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.current} onChange={e => setPassData({ ...passData, current: e.target.value })} required />
                        <input type="password" placeholder="New Password" className="text-input" style={{ width: '100%', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.new} onChange={e => setPassData({ ...passData, new: e.target.value })} required />
                        {passMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: passMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{passMsg}</div>}
                        <button className="btn" style={{ width: '100%', background: '#222', color: '#fff' }}>UPDATE CREDENTIALS</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
