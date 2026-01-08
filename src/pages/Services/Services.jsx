import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projects, getStatusClass } from './data/projects_data';

const Services = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Password Change State
  const [passData, setPassData] = useState({ current: '', new: '' });
  const [passMsg, setPassMsg] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Failed to load profile");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/sign-in';
  };

  const handlePassChange = async (e) => {
    e.preventDefault();
    setPassMsg('Processing...');
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: passData.current, newPassword: passData.new })
      });
      const data = await res.json();
      if (res.ok) {
        setPassMsg('SUCCESS: Password Updated');
        setPassData({ current: '', new: '' });
        setTimeout(() => setPassMsg(''), 3000);
      } else {
        setPassMsg(`ERROR: ${data.error}`);
      }
    } catch (err) {
      setPassMsg('ERROR: Network failure');
    }
  };

  if (loading) return <div className="container" style={{ paddingTop: '4rem' }}>/LOADING_DIRECTORY...</div>;

  // --- RENDER ---
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ marginBottom: 0 }}>
            {user ? '/OPERATOR_DASHBOARD' : '/SERVICES_DIRECTORY'}
          </h1>
          <p>
            {user
              ? <span>Welcome back, <span style={{ color: 'var(--accent)' }}>{user.username}</span>.</span>
              : <span>Public access terminal. Please authenticate to launch tools.</span>
            }
          </p>
        </div>
        {user && (
          <button onClick={handleLogout} className="btn secondary-btn" style={{ borderColor: '#ff4444', color: '#ff4444' }}>
            TERMINATE SESSION
          </button>
        )}
      </div>

      {/* === MAIN LAYOUT: SINGLE COLUMN STACK === */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* SECTION 1: USER DASHBOARD (Top) */}
        <div style={{ width: '100%' }}>
          {user ? (
            /* LOGGED IN: Show Identity & Security cards side-by-side */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* IDENTITY CARD */}
              <div className="tech-card">
                <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/IDENTITY</h3>
                <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                  <div><small style={{ color: '#666' }}>FULL NAME</small><div>{user.name} {user.surname}</div></div>
                  <div><small style={{ color: '#666' }}>EMAIL LINK</small><div style={{ color: 'var(--accent)' }}>{user.email}</div></div>
                  <div><small style={{ color: '#666' }}>ROLE</small><div style={{ display: 'inline-block', padding: '2px 6px', background: '#333', borderRadius: '4px', fontSize: '0.8rem' }}>{user.role?.toUpperCase()}</div></div>
                </div>
              </div>

              {/* SECURITY CARD */}
              {/* <div className="tech-card">
                <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>/SECURITY</h3>
                <form onSubmit={handlePassChange} style={{ marginTop: '1rem' }}>
                  <input type="password" placeholder="Current Password" className="text-input" style={{ width: '100%', marginBottom: '0.5rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.current} onChange={e => setPassData({ ...passData, current: e.target.value })} required />
                  <input type="password" placeholder="New Password" className="text-input" style={{ width: '100%', marginBottom: '1rem', background: '#000', border: '1px solid #333', color: '#fff', padding: '0.5rem' }} value={passData.new} onChange={e => setPassData({ ...passData, new: e.target.value })} required />
                  {passMsg && <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: passMsg.startsWith('SUCCESS') ? '#0f0' : '#f44' }}>{passMsg}</div>}
                  <button className="btn" style={{ width: '100%', background: '#222', color: '#fff' }}>UPDATE CREDENTIALS</button>
                </form>
              </div> */}
            </div>
          ) : (
            /* GUEST: Show Login Prompt (Full Width) */
            <div className="tech-card" style={{ borderColor: 'var(--accent)', textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--accent)' }}>/AUTHENTICATION_REQUIRED</h3>
              <p style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                You are currently browsing as a Guest. Access to SaaS tools requires a verified identity.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <Link to="/sign-in" className="btn primary-btn" style={{ flex: 1 }}>LOGIN</Link>
                <Link to="/sign-up" className="btn secondary-btn" style={{ flex: 1 }}>REGISTER</Link>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 2: SERVICES LIST (Bottom) */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>/AVAILABLE_TOOLS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {projects.map((proj) => {
              const isOffline = proj.status === 'OFFLINE' || proj.status === 'DEV';

              return (
                <div key={proj.id} className="tech-card" style={{
                  borderColor: !isOffline ? (user ? 'var(--accent)' : '#444') : 'var(--border)',
                  opacity: isOffline ? 0.6 : 1
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{proj.icon} {proj.title}</span>
                    <span className={`status-tag ${getStatusClass(proj.status)}`}>{proj.status}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{proj.description}</p>

                  {/* BUTTON LOGIC */}
                  {isOffline ? (
                    <button className="btn secondary-btn" disabled style={{ width: '100%', cursor: 'not-allowed' }}>OFFLINE</button>
                  ) : user ? (
                    <Link to={proj.path} className="btn primary-btn" style={{ textAlign: 'center', display: 'block' }}>LAUNCH APP</Link>
                  ) : (
                    <Link to="/sign-in" className="btn secondary-btn" style={{ textAlign: 'center', display: 'block', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                      LOGIN TO ACCESS
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div >
  );
};

export default Services;