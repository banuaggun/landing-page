import React from "react";
import "./reinforce.css";
import "./reinforce-fonts.css";
import bgImage from "../../assets/bg.png";

const Reinforce = () => {
  return (
    <div className="reinforce-section">
      <div className="reinforce-image-side">
        <img src={bgImage} alt="Forest Background" className="reinforce-img" />
      </div>
      <div className="reinforce-card">
        <h1 className="reinforce-title fonts-header">
            Together, We Grow Stronger
        </h1>

        <p className="reinforce-text fonts-body">
          Your support helps us plant, protect, and monitor forests 24/7. Together, we empower communities, safeguard biodiversity, and create a greener legacy for the future.
        </p>

        <button
          className="reinforce-btn">
          Join the Movement
        </button>
      </div>
    </div>
  );
};

export default Reinforce;
