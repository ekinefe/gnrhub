import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGym } from '../context/GymContext'; // Import Context
import '../../../../App.css';

const GymSessionDetail = () => {
    const { id } = useParams(); // Get ID from URL
    const { sessions, loading, fetchSessions } = useGym();
    const navigate = useNavigate();

    // Find the active session from context data
    const session = sessions.find(s => s.id.toString() === id);

    // Form & Edit States
    const [exerciseForm, setExerciseForm] = useState({ name: 'Bench Press', kg: '', sets: '1', reps: '' });
    const [isEditingSessionTitle, setIsEditingSessionTitle] = useState(false);
    const [sessionNameEdit, setSessionNameEdit] = useState('');
    const [isEditingMetrics, setIsEditingMetrics] = useState(false);
    const [metricsData, setMetricsData] = useState({});
    const [editingLogId, setEditingLogId] = useState(null);

    // Sync state when session loads
    useEffect(() => {
        if (session) {
            setSessionNameEdit(session.name);
            setMetricsData({
                body_weight: session.body_weight || '',
                bmi: session.bmi || '',
                bfi: session.bfi || '',
                calories_burned: session.calories_burned || '',
                duration_minutes: session.duration_minutes || ''
            });
        }
    }, [session]);

    // Handle Loading / Not Found
    if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING...</div>;
    if (!session) return <div className="container" style={{ paddingTop: '4rem' }}>/SESSION_NOT_FOUND</div>;

    // --- ACTIONS ---

    // 1. Update Title
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
                fetchSessions();
            }
        } catch (err) { console.error("Update failed"); }
    };

    // 2. Update Metrics
    const handleUpdateMetrics = async () => {
        try {
            const res = await fetch('/api/gym/sessions', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: session.id, ...metricsData })
            });
            if (res.ok) {
                setIsEditingMetrics(false);
                fetchSessions();
            }
        } catch (err) { console.error("Metrics failed"); }
    };

    // 3. Submit Exercise
    const handleSubmitExercise = async (e) => {
        e.preventDefault();
        if (!exerciseForm.kg || !exerciseForm.reps) return;
        try {
            if (editingLogId) {
                // Update
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
                    fetchSessions();
                }
            } else {
                // Create
                const numSets = parseInt(exerciseForm.sets) || 1;
                const requests = [];
                for (let i = 0; i < numSets; i++) {
                    requests.push(fetch('/api/gym/logs', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            session_id: session.id,
                            name: exerciseForm.name,
                            kg: exerciseForm.kg,
                            reps: exerciseForm.reps
                        })
                    }));
                }
                await Promise.all(requests);
                setExerciseForm({ ...exerciseForm, kg: exerciseForm.kg, sets: '1', reps: '' });
                fetchSessions();
            }
        } catch (err) { console.error("Submit failed"); }
    };

    // 4. Delete Exercise
    const handleDeleteExercise = async (logId) => {
        if (!window.confirm("Delete this set?")) return;
        try {
            const res = await fetch('/api/gym/logs', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: logId })
            });
            if (res.ok) fetchSessions();
        } catch (err) { console.error("Delete failed"); }
    };

    const startEditingLog = (log) => {
        setEditingLogId(log.id);
        setExerciseForm({ name: log.exercise_name, kg: log.weight_kg, sets: '1', reps: log.reps });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const exerciseOptions = [
        { category: "CHEST", moves: ["Bench Press", "Incline Dumbbell Press", "Cable Fly"] },
        { category: "BACK", moves: ["Deadlift", "Pull Up", "Lat Pulldown", "Barbell Row"] },
        { category: "LEGS", moves: ["Squat", "Leg Press", "Lunge", "Calf Raise"] },
        { category: "SHOULDERS", moves: ["Overhead Press", "Lateral Raise", "Face Pull"] },
        { category: "ARMS", moves: ["Barbell Curl", "Tricep Extension", "Hammer Curl"] }
    ];

    const formatDate = (isoString) => isoString ? new Date(isoString).toLocaleDateString() : '';

    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            {/* TOP BAR */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                    <Link to="/services/gym-tracker" style={{ textDecoration: 'none' }}>
                        <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-main)', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>
                            &lt; RETURN_TO_DASHBOARD
                        </button>
                    </Link>

                    {isEditingSessionTitle ? (
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <input value={sessionNameEdit} onChange={(e) => setSessionNameEdit(e.target.value)} style={{ background: '#000', color: 'var(--accent)', border: '1px solid var(--accent)', fontSize: '2rem', fontFamily: 'var(--font-main)', padding: '5px', width: '300px' }} autoFocus />
                            <button onClick={handleUpdateSessionName} className="btn primary-btn" style={{ padding: '5px 10px' }}>SAVE</button>
                            <button onClick={() => setIsEditingSessionTitle(false)} className="btn secondary-btn" style={{ padding: '5px 10px' }}>X</button>
                        </div>
                    ) : (
                        <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            /{session.name.toUpperCase()}
                            <button onClick={() => setIsEditingSessionTitle(true)} style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '1rem' }}>✎</button>
                        </h1>
                    )}
                </div>
                <div style={{ textAlign: 'right', color: '#666', fontFamily: 'monospace' }}>
                    {formatDate(session.created_at)}
                </div>
            </div>

            {/* METRICS CARD */}
            <div className="tech-card" style={{ marginBottom: '2rem', borderColor: isEditingMetrics ? 'var(--accent)' : '#333' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0, color: isEditingMetrics ? 'var(--accent)' : 'inherit' }}>/METRICS</h3>
                    {!isEditingMetrics && (
                        <button onClick={() => setIsEditingMetrics(true)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.8rem' }}>[EDIT_STATS]</button>
                    )}
                </div>

                {isEditingMetrics ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                        <div><label style={{ fontSize: '0.7rem', color: '#888' }}>WEIGHT (KG)</label><input type="number" step="0.1" className="text-input" style={{ width: '100%' }} value={metricsData.body_weight} onChange={e => setMetricsData({ ...metricsData, body_weight: e.target.value })} /></div>
                        <div><label style={{ fontSize: '0.7rem', color: '#888' }}>BMI</label><input type="number" step="0.1" className="text-input" style={{ width: '100%' }} value={metricsData.bmi} onChange={e => setMetricsData({ ...metricsData, bmi: e.target.value })} /></div>
                        <div><label style={{ fontSize: '0.7rem', color: '#888' }}>BFI (%)</label><input type="number" step="0.1" className="text-input" style={{ width: '100%' }} value={metricsData.bfi} onChange={e => setMetricsData({ ...metricsData, bfi: e.target.value })} /></div>
                        <div><label style={{ fontSize: '0.7rem', color: '#888' }}>TIME (MIN)</label><input type="number" className="text-input" style={{ width: '100%' }} value={metricsData.duration_minutes} onChange={e => setMetricsData({ ...metricsData, duration_minutes: e.target.value })} /></div>
                        <div><label style={{ fontSize: '0.7rem', color: '#888' }}>KCAL</label><input type="number" className="text-input" style={{ width: '100%' }} value={metricsData.calories_burned} onChange={e => setMetricsData({ ...metricsData, calories_burned: e.target.value })} /></div>
                        <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem' }}>
                            <button onClick={handleUpdateMetrics} className="btn primary-btn" style={{ padding: '8px', fontSize: '0.8rem', width: '100%' }}>SAVE</button>
                            <button onClick={() => setIsEditingMetrics(false)} className="btn secondary-btn" style={{ padding: '8px', fontSize: '0.8rem' }}>X</button>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                        <div><div style={{ fontSize: '0.7rem', color: '#666' }}>WEIGHT</div><div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{session.body_weight || '--'} <span style={{ fontSize: '0.8rem', color: '#444' }}>kg</span></div></div>
                        <div><div style={{ fontSize: '0.7rem', color: '#666' }}>BMI</div><div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)' }}>{session.bmi || '--'}</div></div>
                        <div><div style={{ fontSize: '0.7rem', color: '#666' }}>BFI</div><div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{session.bfi ? session.bfi + '%' : '--'}</div></div>
                        <div><div style={{ fontSize: '0.7rem', color: '#666' }}>TIME</div><div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{session.duration_minutes ? session.duration_minutes + 'm' : '--'}</div></div>
                        <div><div style={{ fontSize: '0.7rem', color: '#666' }}>BURNED</div><div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f0' }}>{session.calories_burned || '--'} <span style={{ fontSize: '0.8rem', color: '#444' }}>kcal</span></div></div>
                    </div>
                )}
            </div>

            {/* LOGGING GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="tech-card" style={{ height: 'fit-content', borderColor: editingLogId ? 'var(--accent)' : '#333' }}>
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', color: editingLogId ? 'var(--accent)' : 'inherit' }}>{editingLogId ? '/UPDATE_VECTOR' : '/LOG_VECTOR'}</h3>
                    <form onSubmit={handleSubmitExercise} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                        <div><label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>MOVEMENT SELECTOR</label><select className="text-input" style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }} value={exerciseForm.name} onChange={(e) => setExerciseForm({ ...exerciseForm, name: e.target.value })}>{exerciseOptions.map(group => (<optgroup key={group.category} label={group.category}>{group.moves.map(move => (<option key={move} value={move}>{move}</option>))}</optgroup>))}</select></div>
                        <div><label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>LOAD (KG)</label><input type="number" step="0.1" className="text-input" style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }} value={exerciseForm.kg} onChange={(e) => setExerciseForm({ ...exerciseForm, kg: e.target.value })} /></div>
                        {!editingLogId && <div><label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>SETS</label><input type="number" className="text-input" style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }} value={exerciseForm.sets} onChange={(e) => setExerciseForm({ ...exerciseForm, sets: e.target.value })} /></div>}
                        <div><label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '5px' }}>REPS</label><input type="number" className="text-input" style={{ width: '100%', background: '#000', color: '#fff', border: '1px solid #333', padding: '10px' }} value={exerciseForm.reps} onChange={(e) => setExerciseForm({ ...exerciseForm, reps: e.target.value })} /></div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}><button className="btn primary-btn" style={{ width: '100%' }}>{editingLogId ? 'UPDATE SET' : 'CONFIRM SET(S)'}</button>{editingLogId && <button type="button" onClick={() => { setEditingLogId(null); setExerciseForm({ ...exerciseForm, kg: '', sets: '1', reps: '' }); }} className="btn secondary-btn">CANCEL</button>}</div>
                    </form>
                </div>
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SESSION_DATA</h3>
                    {(!session.exercises || session.exercises.length === 0) ? <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>NO_DATA_LOGGED</div> : (
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
                            <thead><tr style={{ borderBottom: '1px solid #333', color: '#888', textAlign: 'left' }}><th style={{ padding: '0.5rem' }}>EXERCISE</th><th style={{ padding: '0.5rem' }}>KG</th><th style={{ padding: '0.5rem' }}>REPS</th><th style={{ padding: '0.5rem', textAlign: 'right' }}>ACT</th></tr></thead>
                            <tbody>{session.exercises.map((ex) => (<tr key={ex.id} style={{ borderBottom: '1px solid #222', background: editingLogId === ex.id ? '#111' : 'transparent', color: editingLogId === ex.id ? 'var(--accent)' : 'inherit' }}><td style={{ padding: '0.8rem 0.5rem', fontWeight: 'bold' }}>{ex.exercise_name}</td><td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>{ex.weight_kg}</td><td style={{ padding: '0.5rem', fontFamily: 'monospace' }}>{ex.reps}</td><td style={{ padding: '0.5rem', textAlign: 'right' }}><button onClick={() => startEditingLog(ex)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', marginRight: '10px' }}>✎</button><button onClick={() => handleDeleteExercise(ex.id)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>×</button></td></tr>))}</tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GymSessionDetail;