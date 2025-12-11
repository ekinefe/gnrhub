import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from './data/projects_data';
import { getStatusClass } from '../../utils/statusUtils';


function Services() {
  const { id } = useParams();
  const activeProject = projects.find(p => p.id === id);

  return (
    <div className="sidebar-page">

      {/* === SIDEBAR === */}
      <aside className="page-sidebar">
        <Link to="/services" className={!id ? "active" : ""}>
          <h3>/active_tools</h3>
        </Link>

        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <Link to={`/services/${project.id}`} className={id === project.id ? "active" : ""}>
                {project.title.replace(' ', '_')}
                {/* Optional: Tiny dot in sidebar for status */}
                <span className={`status-dot ${getStatusClass(project.status)}`}
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    display: 'inline-block', marginLeft: '8px',
                    backgroundColor: 'currentColor' // Inherits color from class
                  }}>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3>/system_status</h3>
        <ul>
          <li><span style={{ fontSize: '0.85rem', color: '#666', padding: '0 12px' }}>Uptime: 99.9%</span></li>
        </ul>
      </aside>

      {/* === CONTENT === */}
      <main className="page-content">

        {/* VIEW 1: SPECIFIC TOOL */}
        {activeProject ? (
          <div>
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>

              {/* THE NEW TAG */}
              <span className={`status-tag ${getStatusClass(activeProject.status)}`}>
                [{activeProject.status}]
              </span>

              <span className="badge">{activeProject.category}</span>

              <h1 style={{ marginTop: '1rem' }}>/{activeProject.id}</h1>
            </div>

            <div className="tech-card" style={{ minHeight: '400px' }}>
              <p>{activeProject.content}</p>
              <div style={{ background: '#000', padding: '2rem', marginTop: '2rem', border: '1px dashed #333' }}>
                {/* [ INTERACTIVE TOOL INTERFACE WOULD LOAD HERE ] */}
                [ THIS SERVICE IS CURRENTLY BUILDING ]
              </div>
            </div>
          </div>
        ) : (

          /* VIEW 2: DASHBOARD LIST */
          <div>
            <h1>/services_dashboard</h1>
            <p>Select a Micro-SaaS tool from the sidebar to launch.</p>

            <div className="grid-layout">
              {projects.map(project => (
                <div key={project.id} className="tech-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <h3>{project.title}</h3>
                    {/* Tag in Grid View */}
                    <span className={`status-tag ${getStatusClass(project.status)}`} style={{ marginRight: 0 }}>
                      {project.status}
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <Link to={`/services/${project.id}`} className="btn secondary-btn">
                    Launch_App
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default Services;