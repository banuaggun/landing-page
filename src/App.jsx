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
import ActionForm from "./components/common/ActionForm";

function App() {
  const [view, setView] = useState("home");

  const navigateTo = (pageName) => {
    setView(pageName);

    if (pageName === "action") {
      window.history.pushState(null, "", "/action");
    } else if (pageName === "home") {
      window.history.pushState(null, "", "/");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-bar">
        <Navbar setView={navigateTo} />
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
            <ActionForm setView={navigateTo} />
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
