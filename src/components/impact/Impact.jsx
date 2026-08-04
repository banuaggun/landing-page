import React, { useState } from "react";
import "./impact.css";
import "./impact-fonts.css";
import WorldMap from "./WorldMap";
import MapCard from "./MapCard";
import { projectsData } from "../common/data/ProjectsData";

const Impact = ({ setView }) => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-header">
          <h2 className="fonts-header-sub">
            Our Global Impact
          </h2>
          <p className="fonts-body">
            We work on the ground across major ecological corridors to restore native biodiversity and secure a sustainable green future for generations.
          </p>
        </div>

        {activeProject && (
          <MapCard
            project={projectsData[activeProject]}
            onClose={() => setActiveProject(null)}
            setView={setView} activeKey={activeProject}
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
