import React, { useState } from "react";
import "./villacard.css";
import { useNavigate } from "react-router-dom";
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import RentContactForm from "../../modal/rentContactForm/RentContactForm";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const VillaContainer = ({ villa }) => {
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
    <div className="villa-card">
      <section
        className="villa-card-ub"
        style={{
          backgroundImage: `url(${villa.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // Set the desired height
        }}
      >
        <div className=" details-btn-wrap">
          <button
            className="btn btn-warning view-villa-details-btn"
            onClick={() => viewMore(villa._id)}
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
            {villa.landmark}, {villa.city}, {villa.state}
          </div>
          {villa.propertyAdType === "rent" ? (
            <div>
              {villa.rentPrice}
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
        {villa.propertyAdType === "sell" ? (
          <section className="villa-card-lb">
            <div>
              <section>
                <p>TOTAL SHARES</p>
                <p className="dummy-border"></p>
                <p>{villa.totalShares}</p>
              </section>
              <section>
                <p>AVAILABLE SHARES</p>
                <p className="dummy-border"></p>
                <p>{villa.availableShares}</p>
              </section>
              <section>
                <p>PRICE PER SHARE</p>
                <p className="dummy-border"></p>
                <p>{villa.perSharePrice}</p>
              </section>
            </div>
          </section>
        ) : null}

        {villa.propertyAdType === "sell" ? (
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
          totalShares={villa.totalShares}
          availableShares={villa.availableShares}
          perSharePrice={villa.perSharePrice}
          handleCloseModal={handleCloseModal}
          details={villa}
        />
      </Modal>

      {/* contact modal */}
      <Modal open={openContact} onClose={handleCloseContactModal} center>
        <RentContactForm
          handleCloseContactModal={handleCloseContactModal}
          details={villa}
        />
      </Modal>
    </div>
  );
};

export default VillaContainer;
