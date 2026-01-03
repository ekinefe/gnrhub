import React, { useState } from 'react'; // <--- Added useState
import { Link } from 'react-router-dom';
import { useBrand } from './context/BrandContext';
import './BrandBook.css';

const BrandPreview = () => {
    const { brandData } = useBrand();
    const { colors, typography, brandName, brandSlogan, skips, assets } = brandData;
    const logos = assets.logos || []; // Safe access

    // === NEW: Sending State ===
    const [isSending, setIsSending] = useState(false);

    // === NEW: Handle Send to Hub Logic ===
    const handleSendToHub = () => {
        setIsSending(true);

        // 1. Format the data into a readable string
        const emailBody = `
=== BRAND BOOK SUBMISSION ===
Brand Name: ${brandName}
Slogan: ${brandSlogan || 'N/A'}

--- COLORS ---
Primary: ${colors.primary}
Secondary: ${colors.secondary}
Background: ${colors.background}
Text: ${colors.text}

--- TYPOGRAPHY ---
Font: ${typography.fontFamily}

--- COMPANY ---
Mission: ${brandData.company.mission}
Vision: ${brandData.company.vision}

--- TEAM ---
Members: ${brandData.team.length}

--- CONTACT ---
Email: ${brandData.contact.email}
Website: ${brandData.contact.website}

(Sent via GNRHUB Brand Tool)
        `;

        // 2. Construct Mailto Link
        const subject = encodeURIComponent(`Brand Book Submission: ${brandName}`);
        const body = encodeURIComponent(emailBody);
        const recipient = "contact@gnrhub.com";

        // 3. Open Email Client
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // 4. Reset Button after delay
        setTimeout(() => setIsSending(false), 2000);
    };

    const getLabel = (key) => {
        switch (key) {
            case 'secondaryText': return 'Secondary Text';
            case 'secondary': return 'Secondary Color';
            default: return key;
        }
    };

    return (
        <div className="brand-service-container" style={{ background: '#525659', minHeight: '100%', padding: '2rem' }}>

            {/* === NAVIGATION BAR === */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                <Link to="/services/brand-book/editor" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    ← Back to Editor
                </Link>

                <div style={{ display: 'flex', gap: '1rem' }}>

                    {/* === NEW BUTTON: SEND TO HUB === */}
                    <button
                        className="btn"
                        onClick={handleSendToHub}
                        disabled={isSending}
                        style={{
                            background: 'transparent',
                            border: '1px solid white',
                            color: 'white',
                            cursor: 'pointer',
                            opacity: isSending ? 0.7 : 1
                        }}
                    >
                        {isSending ? 'Opening Mail...' : '📨 Send to GNRHUB'}
                    </button>

                    {/* EXISTING EXPORT BUTTON */}
                    <button className="btn primary-btn" onClick={() => window.print()}>
                        Export to PDF
                    </button>
                </div>
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

                {/* === TONE OF VOICE === */}
                {!skips.voice && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Tone of Voice</h2>

                        <div style={{ marginTop: '2rem', background: '#fcfcfc', border: '1px solid #eee', padding: '2.5rem', borderRadius: '8px' }}>

                            {/* Keywords Grid */}
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                {brandData.voice.keywords.split(',').map((word, i) => (
                                    word.trim() && (
                                        <span key={i} style={{
                                            background: colors.primary,
                                            color: '#fff', // White text on colored bg
                                            padding: '8px 16px',
                                            borderRadius: '50px',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {word.trim()}
                                        </span>
                                    )
                                ))}
                            </div>

                            {/* Description */}
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#444', fontStyle: 'italic' }}>
                                "{brandData.voice.description}"
                            </p>
                        </div>
                    </section>
                )}

                {/* === UI SYSTEM === */}
                {!skips.ui && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>UI System</h2>

                        <div style={{ marginTop: '2rem', display: 'grid', gap: '3rem' }}>

                            {/* 1. BUTTONS */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>Buttons</h3>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                    {/* Primary Button */}
                                    <button style={{
                                        background: colors.primary,
                                        color: '#fff',
                                        border: 'none',
                                        padding: '12px 24px',
                                        borderRadius: brandData.ui.borderRadius,
                                        fontFamily: typography.fontFamily,
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>
                                        Primary Action
                                    </button>

                                    {/* Secondary Button */}
                                    <button style={{
                                        background: 'transparent',
                                        color: '#333',
                                        border: `2px solid #ddd`,
                                        padding: '12px 24px',
                                        borderRadius: brandData.ui.borderRadius,
                                        fontFamily: typography.fontFamily,
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>
                                        Secondary
                                    </button>

                                    {/* Text Link */}
                                    <button style={{
                                        background: 'transparent',
                                        color: colors.primary,
                                        border: 'none',
                                        padding: '12px 24px',
                                        fontFamily: typography.fontFamily,
                                        textDecoration: 'underline',
                                        cursor: 'pointer'
                                    }}>
                                        Text Link
                                    </button>
                                </div>
                            </div>

                            {/* 2. FORM ELEMENTS */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>Form Elements</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    {/* Active Input */}
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#555', fontFamily: typography.fontFamily }}>
                                            Active Input
                                        </label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="Focused state example"
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                borderRadius: brandData.ui.borderRadius,
                                                border: `2px solid ${colors.primary}`, // Uses Brand Color
                                                fontFamily: typography.fontFamily,
                                                outline: 'none',
                                                color: '#333'
                                            }}
                                        />
                                    </div>

                                    {/* Inactive Input */}
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#555', fontFamily: typography.fontFamily }}>
                                            Inactive Input
                                        </label>
                                        <input
                                            type="text"
                                            readOnly
                                            placeholder="Placeholder text..."
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                borderRadius: brandData.ui.borderRadius,
                                                border: `1px solid #ddd`,
                                                fontFamily: typography.fontFamily,
                                                outline: 'none',
                                                background: '#fafafa'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 3. ALERTS / CARDS */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>Components</h3>
                                <div style={{
                                    borderLeft: `4px solid ${colors.primary}`,
                                    background: '#f8f9fa',
                                    padding: '1.5rem',
                                    borderRadius: `0 ${brandData.ui.borderRadius} ${brandData.ui.borderRadius} 0`
                                }}>
                                    <strong style={{ display: 'block', marginBottom: '5px', color: '#333', fontFamily: typography.fontFamily }}>Feature Card / Alert Box</strong>
                                    <p style={{ margin: 0, color: colors.secondaryText || '#666', fontSize: '0.9rem', lineHeight: 1.5, fontFamily: typography.fontFamily }}>
                                        This component demonstrates how the primary color is used for emphasis on borders, while secondary text colors are used for the body content to maintain hierarchy.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                )}

                {/* === COMPANY PROFILE === */}
                {(!skips.mission || !skips.vision) && (
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Company Profile</h2>

                        {/* Stacks vertically (1fr) */}
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

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
                            {brandData.team.map(member => (
                                <div key={member.id} style={{
                                    border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px', background: '#fafafa',
                                    display: 'flex', gap: '1.5rem', alignItems: 'flex-start'
                                }}>

                                    {/* PROFILE PHOTO */}
                                    {member.photo && (
                                        <div style={{ flexShrink: 0 }}>
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    border: `3px solid ${colors.primary}`
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Content Container */}
                                    <div style={{ flexGrow: 1 }}>
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
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* === CONTACT & SOCIALS === */}
                {!skips.contact && (
                    <section style={{ marginTop: '4rem', borderTop: '2px solid #eee', paddingTop: '3rem' }}>
                        <h2 style={{ borderLeft: `5px solid ${colors.primary}`, paddingLeft: '15px', color: '#333' }}>Get In Touch</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '2rem' }}>

                            {/* Contact Details */}
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

                            {/* Social Media */}
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