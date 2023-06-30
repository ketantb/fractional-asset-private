import React, { useEffect, useState } from "react";
import "./Car.css";
import axios from "../../../helpers/axios";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaParking } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";

import carCheckSticker from "../../../assets/car-check.png";

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
    <>
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
          <h2>
            Why Fractional Cars<span>?</span>
          </h2>
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
                Prorata takes care of the service, maintenance & insurance of
                the car.
              </p>
            </div>
          </div>
        </div>
        {/* section 2 ends */}

        {/* section 3 */}
        <h1 className="section3-heading">
          Let's compare Renting with Co-owning a car<span>!</span>
        </h1>

        <div className="section3">
          <div className="col1">
            <section className="img-wrap">
              <img src={carCheckSticker} alt="" />
            </section>
          </div>
          <div className=" col2">
            <section className="button-wrap">
              <div className="button">Features</div>
              <div className="button">Prorata</div>
              <div className="button">Rent</div>
              <div className="button">Price </div>
              <div className="button">X </div>
              <div className="button">5X</div>
              <div className="button">Convenient</div>
              <div className="button">High</div>
              <div className="button">Low</div>
              <div className="button">Quality</div>
              <div className="button">High</div>
              <div className="button">Low</div>
              <div className="button">Number Plate </div>
              <div className="button">White </div>
              <div className="button">Yellow</div>
              <div className="button">Recognition</div>
              <div className="button">Own</div>
              <div className="button">Rent</div>
            </section>
          </div>
        </div>
        {/* section 3 ends */}
        <p className="dummy-title">CHECK PROPERTIES RIGHT AWAY !</p>
        <div className="down-arrow">
          <AiOutlineArrowDown className="icon" />
        </div>

        {/* CAR - Fractional & Rental */}
        {allCars.length !== 0 ? (
          <section className="car-cards">
            <h4>FRACTIONAL CARS</h4>
            <div className="car-card-container">
              {allCars
                .filter((car) => {
                  if (car.propertyAdType === "sell") {
                    return car;
                  }
                })
                .map((car) => {
                  return <CarCard car={car} />;
                })}
            </div>

            <h4>RENTAL CARS</h4>
            <div className="car-card-container">
              {allCars
                .filter((car) => {
                  if (car.propertyAdType === "rent") {
                    return car;
                  }
                })
                .map((car) => {
                  return <CarCard car={car} />;
                })}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default CarPage;
