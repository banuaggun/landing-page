import React, { useState } from "react";
import "./impact.css";
import "./impact-fonts.css";
import WorldMap from "./WorldMap";
import MapCard from "./MapCard";

import amazonPanorama from "../../assets/global-impact/amazon-panorama.jpg";
import madagascarPanorama from "../../assets/global-impact/madagascar-panorama.jpg";
import borneoPanorama from "../../assets/global-impact/borneo-panorama.jpg";

const Impact = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectsData = {
    amazon: {
      title: "Amazon Rainforest",
      story:
        "The Amazon is crucial for global climate stability but faces severe deforestation. Through this initiative, we partner with local communities to plant native trees and restore vital ecosystems.",
      image: amazonPanorama,
      metrics: { time: "3 Years", seeds: "450K", target: "1M" },
    },
    madagascar: {
      title: "Madagascar Ecosystems",
      story:
        "Madagascar has lost over ninety percent of its original forests. We plant endemic trees to rebuild these unique, isolated habitats and protect endangered wildlife through active local community work.",
      image: madagascarPanorama,
      metrics: { time: "2 Years", seeds: "180K", target: "500K" },
    },
    borneo: {
      title: "Borneo Forest Rescue",
      story:
        "Destructive deforestation has heavily fragmented Borneo’s ancient rainforests. We plant native trees along critical river corridors to reconnect wildlife habitats, restore biodiversity, and stop soil erosion.",
      image: borneoPanorama,
      metrics: { time: "5 Years", seeds: "820K", target: "1.5M" },
    },
  };

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-header">
          <h2 className="fonts-header-sub">Our Global Impact</h2>
          <p className="fonts-body">
            We work on the ground across major ecological corridors to restore
            native biodiversity and secure a sustainable green future for
            generations.
          </p>
        </div>

        {activeProject && (
          <MapCard
            project={projectsData[activeProject]}
            onClose={() => setActiveProject(null)}
          />
        )}

        <WorldMap
          setActiveProject={setActiveProject}
          activeProject={activeProject}
        />
      </div>
    </section>
  );
};

export default Impact;
