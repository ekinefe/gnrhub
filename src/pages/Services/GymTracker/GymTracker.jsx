import React, { useState, useEffect } from 'react';
import '../../../App.css';

const GymTracker = () => {
    // === STATE ===
    const [view, setView] = useState('dashboard');
    const [sessions, setSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null);
    const [loading, setLoading] = useState(true);

    // Form States
    const [newSessionName, setNewSessionName] = useState('');
    const [exerciseForm, setExerciseForm] = useState({ name: 'Bench Press', kg: '', reps: '' });

    // === NEW: EDITING STATES ===
    const [isEditingSession, setIsEditingSession] = useState(false); // Toggle Input
    const [sessionNameEdit, setSessionNameEdit] = useState('');      // Store temporary name

    // === PREDEFINED EXERCISES ===
    const exerciseOptions = [
        { category: "CHEST", moves: ["Bench Press", "Incline Dumbbell Press", "Cable Fly"] },
        { category: "BACK", moves: ["Deadlift", "Pull Up", "Lat Pulldown", "Barbell Row"] },
        { category: "LEGS", moves: ["Squat", "Leg Press", "Lunge", "Calf Raise"] },
        { category: "SHOULDERS", moves: ["Overhead Press", "Lateral Raise", "Face Pull"] },
        { category: "ARMS", moves: ["Barbell Curl", "Tricep Extension", "Hammer Curl"] }
    ];

    // === INIT: FETCH DATA ===
    const fetchSessions = async () => {
        try {
            const res = await fetch('/api/gym/sessions');
            if (res.ok) {
                const data = await res.json();
                setSessions(data);

                if (activeSession) {
                    const updatedActive = data.find(s => s.id === activeSession.id);
                    if (updatedActive) setActiveSession(updatedActive);
                }
            }
        } catch (err) {
            console.error("Failed to load gym data", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSessions();
    }, []);

    // === ACTIONS ===

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
                fetchSessions();
            }
        } catch (err) {
            console.error("Error creating session");
        }
    };

    // 2. Open a Session
    const openSession = (session) => {
        setActiveSession(session);
        setView('session_detail');
        setIsEditingSession(false); // Ensure edit mode is closed
    };

    // 3. Update Session Name (NEW)
    const handleUpdateSessionName = async () => {
        if (!sessionNameEdit) return;
        try {
            const res = await fetch('/api/gym/sessions', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: activeSession.id, name: sessionNameEdit })
            });

            if (res.ok) {
                // Optimistic Update (Update UI instantly)
                const updatedSession = { ...activeSession, name: sessionNameEdit };
                setActiveSession(updatedSession);
                setSessions(sessions.map(s => s.id === activeSession.id ? updatedSession : s));

                setIsEditingSession(false); // Close edit mode
            }
        } catch (err) {
            console.error("Update failed");
        }
    };

    // 4. Add Exercise
    const handleAddExercise = async (e) => {
        e.preventDefault();
        if (!exerciseForm.kg || !exerciseForm.reps) return;

        try {
            const res = await fetch('/api/gym/logs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    session_id: activeSession.id,
                    name: exerciseForm.name,
                    kg: exerciseForm.kg,
                    reps: exerciseForm.reps
                })
            });

            if (res.ok) {
                setExerciseForm({ ...exerciseForm, kg: '', reps: '' });
                fetchSessions();
            }
        } catch (err) {
            console.error("Error logging exercise");
        }
    };

    // 5. Delete Exercise
    const handleDeleteExercise = async (logId) => {
        try {
            const res = await fetch('/api/gym/logs', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: logId })
            });

            if (res.ok) fetchSessions();
        } catch (err) {
            console.error("Error deleting log");
        }
    };

    const formatDate = (isoString) => {
        if (!isoString) return '';
        return new Date(isoString).toLocaleDateString();
    };

    if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING_METRICS...</div>;

    // === VIEW 1: DASHBOARD ===
    if (view === 'dashboard') {
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
                            style={{ cursor: 'pointer', position: 'relative' }}
                            onClick={() => openSession(session)}
                        >
                            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.8rem', color: '#666' }}>
                                {formatDate(session.created_at)}
                            </div>
                            <h3>{session.name.toUpperCase()}</h3>
                            <div style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
                                <div>VOL: {session.exercises ? session.exercises.length : 0} sets</div>
                                <div style={{ marginTop: '0.5rem', color: 'var(--accent)' }}>&gt; ACCESS_LOGS</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // === VIEW 2: SESSION DETAIL ===
    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                    <button
                        onClick={() => setView('dashboard')}
                        style={{
                            background: 'none', border: 'none', color: '#666', cursor: 'pointer',
                            fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-main)',
                            textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px'
                        }}
                    >
                        &lt; RETURN_TO_DASHBOARD
                    </button>

                    {/* --- NEW SESSION NAME EDITING LOGIC --- */}
                    {isEditingSession ? (
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <input
                                value={sessionNameEdit}
                                onChange={(e) => setSessionNameEdit(e.target.value)}
                                style={{
                                    background: '#000', color: 'var(--accent)', border: '1px solid var(--accent)',
                                    fontSize: '2rem', fontFamily: 'var(--font-main)', padding: '5px', width: '300px'
                                }}
                                autoFocus
                            />
                            <button onClick={handleUpdateSessionName} className="btn primary-btn" style={{ padding: '5px 10px' }}>SAVE</button>
                            <button onClick={() => setIsEditingSession(false)} className="btn secondary-btn" style={{ padding: '5px 10px' }}>X</button>
                        </div>
                    ) : (
                        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            /{activeSession.name.toUpperCase()}
                            <button
                                onClick={() => {
                                    setSessionNameEdit(activeSession.name);
                                    setIsEditingSession(true);
                                }}
                                style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '1rem' }}
                                title="Rename Session"
                            >
                                ✎
                            </button>
                        </h1>
                    )}
                    {/* -------------------------------------- */}

                </div>
                <div style={{ textAlign: 'right', color: '#666', fontFamily: 'monospace' }}>
                    {formatDate(activeSession.created_at)}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* INPUT FORM */}
                <div className="tech-card" style={{ height: 'fit-content' }}>
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/LOG_VECTOR</h3>
                    <form onSubmit={handleAddExercise} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>

                        <div>
                            <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>MOVEMENT SELECTOR</label>
                            <select
                                className="text-input"
                                style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }}
                                value={exerciseForm.name}
                                onChange={(e) => setExerciseForm({ ...exerciseForm, name: e.target.value })}
                            >
                                {exerciseOptions.map(group => (
                                    <optgroup key={group.category} label={group.category}>
                                        {group.moves.map(move => (
                                            <option key={move} value={move}>{move}</option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>LOAD (KG)</label>
                                <input
                                    type="number" step="0.1" placeholder="0.0"
                                    className="text-input"
                                    style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }}
                                    value={exerciseForm.kg}
                                    onChange={(e) => setExerciseForm({ ...exerciseForm, kg: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>REPS</label>
                                <input
                                    type="number" placeholder="0"
                                    className="text-input"
                                    style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }}
                                    value={exerciseForm.reps}
                                    onChange={(e) => setExerciseForm({ ...exerciseForm, reps: e.target.value })}
                                />
                            </div>
                        </div>

                        <button className="btn primary-btn" style={{ width: '100%' }}>CONFIRM SET</button>
                    </form>
                </div>

                {/* LOG TABLE */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SESSION_DATA</h3>

                    {(!activeSession.exercises || activeSession.exercises.length === 0) ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>NO_DATA_LOGGED</div>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #333', color: '#888', textAlign: 'left' }}>
                                    <th style={{ padding: '0.5rem' }}>EXERCISE</th>
                                    <th style={{ padding: '0.5rem' }}>KG</th>
                                    <th style={{ padding: '0.5rem' }}>REPS</th>
                                    <th style={{ padding: '0.5rem', textAlign: 'right' }}>ACT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeSession.exercises.map((ex) => (
                                    <tr key={ex.id} style={{ borderBottom: '1px solid #222' }}>
                                        <td style={{ padding: '0.8rem 0.5rem', fontWeight: 'bold' }}>{ex.exercise_name}</td>
                                        <td style={{ padding: '0.5rem', fontFamily: 'monospace', color: 'var(--accent)' }}>{ex.weight_kg}</td>
                                        <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>{ex.reps}</td>
                                        <td style={{ padding: '0.5rem', textAlign: 'right' }}>
                                            <button
                                                onClick={() => handleDeleteExercise(ex.id)}
                                                style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}
                                            >
                                                ×
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
        </div>
    );
};

export default GymTracker;