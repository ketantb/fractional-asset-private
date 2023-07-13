import React, { useState, useEffect } from "react";

import "./ResortPage.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import ResortCard from "../../mini-cards/resort/ResortCard";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";
import hotelresortlogo from "../../../assets/hotel-resort.png";

const ResortPage = () => {
  //get all apartments
  const [apartmentData, setApartmentData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-resort");
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
        {/* <div className="bg-image">
          <div className="content" data-aos="fade-up">
            <h4>
              <div>
                <img src={hotelresortlogo} alt="" />
              </div>
              Welcome to Fractional Resorts, where dreams come to life and
              cherished memories are made. Nestled in the breathtaking beauty,
              our exquisite resort offers an unparalleled oasis of relaxation,
              adventure, and indulgence. Discover a world-class experience that
              will captivate your senses and leave you longing to return.
            </h4>
          </div>
        </div> */}
        <div className="banner">
          <div>
            <img
              data-aos="fade-down"
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <img src={hotelresortlogo} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <p>
              Welcome to Fractional Resorts, where dreams come to life and
              cherished memories are made. Nestled in the breathtaking beauty,
              our exquisite resort offers an unparalleled oasis of relaxation,
              adventure, and indulgence. Discover a world-class experience that
              will captivate your senses and leave you longing to return.
            </p>
          </div>
        </div>

        <div className="home-content outer-wrap">
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
        <section className="outer-wrap">
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

          <HowItWorksSteps />
        </section>
      </div>
    </>
  );
};

export default ResortPage;
