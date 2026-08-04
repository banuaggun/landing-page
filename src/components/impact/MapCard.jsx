import React, { useState, useRef, useEffect } from "react";
import closeIcon from "../../assets/global-impact/close-icon.svg";
import dragIcon from "../../assets/global-impact/drag-icon.svg";

const MapCard = ({ project, onClose, setView, activeKey }) => {
  if (!project) return null;

  const [isPanModeActive, setIsPanModeActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const imageAreaRef = useRef(null);

  useEffect(() => {
    setIsPanModeActive(false);
    setIsDragging(false);
    if (imageAreaRef.current) {
      const container = imageAreaRef.current;
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2;
      container.scrollTop =
        (container.scrollHeight - container.clientHeight) / 2;
    }
  }, [project]);

  const togglePanMode = (e) => {
    e.stopPropagation();
    setIsPanModeActive((prev) => !prev);
    if (isPanModeActive) {
      setIsDragging(false);
    }
  };

  const handleMouseDown = (e) => {
    if (!isPanModeActive || !imageAreaRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - imageAreaRef.current.offsetLeft);
    setStartY(e.pageY - imageAreaRef.current.offsetTop);
    setScrollLeft(imageAreaRef.current.scrollLeft);
    setScrollTop(imageAreaRef.current.scrollTop);
  };

  const handleTouchStart = (e) => {
    if (!isPanModeActive || !imageAreaRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - imageAreaRef.current.offsetLeft);
    setStartY(e.touches[0].pageY - imageAreaRef.current.offsetTop);
    setScrollLeft(imageAreaRef.current.scrollLeft);
    setScrollTop(imageAreaRef.current.scrollTop);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !imageAreaRef.current) return;
      const walkX = (e.pageX - startX) * 1.5;
      const walkY = (e.pageY - startY) * 1.5;
      imageAreaRef.current.scrollLeft = scrollLeft - walkX;
      imageAreaRef.current.scrollTop = scrollTop - walkY;
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !imageAreaRef.current) return;
      const walkX = (e.touches[0].pageX - startX) * 1.5;
      const walkY = (e.touches[0].pageY - startY) * 1.5;
      imageAreaRef.current.scrollLeft = scrollLeft - walkX;
      imageAreaRef.current.scrollTop = scrollTop - walkY;
    };

    const stopDragging = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, startX, startY, scrollLeft, scrollTop]);

  return (
    <div className="map-card-wrapper">
      <div className="map-card-media-container">
        <div
          className={`map-card-image-area ${isPanModeActive ? "mode-active" : ""} ${isDragging ? "dragging" : ""}`}
          ref={imageAreaRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}>
          <img
            src={project.image}
            alt={project.title}
            className="map-card-img"
            draggable="false"
          />
        </div>

        <button
          className="map-card-close-btn"
          onClick={onClose}
          aria-label="Close"
          onMouseDown={(e) => e.stopPropagation()}>
          <img src={closeIcon} alt="Close" />
        </button>

        <button
          className={`map-card-pan-toggle-btn ${isPanModeActive ? "active" : ""}`}
          onClick={togglePanMode}
          onMouseDown={(e) => e.stopPropagation()}
          aria-label="Toggle panorama movement">
          <img src={dragIcon} alt="Toggle drag mode" draggable="false" />
        </button>
      </div>

      <div className="map-card-area">
        <div className="map-card-content">
          <h3 className="fonts-header-sub map-card-title">{project.title}</h3>
          <p className="fonts-body map-card-story">{project.story}</p>

          <div className="map-card-metrics">
            <div className="map-card-item">
              <p className="map-card-label fonts-header-sub">Time</p>
              <div className="map-card-border"></div>
              <h3 className="map-card-value fonts-header">
                {project.metrics.time}
              </h3>
            </div>
            <div className="map-card-item">
              <p className="map-card-label fonts-header-sub">Seeds</p>
              <div className="map-card-border"></div>
              <h3 className="map-card-value fonts-header">
                {project.metrics.seeds}
              </h3>
            </div>
            <div className="map-card-item">
              <p className="map-card-label fonts-header-sub">Target</p>
              <div className="map-card-border"></div>
              <h3 className="map-card-value fonts-header">
                {project.metrics.target}
              </h3>
            </div>
          </div>
        </div>

        <div>
          <button
            className="map-card-action-btn fonts-header-sub"
            onClick={() => setView("action", activeKey)}>
            Plant a Tree Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
