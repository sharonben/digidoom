import React from "react";
import "./Card.css";
// import plane from "./paperplane.png"

function Card({ title, data,classs,size }) {
  return (
    <div className={classs?"car":"card-container" || size?"car2":"card-container"}>
      <div className={size?"car2-wrapper":"card-wrapper"}>
        <img className={size?"car2-icon":"icon"}src={data} alt="" />
        <p className={size?"car2-title":"card-title"}>{title}</p>
        <div className={size?"car2-line":"card-line"}></div>
        <p className="card-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          excepturi?
        </p>
      </div>
    </div>
  );
}

export default Card;
