import React from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import "./SectionSix.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import insta from "./icons/instaicon.png";
import fb from "./icons/fbicon.png";
import twitter from "./icons/twittericon.png";
import youtube from "./icons/youtubeicon.png";

function SectionSix() {
  return (
    <div className="sectionsix-container" id="sectionsix-container">
      <div className="s6-heading">
        <div className="latest-news">Latest News.</div>
        <div className="checkout">CHECK OUT SOME OF OUR NEWS</div>
      </div>
      <div className="news-section">
        <NewsCard data={img1} linkd="https://www.bigmotive.com/blog/virtual-reality-the-new-medium-for-everything/" />
        <NewsCard data={img2} linkd="https://deeprio.com/blogs/smartwatch-blog/measurement-of-blood-oxygen-level" />
        <NewsCard data={img3} linkd="https://www.technobezz.com/best/top-best-tablets-bloggers/" />
        <NewsCard data={img4} linkd="https://www.zdnet.com/blog/cell-phones/" />
        <NewsCard data={img5} linkd="https://www.apple.com/in/newsroom/" />
      </div>
      <div className="line3-contain">
        <div className="line3"></div>
      </div>
      <div className="s6-bottom">
        <div className="icons-panel">
          <img src={insta} alt="" />
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="icon-caption">Have any project on mind?</div>
        <div className="enquiry-btn">make enquiry</div>
      </div>
    </div>
  );
}

export default SectionSix;
