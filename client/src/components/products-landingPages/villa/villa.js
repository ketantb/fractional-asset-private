import React, { useState, useEffect } from "react";
import "./villa.css";
import VillaContainer from "../../mini-cards/villa/villacard";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";

const VillaPage = () => {
  //get all villas
  const [villaData, setVillaData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-villa");
      console.log(response.data.list);
      setVillaData(response.data.list);
    } catch (err) { }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  if (!villaData) {
    return <PreLoader />;
  }

  return (
    <div className="villa-page-container">
      <div className="bg-image">
        <h2>
          Be the owner of a portion of a luxury villa.
        </h2>
      </div>

      {villaData.length !== 0 ? (
        <section>
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
  );
};

export default VillaPage;
