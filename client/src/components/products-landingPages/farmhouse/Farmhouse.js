import React, { useState, useEffect } from "react";
import "./Farmhouse.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";
import villaStikcer from "../../../assets/villaimg.png";
import FarmhouseCard from "../../mini-cards/farmhouse/FarmhouseCard";

const FarmhousePage = () => {
  //get all farmhouses
  const [farmhouseData, setFarmhouseData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-farmhouse");
      console.log(response.data.list);
      setFarmhouseData(response.data.list);
    } catch (err) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  if (!farmhouseData) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="farmhouse-page-container">
        <div className="banner">
          <div>
            <img
              data-aos="fade-down"
              src="https://wallpaperaccess.com/full/2098394.jpg"
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
            <img src={villaStikcer} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <p>
              Escape to a world of opulence and tranquility at Fractional
              farmhouses. Nestled in the breathtaking surroundings, our
              exclusive farmhouse offers an extraordinary retreat for those
              seeking the pinnacle of luxury and privacy. With impeccable
              design, lavish amenities, and breathtaking views, immerse yourself
              in a truly exceptional living experience.
            </p>
          </div>
        </div>

        {farmhouseData.length !== 0 ? (
          <section className="outer-wrap">
            <h4>FRACTIONAL FARMHOUSE</h4>
            <div className="farmhouse-card-container">
              {farmhouseData
                .filter((farmhouse) => {
                  if (farmhouse.propertyAdType === "sell") {
                    return farmhouse;
                  }
                })
                .map((farmhouse) => {
                  return <FarmhouseCard farmhouse={farmhouse} />;
                })}
            </div>

            <DLBrochure />
            {/* 
            <h4>RENTAL farmhouseS</h4>
            <div className="farmhouse-card-container">
              {farmhouseData
                .filter((farmhouse) => {
                  if (farmhouse.propertyAdType === "rent") {
                    return farmhouse;
                  }
                })
                .map((farmhouse) => {
                  return <FarmhouseCard farmhouse={farmhouse} />;
                })}
            </div> */}
          </section>
        ) : null}
      </div>

      <HowItWorksSteps />
    </>
  );
};

export default FarmhousePage;
