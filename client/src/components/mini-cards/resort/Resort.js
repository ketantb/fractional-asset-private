import React, { useState } from "react";
import "./Resort.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReserveShares from "../../modal/reserveShares/ReserveShares";
import { useNavigate } from "react-router-dom";

const Resort = ({ data }) => {
  const navigate = useNavigate();
  //reserve share modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //view more
  const viewMore = (propertyid) => {
    navigate(`/villa-resort-apartment-details/${propertyid}`);
  };
  return (
    <div className="property-card-container">
      <div
        id="property-card-img"
        style={{
          background: `url(${data.imgArr[0]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="card-footer">
        <div className="card-footer-lb">
          <div className="resortname">
            <h6>{data.resortName}</h6>
            <h6>
              {data.city}, {data.state}
            </h6>
          </div>
        </div>
        <div className="card-footer-rb">
          <button
            className="btn btn-danger view-more"
            onClick={() => viewMore(data._id)}
          >
            VIEW MORE
          </button>
          <button
            className="btn btn-success"
            id="reserve-btn"
            onClick={handleOpen}
          >
            RESERVE SHARES
          </button>
        </div>
      </div>

      <>
        <Modal open={open} onClose={handleClose} center>
          <ReserveShares
            totalShares={data.totalShares}
            availableShares={data.availableShares}
            perSharePrice={data.perSharePrice}
            handleClose={handleClose}
            details={data}
          />
        </Modal>
      </>
    </div>
  );
};

export default Resort;
