import React, { useEffect, useState } from "react";
import logoMobile from "../../assets/logos/logo-mobile.svg";
import logoWeb from "../../assets/logos/logo-web.svg";
import "./footer.css";

const Footer = () => { 
    
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  const handleLinkClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  const companyLinks = ["About Us", "Contact Us", "Press"];
  const programLinks = [
    "Biodiversity & Ecosystems",
    "Carbon Offset Program",
    "Forest Monitoring",
  ];
  const serviceLinks = ["Community", "FAQ", "Support / Donate"];
  const legalLinks = ["Privacy Policy", "Terms & Conditions", "Return Policy"];

  return (
    <footer className="footer-container">
      <div className="footer-brand">
        <div className="footer-logo">
          <a href="#home" className="logo-footer" onClick={() => handleLinkClick("home")}>
            <img src={isMobile ? logoMobile : logoWeb} alt="Tree Foundation" />
          </a>
        </div>
        <p className="brand-description">
          Every tree we plant and protect today secures a healthier, greener
          world for generations to come.
        </p>
      </div>

      {/* Orta Kısım: Link Grupları */}
      <div className="footer-links-grid">
        <div className="footer-group">
          <h4 className="group-title">Company</h4>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a className="group-link" href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-group">
          <h4 className="group-title">Programs</h4>
          <ul>
            {programLinks.map((link, index) => (
              <li key={index}>
                <a className="group-link" href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-group">
          <h4 className="group-title">Services</h4>
          <ul>
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <a className="group-link" href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-group">
          <h4 className="group-title">Legal</h4>
          <ul>
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a className="group-link" href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Alt Kısım: Sosyal Medya ve Telif Hakkı */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance">
            <i className="fab fa-behance"></i>
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble">
            <i className="fab fa-dribbble"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="footer-copyright">
          <p>© 2026 Copyright, All Right Reserved,</p>
          <p>Made by Banu Ağgün</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
