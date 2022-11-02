import React from "react";
import "./MiddleSection.css";

const MiddleSection = () => {
  return (
    <div className="middle-section">
      <div className="middle-section-overlay">
        <img
          className="overlay-img"
          src="./images/bg-pattern-circles.svg"
          alt=""
        />
      </div>
      <div className="middle-row">
        <div className="middle-col">
          <img
            className="phones-img"
            src="./images/illustration-phones.svg"
            alt=""
          />
        </div>
        <div className="middle-col middle-content">
          <h1 className="middle-h1">State of the Art Infrastructure</h1>
          <p className="middle-p">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
