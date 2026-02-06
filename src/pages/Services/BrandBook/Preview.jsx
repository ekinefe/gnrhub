import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from './context/BrandContext';
// ❌ REMOVED: import emailjs from '@emailjs/browser'; 
import './BrandBook.css';

const BrandPreview = () => {
    const { brandData } = useBrand();

    // Prevent crash if brandData is not yet loaded
    if (!brandData) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#333', color: 'white' }}>
                <p>Loading Preview...</p>
            </div>
        );
    }

    const {
        colors = {},
        typography = {},
        brandName = '',
        brandSlogan = '',
        skips = {},
        assets = {},
        company = {},
        voice = {},
        ui = {},
        contact = {},
        socials = [],
        team = []
    } = brandData;

    const logos = assets?.logos || [];

    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState(null);

    const handleSendToHub = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setSendStatus(null);

        // 1. Basic HTML Construction
        const htmlMessage = `
            <h1>Brand Book: ${brandName}</h1>
            <p>Slogan: ${brandSlogan}</p>
            <p>Primary Color: ${colors.primary}</p>
            <p>Font: ${typography.fontFamily}</p>
        `;

        // 2. Send to Backend
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    brandName: brandName,
                    messageHtml: htmlMessage,
                    recipientEmail: "ekinefegnr@gmail.com"
                })
            });

            if (response.ok) {
                setSendStatus('success');
                setTimeout(() => setSendStatus(null), 3000);
            } else {
                setSendStatus('error');
            }
        } catch (_error) {
            setSendStatus('error');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="brand-service-container" style={{ background: '#525659', minHeight: '100%', padding: '2rem' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                <Link to="/services/brand-book/editor" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                    ← Back to Editor
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        className="btn"
                        onClick={handleSendToHub}
                        disabled={isSending}
                        style={{
                            background: 'transparent',
                            border: '1px solid white',
                            color: 'white',
                            cursor: isSending ? 'not-allowed' : 'pointer',
                            opacity: isSending ? 0.7 : 1
                        }}
                    >
                        {isSending ? 'Sending...' : sendStatus === 'success' ? 'Sent!' : '📨 Send to GNRHUB'}
                    </button>
                    <button className="btn primary-btn" onClick={() => window.print()}>
                        Export to PDF
                    </button>
                </div>
            </nav>

            <div className="paper-sheet">
                {/* 1. HEADER section */}
                <header style={{ textAlign: 'center', marginBottom: '4rem', borderBottom: '2px solid #eee', paddingBottom: '3rem' }}>
                    {!skips.logo && logos.length > 0 && (
                        <div style={{ marginBottom: '2rem' }}>
                            <img src={logos[0].preview} alt="Primary Logo" style={{ height: '120px', objectFit: 'contain' }} />
                        </div>
                    )}
                    {!skips.brandName && (
                        <h1 style={{ fontSize: '3.5rem', color: colors.primary, fontFamily: typography.fontFamily, margin: 0, lineHeight: 1.2 }}>
                            {brandName}
                        </h1>
                    )}
                    {!skips.brandSlogan && (
                        <h2 style={{ fontSize: '1.25rem', color: colors.secondaryText || '#555', fontFamily: typography.fontFamily, fontStyle: 'italic', marginTop: '0.5rem', fontWeight: '400' }}>
                            {brandSlogan}
                        </h2>
                    )}
                </header>

                {/* 2. COMPANY PROFILE */}
                {(!skips.mission || !skips.vision) && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            01. Company Profile
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            {!skips.mission && (
                                <div>
                                    <h4 style={{ color: colors.primary, margin: '0 0 1rem 0' }}>Mission</h4>
                                    <p style={{ lineHeight: '1.6', color: '#333' }}>{company.mission || "Our mission statement goes here."}</p>
                                </div>
                            )}
                            {!skips.vision && (
                                <div>
                                    <h4 style={{ color: colors.primary, margin: '0 0 1rem 0' }}>Vision</h4>
                                    <p style={{ lineHeight: '1.6', color: '#333' }}>{company.vision || "Our vision statement goes here."}</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* 3. COLOR PALETTE */}
                {!skips.primary && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            02. Color System
                        </h3>
                        <div className="color-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                            {[
                                { label: 'Primary', value: colors.primary },
                                { label: 'Secondary', value: colors.secondary },
                                { label: 'Background', value: colors.background },
                                { label: 'Text', value: colors.text },
                                { label: 'Sec. Text', value: colors.secondaryText }
                            ].map((c, i) => (
                                <div key={i} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
                                    <div style={{ height: '80px', background: c.value, borderRadius: '4px', marginBottom: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}></div>
                                    <p style={{ fontWeight: 'bold', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{c.label}</p>
                                    <p style={{ fontFamily: 'monospace', color: '#666', fontSize: '0.85rem' }}>{c.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 4. TYPOGRAPHY */}
                {!skips.typography && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            03. Typography
                        </h3>
                        <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ background: '#eee', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                                    {typography.fontFamily}
                                </span>
                            </div>

                            <h1 style={{ fontFamily: typography.fontFamily, margin: '0 0 1rem 0', fontSize: '2.5rem' }}>
                                The quick brown fox jumps over the lazy dog.
                            </h1>
                            <p style={{ fontFamily: typography.fontFamily, lineHeight: '1.6', fontSize: '1.1rem', color: '#444' }}>
                                ABCDEFGHIJKLM<br />
                                NOPQRSTUVWXYZ<br />
                                0123456789
                            </p>
                        </div>
                    </section>
                )}

                {/* 5. BRAND VOICE */}
                {!skips.voice && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            04. Voice & Tone
                        </h3>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            {voice.keywords && voice.keywords.split(',').map((k, i) => (
                                <span key={i} style={{ background: colors.primary + '20', color: colors.primary, padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    {k.trim()}
                                </span>
                            ))}
                        </div>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>
                            {voice.description}
                        </p>
                    </section>
                )}

                {/* 6. UI ELEMENTS */}
                {!skips.ui && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            05. UI Elements
                        </h3>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: '#f9f9f9', padding: '2rem', borderRadius: ui.borderRadius }}>
                            <button style={{
                                background: colors.primary,
                                color: 'white',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: ui.borderRadius,
                                fontFamily: typography.fontFamily,
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>
                                Primary Button
                            </button>

                            <button style={{
                                background: 'transparent',
                                color: colors.primary,
                                border: `2px solid ${colors.primary}`,
                                padding: '12px 24px',
                                borderRadius: ui.borderRadius,
                                fontFamily: typography.fontFamily,
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>
                                Secondary Button
                            </button>
                        </div>
                    </section>
                )}

                {/* 6. TEAM MEMBERS */}
                {!skips.team && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            06. Team Members
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                            {team.map(member => (
                                <div key={member.id} style={{ border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                                    {member.photo && (
                                        <div style={{ marginBottom: '1rem' }}>
                                            {/* Handling both File objects and URL strings for preview */}
                                            <img
                                                src={typeof member.photo === 'object' ? URL.createObjectURL(member.photo) : member.photo}
                                                alt={member.name}
                                                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', background: '#f0f0f0' }}
                                            />
                                        </div>
                                    )}
                                    <h4 style={{ margin: '0 0 0.5rem 0', color: colors.primary }}>{member.name}</h4>
                                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', fontWeight: 'bold', color: '#555' }}>{member.title}</p>
                                    <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem', lineHeight: '1.5' }}>{member.bio}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.8rem' }}>
                                        {member.Contact && <span style={{ color: '#888' }}>📧 {member.Contact}</span>}
                                        {member.link1 && <a href={member.link1} target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>🔗 Link 1</a>}
                                        {member.link2 && <a href={member.link2} target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>🔗 Link 2</a>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 7. CONTACT & SOCIALS */}
                {(!skips.contact) && (
                    <section>
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', color: '#999', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                            07. Contact Info
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                {contact.email && <p style={{ margin: '0 0 0.5rem 0' }}><strong>Email:</strong> {contact.email}</p>}
                                {contact.phone && <p style={{ margin: '0 0 0.5rem 0' }}><strong>Phone:</strong> {contact.phone}</p>}
                                {contact.website && <p style={{ margin: '0 0 0.5rem 0' }}><strong>Web:</strong> {contact.website}</p>}
                                {contact.address && <p style={{ margin: '0 0 0.5rem 0' }}><strong>Address:</strong> {contact.address}</p>}
                            </div>
                            <div>
                                <div>
                                    {socials.filter(s => s.url).map(s => (
                                        <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: colors.primary, textDecoration: 'none', marginBottom: '0.5rem' }}>
                                            {s.platform || 'Link'} →
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default BrandPreview;