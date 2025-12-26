import React, { useRef } from 'react';
import { useBrand } from '../context/BrandContext';
import '../BrandBook.css';

const LogoUploader = () => {
    const { brandData, addLogo, removeLogo, updateLogoLabel, toggleSkip } = useBrand();
    const fileInputRef = useRef(null);
    const isSkipped = brandData.skips.logo;
    const logos = brandData.assets.logos;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) addLogo(file);
    };

    return (
        <div className="editor-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>Logo & Iconography</h3>
                <label className="skip-checkbox">
                    <input
                        type="checkbox"
                        checked={isSkipped}
                        onChange={() => toggleSkip('logo')}
                        style={{ marginRight: '6px' }}
                    />
                    Skip
                </label>
            </div>

            <div className={isSkipped ? 'skipped-section' : ''}>
                <p className="section-desc">Upload your brand assets (Primary, Secondary, Icon, etc).</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>

                    {/* 1. EXISTING LOGOS */}
                    {logos.map((logo, index) => (
                        <div key={logo.id} style={{
                            background: 'var(--bg-dark)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            padding: '1rem',
                            position: 'relative',
                            textAlign: 'center'
                        }}>
                            {/* Preview Image */}
                            <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                <img
                                    src={logo.preview}
                                    alt="Logo"
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>

                            {/* Label Input */}
                            <input
                                type="text"
                                className="text-input"
                                style={{ fontSize: '0.8rem', padding: '4px 8px', textAlign: 'center', marginBottom: '8px' }}
                                value={logo.label}
                                onChange={(e) => updateLogoLabel(logo.id, e.target.value)}
                            />

                            {/* Remove Button */}
                            <button
                                onClick={() => removeLogo(logo.id)}
                                style={{
                                    background: 'none', border: 'none', color: 'red',
                                    cursor: 'pointer', fontSize: '0.7rem', textDecoration: 'underline'
                                }}
                            >
                                Remove
                            </button>

                            {/* Badge for the first one */}
                            {index === 0 && (
                                <span style={{
                                    position: 'absolute', top: '-8px', left: '-8px',
                                    background: 'var(--accent)', color: 'black',
                                    fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold'
                                }}>
                                    PRIMARY
                                </span>
                            )}
                        </div>
                    ))}

                    {/* 2. UPLOAD BUTTON */}
                    <div
                        onClick={() => fileInputRef.current.click()}
                        style={{
                            border: '2px dashed var(--border)',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            minHeight: '150px',
                            transition: 'all 0.2s',
                            background: 'rgba(255,255,255,0.02)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    >
                        <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>+</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Add Logo</span>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoUploader;