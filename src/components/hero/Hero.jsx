import React from "react";
import "./hero.css";  
import { DiamondIcon, RightArrowIcon } from "../icons/Icons.jsx"; 
import user1 from "../../assets/user-images/user-1.png";
import user2 from "../../assets/user-images/user-2.png";
import user3 from "../../assets/user-images/user-3.png"; 

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        
        <div className="hero-wrapper">
          <div className="hero-wrapper-content">
            <h1 className="hero-title">
              Smart Green Future <br/> for Your Legacy
            </h1>
            <p className="hero-subtitle">
             Every tree we plant and protect today secures a healthier, greener world for generations to come.
            </p>
          </div>

          <div className="floating-badges">
            <div className="badge badge-1">
              <span className="text">Biodiverse Ecosystems</span>
              <span className="icon">
                <DiamondIcon />
              </span>
            </div>
            <div className="badge badge-2">
              <span className="icon">
                <DiamondIcon />
              </span>
              <span className="text">Carbon Offset Potential</span>
            </div>
            <div className="badge badge-3">
              <span className="text">24/7 Forest Monitoring</span>
              <span className="icon">
                <DiamondIcon />
              </span>
            </div>
          </div>
        </div>

<div className="hero-live">
 <div className="hero-mini-card">
            <div className="user-avatars">
              <img src={user3} alt="user" />
              <img
                src={user2}
                alt="user"
                className="overlap"
              />
              <img
                src={user1}
                alt="user"
                className="overlap"
              />
            </div>
            <p className="card-text hero-subtitle">
              Working together as one global community for a big forest impact.
            </p>
          </div>
        <div className="hero-cta">
          <div className="hero-cta-wrapper">
            <button className="hero-btn">
              <span className="hero-subtitle">Let's Protect our green future</span>   <RightArrowIcon /></button>
          
          </div>

          
        </div>
</div>
      
      </div>
    </div>
  );
};

export default Hero;
