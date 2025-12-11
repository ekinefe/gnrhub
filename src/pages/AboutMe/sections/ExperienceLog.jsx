import React from 'react';

const ExperienceLog = () => {
    return (
        <>
            {/* PROFESSIONAL EXPERIENCE */}
            <div className="tech-card">
                <h2>/prof_experience</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Nobel Learning PBC</h3>
                    <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Intern | 2024–2025</span>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        • Built LMS-ready modules and interactive content.<br />
                        • Partnered with instructors to scope features and ship prototypes.<br />
                        • Integrated modern learning tools into course workflows.<br />
                        • Collected feedback and iterated to improve usability.
                    </p>
                </div>
            </div>

            {/* OTHER EXPERIENCE */}
            <div className="tech-card" style={{ gridRow: 'span 2' }}>
                <h2>/experience_log</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Benefit Bike</h3>
                        <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Bike Technician | 2024–2025</span>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            • Diagnose mechanical issues and complete same-day repairs.<br />
                            • Communicate repair options, costs, and timelines.<br />
                            • Own the workflow end-to-end–from intake to pickup.<br />
                            • Prepare/store bikes to preserve condition.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Freelance</h3>
                        <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Photographer & Tech Consultant | 2019–Present</span>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            • Managed portrait, event, and commercial shoots.<br />
                            • Built a terminal utility to launch editing workflows.<br />
                            • Advised clients on asset management.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Turkish Aeronautical Assoc</h3>
                        <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>PR/Social Media Manager | 2016–2020</span>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            • Led a 5-member youth team to plan national events.<br />
                            • Produced/published cross-channel social content.<br />
                            • Liaised with local media to increase visibility.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0' }}>Private Tümevarım HS</h3>
                        <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>Photographer | 2017–2020</span>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            • Delivered high-quality sports and event photography.<br />
                            • Collaborated with staff on run-of-show.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ExperienceLog;
