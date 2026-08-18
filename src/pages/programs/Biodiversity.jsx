import React from 'react'
import "./programs.css";
import "./program-fonts.css"; 

const Biodiversity = ({setView}) => {
  return (
       <section className="program-block">
        <div className="program-wrapper">
          <div className="program-items-area">
            <div className="program-items-intro">
              <div className="program-label fonts-header">Program 01</div>

              <h2 className="program-header fonts-header-sub">
                Biodiversity & Ecosystems
              </h2>

              <p className="program-body fonts-body">
                Protecting biodiversity and restoring healthy ecosystems through
                long-term conservation efforts.
              </p>
            </div>

            <div className="program-items-list">
              <div className="program-item">
                <h3 className="program-label fonts-header">
                  01 Protecting Biodiversity
                </h3>

                <p className="program-body fonts-body">
                  Our biodiversity initiatives focus on protecting species,
                  habitats, and the natural systems that support life.
                </p>
              </div>

              <div className="program-item">
                <h3 className="program-label fonts-header">
                  02 Ecosystem & Restoration
                </h3>

                <p className="program-body fonts-body">
                  We support restoration projects designed to strengthen
                  ecosystems and improve their long-term resilience.
                </p>
              </div>

              <div className="program-item">
                <h3 className="program-label fonts-header">
                  03 Working With Communities
                </h3>

                <p className="program-body fonts-body">
                  Local communities are an essential part of successful
                  conservation. Our projects work alongside communities to
                  create sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Biodiversity