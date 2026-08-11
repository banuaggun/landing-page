import React from "react";
import "./programs.css";

const Programs = ({ setView, program }) => {
  const programData = {
    biodiversity: {
      label: "PROGRAM 01",
      title: "Biodiversity & Ecosystems",
      intro:
        "Protecting biodiversity and restoring healthy ecosystems through long-term conservation efforts.",

      heroImage: "/images/programs/biodiversity-hero.jpg",

      sections: [
        {
          title: "Protecting Biodiversity",
          text: "Our biodiversity initiatives focus on protecting species, habitats, and the natural systems that support life.",
        },
        {
          title: "Ecosystem Restoration",
          text: "We support restoration projects designed to strengthen ecosystems and improve their long-term resilience.",
        },
        {
          title: "Working With Communities",
          text: "Local communities are an essential part of successful conservation. Our projects work alongside communities to create sustainable solutions.",
        },
      ],
    },

    carbon: {
      label: "PROGRAM 02",
      title: "Carbon Offset Program",
      intro:
        "Supporting meaningful climate action through responsible carbon offset projects.",

      heroImage: "/images/programs/carbon-hero.jpg",

      sections: [
        {
          title: "Reducing Carbon Emissions",
          text: "Our carbon initiatives support projects that contribute to reducing and balancing greenhouse gas emissions.",
        },
        {
          title: "Verified Projects",
          text: "We focus on transparent and measurable projects with clear environmental impact.",
        },
        {
          title: "Long-Term Climate Impact",
          text: "Our approach is designed to create lasting environmental benefits rather than short-term solutions.",
        },
      ],
    },

    forest: {
      label: "PROGRAM 03",
      title: "Forest Monitoring",
      intro:
        "Using fieldwork, technology, and data to monitor and protect forest ecosystems.",

      heroImage: "/images/programs/forest-hero.jpg",

      sections: [
        {
          title: "Monitoring Forests",
          text: "We monitor forest areas to better understand changes, identify risks, and support conservation efforts.",
        },
        {
          title: "Fieldwork & Data",
          text: "Our teams combine field observations with data and technology to create a clearer picture of forest health.",
        },
        {
          title: "Protecting Forest Ecosystems",
          text: "Monitoring allows us to identify threats early and support effective long-term forest protection.",
        },
      ],
    },
  };

  const currentProgram = programData[program];

  if (!currentProgram) {
    return (
      <section className="program-page">
        <div className="program-page-content">
          <h1>Program not found.</h1>

          <button onClick={() => setView("home")}>Back to Home</button>
        </div>
      </section>
    );
  }

  return (
    <section className="program-page">
      <div className="program-hero">
        <div className="program-hero-content">
          <span className="program-label">{currentProgram.label}</span>

          <h1>{currentProgram.title}</h1>

          <p>{currentProgram.intro}</p>
        </div>

        {currentProgram.heroImage && (
          <div className="program-hero-image">
            <img src={currentProgram.heroImage} alt={currentProgram.title} />
          </div>
        )}
      </div>

      <div className="program-sections">
        {currentProgram.sections.map((section, index) => (
          <section className="program-content-section" key={index}>
            <div className="program-section-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="program-section-content">
              <h2>{section.title}</h2>

              <p>{section.text}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="program-footer">
        <button onClick={() => setView("home")}>Back to Home</button>
      </div>
    </section>
  );
};

export default Programs;
