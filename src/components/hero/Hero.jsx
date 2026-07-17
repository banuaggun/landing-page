import React from "react";
import { DiamondIcon, RightArrowIcon } from "../icons/Icons.jsx";
import user1 from "../../assets/user-images/user-1.png";
import user2 from "../../assets/user-images/user-2.png";
import user3 from "../../assets/user-images/user-3.png";

import './hero-fonts.css';
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">

        <div className="hero-top-row">
          <div className="hero-text-block">
            <h1 className="hero-title fonts-header">
              Smart Green Future <br /> for Your Legacy
            </h1>
            <p className="hero-subtitle fonts-body">
              Every tree we plant and protect today secures a healthier, greener
              world for generations to come.
            </p>
          </div>

          <div className="floating-badges fonts-body">
            <div className="badge badge-1">
              <span className="text">Biodiverse Ecosystems</span>
              <span className="icon"><DiamondIcon /></span>
            </div>
            <div className="badge badge-2">
              <span className="icon"><DiamondIcon /></span>
              <span className="text">Carbon Offset Potential</span>
            </div>
            <div className="badge badge-3">
              <span className="text">24/7 Forest Monitoring</span>
              <span className="icon"><DiamondIcon /></span>
            </div>
          </div>
        </div>

        <div className="hero-bottom-row">
          <div className="hero-mini-card fonts-body">
            <div className="user-avatars">
              <img src={user3} alt="user" />
              <img src={user2} alt="user" className="overlap" />
              <img src={user1} alt="user" className="overlap" />
            </div>
            <p className="card-text hero-subtitle">
              Working together as one global community for a big forest impact.
            </p>
          </div>

          <div className="hero-cta">
            <button className="hero-btn fonts-body">
              <span>Let's Save the Future</span>{" "}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
