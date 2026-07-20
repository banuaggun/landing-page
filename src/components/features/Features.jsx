import React from "react";
import "./features.css";
import "./features-fonts.css";
import TitleBadge from "../common/TitleBadge";

function Features() {
  return (
    <div className="features-wrapper">
      <div className="features-content">
        <div className="f-text-block">
          <h5 className="features-header fonts-header-sub">
            From Local Roots to Global Change, Together for a Sustainable Future
          </h5>
          <p className="features-body fonts-body">
            Every tree nurtured today strengthens our shared future. Together, we transform small actions into lasting impact for people and the
            planet.
          </p>
        </div>
      </div> 

      <TitleBadge>Green Solutions</TitleBadge>

      <div className="features-container">
        <div className="card">
          <svg
            className="card-svg"
            viewBox="0 0 536 536"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <g clipPath="url(#clip0_641_4260)">
              <path
                d="M176.366 295.736C211.413 269.007 251.278 238.32 319.616 260.778C319.616 260.778 249.613 219.133 188.369 270.462C188.369 270.462 183.378 250.812 191.707 236.812C200.036 222.811 231.694 201.459 270.86 215.281C281.883 219.375 294.027 224.134 305.863 229.091C335.61 241.859 364.403 253.681 375.441 246.599C375.441 246.599 283.643 353.111 206.639 307.301C204.119 305.802 201.119 302.879 198.508 299.62L182.349 311.806L171.797 299.274L176.366 295.736ZM334.589 155.951C396.332 192.682 416.693 272.846 379.962 334.589C343.231 396.332 263.067 416.693 201.324 379.962C139.581 343.231 119.22 263.067 155.951 201.324C192.683 139.581 272.846 119.22 334.589 155.951ZM351.247 127.95C274.244 82.1402 173.76 107.662 127.95 184.666C82.1403 261.669 107.662 362.153 184.666 407.963C261.67 453.773 362.153 428.251 407.963 351.247C453.773 274.244 428.251 173.76 351.247 127.95Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_641_4260">
                <rect
                  width="390.98"
                  height="390.98"
                  fill="white"
                  transform="translate(199.897) rotate(30.7486)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="card__content">
            <h2 className="card__title fonts-header-sub">
              Biodiverse Ecosystems
            </h2>
            <p className="card__description fonts-body">
              We protect diverse species and maintain ecosystem balance to ensure resilient forests. 
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <h2 className="card__title fonts-header-sub">
              Carbon Offset Potential
            </h2>
            <p className="card__description fonts-body">
              Every tree planted helps reduce your carbon footprint and contributes to a healthier planet.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <h2 className="card__title fonts-header-sub">
              Forest Monitoring
            </h2>
            <p className="card__description fonts-body">
              The steps we take today build a sustainable, intelligent green future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
