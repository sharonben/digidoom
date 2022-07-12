import React from "react";
import "./Footer.css";
import call from "./call.png";
import mail from "./mail.png";
import location from "./location.png";
import calendar from "./calendar.png";
import insta from "../../pages/sectionsix/icons/instaicon.png";
import twitter from "../../pages/sectionsix/icons/twittericon.png";
import fb from "../../pages/sectionsix/icons/fbicon.png";
import youtube from "../../pages/sectionsix/icons/youtubeicon.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top-box">
        <div className="footer-top">
          <div className="f1">
            <div className="company-name"><a href='/'> DIGIDOOM</a></div>
            <div className="slogan">We are more than digital agency</div>
            <div className="footer-line"></div>
          </div>
          <div className="f2">
            <div className="head">CONTACT US</div>
            <ul className="contact">
              <li>
                <img src={call} alt="" />
                <div>0471-2774527</div>
              </li>
              <li>
                <img src={mail} alt="" />
                <div>digidoom@gmail.com</div>
              </li>
              <li>
                <img src={location} alt="" />
                <div>westside,USA</div>
              </li>
              <li>
                <img src={calendar} alt="" />
                <div>sunday-friday</div>
              </li>
            </ul>
          </div>
          <div className="f3">
            <div className="head">OUR SERVICES</div>
            <ul className="contact">
              <li>
                <div>projects</div>
              </li>
              <li>
                <div>services1</div>
              </li>
              <li>
                <div>services2</div>
              </li>
              <li>
                <div>services3</div>
              </li>
            </ul>
          </div>

          <div className="f3">
            <div className="head">ABOUT US</div>
            <ul className="contact">
              <li>
                <div>projects</div>
              </li>
              <li>
                <div>services1</div>
              </li>
              <li>
                <div>services2</div>
              </li>
              <li>
                <div>services3</div>
              </li>
            </ul>
          </div>


        </div>
      </div>

      <div className="footer-bottom-box">
        <div className="footer-btm-left">
          <div className="btm1">
            <div className="txt1">copyright 2022 Digidoom.</div>
            <div className="txt2">PRIVACY POLICY</div>
            <div className="txt3">TERMS OF USE</div>
          </div>
          <div className="btm2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, corrupti?
          </div>
        </div>

        <div className="footer-btm-right">
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={fb} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
