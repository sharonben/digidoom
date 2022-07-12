import React from "react";
import "./SectionThree.css";
import w9 from "../sectionThree/w9.jpg";
import w1 from "../sectionThree/w1.jpg";
import w2 from "../sectionThree/w2.jpg";
import w3 from "../sectionThree/w3.jpg";
import w4 from "../sectionThree/w4.jpg";
import w5 from "../sectionThree/w5.jpg";
import w6 from "../sectionThree/w6.jpg";
import w7 from "../sectionThree/w7.jpg";
import w8 from "../sectionThree/w8.jpg";
// import screenimg from "../sectionThree/screenimg.png";

function SectionThree() {
  return (
    <div id="sectionthree-container" className="sectionthree-container">
      <div className="work-head">
        <div className="work-container">
          <div className="work-con">
            <div className="before-work"></div>
            <label className="works">Works.</label>
          </div>
          <div className="work-caption">THINGS WE'VE MADE</div>
        </div>
        <div className="workhead-btn">VIEW ALL</div>
      </div>

      <div className="img-section">
        <img className="screenimg" src={w1} alt="" />
        <img className="screenimg" src={w2} alt="" />
        <img className="screenimg" src={w3} alt="" />
        <img className="screenimg" src={w4} alt="" />
        <img className="screenimg" src={w5} alt="" />
        <img className="screenimg" src={w6} alt="" />
        <img className="screenimg" src={w7} alt="" />
        <img className="screenimg" src={w8} alt="" />
        <img className="screenimg" src={w9} alt="" />
      </div>

      <div className="line3-contain">
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default SectionThree;
