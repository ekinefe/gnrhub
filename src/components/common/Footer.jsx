import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Logo / Brand */}
                <div className="footer-logo">
                    GNRHUB_
                </div>

                {/* Social / External Links */}
                <div className="footer-links">
                    <a href="https://github.com/ekinefe" target="_blank" rel="noopener noreferrer">/github</a>
                    <a href="https://linkedin.com/in/ekinefe" target="_blank" rel="noopener noreferrer">/linkedin</a>
                    <a href="mailto:ekinefegungor@gmail.com">/contact</a>
                </div>

                {/* Copyright */}
                <div className="footer-copy">
                    © {currentYear} EKIN EFE GUNGOR
                </div>
            </div>
        </footer>
    );
};

export default Footer;
