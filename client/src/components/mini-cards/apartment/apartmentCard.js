import React, { useState } from "react";
import "./apartmentCard.css";
import { useNavigate } from "react-router-dom";
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RentContactForm from "../../modal/rentContactForm/RentContactForm";

const ApartmentCard = ({ apartment }) => {
  const navigate = useNavigate();

  //view more
  const viewMore = (propertyid) => {
    navigate(`/villa-resort-apartment-details/${propertyid}`);
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
    <div className="apartment-card">
      <section
        className="apartment-card-ub"
        style={{
          backgroundImage: `url(${apartment.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // Set the desired height
        }}
      >
        <div className=" details-btn-wrap">
          <button
            className="btn btn-warning view-apartment-details-btn"
            onClick={() => viewMore(apartment._id)}
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
          <div style={{ paddingLeft: " 1rem", paddingRight: " 1rem" }}>
            {apartment.landmark}, {apartment.city}, {apartment.state}
          </div>
          {apartment.propertyAdType === "rent" ? (
            <div>
              {apartment.rentPrice}
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
        {apartment.propertyAdType === "sell" ? (
          <section className="apartment-card-lb">
            <div>
              <section>
                <p>TOTAL SHARES</p>
                <p className="dummy-border"></p>
                <p>{apartment.totalShares}</p>
              </section>
              <section>
                <p>AVAILABLE SHARES</p>
                <p className="dummy-border"></p>
                <p>{apartment.availableShares}</p>
              </section>
              <section>
                <p>PRICE PER SHARE</p>
                <p className="dummy-border"></p>
                <p>{apartment.perSharePrice}</p>
              </section>
            </div>
          </section>
        ) : null}

        {apartment.propertyAdType === "sell" ? (
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
      </section>
      {/* reserve share modal */}
      <Modal open={open} onClose={handleCloseModal} center id="modal">
        <ReserveShares
          totalShares={apartment.totalShares}
          availableShares={apartment.availableShares}
          perSharePrice={apartment.perSharePrice}
          handleCloseModal={handleCloseModal}
          details={apartment}
        />
      </Modal>

      {/* contact modal */}
      <Modal open={openContact} onClose={handleCloseContactModal} center>
        <RentContactForm
          handleCloseContactModal={handleCloseContactModal}
          details={apartment}
        />
      </Modal>
    </div>
  );
};

export default ApartmentCard;
