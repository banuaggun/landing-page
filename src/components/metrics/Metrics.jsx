import React from "react";
import "./metrics.css";
import "./metric-fonts.css";

const Metrics = () => {
  const metricsData = [
    { id: 1, value: "10k+", label: "Trees Protected" },
    { id: 2, value: "500+", label: "Communities Engaged" },
    { id: 3, value: "24/7", label: "Monitoring Coverage" },
  ];

  return (
    <section className="metrics-area">
      <div className="metrics-container">
        <div className="metrics-header-area">
          <h2 className="m-header">Our Metrics Tell the Story</h2>
          <p className="m-text m-body">
            We measure our success not just in data, but in the thriving
            ecosystems we rebuild together. These live metrics showcase the
            ongoing progress of our global reforestation mission.
          </p>
        </div>

        <div className="metrics-grid">
          {metricsData.map((item) => (
            <div key={item.id} className="metric-card">
              <h3 className="metric-value m-head">{item.value}</h3>
              <p className="metric-label m-body">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
