import React from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from './context/BrandContext';
import './BrandBook.css';

const BrandPreview = () => {
    const { brandData } = useBrand();
    const { colors, typography, brandName, brandSlogan, skips, assets } = brandData;
    const logos = assets.logos || []; // Safe access

    const getLabel = (key) => {
        switch (key) {
            case 'secondaryText': return 'Secondary Text';
            case 'secondary': return 'Secondary Color';
            default: return key;
        }
    };

    return (
        <div className="brand-service-container" style={{ background: '#525659', minHeight: '100%', padding: '2rem' }}>

            <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                <Link to="/services/brand-book/editor" style={{ color: 'white', fontWeight: 'bold' }}>
                    ← Back to Editor
                </Link>
                <button className="btn primary-btn" onClick={() => window.print()}>
                    Export to PDF
                </button>
            </nav>

            <div className="paper-sheet">

                {/* === HEADER === */}
                <header style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #eee', paddingBottom: '2rem' }}>

                    {/* PRIMARY LOGO (Shows the first one) */}
                    {!skips.logo && logos.length > 0 && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img
                                src={logos[0].preview}
                                alt="Primary Logo"
                                style={{ height: '80px', objectFit: 'contain' }}
                            />
                        </div>
                    )}

                    {!skips.brandName && (
                        <h1 style={{ fontSize: '3rem', color: colors.primary, fontFamily: typography.fontFamily, margin: 0 }}>
                            {brandName}
                        </h1>
                    )}

                    {!skips.brandSlogan && (
                        <h2 style={{
                            fontSize: '1.2rem',
                            color: colors.secondaryText || '#555',
                            fontFamily: typography.fontFamily,
                            fontWeight: 'normal',
                            marginTop: '0.5rem',
                            fontStyle: 'italic'
                        }}>
                            {brandSlogan || 'Your Slogan Here'}
                        </h2>
                    )}
                    <p style={{ letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginTop: '20px', fontSize: '0.8rem' }}>
                        Official Brand Guidelines
                    </p>
                </header>

                {/* === LOGO GUIDELINES (Loops through all logos) === */}
                {!skips.logo && logos.length > 0 && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Logo Variations</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                            {logos.map((logo) => (
                                <div key={logo.id} style={{
                                    background: '#f9f9f9', padding: '2rem', borderRadius: '8px', border: '1px solid #eee'
                                }}>
                                    <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' }}>
                                        {logo.label || 'Logo Variation'}
                                    </h3>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', marginBottom: '1rem' }}>
                                        <img src={logo.preview} alt={logo.label} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ddd', paddingTop: '10px', fontSize: '0.7rem', color: '#666' }}>
                                        <span>Min Size: 24px</span>
                                        <span>Clearspace: 10px</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ... (Color Palette, Typography, etc. remain unchanged) ... */}

                {/* === COLOR PALETTE === */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Color Palette</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                        {['primary', 'secondary', 'background', 'text', 'secondaryText'].map(key => (
                            !skips[key] && colors[key] && (
                                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '60px', height: '60px', borderRadius: '50%',
                                        backgroundColor: colors[key], border: '1px solid #ddd',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                    }}></div>
                                    <div>
                                        <strong style={{ display: 'block', textTransform: 'capitalize', color: '#000' }}>
                                            {getLabel(key)}
                                        </strong>
                                        <span style={{ fontFamily: 'monospace', color: '#555' }}>{colors[key]}</span>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </section>

                {/* === TYPOGRAPHY === */}
                {!skips.typography && (
                    <section>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Typography</h2>
                        <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
                            <div style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                                Primary Font Family
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: typography.fontFamily, color: '#000' }}>
                                {typography.fontFamily}
                            </div>
                            <div style={{ marginTop: '2rem', fontFamily: typography.fontFamily, color: '#333', lineHeight: 1.6 }}>
                                <p><strong>Example Heading</strong></p>
                                <p style={{ color: colors.secondaryText || '#555' }}>
                                    This is how your body text will look. The quick brown fox jumps over the lazy dog. 1234567890.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                <hr style={{ border: 0, borderTop: '1px solid #eee', margin: '3rem 0' }} />

                {/* === COMPANY PROFILE === */}
                {(!skips.mission || !skips.vision) && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Company Profile</h2>

                        {/* CHANGED: gridTemplateColumns to '1fr' to stack them vertically */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '2rem' }}>
                            {!skips.mission && (
                                <div>
                                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#999', marginBottom: '10px' }}>Our Mission</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333' }}>"{brandData.company.mission}"</p>
                                </div>
                            )}
                            {!skips.vision && (
                                <div>
                                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#999', marginBottom: '10px' }}>Our Vision</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333' }}>"{brandData.company.vision}"</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* === TEAM === */}
                {!skips.team && (
                    <section>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Meet the Team</h2>

                        {/* CHANGED: gridTemplateColumns from 'repeat(2, 1fr)' to '1fr' */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
                            {brandData.team.map(member => (
                                <div key={member.id} style={{
                                    border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px', background: '#fafafa'
                                }}>
                                    <h3 style={{ margin: 0, color: colors.primary, fontSize: '1.4rem' }}>{member.name}</h3>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {member.title}
                                    </span>
                                    <p style={{ fontStyle: 'italic', color: '#444', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                        {member.bio}
                                    </p>
                                    <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', fontSize: '0.85rem' }}>
                                        {(member.Contact || member.contact) && <div style={{ color: '#666', marginBottom: '5px' }}>📧 {member.Contact || member.contact}</div>}
                                        {member.link1 && <div style={{ color: '#666', marginBottom: '5px' }}>🔗 {member.link1}</div>}
                                        {member.link2 && <div style={{ color: '#666' }}>🌐 {member.link2}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* === NEW: CONTACT & SOCIALS SECTION === */}
                {!skips.contact && (
                    <section style={{ marginTop: '4rem', borderTop: '2px solid #eee', paddingTop: '3rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Get In Touch</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '2rem' }}>

                            {/* TOP: Contact Details */}
                            <div>
                                <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#999', marginBottom: '15px' }}>Contact Info</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {brandData.contact.email && (
                                        <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>
                                            <strong style={{ color: '#555' }}>Email:</strong> {brandData.contact.email}
                                        </li>
                                    )}
                                    {brandData.contact.website && (
                                        <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>
                                            <strong style={{ color: '#555' }}>Web:</strong> {brandData.contact.website}
                                        </li>
                                    )}
                                    {brandData.contact.phone && (
                                        <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>
                                            <strong style={{ color: '#555' }}>Phone:</strong> {brandData.contact.phone}
                                        </li>
                                    )}
                                    {brandData.contact.address && (
                                        <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>
                                            <strong style={{ color: '#555' }}>Address:</strong> {brandData.contact.address}
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* BOTTOM: Social Media */}
                            <div>
                                <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#999', marginBottom: '15px' }}>Social Media</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {brandData.socials.map(social => (
                                        <li key={social.id} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                                            <span style={{
                                                display: 'inline-block', width: '8px', height: '8px',
                                                background: colors.primary, borderRadius: '50%', marginRight: '10px'
                                            }}></span>
                                            <strong style={{ color: '#333', marginRight: '5px' }}>{social.platform}:</strong>
                                            <span style={{ color: colors.secondaryText || '#666' }}>{social.url}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default BrandPreview;