import React, { useState, useEffect } from "react";

import "./Apartment.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import ApartmentCard from "../../mini-cards/apartment/apartmentCard";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";

const ApartmentPage = () => {
  //get all apartments
  const [apartmentData, setApartmentData] = useState([]);
  const getData = async () => {
    await axios.get("/listing-all-apartment")
    .then((response) => {
      console.log(response.data.list);
      setApartmentData(response.data.list);
    })
    .catch((err) => {
      console.log(err)
    })
    // try {
    //   const response = await axios.get("/listing-all-apartment");
    //   console.log(response.data.list);
    //   setApartmentData(response.data.list);
    // } catch (err) {}
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

            <DLBrochure />

            <h4>RENTAL APARTMENTS</h4>
            <div className="apartment-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "rent") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return <ApartmentCard apartment={apartment} getData={getData}/>;
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
