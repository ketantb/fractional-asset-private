import React, { useEffect, useState } from "react";
import "./ResortPage.css";
import Resort from "../../mini-cards/resort/Resort";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";

const ResortPage = () => {
  const [resortData, setReosrtData] = useState([]);
  //get all resortData
  const getData = async () => {
    try {
      const response = await axios.get("/listing-all-resort");
      console.log(response.data.allresorts);
      setReosrtData(response.data.allresorts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  if (!resortData) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="resortBanner"></div>
      <div className="home-content">
        <div className="content-wrapper" data-aos="zoom-in" data-aos-delay="80">
          <h4>
            Discover fractional Resorts, a prestigious collection of independent
            luxury hotels & resorts India. A world of unrivalled luxury and
            hospitality. Check out our beautiful properties right away!
          </h4>
        </div>
      </div>

      <div className="resort-card-wrap">
        {resortData.map((data, i) => {
          return <Resort data={data} />;
        })}
      </div>
    </>
  );
};

export default ResortPage;
