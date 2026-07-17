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

function App() {
  return (
    <>
      <div className="nav-bar">
        <Navbar />
      </div>
      <main>
        <section id="home" className="content">
          <Hero />
          <Features /> 
          <Fieldwork /> 
          <Highlights />
          <Metrics /> 
          <Reinforce/>
        </section>

        <section id="products">
          <Products />
        </section>
      </main> 
      <Footer/>
    </>
  );
}

export default App;
