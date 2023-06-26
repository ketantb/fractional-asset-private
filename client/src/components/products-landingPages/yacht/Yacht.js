import React, { useEffect, useState } from "react";
import "./Yacht.css";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
// import HomeCard from '../house-card/HouseCard'
import ProductLPBannerVideo from "../product-lp-banner-video/product-lp-video";
import YachtImageSlider from "./corousel-slider/corousel-slider";

const YachtPage = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [list, setList] = useState([]);

  // const token = localStorage.getItem('token')
  const getpropertylist = async () => {
    try {
      const response = await axios.get("/listing-all-product");
      if (response.data.success) {
        console.log("list", response.data.list[0].images);
        // response.data.list[0].images[1])
        setList(response.data.list);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getpropertylist();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  //HANDLE SEARCH
  const handleSearch = () => {
    console.log(city);
    navigate(`/city/${city}`);
  };

  return (
    <div className="product-landingpage-wrapper">

      <ProductLPBannerVideo productType="yacht" />

      <div>
        <YachtImageSlider />
      </div>

      <div className="yacht-r1-container">
        <div className="yacht-content-container">
          <h1>Welcome to Your Page</h1>
          <p>Arriving Fall 2024</p>
          <p>
            Nullam at mauris non elit auctor ullamcorper. Phasellus efficitur
            risus nec semper tincidunt. Nam sit amet mauris ullamcorper,
            lobortis justo id, consectetur ipsum. Suspendisse pulvinar auctor
            purus, ut facilisis tellus iaculis nec.
          </p>
          <p>
            <button
              onClick={() => {
                navigate("/enquiry");
              }}>
              Contact Us
            </button>
          </p>
        </div>
        <div className="yacht-image-container">
          <img
            src="https://seastyle.net/wp-content/uploads/2023/05/Lagoon-Sixty5-Homepage.jpg"
            alt="Your Image"
          />
        </div>
      </div>

      <div className="yacht-r2-container"
        style={{
          backgroundImage: 'url(https://seastyle.net/wp-content/uploads/2022/08/ncf1883-hdr-a4-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '700px'
        }}
      >
        <div style={{background: 'linear-gradient(#000,rgb(0 0 0/55%))'}}>
          <h1>Who We Are</h1>
          <section>
            <div className="yacht-r2-container-lb">
              <p>
                Fractional Yacht is a US based and owned company with headquarters in Annapolis, MD.
                Fractional Yacht is part of the Fractional Yacht Associations Group,
                a leader in fractional yachting for the past 20 years and has brought to market well known
                brands such as SailTime, PowerTime and Embark Scheduling Software. With over 500 boats under
                management since its inception, the SSA group and its team has unparalleled experience in
                yacht fractional management.
              </p>
              <img className="row2-lb-yacht-image" src='https://seastyle.net/wp-content/uploads/2022/07/plage-av-sixty7-ncz3667-fullhd-1-1.jpg' alt='yacht-img'/>
            </div>
            <div className="yacht-r2-container-rb">
              <h2>Fractional Yacht</h2>
              <p>
                The Fractional Asset Group has brought together a team of experts in fractional management,
                yacht brokers and managers to create Fractional Yacht Yacht Partners, a company dedicated
                to offer a seamless, luxury experience to fractional owners. Fractional Yacht’s management
                team takes care of all your yacht’s needs; regular maintenance and cleaning,
                crew management, yacht relocation, vacation planning, etc. Fractional Yacht simplifies
                yacht ownership and does so at a fraction of the cost of regular yacht ownership.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="yacht-faq-contact-container">
        <section className="yacht-fc-lb">
          <p>
            <img
              src="https://seastyle.net/wp-content/uploads/2022/07/faq.jpg"
              alt="yacht-img-lb"
            />
          </p>
          <p>
            We are sure you have questions, visit our FAQ page for some quick
            answers. Or contact us for more information!
          </p>
          <p>
            <button
              onClick={() => {
                navigate("/faqs");
              }}
            >
              Frequently Asked Questions
            </button>
          </p>
        </section>
        <section className="yacht-fc-rb">
          <p>
            <img
              src="https://seastyle.net/wp-content/uploads/2022/07/mouillage-lifestyle-ncz10198-a3-1-1.jpg"
              alt="yacht-img-rb"
            />
          </p>
          <p>
            We are sure you have questions, visit our FAQ page for some quick
            answers. Or contact us for more information!
          </p>
          <p>
            <button
              onClick={() => {
                navigate("/enquiry");
              }}
            >
              Contact Us
            </button>
          </p>
        </section>
      </div>
    </div>
  );
};

export default YachtPage;
