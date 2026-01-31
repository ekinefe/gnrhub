import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from './context/BrandContext';
// ❌ REMOVED: import emailjs from '@emailjs/browser'; 
import './BrandBook.css';

const BrandPreview = () => {
    const { brandData } = useBrand();
    const { colors, typography, brandName, brandSlogan, skips, assets } = brandData;
    const logos = assets.logos || [];

    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState(null);

    const handleSendToHub = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setSendStatus(null);

        // 1. Basic HTML Construction (Simplified for email)
        const htmlMessage = `
            <h1>Brand Book: ${brandName}</h1>
            <p>Slogan: ${brandSlogan}</p>
            <p>Primary Color: ${colors.primary}</p>
            <p>Font: ${typography.fontFamily}</p>
        `;

        // 2. Send to YOUR Backend
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    brandName: brandName,
                    messageHtml: htmlMessage,
                    recipientEmail: "ekinefegnr@gmail.com"
                })
            });

            if (response.ok) {
                setSendStatus('success');
                setTimeout(() => setSendStatus(null), 3000);
            } else {
                setSendStatus('error');
            }
        } catch (_error) {
            setSendStatus('error');
        } finally {
            setIsSending(false);
        }
    };



    return (
        <div className="brand-service-container" style={{ background: '#525659', minHeight: '100%', padding: '2rem' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                <Link to="/services/brand-book/editor" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                    ← Back to Editor
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        className="btn"
                        onClick={handleSendToHub}
                        disabled={isSending}
                        style={{
                            background: 'transparent',
                            border: '1px solid white',
                            color: 'white',
                            cursor: isSending ? 'not-allowed' : 'pointer',
                            opacity: isSending ? 0.7 : 1
                        }}
                    >
                        {isSending ? 'Sending...' : sendStatus === 'success' ? 'Sent!' : '📨 Send to GNRHUB'}
                    </button>
                    <button className="btn primary-btn" onClick={() => window.print()}>
                        Export to PDF
                    </button>
                </div>
            </nav>

            <div className="paper-sheet">
                <header style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #eee', paddingBottom: '2rem' }}>
                    {!skips.logo && logos.length > 0 && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img src={logos[0].preview} alt="Primary Logo" style={{ height: '80px', objectFit: 'contain' }} />
                        </div>
                    )}
                    {!skips.brandName && (
                        <h1 style={{ fontSize: '3rem', color: colors.primary, fontFamily: typography.fontFamily, margin: 0 }}>
                            {brandName}
                        </h1>
                    )}
                    {!skips.brandSlogan && (
                        <h2 style={{ fontSize: '1.2rem', color: colors.secondaryText || '#555', fontFamily: typography.fontFamily, fontStyle: 'italic' }}>
                            {brandSlogan}
                        </h2>
                    )}
                </header>

                {/* Preview Content Simplified for Brevity (Your existing layout code goes here if you want full preview) */}
                <div style={{ textAlign: 'center', color: '#888' }}>
                    [Preview Content Loaded]
                </div>
            </div>
        </div>
    );
};

export default BrandPreview;