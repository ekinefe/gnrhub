import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGym } from '../context/GymContext';
import GymMetricsChart from './GymMetricsChart';
import '../../../../App.css';

const GymDashboard = () => {
    // 1. Get Data from Context
    const { sessions, fetchSessions } = useGym();

    // Local State
    const [newSessionName, setNewSessionName] = useState('');
    const [editingSessionId, setEditingSessionId] = useState(null);
    const [editSessionData, setEditSessionData] = useState({ name: '', date: '' });

    // Create New Session
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
                fetchSessions();
            }
        } catch (err) {
            console.error("Error creating session");
        }
    };

    // Start Editing
    const startEditingSession = (e, session) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingSessionId(session.id);
        const dateObj = new Date(session.created_at);
        const dateStr = dateObj.toISOString().split('T')[0];
        setEditSessionData({ name: session.name, date: dateStr });
    };

    // Save Edit
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
                fetchSessions();
            }
        } catch (err) {
            console.error("Update failed");
        }
    };

    // --- NEW: DELETE SESSION ---
    const handleDeleteSession = async (e, sessionId) => {
        e.preventDefault();
        e.stopPropagation(); // Stop click from opening the session

        if (!window.confirm("Are you sure? This will delete the session and all its logs.")) return;

        try {
            const res = await fetch('/api/gym/sessions', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: sessionId })
            });

            if (res.ok) {
                fetchSessions(); // Refresh list
            }
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    const formatDate = (isoString) => {
        if (!isoString) return '';
        return new Date(isoString).toLocaleDateString();
    };

    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            <h1 style={{ color: 'var(--accent)' }}>/GYM_LOGS</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Manage training protocols and session history.</p>

            {sessions.length > 0 && <GymMetricsChart sessions={sessions} />}

            <div className="grid-layout">
                {/* CREATE NEW SESSION CARD */}
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
                    <Link
                        to={`/services/gym-tracker/session/${session.id}`}
                        key={session.id}
                        style={{ textDecoration: 'none', display: 'block' }}
                    >
                        <div
                            className="tech-card"
                            style={{ cursor: editingSessionId === session.id ? 'default' : 'pointer', position: 'relative', height: '100%' }}
                        >
                            {editingSessionId === session.id ? (
                                // EDIT MODE
                                <div onClick={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        value={editSessionData.name}
                                        onChange={(e) => setEditSessionData({ ...editSessionData, name: e.target.value })}
                                        style={{ width: '100%', background: '#111', color: '#fff', border: '1px solid var(--accent)', padding: '5px', marginBottom: '0.5rem' }}
                                        onClick={(e) => e.preventDefault()}
                                    />
                                    <input
                                        type="date"
                                        value={editSessionData.date}
                                        onChange={(e) => setEditSessionData({ ...editSessionData, date: e.target.value })}
                                        style={{ width: '100%', background: '#111', color: '#fff', border: '1px solid #333', padding: '5px', marginBottom: '1rem' }}
                                        onClick={(e) => e.preventDefault()}
                                    />
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button onClick={saveSessionEdit} className="btn primary-btn" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>SAVE</button>
                                        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEditingSessionId(null); }} className="btn secondary-btn" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>CANCEL</button>
                                    </div>
                                </div>
                            ) : (
                                // VIEW MODE
                                <>
                                    <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>{formatDate(session.created_at)}</span>

                                        {/* EDIT BUTTON */}
                                        <button
                                            onClick={(e) => startEditingSession(e, session)}
                                            style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '1.2rem', padding: 0 }}
                                            title="Edit Session"
                                        >
                                            ✎
                                        </button>

                                        {/* --- DELETE BUTTON (NEW) --- */}
                                        <button
                                            onClick={(e) => handleDeleteSession(e, session.id)}
                                            style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '1.5rem', padding: 0, lineHeight: 0.5 }}
                                            title="Delete Session"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    <h3 style={{ marginRight: '60px', color: '#fff' }}>{session.name.toUpperCase()}</h3>

                                    {session.body_weight && (
                                        <div style={{ fontSize: '0.8rem', color: '#0f0', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                            {session.body_weight} KG
                                        </div>
                                    )}

                                    <div style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
                                        <div>VOL: {session.exercises ? session.exercises.length : 0} sets</div>
                                        <div style={{ marginTop: '0.5rem', color: 'var(--accent)' }}>&gt; ACCESS_LOGS</div>
                                    </div>
                                </>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GymDashboard;