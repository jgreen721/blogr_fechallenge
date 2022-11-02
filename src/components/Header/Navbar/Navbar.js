import React, { useState } from "react";
import "./Navbar.css";
import NavSubMenu from "./NavSubMenu";
import MobileMenu from "./MobileMenu";

const Navbar = (props) => {
  // const [showProductLinks, setShowProductLinks] = useState(false);
  // const [showCompanyLinks, setShowCompanyLinks] = useState(false);
  // const [showConnectLinks, setShowConnectLinks] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const productLinks = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const companyLinks = ["About", "Team", "Blog", "Careers"];
  const connectLinks = ["Contact", "Newsletter", "LinkedIn"];

  return (
    <nav className="navbar">
      <div className="navbar-col">
        <img className="navbar-logo" src="./images/logo.svg" alt="logo" />
        <ul className="nav-links">
          <li
            onClick={(e) => {
              if (!e.target.classList.contains("submenu-item")) {
                props.setShowProductLinks(!props.showProductLinks);
              }
            }}
            className="nav-item"
          >
            <h5>
              Product
              <span
                className={
                  props.showProductLinks ? "arrow-icon" : "arrow-icon down"
                }
              >
                <img
                  className="navbar-arrow-img"
                  src="./images/icon-arrow-light.svg"
                  alt=""
                />
              </span>
            </h5>
            <NavSubMenu
              links={productLinks}
              showMenu={props.showProductLinks}
            />
          </li>
          <li
            onClick={(e) => {
              if (!e.target.classList.contains("submenu-item")) {
                props.setShowCompanyLinks(!props.showCompanyLinks);
              }
            }}
            className="nav-item"
          >
            <h5>
              Company
              <span
                className={
                  props.showCompanyLinks ? "arrow-icon" : "arrow-icon down"
                }
              >
                <img
                  className="navbar-arrow-img"
                  src="./images/icon-arrow-light.svg"
                  alt=""
                />
              </span>
            </h5>
            <NavSubMenu
              links={companyLinks}
              showMenu={props.showCompanyLinks}
            />
          </li>
          <li
            onClick={(e) => {
              if (!e.target.classList.contains("submenu-item")) {
                props.setShowConnectLinks(!props.showConnectLinks);
              }
            }}
            className="nav-item"
          >
            <h5>
              Connect
              <span
                className={
                  props.showConnectLinks ? "arrow-icon" : "arrow-icon down"
                }
              >
                <img
                  className="navbar-arrow-img"
                  src="./images/icon-arrow-light.svg"
                  alt=""
                />
              </span>
            </h5>
            <NavSubMenu
              links={connectLinks}
              showMenu={props.showConnectLinks}
            />
          </li>
        </ul>
      </div>
      <div className="navbar-col">
        <div className="nav-btn-row">
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Sign Up</button>
          <img
            onClick={() => setShowMobile(!showMobile)}
            className="burger-icon"
            src={
              !showMobile
                ? "./images/icon-hamburger.svg"
                : "./images/icon-close.svg"
            }
            alt="burger"
          />
        </div>
      </div>
      <MobileMenu showMobile={showMobile} />
    </nav>
  );
};

export default Navbar;
