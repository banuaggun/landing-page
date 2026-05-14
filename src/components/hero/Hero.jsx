import React from 'react' 
import "./hero.css";
import VisionCard from '../heroCards/vision-card/VisionCard';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-content">
          <VisionCard />
        </div>
    </div>
  )
}

export default Hero