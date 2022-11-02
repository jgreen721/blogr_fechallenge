import React from "react";
import "./Footer.css";

var links = [
  {
    id: 1,
    title: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  { id: 2, title: "Company", links: ["About", "Team", "Blog", "Careers"] },
  { id: 3, title: "Connect", links: ["Contact", "Newsletter", "LinkedIn"] },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h1 className="footer-h1">Blogr</h1>
        </div>
        {links.map((l) => (
          <div key={l.id} className="footer-col">
            <h4 className="footer-link-title">{l.title}</h4>
            {l.links.map((l, idx) => (
              <li key={idx} className="footer-link">
                {l}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
