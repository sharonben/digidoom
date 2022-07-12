import React from "react";
import Card from "../components/card/Card";
import NavBar from "../components/navBar/NavBar";
import "./Home.css";
import SectionOne from "./sectionone/SectionOne";
import plane from "../components/card/paperplane.png";
import brain from "../components/card/icons8-brain-50.png";
import bulb from "../components/card/icons8-bulb-64.png";
import SectionTwo from "./sectionTwo/SectionTwo";
import SectionThree from "./sectionThree/SectionThree";
import SectionFour from "./sectionfour/SectionFour";
import SectionFive from "./sectionfive/SectionFive";
import SectionSix from "./sectionsix/SectionSix";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div className="home-page-container">
      <div className="section1">
        <NavBar />
        <SectionOne />
        <div className="card-section-one">
          <div className="cards">
            <Card title="Future Concept." data={plane} size="change" />
          </div>
          <div className="cards">
            <Card title="The Big Ideas." data={brain} size="change" />
          </div>
          <div className="cards">
            <Card title="Creative Solutions." data={bulb} size="change" />
          </div>
        </div>
      </div>

      <div className="section2">
        <SectionTwo />
      </div>
      <div className="section3">
        <SectionThree/>
      </div>
      <div className="section4">
        <SectionFour/>
      </div>
      <div className="section5">
        <SectionFive/>
      </div>
      <div className="section6">
        <SectionSix/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
