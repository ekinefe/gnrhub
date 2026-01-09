import React, { useState, useEffect } from 'react';
import '../../../App.css';

// Import the separated components
import GymDashboard from './components/GymDashboard';
import GymSessionDetail from './components/GymSessionDetail';

const GymTracker = () => {
    // === GLOBAL STATE ===
    const [view, setView] = useState('dashboard'); // 'dashboard' or 'session_detail'
    const [sessions, setSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null);
    const [loading, setLoading] = useState(true);

    // === FETCH DATA ===
    const fetchSessions = async () => {
        try {
            const res = await fetch('/api/gym/sessions');
            if (res.ok) {
                const data = await res.json();
                setSessions(data);

                // If a session is open, make sure we update it with new data (like new logs)
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

    // === NAVIGATION HANDLERS ===
    const handleOpenSession = (session) => {
        setActiveSession(session);
        setView('session_detail');
    };

    const handleBackToDashboard = () => {
        setActiveSession(null);
        setView('dashboard');
    };

    if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING_METRICS...</div>;

    // === RENDER ===
    if (view === 'dashboard') {
        return (
            <GymDashboard
                sessions={sessions}
                onOpenSession={handleOpenSession}
                onRefresh={fetchSessions}
            />
        );
    }

    return (
        <GymSessionDetail
            session={activeSession}
            onBack={handleBackToDashboard}
            onRefresh={fetchSessions}
        />
    );
};

export default GymTracker;