import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RentContactForm from "../../modal/rentContactForm/RentContactForm";

const Card = ({ data, getData }) => {
  const navigate = useNavigate();
  //view more
  const viewMore = (propertyid) => {
    navigate(`/villa-resort-data-details/${propertyid}`);
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
    <div className="list-card">
      <section
        className="list-card-ub"
        style={{
          backgroundImage: `url(${data.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // Set the desired height
        }}
      >
        <div className=" details-btn-wrap">
          <button
            className="btn btn-warning view-data-details-btn"
            onClick={() => viewMore(data._id)}
          >
            View More
          </button>
        </div>
      </section>
      <section className="footer-section">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textTransform: "capitalize",
            justifyContent: "space-between",
          }}
        >
          <div className="capitalize ml-4 opacity-25">{data.propertyType}</div>
          <div
            style={{
              fontFamily: "serif",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {data.landmark}, {data.city}, {data.state}
          </div>
          {data.propertyAdType === "rent" ? (
            <div>
              {data.rentPrice}
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
        {data.propertyAdType === "sell" ? (
          <section className="list-card-lb">
            <div>
              <section>
                <p>Total Shares</p>
                <p className="dummy-border"></p>
                <p>{data.totalShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Availabe Shares</p>
                <p className="dummy-border"></p>
                <p>{data.availableShares}</p>
              </section>
              <div className="dummy-vertical"></div>
              <section>
                <p>Price / Share</p>
                <p className="dummy-border"></p>
                <p>{data.perSharePrice}</p>
              </section>
            </div>
          </section>
        ) : null}

        {data.propertyAdType === "sell" ? (
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
          totalShares={data.totalShares}
          availableShares={data.availableShares}
          perSharePrice={data.perSharePrice}
          handleCloseModal={handleCloseModal}
          details={data}
        />
      </Modal>

      {/* contact modal */}
      <Modal open={openContact} onClose={handleCloseContactModal} center>
        <RentContactForm
          handleCloseContactModal={handleCloseContactModal}
          details={data}
        />
      </Modal>
    </div>
  );
};

export default Card;
