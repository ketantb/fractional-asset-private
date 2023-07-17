import React, { useEffect } from "react";
import "./WhyUs.css";
import { Typography } from "@mui/material";
import { FaHome } from "react-icons/fa";
import {
  BsFillPersonXFill,
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkCheckFill,
} from "react-icons/bs";

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="whyus-wrapper ">
      <h2>Why Choose Us</h2>
      <div className="card-wrapper-inner">
        <div className="card">
          <div className="img-wrapper">
            {/* <img src={logo1} alt=""></img> */}
            <BsFillPersonXFill style={{ fontSize: "x-large" }} />
          </div>
          <Typography className="heading">Avoid Brokers</Typography>
          <p className="para">
            We directly connect you to verified owners to save brokerage
          </p>
        </div>

        <div className="card">
          <div className="img-wrapper">
            {/* <img src={logo2} alt=""></img> */}
            <BsFillFileEarmarkTextFill style={{ fontSize: "x-large" }} />
          </div>
          <Typography className="heading">Free Listings</Typography>
          <p className="para">Easy listing process. Also using WhatsApp</p>
        </div>

        <div className="card">
          <div className="img-wrapper">
            {/* <img src={logo3} alt=""></img> */}
            <FaHome style={{ fontSize: "x-large" }} />
          </div>
          <Typography className="heading">Shortlist without visit</Typography>
          <p className="para">Extensive Information makes it easy</p>
        </div>

        <div className="card">
          <div className="img-wrapper">
            {/* <img src={logo4} alt=""></img> */}
            <BsFillFileEarmarkCheckFill style={{ fontSize: "x-large" }} />
          </div>
          <Typography className="heading">Rental Agreement</Typography>
          <p className="para">
            Assistance in creating Rental agreement & Paper work
          </p>
        </div>
      </div>

      {/* <div>
                <Button className='know-more'
                    onClick={() => navigate('/how-it-works')}>How It Works</Button>
            </div> */}
    </div>
  );
};

export default WhyUs;
