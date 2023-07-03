import React, { useState } from "react";
import "./LandCard.css";
import { useNavigate } from "react-router-dom";
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RentContactForm from "../../modal/rentContactForm/RentContactForm";

const LandCard = ({ land, getData }) => {
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
    <div className="land-card">
      <section
        className="land-card-ub"
        style={{
          backgroundImage: `url(${land.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // Set the desired height
        }}
      >
        <div className=" details-btn-wrap">
          <button
            className="btn btn-warning view-land-details-btn"
            onClick={() => viewMore(land._id)}
          >
            View More
          </button>
        </div>
      </section>
      <section className="footer-section">
        <div
          style={{
            display: "flex",
            textTransform: "capitalize",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {land.landmark}, {land.city}, {land.state}
          </div>
          {land.propertyAdType === "rent" ? (
            <div>
              {land.rentPrice}
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
        {land.propertyAdType === "sell" ? (
          <section className="land-card-lb">
            <div>
              <section>
                <p>Total Shares</p>
                <p className="dummy-border"></p>
                <p>{land.totalShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Availabe Shares</p>
                <p className="dummy-border"></p>
                <p>{land.availableShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Price / Share</p>
                <p className="dummy-border"></p>
                <p>{land.perSharePrice}</p>
              </section>
            </div>
          </section>
        ) : null}

        {land.propertyAdType === "sell" ? (
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
          getData={getData}
          totalShares={land.totalShares}
          availableShares={land.availableShares}
          perSharePrice={land.perSharePrice}
          handleCloseModal={handleCloseModal}
          details={land}
        />
      </Modal>

      {/* contact modal */}
      <Modal open={openContact} onClose={handleCloseContactModal} center>
        <RentContactForm
          handleCloseContactModal={handleCloseContactModal}
          details={land}
        />
      </Modal>
    </div>
  );
};

export default LandCard;
