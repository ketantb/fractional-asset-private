import React, { useState, useEffect } from "react";
import "./Land.css";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import LandCard from "../../mini-cards/land/LandCard";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";

const LandPage = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [landData, setLandData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-apartment");
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
        <div className="bg-image"></div>

        {landData.length !== 0 ? (
          <section>
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

      <HowItWorksSteps />
    </>
  );
};

export default LandPage;
