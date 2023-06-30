import React, { useState, useEffect } from "react";

import "./Shop.css";
import axios from "../../../helpers/axios";
import ShopCard from "../../mini-cards/shop/ShopCard";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";

const ShopPage = () => {
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
      <div className="shop-page-container">
        <div className="bg-image"></div>

        {apartmentData.length !== 0 ? (
          <section>
            <h4>FRACTIONAL SHOPS</h4>
            <div className="shop-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "sell") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ShopCard apartment={apartment} />;
                })}
            </div>

            <DLBrochure />

            <h4>RENTAL SHOPS</h4>
            <div className="shop-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "rent") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ShopCard apartment={apartment} />;
                })}
            </div>
          </section>
        ) : null}
      </div>

      <HowItWorksSteps />
    </>
  );
};

export default ShopPage;
