import React, { useState, useEffect, useRef } from "react";
import logoMobile from "../../assets/logos/logo-mobile.svg";
import logoWeb from "../../assets/logos/logo-web.svg";
import "./navbar.css";
import { CaretDown } from "../icons/Icons";

const Navbar = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navbarRef = useRef(null);
  useEffect(() => {
    if (currentView === "action") {
      setActiveLink("");
    } else if (currentView === "home" && activeLink === "") {
      setActiveLink("home");
    }
  }, [currentView]); 


 
const handleNavigation = (linkId, e) => {
  e.preventDefault();

  if (setView) {
    setView(linkId);
  }

  setActiveLink(
    ["biodiversity", "carbon", "forest"].includes(linkId)
      ? "programs"
      : linkId
  );

  setIsOpen(false);
  setDropdownOpen(false);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []); 

  useEffect(() => {
  if (currentView === "action") {
    setActiveLink("");
  } else if (
    ["biodiversity", "carbon", "forest"].includes(currentView)
  ) {
    setActiveLink("programs");
  } else {
    setActiveLink(currentView);
  }
}, [currentView]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-content">
        <div className="nav-left-group fonts-body">
          <a
            href="/"
            className="logo"
            onClick={(e) => handleNavigation("home", e)}>
            <img src={isMobile ? logoMobile : logoWeb} alt="Tree Foundation" />
          </a>

          <div className="desktop-menu-links">
            <a
              href="/"
              className={activeLink === "home" ? "active" : ""}
              onClick={(e) => handleNavigation("home", e)}>
              Home
            </a>
            <a
              href="/about"
              className={activeLink === "about" ? "active" : ""}
              onClick={(e) => handleNavigation("about", e)}>
              About Us
            </a>

            <div
              className={`desktop-dropdown-wrapper ${dropdownOpen ? "show" : ""}`}
              onMouseEnter={() => !isMobile && setDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setDropdownOpen(false)}>
              <a
                href="/programs"
                className={`dropdown-trigger ${activeLink === "programs" ? "active" : ""}`}>
                Programs{" "}
                <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>
                  <CaretDown />
                </span>
              </a>
              <div className="desktop-dropdown-menu">
                <a
                  href="/programs/biodiversity"
                  onClick={(e) =>
                    handleNavigation("biodiversity", e)
                  }>
                  Biodiversity & Ecosystems
                </a>
                <a
                  href="/programs/carbon"
                  onClick={(e) => handleNavigation("carbon", e)}>
                  Carbon Offset Program
                </a>
                <a
                  href="/programs/forest"
                  onClick={(e) => handleNavigation("forest", e)}>
                  Forest Monitoring
                </a>
              </div>
            </div>

            <a
              href="/contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={(e) => handleNavigation("contact", e)}>
              Contact Us
            </a>
          </div>
        </div>

        <div className="nav-right-group">
          <a href="tel:4440000" className="call-center">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.42 2.33.64 3.58.64a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.22 2.46.64 3.58a1 1 0 01-.27 1.11l-2.22 2.2z" />
            </svg>
            <span className="fonts-body">444 0 000</span>
          </a>

          <button
            className="quote-btn fonts-body"
            onClick={() => setView && setView("action")}>
            Get Started
          </button>

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => {
              setIsOpen(!isOpen);
              setDropdownOpen(false);
            }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
          <div className="mobile-nav-links fonts-body">
            <a
              href="/"
              className={activeLink === "home" ? "active" : ""}
              onClick={(e) => handleNavigation("home", e)}>
              Home
            </a>
            <a
              href="/about"
              className={activeLink === "about" ? "about" : ""}
              onClick={(e) => handleNavigation("about", e)}>
              About Us
            </a>

            <div className="mobile-dropdown-wrapper">
              <a
                href="/programs"
                className="mobile-dropdown-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}>
                Programs{" "}
                <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>
                  <CaretDown />
                </span>
              </a>
              <div
                className={`mobile-dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <a
                  href="/programs/biodiversity"
                  onClick={(e) =>
                    handleNavigation("biodiversity", e)
                  }>
                  Biodiversity & Ecosystems
                </a>
                <a
                  href="/programs/carbon"
                  onClick={(e) => handleNavigation("carbon", e)}>
                  Carbon Offset Program
                </a>
                <a
                  href="/programs/forest"
                  onClick={(e) => handleNavigation("forest", e)}>
                  Forest Monitoring
                </a>
              </div>
            </div>
            <a
              href="/contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={(e) => handleNavigation("contact", e)}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
