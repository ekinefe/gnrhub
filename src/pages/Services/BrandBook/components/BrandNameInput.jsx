import React from 'react';
import { useBrand } from '../context/BrandContext';
import '../BrandBook.css';

const BrandNameInput = () => {
    const { brandData, updateBrand, toggleSkip } = useBrand();

    // Grab the skip states for both fields
    const isNameSkipped = brandData.skips.brandName;
    const isSloganSkipped = brandData.skips.brandSlogan;

    // Helper style for the row containing Label + Skip Button
    const headerRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
    };

    return (
        <div className="editor-card">
            <h3 style={{ marginBottom: '1.5rem' }}>1. Brand Identity</h3>

            {/* === BLOCK 1: BRAND NAME === */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={headerRowStyle}>
                    <label style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>
                        Brand Name
                    </label>

                    <label className="skip-checkbox" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        <input
                            type="checkbox"
                            checked={isNameSkipped}
                            onChange={() => toggleSkip('brandName')}
                            style={{ marginRight: '6px' }}
                        />
                        Skip Name
                    </label>
                </div>

                <div className={isNameSkipped ? 'skipped-section' : ''}>
                    <input
                        type="text"
                        value={brandData.brandName}
                        onChange={(e) => updateBrand('brandName', e.target.value)}
                        className="text-input"
                        placeholder="e.g. GNRHUB"
                        disabled={isNameSkipped}
                    />
                </div>
            </div>

            {/* === BLOCK 2: BRAND SLOGAN (NEW) === */}
            <div>
                <div style={headerRowStyle}>
                    <label style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>
                        Brand Slogan
                    </label>

                    <label className="skip-checkbox" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        <input
                            type="checkbox"
                            checked={isSloganSkipped}
                            onChange={() => toggleSkip('brandSlogan')}
                            style={{ marginRight: '6px' }}
                        />
                        Skip Slogan
                    </label>
                </div>

                <div className={isSloganSkipped ? 'skipped-section' : ''}>
                    <input
                        type="text"
                        value={brandData.brandSlogan}
                        onChange={(e) => updateBrand('brandSlogan', e.target.value)}
                        className="text-input"
                        placeholder="e.g. Building Better Worlds"
                        disabled={isSloganSkipped}
                    />
                </div>
            </div>

        </div>
    );
};

export default BrandNameInput;