import React, { useState } from "react";
import "./InvestCal.css";
import { Box, Slider, Typography } from "@mui/material";

const InvestCal = () => {
  // slider values
  // slider1
  const [slider1, setSlider1] = useState(50);
  const handleslider1Change = (event, newValue) => {
    setSlider1(newValue);
    console.log("slider1", newValue);
  };
  // slider2
  const [slider2, setSlider2] = useState(50);
  const handleslider2Change = (event, newValue) => {
    setSlider2(newValue);
    console.log("slider2", newValue);
  };
  // slider3
  const [slider3, setSlider3] = useState(50);
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
                <h5>Initial Investment</h5>
                <h5>{slider1}</h5>
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
                <h5>Property value growth (5 year)</h5>
                <h5></h5>
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
                <h5>Expected annual rental yield</h5>
                <h4></h4>
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
          <section className="inner-wrap">hey</section>
        </div>
      </div>
    </div>
  );
};

export default InvestCal;
