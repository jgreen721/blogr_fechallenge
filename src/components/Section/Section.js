import React from "react";
import "./Section.css";

const Section = ({ cardData, img, title }) => {
  return (
    <div className="section-parent">
      {title ? (
        <h1 className="section-header-h1">{title}</h1>
      ) : (
        <div className="py-1"></div>
      )}
      <div className="section-row">
        <div
          className={
            title.length ? "section-col" : "section-col swap-horizontal"
          }
        >
          {cardData.map((c) => (
            <div key={c.id} className="section-content">
              <h3 className="section-h3-header">{c.title}</h3>
              <p className="section-p">{c.blurb}</p>
            </div>
          ))}
        </div>
        <div
          className={
            title.length ? "section-col" : "section-col swap-horizontal"
          }
        >
          <img src={img} alt="" className="section-img" />
        </div>
      </div>
    </div>
  );
};

export default Section;
