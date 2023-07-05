import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import "./MoreDetails.css";

const MoreDetails = ({ data }) => {
  const [viewAllDetails, setViewAllDetails] = useState(false);

  return (
    <section className="more-details">
      <h1>More Details</h1>
      <div className="info">
        <div>
          <p>Name</p>
          <p>{data.apartmentName || "---"}</p>
        </div>
        <div>
          <p>Super Area</p>
          <p>{data.carpetArea || "---"}</p>
        </div>
        <div>
          <p>Carpet Area</p>
          <p>{data.carpetArea || "---"}</p>
        </div>
        <div>
          <p>Furnishing</p>
          <p>{data.furnishing || "---"}</p>
        </div>
      </div>
      {viewAllDetails && (
        <p
          onClick={() => setViewAllDetails(!viewAllDetails)}
          className="view-button"
        >
          <span>Hide Details</span>
          <span>
            <MdKeyboardArrowUp style={{ fontSize: "larger" }} />
          </span>
        </p>
      )}
      {!viewAllDetails && (
        <p
          onClick={() => setViewAllDetails(!viewAllDetails)}
          className="view-button"
        >
          <span>View All Details</span>
          <span>
            <MdKeyboardArrowDown style={{ fontSize: "larger" }} />
          </span>
        </p>
      )}
      {viewAllDetails && (
        <div className="info">
          <div>
            <p>Bedrooms</p>
            <p>{data.bedroom || "---"}</p>
          </div>
          <div>
            <p>Bathrooms</p>
            <p>{data.bathroom || "---"}</p>
          </div>
          <div>
            <p>Total Floors</p>
            <p>{data.totalFloors || "---"}</p>
          </div>
          <div>
            <p>Total Floors</p>
            <p>{data.totalFloors || "---"}</p>
          </div>
          <div>
            <p>House Floor</p>
            <p>{data.floorNo || "---"}</p>
          </div>
          <div>
            <p>Facing</p>
            <p>{data.facing || "---"}</p>
          </div>
          <div>
            <p>Overlooking</p>
            <p>{data.overlooking || "---"}</p>
          </div>
          <div>
            <p>Flooring Type</p>
            <p>{data.flooringType || "---"}</p>
          </div>
          <div>
            <p>Total Balconies</p>
            <p>{data.totalBalconies || "---"}</p>
          </div>
          <div>
            <p>Total Lifts</p>
            <p>{data.totalLifts || "---"}</p>
          </div>
          <div>
            <p>Water Availability</p>
            <p>{data.waterAvailability || "---"}</p>
          </div>
          <div>
            <p>Possession Status</p>
            <p>{data.possessionStatus || "---"}</p>
          </div>
          <div>
            <p>Ownership Type </p>
            <p>{data.typeOfOwnership || "---"}</p>
          </div>
        </div>
      )}
      <p className="description">
        <span>Description:</span> This Designer Builder floor apartment is
        beautifully designed and comes with high end and rich specifications.
      </p>
      {/* <button className="contact-button">Contact Agent</button> */}
    </section>
  );
};

export default MoreDetails;