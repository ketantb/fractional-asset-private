import React, { useState } from "react";
import "./Resort.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReserveShares from "../../modal/reserveShares/ReserveShares";

const Resort = ({ data }) => {
  //reserve share modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <hp>
              {data.city}, {data.state}
            </hp>
          </div>
        </div>
        <div className="card-footer-rb">
          <button className="btn btn-danger view-more">VIEW MORE</button>
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