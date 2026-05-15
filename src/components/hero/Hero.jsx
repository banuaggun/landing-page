import React from "react";
import "./hero.css";
import VisionCard from "../heroCards/vision-card/VisionCard";
import GoalCard from "../heroCards/goal-card/GoalCard";
import ServiceCard from "../heroCards/service-card/ServiceCard";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="hero-left">
          <VisionCard />
        </div>
        <div className="hero-right">
          <GoalCard />
          <ServiceCard />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
