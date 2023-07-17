import Slider from "react-slick";
import "./Slider.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomeSliderSection3 = () => {
  const navigate = useNavigate();

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdOutlineArrowForwardIos style={{ color: "lightcoral" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdOutlineArrowBackIos style={{ color: "lightcoral" }} />
      </div>
    );
  };

  const [cardIndex, setCardIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <div className="section-slider">
      <header>
        <h2 className="text-[2rem]"> So, how will you make money?</h2>
        <p>
          Stake was built to empower everyone to own and build wealth through
          real estate
        </p>
      </header>
      <div className="img-slider">
        <Slider {...settings} className="slider-wrap">
          {[...Array(5)].map((card, index) => {
            return (
              <div
                className={index === cardIndex ? "card " : "card activeSlide"}
                key={index + 1}
              >
                <div>
                  <div className="row1">
                    <h2>Monthly rental income</h2>
                  </div>
                  <div className="row2">
                    <h6>
                      Consistent passive income from monthly rental payments
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mt-14 flex justify-center">
        <button
          className="w-1/2 sm:w-1/4 h-10 border-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-white hover:text-black "
          onClick={() => navigate("/all-properties")}
        >
          <span>EXPLORE MORE</span>
        </button>
      </div>
    </div>
  );
};

export default HomeSliderSection3;
