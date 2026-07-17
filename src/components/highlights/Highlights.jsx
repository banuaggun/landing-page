import React from "react";
import "./highlight-fonts.css";
import "./highlights.css";

const Highlights = () => {
  return (
    <section className="highlights-section" id="highlights">
      <div className="highlights-container">
        <h2 className="highlights-main-title">More Than Planting</h2>

        <div className="highlights-content-list">
          <div className="highlights-item">
            <h3 className="highlights-item-title">Empowering Locals</h3>
            <p className="highlights-item-text fonts-body">
              We train and employ regional communities, turning nature
              restoration into a sustainable living.
            </p>
          </div>

          <div className="highlights-item">
            <h3 className="highlights-item-title fonts-header">
              100% Transparent
            </h3>
            <p className="highlights-item-text fonts-body">
              Track the exact coordinates of your trees and see regular growth
              updates from the field.
            </p>
          </div>

          <div className="highlights-item">
            <h3 className="highlights-item-title fonts-header">
              Biodiversity First
            </h3>
            <p className="highlights-item-text fonts-body">
              Every project focuses on bringing back native wildlife, insects,
              and natural water cycles.
            </p>
          </div>

          <div className="highlights-testimonial-box">
            <p className="testimonial-text fonts-body">
              Seeing the local forest come back to life has completely
              transformed our village. We don't just have cleaner air; our
              community now has steady jobs and a real hope for the future
              generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
