import React from "react"; 
import './modal.css'; 
import './action-form.css'; 
import './action-form-fonts.css'; 
import logoWeb from "../../../assets/logos/logo-web.svg";
import logoMobile from "../../../assets/logos/logo-mobile.svg";

const Certificate = ({ formData, treeCount, region, co2Savings, projectsData, onClose }) => {
  
  const generateStaticId = () => {
    const nameStr = formData.name || "Global Guardian";
    let hash = 0;
    for (let i = 0; i < nameStr.length; i++) {
      hash = nameStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const finalNumber = Math.abs(hash % 900000) + 100000;
    return `GRN-${finalNumber}`;
  };

  const certificateId = generateStaticId();

  const formattedDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('certificate-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="certificate-modal-overlay" onClick={handleOverlayClick}>
      <div className="certificate-figma-window fade-in" onClick={(e) => e.stopPropagation()}>
        
        <div className="certificate-top-bar">
          <div className="top-bar-left-indicator">
            <span className="live-dot"></span> PROJECT MANIFESTO CANVASSING
          </div>
          <div className="certificate-actions-row">
            <button onClick={() => window.print()} className="cert-action-btn print-btn fonts-body">
              Print / Save PDF ↗
            </button>
            <button onClick={onClose} className="cert-action-btn close-btn fonts-body">
              Return to Surface
            </button>
          </div>
        </div>

        <div className="certificate-scroll-body">
          <div className="certificate-display-area">
            <div className="certificate-frame">
              <div className="certificate-inner-border">
                
                <div className="certificate-logo-wrapper">
                  <div className="certificate-badge-ring"></div>
                  <picture className="certificate-dynamic-logo">
                    <source media="(min-width: 769px)" srcSet={logoWeb} />
                    <img 
                      src={logoMobile} 
                      alt="Green Foundation Official Logo" 
                      className="cert-logo-img" 
                    />
                  </picture>
                </div>

                <h1 className="certificate-title fonts-header">Ecosystem Guardian Certificate</h1>
                <div className="certificate-divider-line"></div>
                <p className="certificate-meta fonts-body">This digital decree solemnly affirms that</p>
                
                <h2 className="guardian-celebrated-name fonts-header">{formData.name}</h2>
                
                <p className="certificate-declaration fonts-body">
                  has authorized a vital ecological deployment in the <strong className="cert-highlight">{projectsData[region].title}</strong>. 
                  By securing <strong className="cert-highlight">{treeCount} units</strong> of native flora, this commitment commands an annual offset of 
                  <strong className="cert-highlight"> -{co2Savings}kg CO₂</strong>, establishing a permanent legacy for the planet's biome.
                </p>

                <div className="certificate-footer">
                  <div className="cert-footer-block">
                    <span className="cert-label fonts-header">Deployment Date</span>
                    <span className="cert-date fonts-body">{formattedDate}</span>
                  </div>
                  
                  <div className="cert-footer-block cert-signature-block">
                    <span className="cert-label fonts-header">Authorized Signatory</span>
                    <span className="cert-signature fonts-body">Green Foundation</span>
                  </div>

                  <div className="cert-footer-block">
                    <span className="cert-label fonts-header">Manifesto ID</span>
                    <span className="cert-id fonts-body">{certificateId}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certificate;
