import React, { useState } from "react";
import "./InvestCal.css";
import { Box, Slider, Typography } from "@mui/material";
import { FaCircle } from "react-icons/fa";
import Chart from "./Chart";

const InvestCal = () => {
  // slider values
  // slider1
  const [slider1, setSlider1] = useState(40);
  const handleslider1Change = (event, newValue) => {
    setSlider1(newValue);
    console.log("slider1", newValue);
  };
  // slider2
  const [slider2, setSlider2] = useState(20);
  const handleslider2Change = (event, newValue) => {
    setSlider2(newValue);
    console.log("slider2", newValue);
  };
  // slider3
  const [slider3, setSlider3] = useState(10);
  const handleSlider3Change = (event, newValue) => {
    setSlider3(newValue);
    console.log("slider3", newValue);
  };

  return (
    <div className="investcal-wrap">
      <h2>Investment calculator</h2>
      <div className="container">
        <div className="col1">
          <h4>How much do you want to invest?</h4>
          <section className="inner-wrap">
            <Box className="slider1">
              <Typography className="label">
                <h6>Initial Investment</h6>
                <h6>{slider1}</h6>
              </Typography>
              <Slider
                id="slider1"
                defaultValue={50}
                aria-label="small"
                valueLabelDisplay="auto"
                min={10}
                max={100}
                value={slider1}
                onChange={handleslider1Change}
                sx={{
                  color: "#41CE8E",
                  height: 10,
                }}
              />
            </Box>
            <Box className="slider2">
              <Typography className="label">
                <h6>Property value growth (5 year)</h6>
                <h6>{slider2}</h6>
              </Typography>
              <Slider
                id="slider2"
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={10}
                max={100}
                value={slider2}
                onChange={handleslider2Change}
                sx={{
                  color: "#41CE8E",
                  height: 10,
                }}
              />
            </Box>
            <Box className="slider3">
              <Typography className="label">
                <h6>Expected annual rental yield</h6>
                <h6>{slider3}</h6>
              </Typography>
              <Slider
                id="slider3"
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={10}
                max={100}
                value={slider3}
                onChange={handleSlider3Change}
                sx={{
                  color: "#41CE8E",
                  height: 10,
                }}
              />
            </Box>
          </section>
        </div>

        <div className="col2">
          <h3>
            Projected investment return of <span>Rs. {slider1}</span>in
            <span>5 years</span>
          </h3>
          <div className="row1">
            <section>
              <h6>
                <span>
                  <FaCircle style={{ color: "#1A202C" }} />
                </span>
                <span>Investment</span>
              </h6>
              <h6>{slider1}</h6>
            </section>
            <section>
              <h6>
                <span>
                  <FaCircle style={{ color: "#FFD147" }} />
                </span>
                <span>Total rental income</span>
              </h6>
              <h6>{slider1 + slider2}</h6>
            </section>
            <section>
              <h6>
                <span>
                  <FaCircle style={{ color: "#41CE8E" }} />
                </span>
                <span>Value appreciation</span>
              </h6>
              <h6>{slider1 + slider2 + slider3}</h6>
            </section>
          </div>
          <div className="row2">
            <Chart slider1={slider1} slider2={slider2} slider3={slider3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestCal;
