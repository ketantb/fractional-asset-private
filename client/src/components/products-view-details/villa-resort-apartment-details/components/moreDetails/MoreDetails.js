import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./MoreDetails.css";

const MoreDetails = ({ data }) => {
  const [viewAllDetails, setViewAllDetails] = useState(false);

  return (
    <section className="more-details">
      <h1>More Details</h1>
      <div className="info">
        <div>
          <p>Apartment Name</p>
          <p>{data.apartmentName}</p>
        </div>
        <div>
          <p>Carpet Area</p>
          <p>{data.carpetArea}</p>
        </div>
        <div>
          <p>Facing</p>
          <p>{data.facing}</p>
        </div>
        <div>
          <p>Flooring Type</p>
          <p>{data.flooringType}</p>
        </div>
        <div>
          <p>Furnishing</p>
          <p>{data.furnishing}</p>
        </div>
      </div>
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
            <p>Property Type</p>
            <p>{data.propertyType}</p>
          </div>
          <div>
            <p>Rera Id</p>
            <p>{data.reraId}</p>
          </div>
          <div>
            <p>Possession Status</p>
            <p>{data.possessionStatus}</p>
          </div>
          <div>
            <p>Posted On</p>
            <p>{data.postedOn}</p>
          </div>
          <div>
            <p>Seller Name</p>
            <p>{data.sellerName}</p>
          </div>
          <div>
            <p>Seller Type</p>
            <p>{data.sellerType}</p>
          </div>
        </div>
      )}
      <p className="description">
        <span>Description:</span> This Designer Builder floor apartment is
        beautifully designed and comes with high end and rich specifications.
      </p>
      <button className="contact-button">Contact Agent</button>
    </section>
  );
};

export default MoreDetails;
