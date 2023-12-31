import { useEffect, useState } from "react";
import "./villa-details.css";
import { MdLocationPin } from "react-icons/md";
import overviewIcon from "../../../assets/overview_icon.svg";
import facilityIcon from "../../../assets/towel-rack.png";
import axios from "../../../helpers/axios";
import { useParams } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import BookSiteVisitForm from "./book site visit/booksitevisitform";
import MoreDetails from "./components/moreDetails/MoreDetails";
import PreLoader from "../../../pre-loaders/PreLoader";

const ResortVillaApartmentDetails = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "60vh",
    width: "100%",
    bgcolor: "#ffff",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { propertyid } = useParams();

  const [data, setData] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const [aminityArr, setAminityArr] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [img360Arr, setImg360Arr] = useState([]);

  //get data
  const getData = async () => {
    try {
      const response = await axios.get(`/property-data/${propertyid}`);
      console.log("resp=>", response);
      setData(response.data.propertyData);
      setCurrentImg(response.data.propertyData.imgArr[0]);
      setImgArr(response.data.propertyData.imgArr);
      setAminityArr(response.data.propertyData.aminities);
      setImg360Arr(response.data.propertyData.view360ImgArr);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    // eslint-disable-next-line
  }, []);

  if (!data) {
    return <PreLoader />;
  }

  return (
    <div className="villa-details-container">
      <section className="villa-details-r1">
        <h4>
          <span>
            <MdLocationPin />
          </span>
          {data.landmark}, {data.city}, {data.state}, {data.pin}
        </h4>
        <div className="villa-details-table">
          <section>
            <p>Seller Type</p>
            <p className="villa-details-table-value">
              {data.sellerType || "---"}
            </p>
          </section>
          <div className="villa-details-table-dummy-border"></div>
          <section>
            <p>Seller Name</p>
            <p className="villa-details-table-value">
              {data.sellerName || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Posted On</p>
            <p className="villa-details-table-value">
              {data.postedOn || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Total Shares</p>
            <p className="villa-details-table-value">
              {data.totalShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Available Shares</p>
            <p className="villa-details-table-value">
              {data.availableShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Price Per Share</p>
            <p className="villa-details-table-value">
              {data.perSharePrice || "---"}
            </p>
          </section>
        </div>

        {/* details table in mobile view */}
        <div className="villa-details-mobile-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Seller Type</th>
                <th scope="col">Seller Name</th>
                <th scope="col">Posted On</th>
                <th scope="col">Total Shares</th>
                <th scope="col">Available Shares</th>
                <th scope="col">Price Per Share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Seller">{data.sellerType || "---"}</td>
                <td data-label="Seller Type">{data.sellerType || "---"}</td>
                <td data-label="Posted On">{data.postedOn || "---"}</td>
                <td data-label="Total Shares">{data.totalShares || "---"}</td>
                <td data-label="Available Shares">
                  {data.availableShares || "---"}
                </td>
                <td data-label="Price Per Share">
                  {data.perSharePrice || "---"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* details table in mobile view ends */}
      </section>
      <section className="villa-details-r2">
        <div className="villa-corousel-current-img">
          <img src={currentImg} alt="" />
        </div>
        <div className="villa-corousel-all-img">
          {imgArr.map((image) => {
            return (
              <>
                <img
                  src={image}
                  alt="loading..."
                  onClick={() => {
                    setCurrentImg(image);
                  }}
                />
              </>
            );
          })}
        </div>
      </section>
      <MoreDetails data={data} />
      <section className="villa-details-r3">
        <div className="overview">
          <h4>
            <span>
              <img src={overviewIcon} alt="overview-img-icon" />
            </span>
            About Property
          </h4>
          {data.additionalDetails ? (
            <p>{data.additionalDetails}</p>
          ) : (
            <p>
              An excellent opportunity that features a French multinational
              brand 'Mane' as a tenant, occupying the space since 2016. The
              asset features an office space and a research lab that caters to
              prominent FMCG players like Unilever, P&G and more. Their
              infrastructure gives an obvious indication of the stickiness of
              the tenant. Mane, a global leader of the Fragrance and Flavour
              sector, is headquartered in France with a 1.6 billion dollar
              turnover as of 2020. The asset is in a commercial building,
              Imperium located in Andheri, near the metro and airport. The entry
              yield for this property is 10.04% annually, and the targeted IRR
              is 16.33%. The lease agreement term is for five years and the
              lock-in period is for three years.
            </p>
          )}
        </div>
        {/* facilities & aminities */}
        {data.propertyType === "land" || data.propertyType === "agri-land" ? null : (
          <div className="facility-outer-wrap">
            <h4>
              <span>
                <img src={facilityIcon} alt="overview-img-icon" />
              </span>
              Facilities
            </h4>

            <div className="facility-inner-wrap">
              {aminityArr.map((aminity, i) => {
                return (
                  <section>
                    <h6>{aminity}</h6>
                  </section>
                );
              })}
            </div>
          </div>
        )}
      </section>
      {/* why invest here */}
      <section className="villa-details-r3">
        <h4>
          <span>
            <img src={overviewIcon} alt="overview-img-icon" />
          </span>
          Why Invest Here?
        </h4>
        {/* <ul>
          {data?.whyInvestHere.map((point, i) => {
            return <li>{point}</li>;
          })}
        </ul> */}
      </section>

      {/* 360 degree view image */}
      <section className="img360-wrap">
        <h6>360 View Images Of Property</h6>
        <div>
          {img360Arr.map((img, i) => {
            return (
              <div>
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </section>

      {/* map location */}
      <section>
        <section className="map-wrapper">
          <h5>Locate on map</h5>
          <iframe
            id="mapIframe"
            src={`https://maps.google.com/maps?q=${data.street},${data.landmark},${data.city}, ${data.state}&hl=es;&output=embed`}
            title="locationOnMap"
          ></iframe>
        </section>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="book-site-visit-popup-modal"
      >
        <Box sx={style}>
          <BookSiteVisitForm
            handleClose={handleClose}
            sellerId={data.sellerId}
            propertyId={data._id}
          />
        </Box>
      </Modal>

      <section className="book-site-visit-btn-wrapper">
        <button onClick={handleOpen}>Book a site visit</button>
      </section>
    </div>
  );
};

export default ResortVillaApartmentDetails;
