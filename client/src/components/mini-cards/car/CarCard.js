import React, { useEffect, useState } from "react";
import "./CarCard.css";
import { BiRupee } from "react-icons/bi";
import { BiImages } from "react-icons/bi";
//modal for resever share form
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import RentContactForm from "../../modal/rentContactForm/RentContactForm";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ViewProductImages from "../view-product-images/view-product-images";

const CarCard = ({ car }) => {
  //on mouse enter show more details section
  const [moreDetailsShow, setMoreDetailsShow] = useState(false);
  const openMoreDetails = () => {
    setMoreDetailsShow(true);
  };
  const closeMoreDetails = () => {
    setMoreDetailsShow(false);
  };

  // handle reserve shares form modal
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  //handle rent contact form
  const [openContact, setOpenContact] = useState(false);
  const handleOpenContactModal = () => {
    setOpenContact(true);
  };
  const handleCloseContactModal = () => {
    setOpenContact(false);
  };

  return (
    <div className="car-card">
      <section
        className="car-card-ub"
        style={{
          backgroundImage: `url(${car.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // Set the desired height
        }}
      >
        <div className=" details-btn-wrap">
          <button
            className="btn btn-warning view-car-details-btn"
            onMouseEnter={openMoreDetails}
            onMouseLeave={closeMoreDetails}
          >
            View More
          </button>
        </div>
      </section>
      <section className="footer-section">
        <div
          style={{
            textTransform: "capitalize",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              paddingLeft: " 1rem",
              paddingRight: " 1rem",
            }}
          >
            {car.landmark || "Car Landmark"}, {car.city || "Car City"},{" "}
            {car.state || "Car State"}
          </div>
          {car.propertyAdType === "rent" ? (
            <div>
              {car.rentPrice}
              <span
                style={{
                  opacity: ".5",
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                }}
              >{`/month`}</span>
            </div>
          ) : null}
        </div>
        {car.propertyAdType === "sell" ? (
          <section className="car-card-lb">
            <div>
              <section>
                <p>Total Shares</p>
                <p className="dummy-border"></p>
                <p>{car.totalShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Availabe Shares</p>
                <p className="dummy-border"></p>
                <p>{car.availableShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Price / Share</p>
                <p className="dummy-border"></p>
                <p>{car.perSharePrice}</p>
              </section>
            </div>
          </section>
        ) : null}

        {car.propertyAdType === "sell" ? (
          <div className="reserve-share-btn-wrap">
            <button className="btn btn-success" onClick={handleOpenModal}>
              RESERVE SHARES
            </button>
          </div>
        ) : (
          <div className="contact-btn-wrap">
            <button
              className="btn btn-success"
              onClick={handleOpenContactModal}
            >
              CONTACT
            </button>
          </div>
        )}

        {moreDetailsShow ? (
          <div className="car-more-details">
            <table>
              <tr>
                <td>Mileage</td>
                <td>{car.mileage}</td>
              </tr>
              <tr>
                <td>engineType</td>
                <td>{car.engineType}</td>
              </tr>
              <tr>
                <td>fuelType</td>
                <td>{car.fuelType}</td>
              </tr>
              <tr>
                <td>transmission</td>
                <td>{car.transmission}</td>
              </tr>
              <tr>
                <td>vinNumber</td>
                <td>{car.vinNumber}</td>
              </tr>
              <tr>
                <td>exteriorColor</td>
                <td>{car.mileage}</td>
              </tr>
              <tr>
                <td>interiorColor</td>
                <td>{car.interiorColor}</td>
              </tr>
              {car.propertyAdType === "rent" ? (
                <tr>
                  <td>Rent Price</td>
                  <td>
                    <span>
                      <BiRupee />
                    </span>
                    {car.rentPrice}
                    {`/day`}
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td>Total Shares</td>
                    <td>{car.totalShares}</td>
                  </tr>
                  <tr>
                    <td>Available Shares</td>
                    <td>{car.availableShares}</td>
                  </tr>
                  <tr>
                    <td>1 Share Price</td>
                    <td>
                      <span>
                        <BiRupee />
                      </span>
                      {car.perSharePrice}
                    </td>
                  </tr>
                </>
              )}
            </table>
          </div>
        ) : null}
      </section>

      {/* reserve share modal */}
      <Modal open={open} onClose={handleCloseModal} center id="modal">
        <ReserveShares
          totalShares={car.totalShares}
          availableShares={car.availableShares}
          perSharePrice={car.perSharePrice}
          handleCloseModal={handleCloseModal}
          details={car}
        />
      </Modal>

      {/* contact modal */}
      <Modal open={openContact} onClose={handleCloseContactModal} center>
        <RentContactForm
          handleCloseContactModal={handleCloseContactModal}
          details={car}
        />
      </Modal>
    </div>
  );
};

export default CarCard;
