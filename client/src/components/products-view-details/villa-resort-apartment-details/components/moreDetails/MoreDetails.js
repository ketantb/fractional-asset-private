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
          {data.propertyType === "land" ||
            data.propertyType === "agri-land" ? (
            <p>{data.plotSize || "---"}</p>
          ) : (
            <p>{data.area || "---"}</p>
          )}
        </div>
        {data.propertyType === "land" ||
          data.propertyType === "agri-land" ? null : (
          <div>
            <p>Carpet Area</p>
            <p>{data.carpetArea || "---"}</p>
          </div>
        )}

        {data.propertyType === "land" ||
          data.propertyType === "agri-land" ? null : (
          <div>
            <p>Furnishing</p>
            <p>{data.furnishing || "---"}</p>
          </div>
        )}
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
          {data.propertyType === "land" ||
            data.propertyType === "agri-land" ? (
            <>
              <div>
                <p>Length</p>
                <p>{data.dimensionLength || "---"}</p>
              </div>
              <div>
                <p>Breadth</p>
                <p>{data.dimensionBreadth || "---"}</p>
              </div>
              <div>
                <p>Soil Texture</p>
                <p>{data.soilTexture || "---"}</p>
              </div>
              <div>
                <p>Soil PH value</p>
                <p>{data.soilPHValue || "---"}</p>
              </div>
              <div>
                <p>Soil Organic Matter Content</p>
                <p>{data.organicMatterContent || "---"}</p>
              </div>
            </>
          ) : (
            <>
              {data.propertyType === "shop" ? null : (
                <>
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
                    <p>Floor No</p>
                    <p>{data.totalFloors || "---"}</p>
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
                </>
              )}
            </>
          )}
          {data.propertyType === "land" ||
            data.propertyType === "agri-land" ? (
            <div>
              <p>Possession Status</p>
              <p>Under Constrution</p>
            </div>
          ) : (
            <div>
              <p>Possession Status</p>
              <p>{data.possessionStatus || "---"}</p>
            </div>
          )}

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
