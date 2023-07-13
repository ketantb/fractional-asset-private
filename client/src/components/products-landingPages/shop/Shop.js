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
      const response = await axios.get("/listing-all-shop");
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
        <div className="banner">
          <div>
            <img
              data-aos="fade-down"
              src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <img src={""} alt="" />
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
