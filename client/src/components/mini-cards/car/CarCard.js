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

  //view images modal
  const [openImg, setImgOpen] = useState(false);
  const openImagesModal = () => {
    setImgOpen(true);
  };
  const closeImagesModal = () => {
    setImgOpen(false);
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
    <div className="car-card" data-aos="fade-down">
      <div
        className="car-image"
        style={{
          backgroundImage: `url(${car.imgArr[0]})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <span className="view-car-images-icon">
          <BiImages onClick={openImagesModal} />
        </span>
      </div>
      <div className="car-details">
        <div className="car-details-head">
          <h5 className="manufacturer" style={{ textTransform: "capitalize" }}>
            {car.model}, {car.manufacturer}
          </h5>
          <div>
            <button
              className="btn btn-success"
              onMouseEnter={openMoreDetails}
              onMouseLeave={closeMoreDetails}
              style={{ width: "9rem" }}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="last-row">
          {car.propertyAdType === "rent" ? (
            <h5 className="price">
              <span>
                <BiRupee />
              </span>
              {car.rentPrice}
            </h5>
          ) : (
            <h5 className="price">
              <span>
                <BiRupee />
              </span>
              {car.perSharePrice}
            </h5>
          )}

          {car.propertyAdType === "sell" ? (
            car.availableShares !== 0 ? (
              <button
                className="btn btn-danger"
                id="reserve-btn"
                onClick={handleOpenModal}
                style={{ width: "9rem" }}
              >
                Reserve Shares
              </button>
            ) : (
              <button className="btn btn-danger" style={{ fontWeight: "bold" }}>
                SOLD OUT !
              </button>
            )
          ) : (
            <button
              className="btn btn-danger"
              onClick={handleOpenContactModal}
              style={{ width: "9rem" }}
            >
              Contact
            </button>
          )}
        </div>
      </div>

      {moreDetailsShow ? (
        <div className="more-details">
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

      {/* image modal */}
      <Modal open={openImg} onClose={closeImagesModal} center>
        <ViewProductImages
          images={car.imgArr}
          closeImagesModal={closeImagesModal}
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
