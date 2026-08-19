import React from "react";
import "./programs.css";
import "./program-fonts.css";
import Reinforce from "../../components/reinforce/Reinforce";

const Programs = ({setview}) => {

  return (
    <main className="program-page">
      <div className="program-wrapper">
        <div className="program-label fonts-header">Our programs</div>

        <div className="program-content">
          <div className="program-text-block">
            <h5 className="program-header fonts-header-sub">
              Protecting nature,
              <br />
              creating a better future
            </h5>
            <p className="program-body fonts-body">
              Our programs focus on protecting biodiversity, restoring
              ecosystems, supporting climate action, and creating lasting
              environmental impact.
            </p>
          </div>
        </div>
      </div> 

      <Reinforce setView={setView} />
      
    </main>
  );
};

export default Programs;
