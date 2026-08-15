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

import About from "./pages/about/About";
import Contact from "./pages/contact/ContactPage";
import Programs from "./pages/programs/Programs";

function App() {
  const [view, setView] = useState(() => {
    return sessionStorage.getItem("current_view") || "home";
  });

  const [program, setProgram] = useState(() => {
    return sessionStorage.getItem("current_program") || null;
  });

  const [selectedFormRegion, setSelectedFormRegion] = useState(() => {
    return sessionStorage.getItem("selected_region") || "amazon";
  });

  const navigateTo = (pageName, regionName = "amazon", programName = null) => {
    setView(pageName);
    sessionStorage.setItem("current_view", pageName);

    if (pageName === "programs") {
      setProgram(programName);
      sessionStorage.setItem("current_program", programName);
      window.history.pushState(null, "", `/programs/${programName}`);
    } else if (pageName === "action") {
      setSelectedFormRegion(regionName);
      sessionStorage.setItem("selected_region", regionName);
      window.history.pushState(null, "", "/action");
    } else if (pageName === "home") {
      window.history.pushState(null, "", "/");
    } else if (pageName === "about") {
      window.history.pushState(null, "", "/about");
    } else if (pageName === "contact") {
      window.history.pushState(null, "", "/contact");
    } else {
      window.history.pushState(null, "", `/${pageName}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-bar">
        <Navbar setView={navigateTo} currentView={view} />
      </div>

      <main>
        {view === "home" && (
          <section id="home" className="content">
            <Hero setView={navigateTo} />
            <Features />
            <Fieldwork />
            <Highlights />
            <Metrics />
            <Impact setView={navigateTo} />
            <Support />
            <Reinforce setView={navigateTo} />
          </section>
        )}

        {view === "action" && (
          <section id="action-form-section" className="content">
            <ActionForm
              setView={navigateTo}
              defaultRegion={
                sessionStorage.getItem("selected_region") || selectedFormRegion
              }
            />
          </section>
        )}

        {view === "about" && (
          <section id="about" className="content">
            <About setView={navigateTo} />
          </section>
        )}

        {view === "programs" && (
          <section id="programs" className="content">
            <Programs setView={navigateTo} program={program} />
          </section>
        )}

        {view === "contact" && (
          <section id="contact" className="content">
            <Contact setView={navigateTo} />
          </section>
        )}
      </main>

      <Footer setView={navigateTo} />
    </>
  );
}

export default App;
