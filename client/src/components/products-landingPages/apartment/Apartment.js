import React, { useState, useEffect } from "react";
import "./Apartment.css";
import ApartmentCard from "../../mini-cards/apartment/apartmentCard";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";

const ApartmentPage = () => {
  //get all apartments
  const [apartmentData, setapartmentData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-apartment");
      console.log(response.data.list);
      setapartmentData(response.data.list);
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
      <div className="apartment-page-container">
        <div className="bg-image"></div>

        <DLBrochure />

        {apartmentData.length !== 0 ? (
          <section>
            <h4>FRACTIONAL APARTMENTS</h4>
            <div className="apartment-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "sell") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ApartmentCard apartment={apartment} />;
                })}
            </div>
            <h4>RENTAL APARTMENTS</h4>
            <div className="apartment-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "rent") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ApartmentCard apartment={apartment} />;
                })}
            </div>
          </section>
        ) : null}
      </div>

      <HowItWorksSteps />
    </>
  );
};

export default ApartmentPage;
