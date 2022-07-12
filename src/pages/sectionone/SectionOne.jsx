import React from "react";
import "./SectionOne.css";
import section1img from "./cropped.png";

function SectionOne() {
  return (
    <div id="sectionone-container" className="sectionone-container">
      <div className="s1img-container">
          <div className="text-area">
              <div className="text1">CREATIVE MIND, CREATIVE WORKS.</div>
              <div className="text2">We are digital agency.</div>
              <div className="start-btn">GETTING STARTED</div>
          </div>
        <img className="s1-img" src={section1img} alt="" />
      </div>
    </div>
  );
}

export default SectionOne;
