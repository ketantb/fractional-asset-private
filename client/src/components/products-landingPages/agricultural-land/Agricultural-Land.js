import React, { useState, useEffect } from "react";
import "./Agricultural-Land.css";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import LandCard from "../../mini-cards/land/LandCard";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";
import landSticker from "../../../assets/location-pin.png";
import HowFractionalLandWorksVideo from "./how-it-works-video/how-it-works";
import apartmentStikcer from "../../../assets/buildings.png";

const AgriculturalLandPage = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [landData, setLandData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-agri-land");
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
        {/* <div className="bg-image">
          <div className="content" data-aos="fade-up">
            <h4>
              <div>
                <img src={landSticker} alt="" />
              </div>
              Looking to invest in your future? Don't miss this incredible
              opportunity to own your own piece of land! We have a wide
              selection of premium real estate land for sale, perfectly suited
              to meet your needs and aspirations.
            </h4>
          </div>
        </div> */}
        <div className="banner">
          <div>
            <img
              data-aos="fade-down"
              src="https://im.proptiger.com/1/640985/6/the-corridors-images-for-elevation-of-ireo-the-corridors-708110.jpeg"
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
              New way of experiencing luxury real estate ownership. Join our
              community of like-minded individuals who appreciate the benefits
              of fractional ownership and embark on a journey of unforgettable
              experiences.
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

export default AgriculturalLandPage;
