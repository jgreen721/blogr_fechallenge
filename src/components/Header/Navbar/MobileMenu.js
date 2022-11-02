import React, { useState } from "react";

const MobileMenu = ({ showMobile }) => {
  const [showProducts, setShowProducts] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showConnect, setShowConnect] = useState(false);
  const productLinks = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const companyLinks = ["About", "Team", "Blog", "Careers"];
  const connectLinks = ["Contact", "Newsletter", "LinkedIn"];

  const toggleLinks = (category) => {
    console.log("Category", category);
    if (category === "products") {
      setShowProducts(!showProducts);
      setShowCompany(false);
      setShowConnect(false);
    }
    if (category === "company") {
      setShowCompany(!showCompany);
      setShowProducts(false);
      setShowConnect(false);
    }
    if (category === "connect") {
      setShowConnect(!showConnect);
      setShowCompany(false);
      setShowProducts(false);
    }
  };
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-mobile"}>
      <ul className="mobile-links">
        <li className="mobile-item">
          <span onClick={() => toggleLinks("products")}>
            {" "}
            Product{" "}
            <img
              className={!showProducts ? " " : "flip-arrow"}
              src={"./images/icon-arrow-dark.svg"}
            />
          </span>
          <ul
            className={
              showProducts ? "mobile-sub-list" : "mobile-sub-list hide-sub"
            }
          >
            {productLinks.map((l) => (
              <li key={l} className="mobile-sub-item">
                {l}
              </li>
            ))}
          </ul>
        </li>
        <li className="mobile-item">
          <span onClick={() => toggleLinks("company")}>
            {" "}
            Company{" "}
            <img
              className={!showCompany ? " " : "flip-arrow"}
              src="./images/icon-arrow-dark.svg"
            />
          </span>

          <ul
            className={
              showCompany ? "mobile-sub-list" : "mobile-sub-list hide-sub"
            }
          >
            {companyLinks.map((l) => (
              <li key={l} className="mobile-sub-item">
                {l}
              </li>
            ))}
          </ul>
        </li>
        <li className="mobile-item">
          <span onClick={() => toggleLinks("connect")}>
            {" "}
            Connect{" "}
            <img
              className={!showConnect ? " " : "flip-arrow"}
              src="./images/icon-arrow-dark.svg"
            />
          </span>{" "}
          <ul
            className={
              showConnect ? "mobile-sub-list" : "mobile-sub-list hide-sub"
            }
          >
            {connectLinks.map((l) => (
              <li key={l} className="mobile-sub-item">
                {l}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="bottom-mobile">
        <button className="mobile-btn login-mobile">Login</button>
        <button className="mobile-btn signup-mobile">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
