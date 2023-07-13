import React, { useState, useEffect } from "react";
import "./Land.css";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import LandCard from "../../mini-cards/land/LandCard";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";
import landSticker from "../../../assets/location-pin.png";
import HowFractionalLandWorksVideo from "./how-it-works-video/how-it-works";

const LandPage = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [landData, setLandData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-lands");
      console.log(response.data.list);
      setLandData(response.data.list);
    } catch (err) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  //HANDLE SEARCH
  const handleSearch = () => {
    console.log(city);
    navigate(`/city/${city}`);
  };

  if (!landData) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="land-page-container">
        <div className="banner">
          <div>
            <img
              data-aos="fade-down"
              src="https://images.pexels.com/photos/636342/pexels-photo-636342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <img
              src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img src={landSticker} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <p>
              Looking to invest in your future? Don't miss this incredible
              opportunity to own your own piece of land! We have a wide
              selection of premium real estate land for sale, perfectly suited
              to meet your needs and aspirations.
            </p>
          </div>
        </div>

        {landData.length !== 0 ? (
          <section className="outer-wrap">
            <h4>FRACTIONAL LAND</h4>
            <div className="land-card-container">
              {landData
                .filter((land) => {
                  if (land.propertyAdType === "sell") {
                    return land;
                  }
                })
                .map((land) => {
                  return <LandCard land={land} />;
                })}
            </div>

            <DLBrochure />

            <h4>RENTAL LAND</h4>
            <div className="land-card-container">
              {landData
                .filter((land) => {
                  if (land.propertyAdType === "rent") {
                    return land;
                  }
                })
                .map((land) => {
                  return <LandCard land={land} />;
                })}
            </div>
          </section>
        ) : null}
      </div>
      <HowFractionalLandWorksVideo />
      <HowItWorksSteps />
    </>
  );
};

export default LandPage;
