import React, { useState } from 'react';
import '../../../../App.css';

const GymSessionDetail = ({ session, onBack, onRefresh }) => {
    // Form State
    const [exerciseForm, setExerciseForm] = useState({ name: 'Bench Press', kg: '', sets: '1', reps: '' });

    // Edit States
    const [isEditingSessionTitle, setIsEditingSessionTitle] = useState(false);
    const [sessionNameEdit, setSessionNameEdit] = useState(session.name);
    const [editingLogId, setEditingLogId] = useState(null);

    // Options
    const exerciseOptions = [
        { category: "CHEST", moves: ["Bench Press", "Incline Dumbbell Press", "Cable Fly"] },
        { category: "BACK", moves: ["Deadlift", "Pull Up", "Lat Pulldown", "Barbell Row"] },
        { category: "LEGS", moves: ["Squat", "Leg Press", "Lunge", "Calf Raise"] },
        { category: "SHOULDERS", moves: ["Overhead Press", "Lateral Raise", "Face Pull"] },
        { category: "ARMS", moves: ["Barbell Curl", "Tricep Extension", "Hammer Curl"] }
    ];

    // 1. Update Session Name (Title)
    const handleUpdateSessionName = async () => {
        if (!sessionNameEdit) return;
        try {
            const res = await fetch('/api/gym/sessions', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: session.id, name: sessionNameEdit })
            });
            if (res.ok) {
                setIsEditingSessionTitle(false);
                onRefresh();
            }
        } catch (err) {
            console.error("Update failed");
        }
    };

    // 2. Add or Update Exercise
    const handleSubmitExercise = async (e) => {
        e.preventDefault();
        if (!exerciseForm.kg || !exerciseForm.reps) return;

        try {
            if (editingLogId) {
                // UPDATE
                const res = await fetch('/api/gym/logs', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: editingLogId,
                        session_id: session.id,
                        name: exerciseForm.name,
                        kg: exerciseForm.kg,
                        reps: exerciseForm.reps
                    })
                });
                if (res.ok) {
                    setEditingLogId(null);
                    setExerciseForm({ ...exerciseForm, kg: '', sets: '1', reps: '' });
                    onRefresh();
                }
            } else {
                // CREATE (Loop for sets)
                const numSets = parseInt(exerciseForm.sets) || 1;
                const requests = [];
                for (let i = 0; i < numSets; i++) {
                    requests.push(
                        fetch('/api/gym/logs', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                session_id: session.id,
                                name: exerciseForm.name,
                                kg: exerciseForm.kg,
                                reps: exerciseForm.reps
                            })
                        })
                    );
                }
                await Promise.all(requests);
                setExerciseForm({ ...exerciseForm, kg: exerciseForm.kg, sets: '1', reps: '' });
                onRefresh();
            }
        } catch (err) {
            console.error("Error submitting exercise");
        }
    };

    // 3. Delete
    const handleDeleteExercise = async (logId) => {
        if (!window.confirm("Delete this set?")) return;
        try {
            const res = await fetch('/api/gym/logs', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: logId })
            });
            if (res.ok) {
                if (editingLogId === logId) {
                    setEditingLogId(null);
                    setExerciseForm({ ...exerciseForm, kg: '', sets: '1', reps: '' });
                }
                onRefresh();
            }
        } catch (err) {
            console.error("Error deleting log");
        }
    };

    // 4. Prep Edit
    const startEditingLog = (log) => {
        setEditingLogId(log.id);
        setExerciseForm({
            name: log.exercise_name,
            kg: log.weight_kg,
            sets: '1',
            reps: log.reps
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formatDate = (isoString) => {
        if (!isoString) return '';
        return new Date(isoString).toLocaleDateString();
    };

    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            {/* TOP BAR */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                    <button
                        onClick={onBack}
                        style={{
                            background: 'none', border: 'none', color: '#666', cursor: 'pointer',
                            fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-main)',
                            textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px'
                        }}
                    >
                        &lt; RETURN_TO_DASHBOARD
                    </button>

                    {isEditingSessionTitle ? (
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
                            <button onClick={() => setIsEditingSessionTitle(false)} className="btn secondary-btn" style={{ padding: '5px 10px' }}>X</button>
                        </div>
                    ) : (
                        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            /{session.name.toUpperCase()}
                            <button
                                onClick={() => { setSessionNameEdit(session.name); setIsEditingSessionTitle(true); }}
                                style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '1rem' }}
                                title="Rename Session"
                            >
                                ✎
                            </button>
                        </h1>
                    )}
                </div>
                <div style={{ textAlign: 'right', color: '#666', fontFamily: 'monospace' }}>
                    {formatDate(session.created_at)}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* INPUT FORM */}
                <div className="tech-card" style={{ height: 'fit-content', borderColor: editingLogId ? 'var(--accent)' : '#333' }}>
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', color: editingLogId ? 'var(--accent)' : 'inherit' }}>
                        {editingLogId ? '/UPDATE_VECTOR' : '/LOG_VECTOR'}
                    </h3>

                    <form onSubmit={handleSubmitExercise} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>

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

                        {!editingLogId && (
                            <div>
                                <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>SETS</label>
                                <input
                                    type="number" placeholder="1"
                                    className="text-input"
                                    style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }}
                                    value={exerciseForm.sets}
                                    onChange={(e) => setExerciseForm({ ...exerciseForm, sets: e.target.value })}
                                />
                            </div>
                        )}

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

                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <button className="btn primary-btn" style={{ width: '100%' }}>
                                {editingLogId ? 'UPDATE SET' : 'CONFIRM SET(S)'}
                            </button>
                            {editingLogId && (
                                <button
                                    type="button"
                                    onClick={() => { setEditingLogId(null); setExerciseForm({ ...exerciseForm, kg: '', sets: '1', reps: '' }); }}
                                    className="btn secondary-btn"
                                >
                                    CANCEL
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* LOG TABLE */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SESSION_DATA</h3>

                    {(!session.exercises || session.exercises.length === 0) ? (
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
                                {session.exercises.map((ex) => (
                                    <tr key={ex.id} style={{
                                        borderBottom: '1px solid #222',
                                        background: editingLogId === ex.id ? '#111' : 'transparent',
                                        color: editingLogId === ex.id ? 'var(--accent)' : 'inherit'
                                    }}>
                                        <td style={{ padding: '0.8rem 0.5rem', fontWeight: 'bold' }}>{ex.exercise_name}</td>
                                        <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>{ex.weight_kg}</td>
                                        <td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>{ex.reps}</td>
                                        <td style={{ padding: '0.5rem', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                            <button
                                                onClick={() => startEditingLog(ex)}
                                                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', marginRight: '10px' }}
                                                title="Edit"
                                            >
                                                ✎
                                            </button>
                                            <button
                                                onClick={() => handleDeleteExercise(ex.id)}
                                                style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}
                                                title="Delete"
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

export default GymSessionDetail;