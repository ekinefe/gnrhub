import React, { useEffect, useState } from 'react';
import '../../App.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState({ counts: { total: 0, online: 0, admins: 0 }, services: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch User List
                const usersRes = await fetch('/api/admin/users');
                const usersData = await usersRes.json();

                // Fetch Stats
                const statsRes = await fetch('/api/admin/stats');
                const statsData = await statsRes.json();

                if (usersRes.ok) setUsers(usersData);
                if (statsRes.ok) setStats(statsData);

            } catch (err) {
                console.error("Dashboard Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING_SYSTEM_METRICS...</div>;

    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>/COMMAND_CENTER</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>System Overview & User Management</p>

            {/* --- METRIC CARDS --- */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>

                <MetricCard
                    label="TOTAL USERS"
                    value={stats.counts.total}
                    icon="👥"
                />
                <MetricCard
                    label="ONLINE (30m)"
                    value={stats.counts.online}
                    icon="🟢"
                    isActive={stats.counts.online > 0}
                />
                <MetricCard
                    label="ADMINS"
                    value={stats.counts.admins}
                    icon="🛡️"
                />
                <MetricCard
                    label="ACTIVE SERVICES"
                    value={stats.services.length}
                    icon="⚡"
                />
            </div>

            {/* --- SYSTEM HEALTH GRID --- */}
            <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>/SYSTEM_STATUS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                {stats.services.map(service => (
                    <div key={service.id} style={{
                        border: '1px solid #333',
                        padding: '1rem',
                        background: '#0a0a0a',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{service.name}</div>
                        <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{service.status.toUpperCase()}</div>
                        <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', borderRadius: '50%', background: '#0f0', boxShadow: '0 0 10px #0f0' }}></div>
                    </div>
                ))}
            </div>

            {/* --- USER TABLE --- */}
            <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>/USER_DATABASE</h3>
            <div style={{ overflowX: 'auto', background: '#0a0a0a', border: '1px solid #333', borderRadius: '4px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #333', color: '#888', fontSize: '0.85rem' }}>
                            <th style={{ padding: '1rem' }}>ID</th>
                            <th style={{ padding: '1rem' }}>IDENTITY</th>
                            <th style={{ padding: '1rem' }}>CONTACT</th>
                            <th style={{ padding: '1rem' }}>ACCESS</th>
                            <th style={{ padding: '1rem' }}>LAST SEEN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #222' }}>
                                <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#555' }}>#{user.id}</td>
                                <td style={{ padding: '1rem' }}>
                                    {/* <div style={{ fontWeight: 'bold' }}>{user.username || '---'}</div> */}
                                    <div style={{ fontWeight: 'bold' }}>{user.username}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#888' }}>{user.name} {user.surname}</div>
                                </td>
                                <td style={{ padding: '1rem', color: 'var(--accent)' }}>{user.email}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        background: user.access_level === 'admin' ? 'rgba(255, 49, 140, 0.2)' : '#222',
                                        color: user.access_level === 'admin' ? 'var(--accent)' : '#ccc',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        border: user.access_level === 'admin' ? '1px solid var(--accent)' : '1px solid #444'
                                    }}>
                                        {user.access_level.toUpperCase()}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#888', fontFamily: 'monospace' }}>
                                    {user.last_login ? new Date(user.last_login).toLocaleString() : 'Never'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Helper Component for the top cards
const MetricCard = ({ label, value, icon, isActive }) => (
    <div style={{
        border: '1px solid #333',
        padding: '1.5rem',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
            <span style={{ color: '#888', fontSize: '0.8rem', letterSpacing: '1px' }}>{label}</span>
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: isActive ? '#0f0' : 'white' }}>
            {value}
        </div>
        {isActive && (
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '0.7rem', color: '#0f0', animation: 'pulse 2s infinite' }}>
                ● LIVE
            </div>
        )}
    </div>
);

export default AdminDashboard;