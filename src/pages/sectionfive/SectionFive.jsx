import React from "react";
import Testimonial from "../../components/testimonial/Testimonial";
import "./SectionFive.css";
import dp from "./dp.jpg";
import dp1 from "./dp1.jpg";
import dp2 from "./dp2.jpg";
import dp3 from "./dp3.jpg";
import dp4 from "./dp4.jpg";
import dp5 from "./dp5.jpg";
import dp6 from "./dp6.jpg";

function SectionFive() {
  return (
    <div className="sectionfive-container">
      <div className="work-container5">
        <div className="work-con">
          <div className="before-work"></div>
          <label className="works5">Testimonials.</label>
        </div>
        <div className="work-caption5">WE ARE MORE THAN DIGITAL AGENCY</div>
      </div>

      <div className="testimonial-box-container">
        <div>
          <Testimonial data={dp} username="John doe" />
        </div>
        <div>
          <Testimonial data={dp1} username="maria mathew" />
        </div>
        <div>
          <Testimonial data={dp2} username="Mathew john" />
        </div>
        <div>
          <Testimonial data={dp3} username="Mary jane" />
        </div>
        <div>
          <Testimonial data={dp4} username="David john" />
        </div>
        <div>
          <Testimonial data={dp5} username="Paul Mathew" />
        </div>
        <div>
          <Testimonial data={dp6} username="Vimal Joe" />
        </div>
      </div>


      <div className="line3-contain"><div className="line3"></div></div>

    </div>
  );
}

export default SectionFive;
