import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="col1 ">
        <h1>
          Don’t just take our
          <br />
          word for it, <br />
          see what our <br />
          investors have to say
        </h1>
      </div>
      <div className="col2">
        <div className="content"></div>
      </div>

      {/* dummy div to cover bottom right corner of parent after skew of element */}
      <div className="col3 dummy-div">
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Testimonial;
