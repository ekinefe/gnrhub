import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; // Removed useLocation
import { projects, getStatusClass } from '../pages/Services/data/projects_data';

const ServicesLayout = () => {
    // REMOVED: const isPreview = ... logic

    return (
        <div className="sidebar-page">

            {/* === SIDEBAR (Always Visible now) === */}
            <aside className="page-sidebar">
                <h3>/ACTIVE_TOOLS</h3>

                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <NavLink to="/services" end className={({ isActive }) => isActive ? "active" : ""}>
                            _Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services/profile" className={({ isActive }) => isActive ? "active" : ""}>
                            _Profile
                        </NavLink>
                    </li>

                    <li style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                        <span style={{ color: '#666', fontSize: '0.8rem' }}>TOOLS_LIST</span>
                    </li>

                    {projects.map((proj) => {
                        const isOffline = proj.status === 'OFFLINE' || proj.status === 'DEV';

                        return (
                            <li key={proj.id} style={{ marginBottom: '5px' }}>
                                {isOffline ? (
                                    <div style={{ padding: '8px 12px', opacity: 0.5, cursor: 'not-allowed', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{proj.title}</span>
                                        <span className={`status-tag ${getStatusClass(proj.status)}`} style={{ fontSize: '0.6rem', marginLeft: 'auto' }}>
                                            {proj.status}
                                        </span>
                                    </div>
                                ) : (
                                    <NavLink
                                        to={proj.path}
                                        className={({ isActive }) => isActive ? "active" : ""}
                                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                    >
                                        {proj.title}
                                        {proj.status !== 'AVAILABLE' && (
                                            <span className={`status-tag ${getStatusClass(proj.status)}`} style={{ fontSize: '0.6rem', marginLeft: 'auto' }}>
                                                {proj.status}
                                            </span>
                                        )}
                                    </NavLink>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <h3>/SYSTEM_STATUS</h3>
                    <p style={{ fontSize: '0.8rem', color: '#666' }}>Uptime: 99.9%</p>
                </div> */}
            </aside>

            {/* === MAIN CONTENT === */}
            <main className="page-content" style={{ width: '100%' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default ServicesLayout;