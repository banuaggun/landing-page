import React from "react";
import TitleBadge from "../common/TitleBadge";
import "./fieldwork-fonts.css";
import "./fieldwork.css";

const FieldworkIcon = () => (
  <div className="fieldwork-icon-wrapper">
    <div className="circle-placeholder circle-bg"></div>
    <div className="circle-placeholder circle-front"></div>
  </div>
);

const Fieldwork = () => {
  return (
    <section className="fieldwork-section">
      <div className="fieldwork-container">
        <div className="fieldwork-header-block">
          <TitleBadge>OUR FIELDWORK</TitleBadge>
          <h2 className="fieldwork-main-title fonts-header-sub">
            We work on the ground to restore nature and secure a sustainable future
          </h2>
        </div>

        <div className="fieldwork-items-list">
          <div className="fieldwork-item">
            <div className="fieldwork-meta-row">
              <FieldworkIcon />
            </div>

            <div className="fieldwork-item-content">
              <h3 className="fieldwork-item-title fonts-header-sub">
                Seedling Planting
              </h3>
              <p className="fieldwork-item-text fonts-body">
                Carefully selecting native tree species to rebuild damaged forest soils and support local wildlife ecosystems.
              </p>
            </div>
          </div>

          <div className="fieldwork-item">
            <div className="fieldwork-meta-row">
              <FieldworkIcon />
              <div className="fieldwork-item-badge">
                <TitleBadge>CRITICAL</TitleBadge>
              </div>
            </div>
            <div className="fieldwork-item-content">
              <h3 className="fieldwork-item-title fonts-header-sub">
                Wildfire Prevention
              </h3>
              <p className="fieldwork-item-text fonts-body">
                Creating smart firebreaks and using satellite tech to detect risks early and protect existing green zones.
              </p>
            </div>
          </div>

          <div className="fieldwork-item">
            <div className="fieldwork-meta-row">
              <FieldworkIcon />
            </div>
            <div className="fieldwork-item-content">
              <h3 className="fieldwork-item-title fonts-header-sub">
                Soil Regeneration
              </h3>
              <p className="fieldwork-item-text fonts-body">
                Restoring nutrients to depleted lands to ensure the newly planted trees can grow healthy for decades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fieldwork;
