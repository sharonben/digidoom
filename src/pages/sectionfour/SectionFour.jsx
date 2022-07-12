import React from "react";
import "./SectionFour.css";
import team from "../sectionfour/team.jpg";
import philo from "../sectionfour/philo.jpg";
import office from "../sectionfour/office.jpg";

function SectionFour() {
  return (
    <div id="sectionfour-container" className="sectionfour-container">
      <div className="work-container">
        <div className="work-con">
          <div className="before-work"></div>
          <label className="works">About</label>
        </div>
        <div className="work-caption">WE ARE MORE THAN DIGITAL AGENCY</div>
      </div>

      <div className="img-container">
        <div className="img-container-left">
          <img className="team-img" src={team} alt="" />
          <label className="team-caption">Team Work</label>
          <label className="team-caption new">committed and creative</label>
        </div>
        <div className="img-container-right">
          <div className="philo-div">
            <img className="philo-img" src={philo} alt="" />
            <label className="philo-caption">Philosophy</label>
            <label className="philo-caption new2">Trust pays off</label>
          </div>

          <div className="office-div">
            <img className="office-img" src={office} alt="" />
            <label className="office-caption">Office</label>
            <label className="office-caption new2">somewhere on earth</label>
          </div>
         </div>
      </div>

<div className="describes">
    <div className="d1">
        <h3>Who we are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos asperiores eligendi incidunt eveniet corporis? Ipsam itaque iusto excepturi fugiat!</p>
    </div>
    <div className="d1">
        <h3>Our Philosophy</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos asperiores eligendi incidunt eveniet corporis? Ipsam itaque iusto excepturi fugiat!</p>
    </div>
    <div className="d1">
        <h3>How we work</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos asperiores eligendi incidunt eveniet corporis? Ipsam itaque iusto excepturi fugiat!</p>
    </div>
</div>

<div className="line3-contain"><div className="line3"></div></div>


    </div>
  );
}

export default SectionFour;
