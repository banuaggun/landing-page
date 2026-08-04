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

  const handleHomeNavigation = (linkId, e) => {
    e.preventDefault();

    if (setView) {
      setView("home");
    }

    if (linkId === "home") {
      window.history.pushState(null, "", "/");
    } else {
      window.history.pushState(null, "", `#${linkId}`);
    }

    setTimeout(() => {
      const element = document.getElementById(linkId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    setActiveLink(linkId);
    setIsOpen(false);
    setDropdownOpen(false);
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
    const sectionIds = [
      "home",
      "about",
      "biodiversity",
      "carbon",
      "forest",
      "contact",
    ];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (["biodiversity", "carbon", "forest"].includes(entry.target.id)) {
            setActiveLink("programs");
          } else {
            setActiveLink(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push({ observer, element });
      }
    });

    return () => {
      observers.forEach(({ observer, element }) => observer.unobserve(element));
    };
  }, [currentView]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-content">
        <div className="nav-left-group fonts-body">
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleHomeNavigation("home", e)}>
            <img src={isMobile ? logoMobile : logoWeb} alt="Tree Foundation" />
          </a>

          <div className="desktop-menu-links">
            <a
              href="#home"
              className={activeLink === "home" ? "active" : ""}
              onClick={(e) => handleHomeNavigation("home", e)}>
              Home
            </a>
            <a
              href="#about"
              className={activeLink === "about" ? "active" : ""}
              onClick={(e) => handleHomeNavigation("about", e)}>
              About Us
            </a>

            <div
              className={`desktop-dropdown-wrapper ${dropdownOpen ? "show" : ""}`}
              onMouseEnter={() => !isMobile && setDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setDropdownOpen(false)}>
              <a
                href="#programs"
                className={`dropdown-trigger ${activeLink === "programs" ? "active" : ""}`}>
                Programs{" "}
                <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>
                  <CaretDown />
                </span>
              </a>
              <div className="desktop-dropdown-menu">
                <a
                  href="#biodiversity"
                  onClick={(e) => handleHomeNavigation("programs", e)}>
                  Biodiversity & Ecosystems
                </a>
                <a
                  href="#carbon"
                  onClick={(e) => handleHomeNavigation("programs", e)}>
                  Carbon Offset Program
                </a>
                <a
                  href="#forest"
                  onClick={(e) => handleHomeNavigation("programs", e)}>
                  Forest Monitoring
                </a>
              </div>
            </div>

            <a
              href="#contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={(e) => handleHomeNavigation("contact", e)}>
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
              href="#home"
              className={activeLink === "home" ? "active" : ""}
              onClick={(e) => handleHomeNavigation("home", e)}>
              Home
            </a>
            <a
              href="#about"
              className={activeLink === "about" ? "about" : ""}
              onClick={(e) => handleHomeNavigation("about", e)}>
              About Us
            </a>

            <div className="mobile-dropdown-wrapper">
              <a
                href="#programs"
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
                  href="#biodiversity"
                  onClick={(e) => handleHomeNavigation("programs", e)}>
                  Biodiversity & Ecosystems
                </a>
                <a
                  href="#carbon"
                  onClick={(e) => handleHomeNavigation("programs", e)}>
                  Carbon Offset Program
                </a>
                <a
                  href="#forest"
                  onClick={(e) => handleHomeNavigation("programs", e)}>
                  Forest Monitoring
                </a>
              </div>
            </div>
            <a
              href="#contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={(e) => handleHomeNavigation("contact", e)}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
