import React, { useEffect, useState } from 'react';
import '../../App.css'; // Use global styles

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/admin/users');
                if (!res.ok) throw new Error("Access Denied or Server Error");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <div className="container">/LOADING_ADMIN_DATA...</div>;
    if (error) return <div className="container" style={{ color: 'red' }}>⚠ {error}</div>;

    return (
        <div className="container">
            <h1 style={{ color: 'var(--accent)' }}>/ADMIN_PANEL</h1>
            <p>User Database Access</p>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--border)', color: 'var(--text-muted)' }}>
                            <th style={{ padding: '1rem' }}>ID</th>
                            <th style={{ padding: '1rem' }}>NAME</th>
                            <th style={{ padding: '1rem' }}>EMAIL</th>
                            <th style={{ padding: '1rem' }}>ROLE</th>
                            <th style={{ padding: '1rem' }}>JOINED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #333' }}>
                                <td style={{ padding: '1rem', fontFamily: 'monospace' }}>#{user.id}</td>
                                <td style={{ padding: '1rem' }}>{user.name} {user.surname}</td>
                                <td style={{ padding: '1rem', color: 'var(--accent)' }}>{user.email}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        background: user.access_level === 'admin' ? 'var(--accent)' : '#333',
                                        color: user.access_level === 'admin' ? '#000' : '#fff',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {user.access_level.toUpperCase()}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#888' }}>
                                    {new Date(user.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;