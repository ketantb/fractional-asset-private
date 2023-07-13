import React, { useState, useEffect } from "react";

import "./Apartment.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
// import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import ApartmentCard from "../../mini-cards/apartment/apartmentCard";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";
import HowFractionalApartmentWorksVideo from "./how-it-works-video/how-it-works";
import apartmentStikcer from "../../../assets/buildings.png";

const ApartmentPage = () => {
  //get all apartments
  const [apartmentData, setApartmentData] = useState([]);
  const getData = async () => {
    await axios
      .get("/listing-all-apartment")
      .then((response) => {
        console.log(response.data.list);
        setApartmentData(response.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <img src={apartmentStikcer} alt="" />
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

        {apartmentData.length !== 0 ? (
          <section className="outer-wrap">
            <h4>FRACTIONAL APARTMENTS</h4>
            <div className="apartment-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "sell") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return (
                    <ApartmentCard apartment={apartment} getData={getData} />
                  );
                })}
            </div>

            {/* <DLBrochure /> */}

            {/* <h4>RENTAL APARTMENTS</h4>
            <div className="apartment-card-container">
              {apartmentData
                .filter((apartment) => {
                  if (apartment.propertyAdType === "rent") {
                    return apartment;
                  }
                })
                .map((apartment) => {
                  return (
                    <ApartmentCard apartment={apartment} getData={getData} />
                  );
                })}
            </div> */}
          </section>
        ) : null}
      </div>
      <HowFractionalApartmentWorksVideo />
      <HowItWorksSteps />
    </>
  );
};

export default ApartmentPage;
