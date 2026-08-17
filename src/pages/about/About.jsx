import React from "react";
import "./about.css";
import "./about-fonts.css";
import Impact from "../../components/impact/Impact";
import Reinforce from "../../components/reinforce/Reinforce";
import Metrics from "../../components/metrics/Metrics";

const FieldworkIcon = () => (
  <div className="approach-icon-wrapper">
    <div className="circle-placeholder circle-bg"></div>
    <div className="circle-placeholder circle-front"></div>
  </div>
);

const About = () => {
  return (
    <section className="about-page-section">
      <div className="about-wrapper">
        <div className="about-label fonts-header">Our story</div>

        <div className="about-content">
          <div className="about-text-block">
            <h5 className="about-header fonts-header-sub">
              Rooted in Tomorrow: We Grow Far More Than Trees
            </h5>
            <p className="about-body fonts-body">
              Forests are far more than landscapes or green spaces. They are
              living sanctuaries for wildlife, complex ecosystems that sustain
              life, vital sources of livelihood, and one of our greatest
              promises to future generations.
            </p>
          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about-label fonts-header">Who we are</div>

        <div className="about-content">
          <div className="about-text-block">
            <h5 className="about-header fonts-header-sub">
              Restoration always starts with understanding
            </h5>
            <p className="about-body fonts-body">
              Tree Foundation restores native forests and builds healthier
              ecosystems for generations to come. We believe true restoration
              goes beyond planting trees—it means protecting habitats,
              communities, and the future.
            </p>
          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about-belief-area">
          <div className="about-belief-intro">
            <div className="about-label fonts-header">What we believe</div>

            <h2 className="about-header fonts-header-sub">
              Forests deserve more than short-term solutions.
            </h2>
          </div>

          <div className="about-belief-list">
            <div className="about-belief-item">
              <h3 className="about-label fonts-header">01</h3>

              <p className="about-body fonts-header-sub">
                Restoration should work with nature, not against it.
              </p>
            </div>

            <div className="about-belief-item">
              <h3 className="about-label fonts-header">02</h3>

              <p className="about-body fonts-header-sub">
                Lasting change begins with people.
              </p>
            </div>

            <div className="about-belief-item">
              <h3 className="about-label fonts-header">03</h3>

              <p className="about-body fonts-header-sub">
                The future grows from what we protect today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-wrapper about-approach-section">
        <div className="about-belief-intro">
          <div className="about-label fonts-header">Our Approach</div>

          <h2 className="about-header fonts-header-sub">
            Restoration is a long-term commitment.
          </h2>
        </div>

        <div className="approach-items-list">
          <div className="approach-item">
            <div className="approach-meta-row">
              <FieldworkIcon />
            </div>

            <div className="approach-item-content">
              <h3 className="about-header-sub fonts-header-sub">Restore</h3>
              <p className="about-body fonts-body">
                We plant native tree species suited to each ecosystem, helping
                damaged forests recover their natural diversity.
              </p>
            </div>
          </div>

          <div className="approach-item">
            <div className="approach-meta-row">
              <FieldworkIcon />
            </div>
            <div className="approach-item-content">
              <h3 className="about-header-sub fonts-header-sub">Protect</h3>
              <p className="about-body fonts-body">
                Restoration does not end when a tree is planted. We work to
                protect recovering habitats and the biodiversity they support.
              </p>
            </div>
          </div>

          <div className="approach-item">
            <div className="approach-meta-row">
              <FieldworkIcon />
            </div>
            <div className="approach-item-content">
              <h3 className="about-header-sub fonts-header-sub">Empower</h3>
              <p className="about-body fonts-body">
                Local communities are at the heart of lasting restoration. We
                support people who understand, live in, and care for these
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Impact />

      <div className="metrics-content">
        <Metrics />
      </div>
      <div className="reinforce-content">
        <Reinforce />
      </div>
    </section>
  );
};

export default About;
