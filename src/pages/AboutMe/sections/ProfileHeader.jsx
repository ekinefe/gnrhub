import React from 'react';

import profileImg from '../../../assets/images/profile.jpg';
import cvPdf from '../../../assets/docs/cv.pdf';

const ProfileHeader = () => {
    return (
        <section style={{
            borderBottom: '1px solid var(--border)',
            paddingBottom: '3rem',
            marginBottom: '3rem',
            display: 'flex',
            gap: '2rem',
            alignItems: 'start',
            flexWrap: 'wrap'
        }}>
            {/* Profile Image */}
            <img
                src={profileImg}
                alt="Ekin Efe Gungor"
                style={{
                    width: '140px',
                    height: '140px',
                    border: '2px solid var(--accent)',
                    padding: '5px',
                    objectFit: 'cover'
                }}
            />

            <div style={{ flex: 1 }}>
                <h1 style={{ marginBottom: '0.5rem' }}>EKIN_EFE_GUNGOR</h1>
                <p style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    &gt; CS_STUDENT | AI_&_Data_Science
                </p>
                <p style={{ maxWidth: '700px', marginBottom: '1.5rem' }}>
                    I build practical tools across web, data, and embedded systems—everything from
                    Morse code hardware to Linux automation scripts. Currently studying AI & Data Science
                    in Warsaw, Poland.
                </p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {['Warsaw-PL', '|', 'English (C1)', '|', 'Turkish (Native)', '|', 'Polish (A1)'].map((tag, index) => (
                        <span key={index} className="badge" style={{ marginBottom: 0, border: tag === '|' ? 'none' : '' }}>{tag}</span>
                    ))}
                </div>

                <div className="btn-group">
                    <a href="mailto:ekinefegnr@gmail.com" className="btn primary-btn">Email_Me</a>
                    <a href="https://www.linkedin.com/in/ekin-efe-gungor-18336a20a/" target="_blank" rel="noreferrer" className="btn secondary-btn">LinkedIn</a>
                    <a href="https://github.com/ekinefe" target="_blank" rel="noreferrer" className="btn secondary-btn">GitHub</a>
                    <a href={cvPdf} target="_blank" className="btn secondary-btn">Download_CV</a>
                </div>
            </div>
        </section>
    );
};

export default ProfileHeader;
