import React, { useEffect } from "react";
import "./programs.css";
import "./program-fonts.css";

const Programs = ({ program }) => {
  useEffect(() => {
    if (!program) return;

    const element = document.getElementById(`program-${program}`);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [program]);

  return (
    <main className="program-page">
      <div className="program-wrapper">
        <div className="program-label fonts-header">Our programs</div>

        <div className="program-content">
          <div className="program-text-block">
            <h5 className="program-header fonts-header-sub">
              Protecting nature,
              <br />
              creating a better future
            </h5>
            <p className="program-body fonts-body">
              Our programs focus on protecting biodiversity, restoring
              ecosystems, supporting climate action, and creating lasting
              environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* PROGRAM 01 - BIODIVERSITY */}

      <section id="program-biodiversity" className="program-block">
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

      {/* PROGRAM 02 - CARBON */}

      <section id="program-carbon" className="program-block">
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
      </section>

      {/* PROGRAM 03 - FOREST */}

      <section id="program-forest" className="program-block">
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
    </main>
  );
};

export default Programs;
