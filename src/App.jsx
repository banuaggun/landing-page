import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section> 
        <div className="nav-bar">
    <Navbar />
        </div>
    
        <div className="content">
          <Hero />
        </div>
      </section>
    </>
  );
}

export default App;
