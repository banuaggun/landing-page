import React from 'react';
import exploreIcon from '../../assets/global-impact/explore-icon.svg';
import { Map } from './Map'; 
import './impact.css';

const WorldMap = ({ setActiveProject }) => {
  return (
    <div className="map-wrapper"> 
      <div className="map-area">
  
        <Map className="map-image" onPinClick={setActiveProject} /> 
      </div>

      <div className="mobile-map-guide">
        <div className="guide-icon-wrapper">
          <img src={exploreIcon} alt="Explore" />
        </div>
        <p>
          <strong>Explore Projects:</strong> Tap on any pin to view forest details.
        </p>
      </div>
    </div>
  );
};

export default WorldMap;
