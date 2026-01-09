import React, { createContext, useState, useEffect, useContext } from 'react';

const GymContext = createContext();

export const GymProvider = ({ children }) => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Data Function
    const fetchSessions = async () => {
        try {
            // setLoading(true); // Optional: depends if you want global loading spinner on every action
            const res = await fetch('/api/gym/sessions');
            if (res.ok) {
                const data = await res.json();
                setSessions(data);
            }
        } catch (err) {
            console.error("Failed to load gym data", err);
        } finally {
            setLoading(false);
        }
    };

    // Initial Load
    useEffect(() => {
        fetchSessions();
    }, []);

    return (
        <GymContext.Provider value={{ sessions, loading, fetchSessions }}>
            {children}
        </GymContext.Provider>
    );
};

export const useGym = () => useContext(GymContext);