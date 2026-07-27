import React from "react";
import closeIcon from "../../assets/global-impact/close-icon.svg";
import dragIcon from "../../assets/global-impact/drag-icon.svg";

const MapCard = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="map-card-wrapper">
      <div className="map-card-image-area">
        <img src={project.image} alt={project.title} className="map-card-img" />

        <button
          className="map-card-close-btn"
          onClick={onClose}
          aria-label="Close">
          <img src={closeIcon} alt="Close" />
        </button>

        <div className="map-card-pan-icon">
          <img src={dragIcon} alt="Drag to panorama" />
        </div>
      </div>

      <div className="map-card-area">
        <div className="map-card-content">
          <h3 className="fonts-header-sub map-card-title">{project.title}</h3>
          <p className="fonts-body map-card-story">{project.story}</p>

          <div className="map-card-metrics">
            <div className="map-card-item">
              <p className="map-card-label fonts-header-sub">Time</p> 
              <div className="map-card-border"></div>
              <h3 className="map-card-value fonts-header">
                {project.metrics.time}
              </h3>
            </div>
            <div className="map-card-item">
              <p className="map-card-label fonts-header-sub">Seeds</p> 
              <div className="map-card-border"></div>
              <h3 className="map-card-value fonts-header">
                {project.metrics.seeds}
              </h3>
            </div>
            <div className="map-card-item">
              <p className="map-card-label fonts-header-sub">Target</p> 
              <div className="map-card-border"></div>
              <h3 className="map-card-value fonts-header">
                {project.metrics.target}
              </h3>
            </div>
          </div>
        </div>

        <button className="map-card-action-btn">Plant a Tree Here</button>
      </div>
    </div>
  );
};

export default MapCard;
