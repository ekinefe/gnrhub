import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GymTracker = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0], // Default to today
        notes: ''
    });

    // 1. Fetch Data on Load
    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const res = await fetch('/api/gym/logs');
            if (res.ok) {
                const data = await res.json();
                setLogs(data);
            }
        } catch (err) {
            console.error("Fetch error", err);
        } finally {
            setLoading(false);
        }
    };

    // 2. Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/gym/logs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                // Clear form and reload list
                setFormData({ ...formData, title: '', notes: '' });
                fetchLogs();
            }
        } catch (err) {
            alert("Failed to save log");
        }
    };

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ marginBottom: 0 }}>/GYM_TRACKER</h1>
                    <p>Personal Workout Database</p>
                </div>
                <Link to="/services" className="btn secondary-btn">← EXIT</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* LEFT: INPUT FORM */}
                <div className="tech-card">
                    <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/LOG_SESSION</h3>
                    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>

                        <label style={{ fontSize: '0.8rem', color: '#888' }}>DATE</label>
                        <input
                            type="date"
                            className="text-input"
                            style={{ width: '100%', marginBottom: '1rem', background: '#000', color: '#fff', border: '1px solid #333', padding: '0.5rem' }}
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                            required
                        />

                        <label style={{ fontSize: '0.8rem', color: '#888' }}>SESSION TITLE (e.g. Push Day)</label>
                        <input
                            className="text-input"
                            style={{ width: '100%', marginBottom: '1rem', background: '#000', color: '#fff', border: '1px solid #333', padding: '0.5rem' }}
                            placeholder="Heavy Chest & Tris"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            required
                        />

                        <label style={{ fontSize: '0.8rem', color: '#888' }}>EXERCISES / NOTES</label>
                        <textarea
                            className="text-input"
                            style={{ width: '100%', minHeight: '100px', marginBottom: '1rem', background: '#000', color: '#fff', border: '1px solid #333', padding: '0.5rem' }}
                            placeholder="1. Bench Press: 100kg x 5&#10;2. Incline DB: 30kg x 8"
                            value={formData.notes}
                            onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        />

                        <button className="btn primary-btn" style={{ width: '100%' }}>SAVE LOG</button>
                    </form>
                </div>

                {/* RIGHT: HISTORY LIST */}
                <div>
                    <h3 style={{ marginBottom: '1rem' }}>/HISTORY</h3>
                    {loading ? (
                        <div>Loading...</div>
                    ) : logs.length === 0 ? (
                        <div style={{ color: '#666', fontStyle: 'italic' }}>No data found. Start training.</div>
                    ) : (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {logs.map(log => (
                                <div key={log.id} style={{
                                    background: '#09090b',
                                    border: '1px solid #333',
                                    padding: '1rem',
                                    borderRadius: '8px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 'bold', color: 'var(--accent)' }}>{log.title}</span>
                                        <span style={{ fontSize: '0.8rem', color: '#888' }}>{log.date}</span>
                                    </div>
                                    <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: '#ccc' }}>
                                        {log.notes}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default GymTracker;