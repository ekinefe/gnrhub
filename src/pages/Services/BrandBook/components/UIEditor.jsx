import React from 'react';
import { useBrand } from '../context/BrandContext';
import '../BrandBook.css';

const UIEditor = () => {
    const { brandData, updateUI, toggleSkip } = useBrand();
    const isSkipped = brandData.skips.ui;

    return (
        <div className="editor-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>UI & Design System</h3>
                <label className="skip-checkbox">
                    <input
                        type="checkbox"
                        checked={isSkipped}
                        onChange={() => toggleSkip('ui')}
                        style={{ marginRight: '6px' }}
                    />
                    Skip
                </label>
            </div>

            <div className={isSkipped ? 'skipped-section' : ''}>
                <p className="section-desc">Customize the geometry of your UI components.</p>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-main)' }}>
                        Border Radius (Roundness)
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {[
                            { label: 'Sharp (0px)', value: '0px' },
                            { label: 'Soft (4px)', value: '4px' },
                            { label: 'Round (20px)', value: '20px' }
                        ].map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => updateUI('borderRadius', opt.value)}
                                className={`btn-select ${brandData.ui.borderRadius === opt.value ? 'active' : ''}`}
                                // === NEW: Preview the shape directly on the button ===
                                style={{
                                    borderRadius: opt.value,
                                    transition: 'all 0.3s ease' // Makes the change look smooth
                                }}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UIEditor;