import React from 'react';
import { Link } from 'react-router-dom';
import BrandNameInput from './components/BrandNameInput';
import ColorPalette from './components/ColorPalette';
import TypographySelector from './components/TypographySelector';
import LogoUploader from './components/LogoUploader'; // <--- IMPORT MISSING COMPONENT
import CompanyProfile from './components/CompanyProfile'; // <--- IMPORT NEW COMPONENT
import './BrandBook.css';

const BrandEditor = () => {
    return (
        <div className="brand-service-container">
            {/* ... Header ... */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', margin: 0 }}>Brand Editor</h1>
                <Link to="/services/brand-book">
                    <button className="btn secondary-btn">Back</button>
                </Link>
            </div>

            <BrandNameInput />
            <LogoUploader />
            <ColorPalette />
            <TypographySelector />

            {/* NEW SECTION ADDED HERE */}
            <CompanyProfile />

            <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '3rem' }}>
                <Link to="/services/brand-book/preview">
                    <button className="btn primary-btn" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                        Generate Brand Book
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BrandEditor;