import React, { useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { FONT_OPTIONS } from '../utils/fontData'; // Correct Path
import '../BrandBook.css';

const TypographySelector = () => {
    const { brandData, updateFont, toggleSkip } = useBrand();
    const isSkipped = brandData.skips.typography;

    // Load Fonts dynamically
    useEffect(() => {
        FONT_OPTIONS.forEach(font => {
            const link = document.createElement('link');
            link.href = font.url;
            link.rel = 'stylesheet';
            if (!document.querySelector(`link[href="${font.url}"]`)) {
                document.head.appendChild(link);
            }
        });
    }, []);

    return (
        <div className="editor-card">

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Typography</h3>
                <label className="skip-checkbox">
                    <input
                        type="checkbox"
                        checked={isSkipped}
                        onChange={() => toggleSkip('typography')}
                        style={{ marginRight: '6px' }}
                    />
                    Skip
                </label>
            </div>

            <p className="section-desc">Select a primary font for your brand.</p>

            {/* Font Grid */}
            <div className={`font-grid ${isSkipped ? 'skipped-section' : ''}`}>
                {FONT_OPTIONS.map((font) => {
                    const isSelected = brandData.typography.fontFamily === font.name;

                    return (
                        <div
                            key={font.name}
                            className={`font-card ${isSelected ? 'selected' : ''}`}
                            onClick={() => updateFont(font)}
                            style={{ fontFamily: font.name }}
                        >
                            {/* 1. Header Info */}
                            <div className="font-header">
                                <span className="font-name">{font.name}</span>
                                <span className="font-category" style={{ float: 'right', fontSize: '0.75rem', marginTop: '4px' }}>{font.category}</span>
                            </div>

                            {/* 2. Badges (License + Tags) */}
                            <div className="font-badges">
                                {/* License Tag */}
                                <span className="badge license-badge">{font.license.split(' ')[0]}</span>

                                {/* Feature Tags */}
                                {font.tags.map(tag => (
                                    <span key={tag} className="badge tag-badge">{tag}</span>
                                ))}
                            </div>

                            <hr className="divider" />

                            {/* 3. Previews */}
                            <div className="font-preview-area">
                                <p className="preview-text">
                                    The Quick Brown Fox<br />
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br />
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>abcdefghijklmnopqrstuvwxyz</span><br />
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>!@#$%</span><br />
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>1234567890</span>
                                </p>
                            </div>

                            {/* 4. Selection Button */}
                            <button className={`btn-select ${isSelected ? 'active' : ''}`}>
                                {isSelected ? 'Selected' : 'Select Font'}
                            </button>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TypographySelector;