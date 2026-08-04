import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Features from "./components/features/Features";
import Metrics from "./components/metrics/Metrics";
import Reinforce from "./components/reinforce/Reinforce";
import Footer from "./components/footer/Footer";
import Fieldwork from "./components/fieldwork/Fieldwork";
import Highlights from "./components/highlights/Highlights";
import Support from "./components/support/Support";
import Impact from "./components/impact/Impact";
import ActionForm from "./components/common/form/ActionForm";

function App() { 
  const [view, setView] = useState(() => {
    return sessionStorage.getItem("current_view") || "home";
  }); 

  const [selectedFormRegion, setSelectedFormRegion] = useState(() => {
    return sessionStorage.getItem("selected_region") || "amazon";
  });

  const navigateTo = (pageName, regionName = "amazon") => { 
    setView(pageName);
    sessionStorage.setItem("current_view", pageName);

    if (pageName === "action") {
      setSelectedFormRegion(regionName);
      sessionStorage.setItem("selected_region", regionName); 
      window.history.pushState(null, "", "/action");
    } else if (pageName === "home") {
      window.history.pushState(null, "", "/");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-bar">
        <Navbar setView={navigateTo} currentView={view} />
      </div>
      <main>
        {view === "home" ? (
          <section id="home" className="content">
            <Hero setView={navigateTo} />
            <Features />
            <Fieldwork />
            <Highlights />
            <Metrics />
            <Impact setView={navigateTo} />
            <Support />
            <Reinforce /> 
          </section>
        ) : (
          <section id="action-form-section" className="content">
            <ActionForm 
              setView={navigateTo} 
              defaultRegion={sessionStorage.getItem("selected_region") || selectedFormRegion} 
            />
          </section>
        )}

        {/*
        <section id="products">
          <Products />
        </section>
        */}
      </main>
      <Footer setView={navigateTo} />
    </>
  );
}

export default App;
