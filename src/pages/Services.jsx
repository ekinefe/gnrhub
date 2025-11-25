import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="sidebar-layout">
      
      {/* === THE SIDEBAR (Only for Services) === */}
      <aside className="context-sidebar">
        <h3>Micro-SaaS Tools</h3>
        <Link to="#">PDF Converter</Link>
        <Link to="#">Image Resizer</Link>
        <Link to="#">JSON Formatter</Link>
        <Link to="#">QR Generator</Link>
        
        <h3 style={{marginTop: '2rem'}}>Status</h3>
        <Link to="#">System Health</Link>
      </aside>

      {/* === THE MAIN CONTENT === */}
      <div className="layout-content">
        <h1>Micro-SaaS Services</h1>
        <p>Select a tool from the sidebar to get started.</p>

        {/* Example Content Card */}
        <div style={{
          background: 'var(--bg-card)', 
          padding: '2rem', 
          borderRadius: '8px', 
          marginTop: '2rem',
          border: '1px solid var(--border)'
        }}>
          <h2>Featured: PDF Converter</h2>
          <p style={{color: 'var(--text-muted)'}}>
            Convert your documents securely in the browser. No uploads required.
          </p>
          <button style={{
            background: 'var(--accent)', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px', 
            marginTop: '1rem',
            cursor: 'pointer'
          }}>
            Launch Tool 🚀
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Services;