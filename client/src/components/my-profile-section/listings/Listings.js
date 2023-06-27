import React, { useEffect, useState } from "react";
import "./Listings.css";
import SellRow from "../table-row-to-show-property-details-in-table/SellRow";
import RentRow from "../table-row-to-show-property-details-in-table/RentRow";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";

const Listings = () => {
  const token = localStorage.getItem("token");

  //get all posted property data of seller from backend  ()
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/get-data", {
        headers: {
          authorization: token,
        },
      });
      console.log("resp=>", response.data.DocsList);
      setAllData(response.data.DocsList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();

    // eslint-disable-next-line
  }, []);

  if (!allData) {
    return <PreLoader />;
  }

  return (
    <div className="listings-wrap">
      {/* section 1 sell/fractional */}
      <div className="header-row1">
        <h5>FRACTIONAL PROPERTIES</h5>
        <p>
          Results<span>1</span>
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Posted On</th>
              <th scope="col">Type</th>
              <th scope="col">Total Shares</th>
              <th scope="col">Price/share</th>
              <th scope="col">Available shares</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData
              .filter((data) => {
                if (data.propertyAdType === "sell") {
                  return data;
                }
              })
              .map((selldata, i) => {
                return <SellRow data={selldata} getData={getData} />;
              })}
          </tbody>
        </table>
      </div>
      {/* section 1 ends */}

      {/* section 2 rent */}
      <div className="header-row2">
        <h5>RENTAL PROPERTIES</h5>
        <p>
          Results<span>1</span>
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Posted On</th>
              <th scope="col">Type</th>
              <th scope="col">Rental Price/month</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData
              .filter((data) => {
                if (data.propertyAdType === "rent") {
                  return data;
                }
              })
              .map((rentdata, i) => {
                return <RentRow data={rentdata} getData={getData} />;
              })}
          </tbody>
        </table>
      </div>
      {/* section 2 ends */}
    </div>
  );
};

export default Listings;
