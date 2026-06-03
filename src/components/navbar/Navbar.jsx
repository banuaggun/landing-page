import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // mobilde menü kapansın
  }; 

 // Sayfa kaydırıldıkça hangi bölümün ekranda olduğunu yakalayan sistem 🚀
  useEffect(() => {
    // Takip etmek istediğimiz section ID'lerini bir diziye alıyoruz
    const sectionIds = ["home", "products", "solutions", "services", "configure"];
    
    const observers = [];

    const observerOptions = {
      root: null, // Tarayıcı penceresini baz alır
      rootMargin: "-40% 0px -50% 0px", // Ekranın tam ortasına gelen bölümü yakalamak için hassasiyet ayarı
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Eğer o bölüm ekranın ortasındaysa (kesişiyorsa)
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Aktif link state'ini o bölümün ID'si ile güncelle
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Her bir section elementini bulup observer'a kaydediyoruz
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push({ observer, element });
      }
    });

    // Bileşen kapandığında (unmount) hafıza sızıntısını önlemek için temizlik yapıyoruz
    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo" onClick={() => handleLinkClick("home")}>LOGO</a>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a
            href="#products"
            className={activeLink === "products" ? "active" : ""}
            onClick={() => handleLinkClick("products")}
          >
            Products
          </a>
          <a
            href="#solutions"
            className={activeLink === "solutions" ? "active" : ""}
            onClick={() => handleLinkClick("solutions")}
          >
            Solutions
          </a>
          <a
            href="#services"
            className={activeLink === "services" ? "active" : ""}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </a>
          <a
            href="#configure"
            className={activeLink === "configure" ? "active" : ""}
            onClick={() => handleLinkClick("configure")}
          >
            Configure
          </a>
        </div> 
        
      </div>
 {/* Sağ taraf tek bir yerde tanımlı */}
      <div className={`navbar-right ${isOpen ? "mobile-show" : ""}`}>
        <span className="call-center">📞 +888 444 00 00</span>
        <button className="quote-btn">Request a Quote</button>
      </div>
     

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
