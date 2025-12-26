import React from 'react';
import { useBrand } from '../context/BrandContext';
import '../BrandBook.css';

const CompanyProfile = () => {
    const {
        brandData,
        updateCompany,
        toggleSkip,
        addTeamMember,
        removeTeamMember,
        updateTeamMember
    } = useBrand();

    // 1. Get separate skip states for Mission and Vision
    const isMissionSkipped = brandData.skips.mission;
    const isVisionSkipped = brandData.skips.vision;
    const isTeamSkipped = brandData.skips.team;

    // Helper style for the label rows
    const headerRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
    };

    return (
        <div className="editor-card">

            <h3 style={{ marginBottom: '1.5rem' }}>Company Profile</h3>

            {/* === MISSION STATEMENT (Independent Skip) === */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={headerRowStyle}>
                    <label style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>Mission Statement</label>
                    <label className="skip-checkbox">
                        <input
                            type="checkbox"
                            checked={isMissionSkipped}
                            onChange={() => toggleSkip('mission')}
                            style={{ marginRight: '6px' }}
                        />
                        Skip Mission
                    </label>
                </div>

                <div className={isMissionSkipped ? 'skipped-section' : ''}>
                    <textarea
                        value={brandData.company.mission}
                        onChange={(e) => updateCompany('mission', e.target.value)}
                        className="text-input"
                        rows="3"
                        placeholder="e.g. To organize the world's information..."
                        disabled={isMissionSkipped}
                    />
                </div>
            </div>

            {/* === VISION STATEMENT (Independent Skip) === */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={headerRowStyle}>
                    <label style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>Vision Statement</label>
                    <label className="skip-checkbox">
                        <input
                            type="checkbox"
                            checked={isVisionSkipped}
                            onChange={() => toggleSkip('vision')}
                            style={{ marginRight: '6px' }}
                        />
                        Skip Vision
                    </label>
                </div>

                <div className={isVisionSkipped ? 'skipped-section' : ''}>
                    <textarea
                        value={brandData.company.vision}
                        onChange={(e) => updateCompany('vision', e.target.value)}
                        className="text-input"
                        rows="3"
                        placeholder="e.g. A computer on every desk..."
                        disabled={isVisionSkipped}
                    />
                </div>
            </div>

            {/* === TEAM MEMBERS === */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                    <h3>5. Team Members</h3>
                    <label className="skip-checkbox">
                        <input
                            type="checkbox"
                            checked={isTeamSkipped}
                            onChange={() => toggleSkip('team')}
                            style={{ marginRight: '6px' }}
                        />
                        Skip Team
                    </label>
                </div>

                <div className={isTeamSkipped ? 'skipped-section' : ''}>

                    {/* Team List */}
                    {brandData.team.map((member, index) => (
                        <div key={member.id} style={{
                            background: 'var(--bg-dark)',
                            border: '1px solid var(--border)',
                            padding: '1.5rem',
                            marginBottom: '1rem',
                            position: 'relative'
                        }}>
                            {/* Header: Name + Remove Button */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h4 style={{ margin: 0, color: 'var(--accent)' }}>Member #{index + 1}</h4>
                                <button
                                    onClick={() => removeTeamMember(member.id)}
                                    style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '0.8rem' }}
                                >
                                    REMOVE ✕
                                </button>
                            </div>

                            {/* Inputs Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <input
                                    type="text"
                                    className="text-input"
                                    placeholder="Full Name"
                                    value={member.name}
                                    onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="text-input"
                                    placeholder="Job Title"
                                    value={member.title}
                                    onChange={(e) => updateTeamMember(member.id, 'title', e.target.value)}
                                />
                            </div>

                            <textarea
                                className="text-input"
                                rows="3"
                                placeholder="Short Story / Bio..."
                                value={member.bio}
                                onChange={(e) => updateTeamMember(member.id, 'bio', e.target.value)}
                                style={{ marginBottom: '1rem' }}
                            />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input
                                    type="text"
                                    className="text-input"
                                    placeholder="Contact (e.g. Email)"
                                    value={member.contact || ''}
                                    onChange={(e) => updateTeamMember(member.id, 'contact', e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="text-input"
                                    placeholder="Link 1 (e.g. LinkedIn)"
                                    value={member.link1}
                                    onChange={(e) => updateTeamMember(member.id, 'link1', e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="text-input"
                                    placeholder="Link 2 (e.g. Website)"
                                    value={member.link2}
                                    onChange={(e) => updateTeamMember(member.id, 'link2', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addTeamMember}
                        className="btn-select"
                        style={{ borderStyle: 'dashed', marginTop: '1rem' }}
                    >
                        + ADD TEAM MEMBER
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CompanyProfile;