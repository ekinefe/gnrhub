import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // --- NEW: SEPARATE STATES FOR CARDS ---
    const [usernameVal, setUsernameVal] = useState('');
    const [usernameMsg, setUsernameMsg] = useState('');

    const [emailVal, setEmailVal] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    // ---------------------------------------

    // Password & Delete states
    const [passData, setPassData] = useState({ current: '', new: '', confirm: '' });
    const [passMsg, setPassMsg] = useState('');
    const [deleteData, setDeleteData] = useState({ password: '' });
    const [deleteMsg, setDeleteMsg] = useState('');
    const [appData, setAppData] = useState({ role: 'TESTER', customRole: '', reason: '' });
    const [appMsg, setAppMsg] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                } else {
                    setUser(null);
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

    // --- 1. HANDLE USERNAME UPDATE ---
    const handleUsernameUpdate = async (e) => {
        e.preventDefault();
        setUsernameMsg('Processing...');

        try {
            const res = await fetch('/api/user/update-profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'username', value: usernameVal })
            });
            const data = await res.json();

            if (res.ok) {
                setUsernameMsg(`SUCCESS: ${data.message}`);
                setUsernameVal('');
                // Reload to reflect new username in the UI/Session
                setTimeout(() => window.location.reload(), 1500);
            } else {
                setUsernameMsg(`ERROR: ${data.error}`);
            }
        } catch (err) {
            setUsernameMsg('ERROR: Network failure');
        }
    };

    // --- 2. HANDLE EMAIL UPDATE ---
    const handleEmailUpdate = async (e) => {
        e.preventDefault();
        setEmailMsg('Processing...');

        try {
            const res = await fetch('/api/user/update-profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'email', value: emailVal })
            });
            const data = await res.json();

            if (res.ok) {
                setEmailMsg(`SUCCESS: ${data.message}`);
                setEmailVal('');
            } else {
                setEmailMsg(`ERROR: ${data.error}`);
            }
        } catch (err) {
            setEmailMsg('ERROR: Network failure');
        }
    };

    // ... (Keep handlePassChange, handleDeleteAccount, handleRoleApply exactly as before)
    const handlePassChange = async (e) => {
        e.preventDefault();
        setPassMsg('');
        if (passData.new !== passData.confirm) {
            setPassMsg("ERROR: New passwords do not match.");
            return;
        }
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
                setPassData({ current: '', new: '', confirm: '' });
                setTimeout(() => setPassMsg(''), 3000);
            } else {
                setPassMsg(`ERROR: ${data.error}`);
            }
        } catch (err) {
            setPassMsg('ERROR: Network failure');
        }
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm("WARNING: This action is irreversible. Are you sure you want to delete your account?");
        if (!confirmDelete) return;
        setDeleteMsg('Processing...');
        try {
            const res = await fetch('/api/auth/delete-account', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: deleteData.password })
            });
            const data = await res.json();
            if (res.ok) {
                setDeleteMsg('SUCCESS: Account Deleted');
                window.location.href = '/sign-in';
            } else {
                setDeleteMsg(`ERROR: ${data.error}`);
            }
        } catch (err) {
            setDeleteMsg('ERROR: Network failure');
        }
    };

    const handleRoleApply = async (e) => {
        e.preventDefault();
        setAppMsg('Transmitting Application...');
        try {
            const res = await fetch('/api/user/apply-role', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.id,
                    appliedRole: appData.role,
                    customRoleName: appData.customRole,
                    reason: appData.reason
                })
            });
            const data = await res.json();
            if (res.ok) {
                setAppMsg('SUCCESS: Application Sent to Admin.');
                setAppData({ role: 'TESTER', customRole: '', reason: '' });
            } else {
                setAppMsg(`ERROR: ${data.error}`);
            }
        } catch (err) {
            setAppMsg('ERROR: Network transmission failed.');
        }
    };

    if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING_PROFILE...</div>;
    if (!user) return (null);

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div><h1 style={{ marginBottom: 0 }}>/USER_PROFILE</h1></div>
                <button onClick={handleLogout} className="btn secondary-btn" style={{ borderColor: '#ff4444', color: '#ff4444' }}>TERMINATE SESSION</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* 1. IDENTITY CARD (Read Only) */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/IDENTITY</h3>
                    <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                        <div><small style={{ color: '#666' }}>USERNAME:</small><div>{user.username}</div></div>
                        <div><small style={{ color: '#666' }}>FULL NAME:</small><div>{user.name} {user.surname}</div></div>
                        <div><small style={{ color: '#666' }}>EMAIL:</small><div style={{ color: 'var(--accent)' }}>{user.email}</div></div>
                        <div><small style={{ color: '#666' }}>ROLE:</small><div style={{ display: 'inline-block', padding: '2px 6px', background: '#333', borderRadius: '4px', fontSize: '0.8rem' }}>{user.role?.toUpperCase()}</div></div>
                    </div>
                </div>

                {/* 2. CHANGE USERNAME CARD */}
                {/* <div className="tech-card" style={{ borderColor: 'var(--accent)' }}> */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/CHANGE_USERNAME</h3>
                    <form onSubmit={handleUsernameUpdate} style={{ marginTop: '1rem' }}>
                        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>Update your display handle.</p>

                        <input
                            type="text"
                            placeholder="New Username"
                            className="text-input"
                            style={{ width: '100%', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }}
                            value={usernameVal}
                            onChange={e => setUsernameVal(e.target.value)}
                            required
                            minLength={3}
                        />

                        {usernameMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: usernameMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{usernameMsg}</div>}

                        <button className="btn primary-btn" style={{ width: '100%' }}>UPDATE USERNAME</button>
                    </form>
                </div>

                {/* 3. CHANGE EMAIL CARD */}
                {/* <div className="tech-card" style={{ borderColor: 'var(--accent)' }}> */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/CHANGE_EMAIL</h3>
                    <form onSubmit={handleEmailUpdate} style={{ marginTop: '1rem' }}>
                        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>Requires email verification.</p>

                        <input
                            type="email"
                            placeholder="New Email Address"
                            className="text-input"
                            style={{ width: '100%', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }}
                            value={emailVal}
                            onChange={e => setEmailVal(e.target.value)}
                            required
                        />

                        {emailMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: emailMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{emailMsg}</div>}

                        <button className="btn primary-btn" style={{ width: '100%' }}>VERIFY & UPDATE</button>
                    </form>
                </div>

                {/* 4. SECURITY CARD */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SECURITY</h3>
                    <form onSubmit={handlePassChange} style={{ marginTop: '1rem' }}>
                        <input type="password" placeholder="Current Password" className="text-input" style={{ width: '100%', marginBottom: '0.5rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.current} onChange={e => setPassData({ ...passData, current: e.target.value })} required />
                        <input type="password" placeholder="New Password" className="text-input" style={{ width: '100%', marginBottom: '0.5rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.new} onChange={e => setPassData({ ...passData, new: e.target.value })} required />
                        <input type="password" placeholder="Confirm New Password" className="text-input" style={{ width: '100%', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.confirm} onChange={e => setPassData({ ...passData, confirm: e.target.value })} required />
                        {passMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: passMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{passMsg}</div>}
                        <button className="btn" style={{ width: '100%', background: '#222', color: '#fff' }}>UPDATE CREDENTIALS</button>
                    </form>
                </div>

                {/* 5. ROLE APPLICATION */}
                <div className="tech-card" style={{ borderColor: '#0f0' }}>
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', color: '#0f0' }}>/ROLE_APPLICATION</h3>
                    <form onSubmit={handleRoleApply} style={{ marginTop: '1rem' }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>TARGET ROLE</label>
                            <select className="text-input" style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '0.5rem' }} value={appData.role} onChange={(e) => setAppData({ ...appData, role: e.target.value })}>
                                <option value="TESTER">TESTER</option>
                                <option value="ADMIN">ADMINISTRATOR</option>
                                <option value="MODERATOR">MODERATOR</option>
                                <option value="SPECIAL">SPECIAL / RECOMMENDATION</option>
                            </select>
                        </div>
                        {appData.role === 'SPECIAL' && (<input type="text" placeholder="Specify Recommended Role" className="text-input" style={{ width: '100%', marginBottom: '0.5rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={appData.customRole} onChange={e => setAppData({ ...appData, customRole: e.target.value })} required />)}
                        <textarea placeholder="Statement of Intent: Why are you applying for this role?" className="text-input" style={{ width: '100%', minHeight: '80px', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem', fontFamily: 'monospace' }} value={appData.reason} onChange={e => setAppData({ ...appData, reason: e.target.value })} required />
                        {appMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: appMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{appMsg}</div>}
                        <button className="btn" style={{ width: '100%', background: '#030', color: '#0f0', borderColor: '#0f0' }}>SUBMIT APPLICATION</button>
                    </form>
                </div>

                {/* 6. DELETE ACCOUNT */}
                <div className="tech-card" style={{ borderColor: '#ff4444' }}>
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', color: '#ff4444' }}>/DELETE_ACCOUNT</h3>
                    <form onSubmit={handleDeleteAccount} style={{ marginTop: '1rem' }}>
                        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>To permanently delete your account, please confirm your password.</p>
                        <input type="password" placeholder="Confirm Password" className="text-input" style={{ width: '100%', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={deleteData.password} onChange={e => setDeleteData({ ...deleteData, password: e.target.value })} required />
                        {deleteMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: deleteMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{deleteMsg}</div>}
                        <button className="btn" style={{ width: '100%', background: '#300', color: '#ff4444', borderColor: '#ff4444' }}>DELETE ACCOUNT</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Profile;