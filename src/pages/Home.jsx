import React from "react";
import Card from "../components/card/Card";
import NavBar from "../components/navBar/NavBar";
import "./Home.css";
import SectionOne from "./sectionone/SectionOne";
import plane from "../components/card/paperplane.png"
import brain from "../components/card/icons8-brain-50.png"
import bulb from "../components/card/icons8-bulb-64.png"

function Home() {
  return (
    <div>
      <div className="section1">
        <NavBar />
        <SectionOne />
        <div className="card-section-one">
          <div>
            <Card title="Future Concept." data={plane}/>
          </div>
          <div>
            <Card title="The Big Ideas." data={brain} />
          </div>
          <div>
            <Card title="Creative Solutions." data={bulb} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
