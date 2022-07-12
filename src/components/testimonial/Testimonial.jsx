import React from "react";
import "./Testimonial.css";
import quote from "./quote.png";
import star from "./star.png";

function Testimonial({data,username}) {
  return (
    <div className="testimonial-container-all">
      <div className="testimonial-container">
        <img className="quote" src={quote} alt="" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          exercitationem voluptatem optio ea inventore quas animi ab non quam
          nostrum.
        </div>
        <div className="star-container">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>

<img className="dp" src={data} alt="" />
<div className="username">{username}</div>
<div className="designation">Designation</div>


    </div>
  );
}

export default Testimonial;
