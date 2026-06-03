import { useState } from "react"; 
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

function App() {

  return (
    <>
     
        <div className="nav-bar">
    <Navbar />
        </div>
    <main>
      <section id="home" className="content">
        <Hero />
      </section> 

      <section id="products">
        <Products />
      </section>
    </main>
        
    </>
  );
}

export default App;
