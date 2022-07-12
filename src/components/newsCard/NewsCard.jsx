import React from "react";
import "./NewsCard.css";

function NewsCard({data,linkd}) {
  return (
    <div className="newscard-container">
      <img className="news-img" src={data} alt="" />
      <div className="news-bottom">
        <div className="news-caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quae illum nam error magnam quam libero fuga ratione veniam a ea,
          incidunt eaque quia labore voluptatum mollitia, placeat tempore
          recusandae!
        </div>
        <div className="read-btn"><a href={linkd}>Read More</a></div>
      </div>
    </div>
  );
}

export default NewsCard;
