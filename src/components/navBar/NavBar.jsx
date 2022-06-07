import React from "react";
import "./NavBar.css";
import searchsvg from "./icons8-search-30.png";
import dropsvg from "./icons8-expand-arrow-96.png";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="left-nav">
        <div className="logo">DIGI DOOM</div>
      </div>
      <div className="right-nav">
        <div className="nav-list-container">
          <ul className="ul-container">
            <li>HOME</li>
            <li>SERVICES</li>
            <li>WORKS</li>
            <li>ABOUT</li>
            <li>BLOG</li>
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
