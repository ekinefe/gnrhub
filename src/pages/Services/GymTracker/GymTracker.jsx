import React, { useState, useEffect } from 'react';
import '../../../../App.css'; // Ensure we use global styles

const GymTracker = () => {
    // === STATE ===
    const [view, setView] = useState('dashboard'); // 'dashboard' or 'session_detail'
    const [sessions, setSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null);

    // Form States
    const [newSessionName, setNewSessionName] = useState('');
    const [exerciseForm, setExerciseForm] = useState({ name: 'Bench Press', kg: '', reps: '' });

    // === PREDEFINED EXERCISES (The "Toggle Selection") ===
    const exerciseOptions = [
        { category: "CHEST", moves: ["Bench Press", "Incline Dumbbell Press", "Cable Fly"] },
        { category: "BACK", moves: ["Deadlift", "Pull Up", "Lat Pulldown", "Barbell Row"] },
        { category: "LEGS", moves: ["Squat", "Leg Press", "Lunge", "Calf Raise"] },
        { category: "SHOULDERS", moves: ["Overhead Press", "Lateral Raise", "Face Pull"] },
        { category: "ARMS", moves: ["Barbell Curl", "Tricep Extension", "Hammer Curl"] }
    ];

    // === ACTIONS ===

    // 1. Create New Session
    const handleCreateSession = (e) => {
        e.preventDefault();
        if (!newSessionName) return;

        const newSession = {
            id: Date.now(),
            name: newSessionName,
            date: new Date().toLocaleDateString(),
            exercises: [] // Start empty
        };

        setSessions([newSession, ...sessions]);
        setNewSessionName('');
    };

    // 2. Open a Session
    const openSession = (session) => {
        setActiveSession(session);
        setView('session_detail');
    };

    // 3. Add Exercise to Active Session
    const handleAddExercise = (e) => {
        e.preventDefault();
        if (!exerciseForm.kg || !exerciseForm.reps) return;

        const newLog = {
            id: Date.now(),
            ...exerciseForm
        };

        // Update the active session AND the main sessions list
        const updatedSession = { ...activeSession, exercises: [...activeSession.exercises, newLog] };

        setActiveSession(updatedSession);
        setSessions(sessions.map(s => s.id === activeSession.id ? updatedSession : s));

        // Reset form (keep name same for convenience, clear numbers)
        setExerciseForm({ ...exerciseForm, kg: '', reps: '' });
    };

    // 4. Delete Exercise
    const handleDeleteExercise = (logId) => {
        const updatedSession = {
            ...activeSession,
            exercises: activeSession.exercises.filter(ex => ex.id !== logId)
        };
        setActiveSession(updatedSession);
        setSessions(sessions.map(s => s.id === activeSession.id ? updatedSession : s));
    };

    // === VIEW 1: DASHBOARD (Session List) ===
    if (view === 'dashboard') {
        return (
            <div className="container" style={{ paddingTop: '4rem' }}>
                <h1 style={{ color: 'var(--accent)' }}>/GYM_LOGS</h1>
                <p style={{ color: 'var(--text-muted)' }}>Manage training protocols and session history.</p>

                <div className="grid-layout">
                    {/* CARD 1: CREATE NEW SESSION */}
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

                    {/* EXISTING SESSIONS LIST */}
                    {sessions.map(session => (
                        <div
                            key={session.id}
                            className="tech-card"
                            style={{ cursor: 'pointer', position: 'relative' }}
                            onClick={() => openSession(session)}
                        >
                            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.8rem', color: '#666' }}>
                                {session.date}
                            </div>
                            <h3>{session.name.toUpperCase()}</h3>
                            <div style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
                                <div>VOL: {session.exercises.length} sets</div>
                                <div style={{ marginTop: '0.5rem', color: 'var(--accent)' }}>&gt; ACCESS_LOGS</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // === VIEW 2: SESSION DETAIL (Add Exercises) ===
    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <button onClick={() => setView('dashboard')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        &lt; RETURN_TO_DASHBOARD
                    </button>
                    <h1>/{activeSession.name.toUpperCase()}</h1>
                </div>
                <div style={{ textAlign: 'right', color: '#666', fontFamily: 'monospace' }}>
                    {activeSession.date}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* COLUMN 1: INPUT FORM */}
                <div className="tech-card" style={{ height: 'fit-content' }}>
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/LOG_VECTOR</h3>
                    <form onSubmit={handleAddExercise} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>

                        {/* Exercise Selector */}
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
                                    type="number"
                                    placeholder="0"
                                    className="text-input"
                                    style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }}
                                    value={exerciseForm.kg}
                                    onChange={(e) => setExerciseForm({ ...exerciseForm, kg: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>REPS</label>
                                <input
                                    type="number"
                                    placeholder="0"
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

                {/* COLUMN 2: LOG TABLE */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SESSION_DATA</h3>

                    {activeSession.exercises.length === 0 ? (
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
                                {activeSession.exercises.map((ex, index) => (
                                    <tr key={ex.id} style={{ borderBottom: '1px solid #222' }}>
                                        <td style={{ padding: '0.8rem 0.5rem', fontWeight: 'bold' }}>{ex.name}</td>
                                        <td style={{ padding: '0.5rem', fontFamily: 'monospace', color: 'var(--accent)' }}>{ex.kg}</td>
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