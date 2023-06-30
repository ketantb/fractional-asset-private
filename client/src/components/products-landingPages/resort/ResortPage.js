import React, { useState, useEffect } from "react";

import "./ResortPage.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import ResortCard from "../../mini-cards/resort/ResortCard";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";

const ResortPage = () => {
  //get all apartments
  const [apartmentData, setApartmentData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-apartment");
      console.log(response.data.list);
      setApartmentData(response.data.list);
    } catch (err) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  if (!apartmentData) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="resort-page-container">
        <div className="bg-image"></div>

        <div className="home-content">
          <div
            className="content-wrapper"
            data-aos="zoom-in"
            data-aos-delay="80"
          >
            <h4>
              Discover fractional Resorts, a prestigious collection of
              independent luxury hotels & resorts India. A world of unrivalled
              luxury and hospitality. Check out our beautiful properties right
              away!
            </h4>
          </div>
        </div>

        {apartmentData.length !== 0 ? (
          <section>
            <h4>FRACTIONAL RESORTS</h4>
            <div className="resort-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "sell") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ResortCard apartment={apartment} />;
                })}
            </div>

            <DLBrochure />

            <h4>RENTAL RESORTS</h4>
            <div className="resort-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "rent") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ResortCard apartment={apartment} />;
                })}
            </div>
          </section>
        ) : null}
      </div>

      <HowItWorksSteps />
    </>
  );
};

export default ResortPage;
