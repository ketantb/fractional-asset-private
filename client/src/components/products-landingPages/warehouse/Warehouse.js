import React, { useState, useEffect } from "react";
import "./Warehouse.css";

const WareHousePage = () => {
  //   //get all villas
  //   const [villaData, setVillaData] = useState([]);
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get("/listing-all-villa");
  //       console.log(response.data.list);
  //       setVillaData(response.data.list);
  //     } catch (err) {}
  //   };

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     getData();
  //   }, []);

  //   if (!villaData) {
  //     return <PreLoader />;
  //   }

  return (
    <div className="warehouse-page-container">
      <div className="bg-image"></div>

      {/* {villaData.length !== 0 ? (
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
                return <VillaContainer villa={villa} getData={getData} />;
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
      ) : null} */}
    </div>
  );
};

export default WareHousePage;