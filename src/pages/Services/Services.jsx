import React from 'react';
import { Link } from 'react-router-dom';
import { projects, getStatusClass } from './data/projects_data'; // Import Data

const Services = () => {
  return (
    <div>
      <h1>/services_dashboard</h1>
      {/* <p>Select a Micro-SaaS tool from the sidebar to launch.</p> */}

      {/* === SEPARATOR === */}
      <hr style={{ border: 0, borderBottom: '1px solid var(--border)', margin: '2rem 0' }} />

      <div className="grid-layout">

        {/* AUTOMATIC CARD GENERATION */}
        {projects.map((proj) => {
          const isOffline = proj.status === 'OFFLINE' || proj.status === 'DEV';

          return (
            <div
              key={proj.id}
              className="tech-card"
              style={{
                borderColor: !isOffline ? 'var(--accent)' : 'var(--border)',
                opacity: isOffline ? 0.6 : 1
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span className="icon" style={{ fontSize: '1.5rem' }}>{proj.icon}</span>
                <span className={`status-tag ${getStatusClass(proj.status)}`}>
                  {proj.status}
                </span>
              </div>

              <h3 style={{ marginTop: '1rem' }}>{proj.title}</h3>
              <p style={{ minHeight: '60px' }}>{proj.description}</p>

              {isOffline ? (
                <button className="btn secondary-btn" disabled style={{ cursor: 'not-allowed' }}>
                  MAINTENANCE
                </button>
              ) : (
                <Link to={proj.path} className="btn primary-btn">
                  LAUNCH_APP
                </Link>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Services;