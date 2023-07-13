import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillHeart } from "react-icons/ai";

import "./HomeSlider1.css";

const HomeSlider1 = () => {
  const settings = {
    // fade: true,
    dots: true,
    speed: 3000,
    infinite: true,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <main className="homeslider1">
      <Slider {...settings}>
        {Array(3)
          .fill(0)
          .map((i, j) => (
            <div className="slide">
              <div className="upper-content">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1520330979108-7d66e04b35e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                    alt="buildings"
                  />
                </div>
                <div>
                  <AiFillHeart />
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </main>
  );
};

export default HomeSlider1;
