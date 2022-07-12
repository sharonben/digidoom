import React from "react";
import "./NavBar.css";
import searchsvg from "./icons8-search-30.png";
import dropsvg from "./icons8-expand-arrow-96.png";
function NavBar() {
  return (
    <div id="navbar-container" className="navbar-container">
      <div className="left-nav">
        <div className="logo">DIGI DOOM</div>
      </div>
      <div className="right-nav">
        <div className="nav-list-container">
          <ul className="ul-container">
            <li><a className="nav-link" href="#navbar-container">HOME</a></li>
            <li><a className="nav-link" href="#service-section">SERVICES</a></li>
            <li><a className="nav-link" href="#sectionthree-container">WORKS</a></li>
            <li><a className="nav-link" href="#sectionfour-container">ABOUT</a></li>
            <li><a className="nav-link" href="#sectionsix-container">BLOG</a></li>
          </ul>
        </div>
        <div className="contact-box">
          <div className="contact">CONTACT</div>
          <div className="dropsvg-container">
            <img className="drop-svg" src={dropsvg} alt="" />
          </div>
        </div>
        <div className="input-search">
            <input className="search-box" type="text" placeholder="search" />
          <img className="search-svg" src={searchsvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
