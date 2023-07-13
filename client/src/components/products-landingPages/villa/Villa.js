import React, { useState, useEffect } from "react";
import "./Villa.css";
import VillaContainer from "../../mini-cards/villa/villacard";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import DLBrochure from "../../website-details/DLBrochure/DLBrochure";
import HowItWorksSteps from "../../website-details/how-it-works/howitworks-step/steps";
import villaStikcer from "../../../assets/villaimg.png";

const VillaPage = () => {
  //get all villas
  const [villaData, setVillaData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-villa");
      console.log(response.data.list);
      setVillaData(response.data.list);
    } catch (err) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  if (!villaData) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="villa-page-container">
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
            <img src={villaStikcer} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <p>
              Escape to a world of opulence and tranquility at Fractional
              Villas. Nestled in the breathtaking surroundings, our exclusive
              villa offers an extraordinary retreat for those seeking the
              pinnacle of luxury and privacy. With impeccable design, lavish
              amenities, and breathtaking views, immerse yourself in a truly
              exceptional living experience.
            </p>
          </div>
        </div>

        {villaData.length !== 0 ? (
          <section className="outer-wrap">
            <h4>FRACTIONAL VILLAS</h4>
            <div className="villa-card-container">
              {villaData
                .filter((villa) => {
                  if (villa.propertyAdType === "sell") {
                    return villa;
                  }
                })
                .map((villa) => {
                  return <VillaContainer villa={villa} />;
                })}
            </div>

            <DLBrochure />

            <h4>RENTAL VILLAS</h4>
            <div className="villa-card-container">
              {villaData
                .filter((villa) => {
                  if (villa.propertyAdType === "rent") {
                    return villa;
                  }
                })
                .map((villa) => {
                  return <VillaContainer villa={villa} />;
                })}
            </div>
          </section>
        ) : null}
      </div>

      <HowItWorksSteps />
    </>
  );
};

export default VillaPage;
