import React from "react";
import Card from "../../components/card/Card";
import "./SectionTwo.css";
import graph2 from "../../components/card/graph.png";
import pencil from "../../components/card/icons8-pencil-64.png";
import globe from "../../components/card/globe.png";
import bookmark from "../../components/card/bookmark.png";
import graphbar from "../../components/card/graphbar.png";
import bulb from "../../components/card/icons8-bulb-64.png";

function SectionTwo() {
  return (
    <div className="sectiontwo-container">
      <div id="service-section" className="service-container">
        <div className="service-con">
          <div className="before-service"></div>
          <label className="services">Services.</label>
        </div>
        <div className="service-caption">OUR SERVICES FOR CLIENTS</div>
      </div>
      <div className="service-card-container">
        <div className="service-card-container-one">
          <div>
            <Card title="Digital strategy" data={graph2} classs="card" />
          </div>
          <div>
            <Card title="UX Designs" data={pencil} classs="card" />
          </div>
          <div>
            <Card title="UI Designs" data={bulb} classs="card" />
          </div>
        </div>
        <div className="service-card-container-two">
          <div>
            <Card title="Social Media" data={globe} classs="card" />
          </div>
          <div>
            <Card title="Design Concept" data={bookmark} classs="card" />
          </div>
          <div>
            <Card title="Media Pairing" data={graphbar} classs="card" />
          </div>
        </div>
      </div>
      <div className="line-contain"><div className="line2"></div></div>
    </div>
  );
}

export default SectionTwo;
