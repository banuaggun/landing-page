import React from 'react'
import "./programs.css";
import "./program-fonts.css"; 
import Reinforce from '../../components/reinforce/Reinforce';

const Carbon = ({setView}) => {
  return (
    <section className="program-block">
        <div className="program-wrapper">
          <div className="program-items-area">
            <div className="program-items-intro">
              <div className="program-label fonts-header">Program 02</div>

              <h2 className="program-header fonts-header-sub">
                Carbon Offset Program
              </h2>

              <p className="program-body fonts-body">
                Supporting meaningful climate action through responsible carbon
                offset projects.
              </p>
            </div>

            <div className="program-items-list">
              <div className="program-item">
                <h3 className="program-label fonts-header">
                  01 Reducing Carbon Emissions
                </h3>

                <p className="program-body fonts-body">
                  Our carbon initiatives support projects that contribute to
                  reducing and balancing greenhouse gas emissions.
                </p>
              </div>

              <div className="program-item">
                <h3 className="program-label fonts-header">
                  02 Verified Projects
                </h3>

                <p className="program-body fonts-body">
                  We focus on transparent and measurable projects with clear
                  environmental impact.
                </p>
              </div>

              <div className="program-item">
                <h3 className="program-label fonts-header">
                  03 Long-Term Climate Impact
                </h3>

                <p className="program-body fonts-body">
                  Our approach is designed to create lasting environmental
                  benefits rather than short-term solutions.
                </p>
              </div>
            </div>
          </div>
        </div> 
        <Reinforce setView={setView} />
      </section>

  )
}

export default Carbon;