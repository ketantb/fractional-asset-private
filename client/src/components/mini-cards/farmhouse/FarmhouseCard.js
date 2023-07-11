import React, { useState } from "react";
import "./FarmhouseCard.css";
import { useNavigate } from "react-router-dom";
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RentContactForm from "../../modal/rentContactForm/RentContactForm";

const FarmhouseCard = ({ farmhouse, getData }) => {
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
    <div className="farmhouse-card">
      <section
        className="farmhouse-card-ub"
        style={{
          backgroundImage: `url(${farmhouse.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // Set the desired height
        }}
      >
        <div className=" details-btn-wrap">
          <button
            className="btn btn-warning view-farmhouse-details-btn"
            onClick={() => viewMore(farmhouse._id)}
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
            {farmhouse.landmark}, {farmhouse.city}, {farmhouse.state}
          </div>
          {farmhouse.propertyAdType === "rent" ? (
            <div>
              {farmhouse.rentPrice}
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
        {farmhouse.propertyAdType === "sell" ? (
          <section className="farmhouse-card-lb">
            <div>
              <section>
                <p>Total Shares</p>
                <p className="dummy-border"></p>
                <p>{farmhouse.totalShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Availabe Shares</p>
                <p className="dummy-border"></p>
                <p>{farmhouse.availableShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Price / Share</p>
                <p className="dummy-border"></p>
                <p>{farmhouse.perSharePrice}</p>
              </section>
            </div>
          </section>
        ) : null}

        {farmhouse.propertyAdType === "sell" ? (
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
          totalShares={farmhouse.totalShares}
          availableShares={farmhouse.availableShares}
          perSharePrice={farmhouse.perSharePrice}
          handleCloseModal={handleCloseModal}
          details={farmhouse}
        />
      </Modal>

      {/* contact modal */}
      <Modal open={openContact} onClose={handleCloseContactModal} center>
        <RentContactForm
          handleCloseContactModal={handleCloseContactModal}
          details={farmhouse}
        />
      </Modal>
    </div>
  );
};

export default FarmhouseCard;
