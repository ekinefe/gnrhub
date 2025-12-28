import React from 'react';
import { Link } from 'react-router-dom';
import './BrandBook.css'; // Use the shared CSS

const BrandDashboard = () => {
    return (
        <div className="brand-service-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                Brand Book Automator
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                Define your visual identity once. Generate a professional PDF instantly.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                We recomand o use desktop for the best experience.
            </p>

            <Link to="/services/brand-book/editor">
                <button className="btn primary-btn" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                    Start New Project
                </button>
            </Link>
        </div>
    );
};

export default BrandDashboard;