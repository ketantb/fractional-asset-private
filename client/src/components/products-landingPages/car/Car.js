import React, { useEffect, useState } from "react";
import "./Car.css";
import axios from "../../../helpers/axios";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaParking } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import CarCard from "../../mini-cards/car/CarCard";
import PreLoader from "../../../pre-loaders/PreLoader";

const CarPage = () => {
  const [allCars, setAllCars] = useState([]);

  //get all cars data
  const getAllCarsData = async () => {
    try {
      const response = await axios.get("/listing-all-cars");
      console.log(response.data.list);
      setAllCars(response.data.list);
    } catch (err) {}
  };
  useEffect(() => {
    getAllCarsData();
    window.scrollTo(0, 0);
  }, []);

  if (!allCars) {
    return <PreLoader />;
  }

  return (
    <div className="car-landing-page-wrapper">
      <div className="banner-section row1">
        <div className="content">
          <h1>Upgrade your lifestyle!</h1>
          <h6>
            By only paying 10% to buy your{" "}
            <span style={{ color: "red" }}>DREAM CAR</span> now.
          </h6>
        </div>
      </div>

      {/* section 2 */}
      <div className="row2 why-section">
        <h2>WHY FRACTIONAL CARS?</h2>
        <div className="cards-wrap">
          <div className="card" data-aos="zoom-in">
            <div className="icon-wrap">
              <HiOutlineUserGroup className="icon" style={{ color: "" }} />
            </div>
            <p data-aos="fade-up">
              You co-own with a trusted community of users i.e. your
              co-residents.
            </p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="icon-wrap">
              <FaParking className="icon" style={{ color: "red" }} />
            </div>
            <p data-aos="fade-up">
              The car is parked at your residential society for everyone's
              convenience.
            </p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="icon-wrap">
              <FaCar className="icon" />
            </div>
            <p data-aos="fade-up">
              It is a newly bought white plate car from the showroom.
            </p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="icon-wrap">
              <FaChartLine className="icon" style={{ color: "#ECB519" }} />
            </div>
            <p data-aos="fade-up">
              You get 50%-60% of your investment back as we re-sell the car
              after 5 years.
            </p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="icon-wrap">
              <GiTakeMyMoney className="icon" style={{ color: "green" }} />
            </div>
            <p data-aos="fade-up">
              It's a one-time investment. No loan! No EMI!
            </p>
          </div>
          <div className="card" data-aos="zoom-in">
            <div className="icon-wrap">
              <MdOutlineMiscellaneousServices
                className="icon"
                style={{ color: "brown" }}
              />
            </div>
            <p data-aos="fade-up">
              Prorata takes care of the service, maintenance & insurance of the
              car.
            </p>
          </div>
        </div>
      </div>
      {/* section 2 ends */}

      {/* section 3 */}
      <h4 className="only-heading">BUY FRACTIONAL CARS</h4>
      <div className="all-cars-wrapper">
        {allCars
          .filter((car) => {
            if (car.propertyAdType === "sell") {
              return car;
            }
          })
          .map((car, i) => {
            return <CarCard key={i} car={car} />;
          })}
      </div>
      {/* section 3 ends */}

      {/* section 4 */}
      <h4 className="only-heading">RENTAL CARS</h4>

      <div className="all-cars-wrapper">
        {allCars
          .filter((car) => {
            if (car.propertyAdType === "rent") {
              return car;
            }
          })
          .map((car, i) => {
            return <CarCard key={i} car={car} />;
          })}
      </div>
      {/* section 3 ends */}
    </div>
  );
};


export default CarPage;