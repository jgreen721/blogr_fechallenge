import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const [showProductLinks, setShowProductLinks] = useState(false);
  const [showCompanyLinks, setShowCompanyLinks] = useState(false);
  const [showConnectLinks, setShowConnectLinks] = useState(false);

  const clearMenus = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("header-content")) {
      setShowProductLinks(false);
      setShowCompanyLinks(false);
      setShowConnectLinks(false);
    }
  };
  return (
    <div onClick={(e) => clearMenus(e)} className="header-parent">
      <div className="header-overlay">
        <img
          className="overlay-bg"
          src="./images/bg-pattern-intro-desktop.svg"
          alt=""
        />
      </div>
      <Navbar
        showProductLinks={showProductLinks}
        setShowProductLinks={setShowProductLinks}
        showConnectLinks={showConnectLinks}
        setShowConnectLinks={setShowConnectLinks}
        showCompanyLinks={showCompanyLinks}
        setShowCompanyLinks={setShowCompanyLinks}
      />
      <div className="header-content">
        <h1 className="header-h1">A modern publishing platform</h1>
        <h5 className="header-h5">
          Grow you audience and build your online brand
        </h5>
        <div className="header-btn-row">
          <div className="header-btn">Start for Free</div>
          <div className="header-btn">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
