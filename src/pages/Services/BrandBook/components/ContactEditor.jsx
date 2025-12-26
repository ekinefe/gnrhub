import React from 'react';
import { useBrand } from '../context/BrandContext';
import '../BrandBook.css';

const ContactEditor = () => {
    const {
        brandData,
        toggleSkip,
        updateContactInfo,
        addSocial,
        removeSocial,
        updateSocial
    } = useBrand();

    const isSkipped = brandData.skips.contact;

    return (
        <div className="editor-card">

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>Contact & Socials</h3>
                <label className="skip-checkbox">
                    <input
                        type="checkbox"
                        checked={isSkipped}
                        onChange={() => toggleSkip('contact')}
                        style={{ marginRight: '6px' }}
                    />
                    Skip
                </label>
            </div>

            <div className={isSkipped ? 'skipped-section' : ''}>

                {/* General Contact Info */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Official Email</label>
                        <input
                            type="text" className="text-input"
                            value={brandData.contact.email}
                            onChange={(e) => updateContactInfo('email', e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Website URL</label>
                        <input
                            type="text" className="text-input"
                            value={brandData.contact.website}
                            onChange={(e) => updateContactInfo('website', e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Phone (Optional)</label>
                        <input
                            type="text" className="text-input"
                            value={brandData.contact.phone}
                            onChange={(e) => updateContactInfo('phone', e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Address (Optional)</label>
                        <input
                            type="text" className="text-input"
                            value={brandData.contact.address}
                            onChange={(e) => updateContactInfo('address', e.target.value)}
                        />
                    </div>
                </div>

                <hr className="divider" />

                {/* Social Media List */}
                <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Social Media Links</h4>

                {brandData.socials.map((social) => (
                    <div key={social.id} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <input
                            type="text"
                            className="text-input"
                            style={{ flex: 1 }}
                            placeholder="Platform (e.g. GitHub)"
                            value={social.platform}
                            onChange={(e) => updateSocial(social.id, 'platform', e.target.value)}
                        />
                        <input
                            type="text"
                            className="text-input"
                            style={{ flex: 2 }}
                            placeholder="URL / Handle"
                            value={social.url}
                            onChange={(e) => updateSocial(social.id, 'url', e.target.value)}
                        />
                        <button
                            onClick={() => removeSocial(social.id)}
                            style={{ background: 'none', border: '1px solid var(--border)', color: 'red', cursor: 'pointer', padding: '0 10px' }}
                        >
                            ✕
                        </button>
                    </div>
                ))}

                <button
                    onClick={addSocial}
                    className="btn-select"
                    style={{ borderStyle: 'dashed', marginTop: '0.5rem' }}
                >
                    + ADD SOCIAL LINK
                </button>

            </div>
        </div>
    );
};

export default ContactEditor;