import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./DLBrochure.css";
import adora1 from "../../../assets/82b2c414f5_adora-de-goa-main-banner-1024x402-1.jpg";
import adora2 from "../../../assets/Adora-2-1024x576-1.jpg";

const DLBrochure = () => {
  const settings = {
    fade: true,
    dots: false,
    speed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="brochure-slider">
        <Slider {...settings}>
          <img src={adora1} />
          <img src={adora2} />
        </Slider>
        <div className="brochure-overlay">
          <h1>Dream Holiday Home Ownership For 1/11th The Cost</h1>
          <button>DOWNLOAD BROCHURE</button>
        </div>
      </div>
    </>
  );
};

export default DLBrochure;
