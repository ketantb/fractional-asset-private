import "./real-estate-previewpage.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import facilityIcon from "../../../assets/towel-rack.png";
import AdditionalInfo from "../apartment-form/FormSteps/AdditiionalInfo";

const RealEstatePreviewPage = ({
  propertyData,
  locality,
  images,
  aminities,
  additionalDetails,
  handleClose,
  handleUploadImages,
}) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  return (
    <div className="real-estate-form-preview-wrapper">
      <header className="real-estate-form-preview-header">
        <h2>Preview Property</h2>
        <h2>
          <button onClick={handleClose}>
            <ImCross />
          </button>
        </h2>
      </header>
      <h4>
        <span>
          <MdLocationPin />
        </span>
        {locality?.street}, {locality?.landmark}, {locality?.city},{" "}
        {locality?.pin}, {locality?.state}
      </h4>
      <div className="villa-details-table">
        <section>
          <p>Seller</p>
          <p className="villa-details-table-value">Mane</p>
        </section>
        <div className="villa-details-table-dummy-border"></div>
        <section>
          <p>Property Age</p>
          <p className="villa-details-table-value">
            {propertyData.propertyAge}
          </p>
        </section>
        <p className="villa-details-table-dummy-border"></p>
        <section>
          <p>Property Area</p>
          <p className="villa-details-table-value">{propertyData.area} sq ft</p>
        </section>
        <p className="villa-details-table-dummy-border"></p>
        <section>
          <p>Total Shares</p>
          <p className="villa-details-table-value">
            {propertyData.totalShares}
          </p>
        </section>
        <p className="villa-details-table-dummy-border"></p>
        <section>
          <p>Available Shares</p>
          <p className="villa-details-table-value">
            {propertyData.availableShares}
          </p>
        </section>
        <p className="villa-details-table-dummy-border"></p>
        <section>
          <p>Price Per Share</p>
          <p className="villa-details-table-value">
            {propertyData.perSharePrice}
          </p>
        </section>
      </div>

      {/* image-corousal */}
      {images.length > 0 ? (
        <section className="villa-details-r2">
          <div className="villa-corousel-current-img">
            <img src={URL.createObjectURL(currentImg)} alt="property-img" />
          </div>
          <div className="villa-corousel-all-img">
            {images.map((image) => {
              return (
                <>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="property-img"
                    onClick={() => {
                      setCurrentImg(image);
                    }}
                  />
                </>
              );
            })}
          </div>
        </section>
      ) : null}

      <div className="property-form-preview-property-details">
        <h4>Property Details</h4>
        <p>RERA ID: {propertyData.reraId}</p>
        {/* <p>Property ID: {propertyData.propertyId}</p> */}
        <p>Total Bedrooms: {propertyData.bedroom}</p>
        <p>Total Bathrooms: {propertyData.bathroom}</p>
      </div>

      <div className="property-form-preview-property-additional-info">
        <h4>About Property</h4>
        <p>{additionalDetails}</p>
      </div>

      <div className="property-form-preview-aminities">
        {aminities.length > 0 ? (
          <div className="facility-outer-wrap">
            <h4>
              <span>
                <img src={facilityIcon} alt="overview-img-icon" />
              </span>
              Aminities
            </h4>
            <div className="facility-inner-wrap">
              {aminities.map((aminity, i) => {
                return (
                  <section>
                    <h6>{aminity}</h6>
                  </section>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
      <div className="preview-property-post-btn-wrapper">
        <button
          className="preview-property-post-btn"
          onClick={handleUploadImages}
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default RealEstatePreviewPage;
