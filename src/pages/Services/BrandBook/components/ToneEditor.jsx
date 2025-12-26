import React from 'react';
import { useBrand } from '../context/BrandContext';
import '../BrandBook.css';

const ToneEditor = () => {
    const { brandData, updateVoice, toggleSkip } = useBrand();
    const isSkipped = brandData.skips.voice;

    return (
        <div className="editor-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>Tone of Voice</h3>
                <label className="skip-checkbox">
                    <input
                        type="checkbox"
                        checked={isSkipped}
                        onChange={() => toggleSkip('voice')}
                        style={{ marginRight: '6px' }}
                    />
                    Skip
                </label>
            </div>

            <div className={isSkipped ? 'skipped-section' : ''}>
                <p className="section-desc">Define how your brand speaks to its audience.</p>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                        Keywords (comma separated)
                    </label>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="e.g. Friendly, Professional, Trustworthy"
                        value={brandData.voice.keywords}
                        onChange={(e) => updateVoice('keywords', e.target.value)}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '5px', display: 'block' }}>
                        These will appear as tags in the brand book.
                    </small>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                        Voice Description
                    </label>
                    <textarea
                        className="text-input"
                        rows="4"
                        placeholder="Describe your writing style..."
                        value={brandData.voice.description}
                        onChange={(e) => updateVoice('description', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToneEditor;