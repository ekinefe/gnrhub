import React, { useState } from 'react';
import '../../../../App.css'; // Go up 4 levels to reach src/App.css

const GymDashboard = ({ sessions, onOpenSession, onRefresh }) => {
    // Local State for Creating
    const [newSessionName, setNewSessionName] = useState('');

    // Local State for Editing Cards
    const [editingSessionId, setEditingSessionId] = useState(null);
    const [editSessionData, setEditSessionData] = useState({ name: '', date: '' });

    // 1. Create New Session
    const handleCreateSession = async (e) => {
        e.preventDefault();
        if (!newSessionName) return;
        const dateStr = new Date().toISOString();

        try {
            const res = await fetch('/api/gym/sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newSessionName, date: dateStr })
            });

            if (res.ok) {
                setNewSessionName('');
                onRefresh(); // Tell parent to reload data
            }
        } catch (err) {
            console.error("Error creating session");
        }
    };

    // 2. Start Editing
    const startEditingSession = (e, session) => {
        e.stopPropagation();
        setEditingSessionId(session.id);
        const dateObj = new Date(session.created_at);
        const dateStr = dateObj.toISOString().split('T')[0];
        setEditSessionData({ name: session.name, date: dateStr });
    };

    // 3. Save Edit
    const saveSessionEdit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const newDateIso = new Date(editSessionData.date).toISOString();

            const res = await fetch('/api/gym/sessions', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingSessionId,
                    name: editSessionData.name,
                    date: newDateIso
                })
            });

            if (res.ok) {
                setEditingSessionId(null);
                onRefresh(); // Tell parent to reload data
            }
        } catch (err) {
            console.error("Update failed");
        }
    };

    // Helper
    const formatDate = (isoString) => {
        if (!isoString) return '';
        return new Date(isoString).toLocaleDateString();
    };

    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            <h1 style={{ color: 'var(--accent)' }}>/GYM_LOGS</h1>
            <p style={{ color: 'var(--text-muted)' }}>Manage training protocols and session history.</p>

            <div className="grid-layout">
                {/* CREATE NEW SESSION */}
                <div className="tech-card" style={{ borderColor: 'var(--accent)' }}>
                    <h3 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent)' }}>/INIT_SESSION</h3>
                    <form onSubmit={handleCreateSession} style={{ marginTop: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', color: '#888' }}>SESSION NAME</label>
                        <input
                            type="text"
                            placeholder="e.g. Push Day A"
                            className="text-input"
                            style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px', marginBottom: '1rem' }}
                            value={newSessionName}
                            onChange={(e) => setNewSessionName(e.target.value)}
                            autoFocus
                        />
                        <button className="btn primary-btn" style={{ width: '100%' }}>CREATE PROTOCOL</button>
                    </form>
                </div>

                {/* SESSIONS LIST */}
                {sessions.map(session => (
                    <div
                        key={session.id}
                        className="tech-card"
                        style={{ cursor: editingSessionId === session.id ? 'default' : 'pointer', position: 'relative' }}
                        onClick={() => onOpenSession(session)}
                    >
                        {editingSessionId === session.id ? (
                            // === EDIT MODE ===
                            <div onClick={(e) => e.stopPropagation()}>
                                <input
                                    type="text"
                                    value={editSessionData.name}
                                    onChange={(e) => setEditSessionData({ ...editSessionData, name: e.target.value })}
                                    style={{ width: '100%', background: '#111', color: '#fff', border: '1px solid var(--accent)', padding: '5px', marginBottom: '0.5rem' }}
                                />
                                <input
                                    type="date"
                                    value={editSessionData.date}
                                    onChange={(e) => setEditSessionData({ ...editSessionData, date: e.target.value })}
                                    style={{ width: '100%', background: '#111', color: '#fff', border: '1px solid #333', padding: '5px', marginBottom: '1rem' }}
                                />
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button onClick={saveSessionEdit} className="btn primary-btn" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>SAVE</button>
                                    <button onClick={(e) => { e.stopPropagation(); setEditingSessionId(null); }} className="btn secondary-btn" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>CANCEL</button>
                                </div>
                            </div>
                        ) : (
                            // === VIEW MODE ===
                            <>
                                <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#666' }}>{formatDate(session.created_at)}</span>
                                    <button
                                        onClick={(e) => startEditingSession(e, session)}
                                        style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '1.2rem', padding: 0 }}
                                        title="Edit Session"
                                    >
                                        ✎
                                    </button>
                                </div>
                                <h3 style={{ marginRight: '30px' }}>{session.name.toUpperCase()}</h3>
                                <div style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
                                    <div>VOL: {session.exercises ? session.exercises.length : 0} sets</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--accent)' }}>&gt; ACCESS_LOGS</div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GymDashboard;