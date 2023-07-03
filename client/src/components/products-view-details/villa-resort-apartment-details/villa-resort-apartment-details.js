import { useEffect, useState } from "react";
import "./villa-details.css";
import { MdLocationPin } from "react-icons/md";
import overviewIcon from "../../../assets/overview_icon.svg";
import facilityIcon from "../../../assets/towel-rack.png";
import axios from "../../../helpers/axios";
import { useParams } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import BookSiteVisitForm from "./book site visit/booksitevisitform";
import MoreDetails from "./components/MoreDetails";

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
  const [imgArr, setImgArr] = useState([]);
  const [aminityArr, setAminityArr] = useState([]);

  //get data
  const getData = async () => {
    try {
      const response = await axios.get(
        `/villa-resort-apartment-details/${propertyid}`
      );
      console.log(response.data.data);
      setData(response.data.data);
      setCurrentImg(response.data.data.imgArr[0]);
      setImgArr(response.data.data.imgArr);
      setAminityArr(response.data.data.aminities);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  const siteVisitRequest = async () => {};

  return (
    <div className="villa-details-container">
      <section className="villa-details-r1">
        <h4>
          <span>
            <MdLocationPin />
          </span>
          {data.landmark}, {data.city}, {data.state}
        </h4>
        <div className="villa-details-table">
          <section>
            <p>Seller</p>
            <p className="villa-details-table-value">Mane</p>
          </section>
          <div className="villa-details-table-dummy-border"></div>
          <section>
            <p>Property Age</p>
            <p className="villa-details-table-value">{data.propertyAge}</p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Property Area</p>
            <p className="villa-details-table-value">{data.area} sq ft</p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Total Shares</p>
            <p className="villa-details-table-value">{data.totalShares}</p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Available Shares</p>
            <p className="villa-details-table-value">{data.availableShares}</p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Price Per Share</p>
            <p className="villa-details-table-value">{data.perSharePrice}</p>
          </section>
        </div>

        {/* details table in mobile view */}
        <div className="villa-details-mobile-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Seller</th>
                <th scope="col">Property Age</th>
                <th scope="col">Property Area</th>
                <th scope="col">Total Shares</th>
                <th scope="col">Available Shares</th>
                <th scope="col">Price Per Share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Seller">Mane</td>
                <td data-label="Property Age">
                  {data.propertyAge ? data.propertyAge : <p>not given</p>}
                </td>
                <td data-label="Property Area">
                  {data.propertyArea ? data.propertyArea : <p>not given</p>}
                </td>
                <td data-label="Total Shares">{data.totalShares}</td>
                <td data-label="Available Shares">
                  {data.availableShares ? (
                    data.availableShares
                  ) : (
                    <p>not given</p>
                  )}
                </td>
                <td data-label="Price Per Share">
                  {data.perSharePrice ? data.perSharePrice : <p>not given</p>}
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
      </section>
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
          <BookSiteVisitForm handleClose={handleClose} />
        </Box>
      </Modal>

      <section className="book-site-visit-btn-wrapper">
        <button onClick={handleOpen}>Book a site visit</button>
      </section>
    </div>
  );
};

export default ResortVillaApartmentDetails;
