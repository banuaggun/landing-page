import React from 'react'
import "./programs.css";
import "./program-fonts.css"; 

const Forest = ({setView}) => {
  return (
    <section className="program-block">
        <div className="program-wrapper">
          <div className="program-items-area">
            <div className="program-items-intro">
              <div className="program-label fonts-header">Program 03</div>

              <h2 className="program-header fonts-header-sub">
                Forest Monitoring
              </h2>

              <p className="program-body fonts-body">
                Using fieldwork, technology, and data to monitor and protect
                forest ecosystems.
              </p>
            </div>

            <div className="program-items-list">
              <div className="program-item">
                <h3 className="program-label fonts-header">
                  01 Monitoring Forests
                </h3>

                <p className="program-body fonts-body">
                  We monitor forest areas to better understand changes, identify
                  risks, and support conservation efforts.
                </p>
              </div>

              <div className="program-item">
                <h3 className="program-label fonts-header">
                  02 Fieldwork & Data
                </h3>

                <p className="program-body fonts-body">
                  Our teams combine field observations with data and technology
                  to create a clearer picture of forest health.
                </p>
              </div>

              <div className="program-item">
                <h3 className="program-label fonts-header">
                  03 Protecting Forest Ecosystems
                </h3>

                <p className="program-body fonts-body">
                  Monitoring allows us to identify threats early and support
                  effective long-term forest protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Forest