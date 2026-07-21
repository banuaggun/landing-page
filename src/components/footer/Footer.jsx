import React, { useEffect, useState } from "react";
import logoMobile from "../../assets/logos/logo-mobile.svg";
import logoWeb from "../../assets/logos/logo-web.svg";
import "./footer.css";
import "./footer-fonts.css";
import { Behance, Dribbble, Github, LinkedIn } from "../icons/Icons";

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
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <a
              href="#home"
              className="logo-footer"
              onClick={() => handleLinkClick("home")}>
              <img
                src={isMobile ? logoMobile : logoWeb}
                alt="Tree Foundation"
              />
            </a>
          </div>
          <p className="brand-description fonts-body">
            Every tree we plant and protect today secures a healthier, greener
            world for generations to come.
          </p>
        </div>

        {/* Link Grupları */}
        <div className="footer-links-grid">
          <div className="footer-group">
            <h4 className="group-title fonts-body">Company</h4>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="group-link fonts-header-sub"
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-group">
            <h4 className="group-title fonts-body">Programs</h4>
            <ul>
              {programLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="group-link fonts-header-sub"
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-group">
            <h4 className="group-title fonts-body">Services</h4>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="group-link fonts-header-sub"
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-group">
            <h4 className="group-title fonts-body">Legal</h4>
            <ul>
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="group-link fonts-header-sub"
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright fonts-body">
          <p>
            © 2026 Copyright, All Right Reserved. Made by{" "}
            <a
              href="https://portfolio-banuaggun.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="copyright-link"
              aria-label="Banu Ağgün Behance Profile">
              Banu Ağgün
            </a>
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.behance.net/banuaggun"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance">
            <span>
              <Behance />
            </span>
          </a>
          <a
            href="https://dribbble.com/banuaggun"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble">
            <Dribbble />
          </a>
          <a
            href="https://github.com/banuaggun"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/banuaggun/?locale=en_US"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
