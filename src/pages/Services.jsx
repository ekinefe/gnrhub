import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="container">
      <h1>/services_dashboard</h1>
      <p>Active Micro-SaaS tools deployed on Cloudflare Pages.</p>

      <div className="grid-layout">
        
        {/* Tool 1 */}
        <div className="tech-card">
          <h3>PDF_Converter</h3>
          <p>Client-side image to PDF conversion. Privacy focused.</p>
          <button className="btn secondary-btn">Launch_Tool</button>
        </div>

        {/* Tool 2 */}
        <div className="tech-card">
          <h3>JSON_Formatter</h3>
          <p>Prettify and validate JSON data instantly.</p>
          <button className="btn secondary-btn">Launch_Tool</button>
        </div>

        {/* Tool 3 */}
        <div className="tech-card">
          <h3>QR_Generator</h3>
          <p>Create QR codes for WiFi, URL, or Text.</p>
          <button className="btn secondary-btn">Launch_Tool</button>
        </div>

      </div>
    </div>
  );
}

export default Services;