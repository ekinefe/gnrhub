import React, { useMemo } from 'react';
import { useBrand } from '../context/BrandContext';
import { PRIMARY_OPTIONS, generateTheme } from '../utils/colorUtils';
import '../BrandBook.css'; // Ensure this CSS file exists in the parent folder!

const ColorPalette = () => {
    const { brandData, updateColor, toggleSkip } = useBrand();

    const activeTheme = useMemo(() => {
        return generateTheme(brandData.colors.primary);
    }, [brandData.colors.primary]);

    const formatLabel = (key) => key.charAt(0).toUpperCase() + key.slice(1);

    const getSuggestionList = (colorKey) => {
        if (colorKey === 'primary') return PRIMARY_OPTIONS;
        return activeTheme[colorKey];
    };

    return (
        <div className="editor-card">
            <h3>2. Color Palette</h3>
            <p className="section-desc">
                Select a Primary color to generate a matching theme.
            </p>

            <div className="color-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {Object.entries(brandData.colors).map(([key, currentValue]) => {
                    const suggestions = getSuggestionList(key);
                    const isSkipped = brandData.skips[key];

                    return (
                        <div key={key} style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border)' }}>

                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{formatLabel(key)}</span>
                                <label className="skip-checkbox" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    <input
                                        type="checkbox"
                                        checked={isSkipped}
                                        onChange={() => toggleSkip(key)}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Skip
                                </label>
                            </div>

                            {/* Content */}
                            <div className={isSkipped ? 'skipped-section' : ''} style={{ opacity: isSkipped ? 0.5 : 1 }}>
                                {/* Big Preview */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '50px', height: '50px', borderRadius: '50%',
                                        backgroundColor: currentValue, border: '2px solid #fff',
                                        position: 'relative', overflow: 'hidden'
                                    }}>
                                        <input
                                            type="color"
                                            value={currentValue}
                                            onChange={(e) => updateColor(key, e.target.value)}
                                            style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', cursor: 'pointer' }}
                                        />
                                    </div>
                                    <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>{currentValue}</span>
                                </div>

                                {/* Suggestions */}
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {suggestions.map((hex, index) => (
                                        <button
                                            key={index}
                                            onClick={() => updateColor(key, hex)}
                                            style={{
                                                width: '24px', height: '24px', borderRadius: '50%',
                                                backgroundColor: hex, border: '1px solid var(--border)',
                                                cursor: 'pointer'
                                            }}
                                            title={hex}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorPalette;
